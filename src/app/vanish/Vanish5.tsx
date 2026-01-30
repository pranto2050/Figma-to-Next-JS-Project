import Header from "../HeaderSection/Header";

const Vanish = () => {
  return (

<main className="relative min-h-screen bg-[url('/Vanish/vanish%20main%20background.png')] bg-cover bg-center bg-no-repeat">
      {/* Top Part */}
      <div className="flex flex-col min-h-screen">
        <div className="pt-6 md:pt-10 text-black">
          <Header />
        </div>
        <section className="flex-1 flex flex-col justify-center items-center space-y-3 sm:space-y-4 md:space-y-6 text-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 md:py-16 lg:pb-20">
        <h1 className="md:flex md:flex-row text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight">
            <p> Inhale for 4 seconds.</p> <p>Hold for 4 seconds.</p> <p>Exhale for 6 seconds.</p>
          </h1>
        </section>
      </div>
      
    </main>
  );
};

export default Vanish;
