import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot } from "lucide-react";
import { motion } from "motion/react";

// Webhook URL is configured via VITE_N8N_CHAT_WEBHOOK environment variable
const WEBHOOK_URL = import.meta.env.VITE_N8N_CHAT_WEBHOOK as string | undefined;

interface Message {
  from: "bot" | "user";
  text: string;
}

const GREETING: Message = {
  from: "bot",
  text: "👋 Hi! I'm Volaly AI.\n\nI help local businesses get more customers with daily social content, automated replies, and instant booking — all on autopilot.\n\nHow can I help you today?",
};

// Stable session ID for the browser session — keeps conversation context across messages
function getSessionId() {
  let id = sessionStorage.getItem("volaly_chat_session");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("volaly_chat_session", id);
  }
  return id;
}

// Parse the n8n webhook response — handles the most common response shapes
function extractText(data: unknown): string {
  if (typeof data === "string") return data;
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    const candidate =
      d.output ?? d.text ?? d.message ?? d.response ?? d.reply ?? d.answer;
    if (typeof candidate === "string") return candidate;
    // Some n8n workflows wrap it deeper
    if (Array.isArray(d.output) && d.output.length > 0) {
      const first = d.output[0] as Record<string, unknown>;
      if (typeof first?.text === "string") return first.text;
    }
  }
  return "Sorry, I didn't understand the response. Please try again.";
}

export function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sessionId = useRef(getSessionId());

  // Auto-scroll whenever messages change or typing indicator appears
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Auto-resize textarea as the user types
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [input]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    // Append the user message immediately
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setIsLoading(true);

    if (!WEBHOOK_URL) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Chat is not configured yet. Please set VITE_N8N_CHAT_WEBHOOK." },
      ]);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId.current,
          // Send full history so n8n can use conversation context
          chatHistory: messages
            .concat({ from: "user", text })
            .filter((m) => m.from !== "bot" || m.text !== GREETING.text)
            .map((m) => ({
              role: m.from === "user" ? "user" : "assistant",
              content: m.text,
            })),
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      // n8n can return JSON or plain text
      const contentType = res.headers.get("content-type") ?? "";
      const data = contentType.includes("application/json")
        ? await res.json()
        : await res.text();

      const reply = extractText(data);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (err) {
      console.error("[ChatWidget] webhook error:", err);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, something went wrong reaching the AI. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
    // Shift+Enter falls through → inserts newline naturally
  }

  const canSend = input.trim().length > 0 && !isLoading;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 16 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-4 top-20 z-[60] flex w-[340px] flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-2xl backdrop-blur-xl sm:right-6 sm:w-[360px]"
      style={{ maxHeight: "min(520px, calc(100dvh - 96px))" }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{
          background:
            "linear-gradient(135deg, #ff6b35, #f72585, #7209b7, #3a0ca3, #4361ee, #4cc9f0)",
        }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-bold text-white">Volaly AI</div>
          <div className="flex items-center gap-1.5 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
            Online
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "bot" && (
              <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-purple">
                <Bot className="h-3.5 w-3.5 text-white" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                msg.from === "bot"
                  ? "bg-white border border-border/60 text-foreground shadow-sm rounded-tl-sm"
                  : "text-white rounded-tr-sm"
              }`}
              style={
                msg.from === "user"
                  ? { background: "linear-gradient(135deg, #f72585, #7209b7)" }
                  : undefined
              }
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-purple">
              <Bot className="h-3.5 w-3.5 text-white" />
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-border/60 bg-white px-4 py-3 shadow-sm">
              <span className="flex gap-1">
                {[0, 0.15, 0.3].map((delay, i) => (
                  <motion.span
                    key={i}
                    className="block h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay, ease: "easeInOut" }}
                  />
                ))}
              </span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border/50 px-4 py-3">
        <div className="flex items-end gap-2 rounded-2xl border border-border/70 bg-background/60 px-4 py-2">
          <textarea
            ref={textareaRef}
            rows={1}
            className="flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            style={{ maxHeight: 120 }}
            placeholder="Type a message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            aria-label="Chat message"
          />
          <button
            onClick={send}
            aria-label="Send message"
            disabled={!canSend}
            className="mb-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full transition disabled:opacity-30"
            style={{ background: "linear-gradient(135deg, #f72585, #7209b7)" }}
          >
            <Send className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
        <p className="mt-1.5 text-center text-[10px] text-muted-foreground/50">
          Enter to send · Shift+Enter for new line
        </p>
      </div>
    </motion.div>
  );
}
