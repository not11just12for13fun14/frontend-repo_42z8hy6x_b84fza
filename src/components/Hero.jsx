import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90 pointer-events-none" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(34,211,238,0.25)]">
            Sell digital products beautifully
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Launch a sleek storefront for presets, fonts, templates, music, and more. No fuss—just upload, set a price, and share.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-900 hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/30">
              Browse Products
            </a>
            <a href="#how" className="inline-flex items-center rounded-lg border border-white/15 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
