import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Recycle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Msg = { from: "user" | "bot"; text: string; id: number };

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 0,
      from: "bot",
      text: "\ud83d\udc4b Hi! Welcome to Sri Alavattaman Enterprises. How can we help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userId = nextId.current++;
    const botId = nextId.current++;
    setMessages((prev) => [
      ...prev,
      { id: userId, from: "user", text },
      {
        id: botId,
        from: "bot",
        text: "Thanks for your message! Our team will get back to you within 24 hours. For urgent queries, call us at +91 9444010383.",
      },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            data-ocid="chat.panel"
          >
            <div className="bg-brand-green px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Recycle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    SAE Support
                  </p>
                  <p className="text-white/70 text-xs">
                    Typically replies in minutes
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
                data-ocid="chat.close_button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="h-56 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${msg.from === "user" ? "bg-brand-green text-white rounded-br-sm" : "bg-white text-gray-700 shadow-xs rounded-bl-sm"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="px-3 py-3 border-t border-gray-100 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 text-sm h-8"
                data-ocid="chat.input"
              />
              <Button
                size="sm"
                onClick={send}
                className="bg-brand-green hover:bg-brand-green-dark text-white h-8 w-8 p-0"
                data-ocid="chat.submit_button"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-4 py-3 shadow-lg transition-colors"
        data-ocid="chat.open_modal_button"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
        {!open && <span className="text-sm font-medium">Chat with us!</span>}
      </button>
    </div>
  );
}
