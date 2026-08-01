import { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  from: "bot" | "user";
  text: string;
}

const GREETING: Message = {
  from: "bot",
  text: "👋 Hi! I'm Volaly AI.\n\nI help local businesses get more customers with daily social content, automated replies, and instant booking — all on autopilot.\n\nHow can I help you today?",
};

export function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { from: "user", text },
      {
        from: "bot",
        text: "Thanks for your message! A member of the Volaly team will follow up shortly. Or book a free consultation to see a live demo →",
      },
    ]);
    setInput("");
  }

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
                  ? {
                      background:
                        "linear-gradient(135deg, #f72585, #7209b7)",
                    }
                  : undefined
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border/50 px-4 py-3">
        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2">
          <input
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            placeholder="Type a message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button
            onClick={send}
            aria-label="Send"
            disabled={!input.trim()}
            className="grid h-7 w-7 place-items-center rounded-full transition disabled:opacity-30"
            style={{
              background: "linear-gradient(135deg, #f72585, #7209b7)",
            }}
          >
            <Send className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
