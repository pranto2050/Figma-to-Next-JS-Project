import Header from "../Component/HeaderSection/Header";

export default function Vanish() {
  return (
    <main className="relative min-h-screen bg-[url('/Vanish/vanish%20main%20background.png')] bg-cover bg-center bg-no-repeat">
      {/* Top Part */}
      <div>
        <div className="pt-4 md:pt-10 text-black">
          <Header />
        </div>
        <section className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 md:py-16 lg:pb-20">
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Let something go for today.
          </h1>
          <p className="text-black text-sm sm:text-base md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
            Write what’s been bothering you? When you’re ready, we’ll let it
            vanish together.
          </p>
        </section>
      </div>
      {/* message composer */}
      <section className="px-3 sm:px-4 md:px-8 lg:px-16 pb-10 sm:pb-14 md:pb-16 flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-orange-200/60 bg-white/50 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.25)] p-4 sm:p-6 md:p-10">
            <textarea
              className="w-full resize-none bg-transparent text-sm sm:text-base md:text-lg text-gray-700 placeholder:text-gray-400 outline-none"
              rows={5}
              placeholder="Type anything that feels heavy right now..."
            />
            <div className="mt-4 h-px border-[1px] border-[#ff7f00] " />
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-end">
              <button
                type="button"
                className="w-full sm:w-auto rounded-full bg-[#FF9F5A] px-6 sm:px-8 py-2.5 text-sm sm:text-base font-medium text-white shadow-[0_12px_30px_rgba(255,140,60,0.85)] transition-colors hover:bg-[#ff8a33]"
              >
                Let it vanish
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-xs sm:text-sm text-black/70">
            Nothing written here is saved or stored. It disappears from this
            page.
          </p>
        </div>
      </section>
    </main>
  );
}
