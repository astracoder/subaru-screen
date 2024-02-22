import bgSubaru from './assets/images/bg.jpg';

const App = () => {
  return (
    <main className="w-screen h-screen relative">
        <img src={bgSubaru} className="absolute inset-0 object-cover w-screen h-screen" autoPlay loop muted />

      <section className="bg-black/65 absolute inset-0 flex justify-center items-center flex-col">
        <h1 className="text-white hover:text-transparent transition font-bold text-10xl stroke">SUBARU</h1>
        <a href="https://subaru.com.br/" target="_blank" className="pl-16 pr-16 pt-6 pb-6 text-4xl rounded-lg bg-blue-700 hover:bg-blue-800 font-semibold text-blue-950 hover:text-white transition">EXPLORE</a>
      </section>
    </main>
  )
}

export default App;