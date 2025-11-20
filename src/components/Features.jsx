import { Shield, Sparkles, Zap, CreditCard } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Ready in minutes", text: "A clean, modern storefront out of the box." },
  { icon: CreditCard, title: "Simple checkout", text: "Connect payments and start selling instantly." },
  { icon: Zap, title: "Lightning fast", text: "Optimized, responsive, and smooth interactions." },
  { icon: Shield, title: "Secure by default", text: "Best practices and safe defaults built-in." },
];

export default function Features() {
  return (
    <section id="how" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/60 p-6 hover:border-cyan-400/40 transition">
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-cyan-400/10 text-cyan-300 mb-4 group-hover:bg-cyan-400/20">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
