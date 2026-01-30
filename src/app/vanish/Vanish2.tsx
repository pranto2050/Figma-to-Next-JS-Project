import Header from "../Component/HeaderSection/Header";

const Vanish = () => {
  return (
    <main className="relative min-h-screen bg-[url('/Vanish/vanish%20main%20background.png')] bg-cover bg-center bg-no-repeat">
      {/* Top Part */}
      <div className="flex flex-col min-h-screen">
        <div className="pt-6 md:pt-10 text-black">
          <Header />
        </div>
        <section className="flex-1 flex flex-col justify-center items-center space-y-3 sm:space-y-4 md:space-y-6 text-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 md:py-16 lg:pb-20">
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Let something go for today.
          </h1>
          <p className="text-black text-sm sm:text-base md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
            Write what’s been bothering you? When you’re ready, we’ll let it vanish together.
          </p>
        </section>
      </div>
      
    </main>
  );
};

export default Vanish;
