export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/hero-main.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* BRAND GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0097B2]/30 via-transparent to-[#2e7d6f]/30" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6">

        {/* GLASS CONTAINER */}
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-10 py-14 md:px-16 md:py-16 shadow-2xl max-w-xl w-full">

          {/* LOGO */}
          <div className="mb-10 animate-fadeIn">
            <img
              src="/images/logo.svg"
              alt="NiBoFix Logo"
              className="mx-auto w-[160px] md:w-[200px] h-auto brightness-110 contrast-125 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* HEADLINE */}
          <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight animate-fadeUp">
            Създаваме нещо по-добро.
          </h1>

          {/* SUBTEXT */}
          <p className="text-white/70 text-lg md:text-xl animate-fadeUp delay-150">
            NiBoFix стартира скоро.
          </p>

          {/* LINE ACCENT */}
          <div className="mt-10 flex justify-center animate-fadeUp delay-300">
            <div className="w-20 h-[2px] bg-gradient-to-r from-[#0097B2] to-[#2e7d6f] rounded-full" />
          </div>

        </div>
      </div>

    </main>
  );
}