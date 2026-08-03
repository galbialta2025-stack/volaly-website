import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface FaqItem {
  q: string;
  a: ReactNode;
}

export const faqs: FaqItem[] = [
  {
    q: "What is Volaly?",
    a: (
      <>
        Volaly is an AI-powered platform that helps creators and businesses turn
        every upload into revenue and visibility. Instead of juggling multiple
        tools, Volaly automatically transforms your content into AI conversations,
        digital products, smart social content and new growth opportunities.{" "}
        Learn more about the{" "}
        <Link to="/revenue-suite" className="text-brand-orange underline-offset-2 hover:underline">
          Revenue Suite
        </Link>{" "}
        and{" "}
        <Link to="/visibility-suite" className="text-brand-orange underline-offset-2 hover:underline">
          Visibility Suite
        </Link>{" "}
        to see how everything works together.
      </>
    ),
  },
  {
    q: "Who is Volaly for?",
    a: (
      <>
        Volaly is built for anyone who creates content to grow a business.
        Whether you're a creator, coach, hotel, restaurant, gym, real estate
        agency or local business, Volaly helps automate customer conversations,
        increase visibility and generate more revenue from every upload. Explore
        the{" "}
        <Link to="/creator" className="text-brand-orange underline-offset-2 hover:underline">
          Creator page
        </Link>{" "}
        or Business Solutions to see how Volaly adapts to your workflow.
      </>
    ),
  },
  {
    q: "How does Volaly work?",
    a: (
      <>
        Simply upload your content or connect your social media accounts. Volaly
        automatically understands your content, builds AI knowledge, creates
        customer conversations, generates new marketing assets and helps grow
        your business. One upload powers both the{" "}
        <Link to="/revenue-suite" className="text-brand-orange underline-offset-2 hover:underline">
          Revenue Suite
        </Link>{" "}
        and the Visibility Suite, allowing you to monetize and scale from a
        single workflow.
      </>
    ),
  },
  {
    q: "What is the Revenue Suite?",
    a: (
      <>
        The Revenue Suite brings together everything you need to monetize your
        content. AI FAQ, Voice AI, Smart Shop, Memberships and Digital Products
        work together to answer questions, recommend products and generate
        revenue automatically. Instead of manually selling, Volaly helps convert
        visitors into customers around the clock.{" "}
        <Link to="/revenue-suite" className="text-brand-orange underline-offset-2 hover:underline">
          Learn more on the Revenue Suite page.
        </Link>
      </>
    ),
  },
  {
    q: "What is the Visibility Suite?",
    a: (
      <>
        The Visibility Suite helps you reach more people without creating more
        work. From one upload, Volaly automatically generates Smart Shorts,
        social media content, blog articles, newsletters and SEO content for
        multiple platforms. Create once, publish everywhere and keep growing
        automatically.{" "}
        <Link to="/visibility-suite" className="text-brand-orange underline-offset-2 hover:underline">
          Learn more on the Visibility Suite page.
        </Link>
      </>
    ),
  },
  {
    q: "Which platforms does Volaly support?",
    a: "Volaly works with the platforms creators and businesses already use. Depending on your workflow, this includes YouTube, Instagram, TikTok, Facebook, LinkedIn, X, WhatsApp and LINE. New integrations are added regularly, allowing Volaly to fit seamlessly into your existing ecosystem instead of replacing it.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. Volaly is designed for creators and businesses—not developers. Most features work through an intuitive dashboard without coding or complex setup. Simply connect your accounts, upload your content and let Volaly automate the rest so you can focus on creating and growing your business.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Protecting your data is one of our highest priorities. Your content, customer information and connected accounts are handled using modern security standards and encrypted connections where applicable. You remain in full control of your content while Volaly only processes the information required to deliver its AI-powered services.",
  },
  {
    q: "Can I manage multiple brands or locations?",
    a: "Yes. Volaly is built to scale with your business. Whether you manage multiple creators, brands, locations or clients, everything can be managed from a single platform. This makes Volaly ideal for agencies, franchises and growing businesses that want consistent automation across multiple accounts.",
  },
  {
    q: "How do I get started?",
    a: (
      <>
        Getting started takes only a few minutes. Create your account, connect
        your social media channels or upload your first content and Volaly
        immediately begins building your AI knowledge base. From there you can
        activate the Revenue Suite, expand your visibility and start growing
        automatically.{" "}
        <Link to="/pricing" className="text-brand-orange underline-offset-2 hover:underline">
          Visit the Pricing page
        </Link>{" "}
        to choose the plan that fits your business.
      </>
    ),
  },
];
