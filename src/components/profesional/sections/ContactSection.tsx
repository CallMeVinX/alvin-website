'use client';

import { FormEvent, useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

const channels = [
  {
    title: "Email directly",
    value: "alvin.dinata.work@gmail.com",
    description: "For detailed project inquiries.",
    icon: Mail,
  },
  {
    title: "Let's Connect",
    value: "/in/alvin-dinata",
    description: "For professional networking & updates.",
    icon: MessageSquare,
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setStatus("error");
      setFeedbackMessage("Please complete all fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid professional email.");
      return;
    }

    try {
      setStatus("sending");
      setFeedbackMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Failed to send message.");
      }

      setStatus("success");
      setFeedbackMessage(result.message ?? "Message received! I'll get back to you shortly.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(error instanceof Error ? error.message : "Unable to send message right now.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 min-h-screen px-6 sm:px-10 lg:px-20 py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="h-full rounded-3xl border border-cyan-500/25 bg-linear-to-br from-cyan-500/10 via-zinc-900/90 to-zinc-900 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300 mb-3">Let&apos;s Build</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Let&apos;s engineer scalable solutions together.</h2>
          <p className="text-zinc-300 leading-relaxed max-w-2xl">
            I am currently open for full-time opportunities and interesting collaborations. Whether you have a question
            about my stack, a project to discuss, or just want to say hi, my inbox is open.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:auto-rows-fr">
            <div className="h-full rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Response Time</p>
              <p className="text-cyan-300 text-lg font-semibold mt-1">Within 24 Hours</p>
            </div>
            <div className="h-full rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Open To</p>
              <p className="text-cyan-300 text-lg font-semibold mt-1">Full-stack Roles • Backend Engineering • Technical Consulting</p>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-500/15 px-4 py-2.5 text-sm font-medium text-cyan-200 hover:bg-cyan-500/25 transition-colors"
          >
            Start Collaboration
            <Send size={15} />
          </button>
        </article>

        <div className="h-full space-y-4">
          <form onSubmit={handleSubmit} className="h-full rounded-3xl border border-white/10 bg-zinc-900/75 p-5 sm:p-6 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-300 mb-2">Contact Form</p>
              <h3 className="text-xl font-semibold text-zinc-100">Share your technical context</h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-xs uppercase tracking-[0.12em] text-zinc-400">Full Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/25 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-cyan-400/50 focus:bg-black/35"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-xs uppercase tracking-[0.12em] text-zinc-400">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/25 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-cyan-400/50 focus:bg-black/35"
                />
              </label>
            </div>

            <label className="space-y-1.5 block">
              <span className="text-xs uppercase tracking-[0.12em] text-zinc-400">Subject</span>
              <select
                name="subject"
                className="w-full rounded-xl border border-white/10 bg-black/25 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-cyan-400/50 focus:bg-black/35"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select inquiry type
                </option>
                <option value="hiring">Hiring Inquiry (Full-time)</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="technical">Technical Question</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="space-y-1.5 block">
              <span className="text-xs uppercase tracking-[0.12em] text-zinc-400">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your goals, timeline, and expected outcomes."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black/25 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-cyan-400/50 focus:bg-black/35"
              />
            </label>

            {status !== "idle" && feedbackMessage && (
              <p className={`text-xs leading-relaxed ${status === "success" ? "text-emerald-300" : status === "sending" ? "text-cyan-300" : "text-rose-300"}`}>
                {feedbackMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-500/15 px-4 py-2.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-500/25"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>
          </form>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:auto-rows-fr lg:col-span-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <article key={channel.title} className="h-full rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                <div className="flex h-full items-start gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 p-2">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-zinc-100">{channel.title}</h4>
                    <p className="mt-1 text-xs text-cyan-300 wrap-break-word">{channel.value}</p>
                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{channel.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <article className="rounded-2xl border border-dashed border-cyan-500/35 bg-cyan-500/5 p-4 lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-300 mb-1.5">Availability Note</p>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Open for backend and fullstack opportunities. Fast response and clear communication are part of my workflow.
          </p>
        </article>
      </div>
    </section>
  );
}
