import Header from "../HeaderSection/Header";

const Vanish = () => {
  return (
<main className="relative min-h-screen bg-[url('/Vanish/vanish%20main%20background.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-x-0 top-0 px-4 md:px-10 pt-6 md:pt-10 text-black">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-10 lg:px-16 py-16">
        <section className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center w-full max-w-4xl">
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            “This feeling is valid, but temporary.”
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl">
            <button className="md:w-full sm:w-auto min-w-[200px] bg-[#FF9F5A] text-white px-5 py-3 rounded-full font-medium shadow-md transition hover:opacity-90">Return to calm</button>
            <button className="md:w-full sm:w-auto min-w-[200px] bg-[#FFEAD8] text-black px-5 py-3 rounded-full font-medium shadow-md transition hover:opacity-90">Find something soft to do</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Vanish;
