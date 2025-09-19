import Greeting from "../sections/greeting";
import About from "../sections/about";
import Skills from "../sections/skills";

const Home = () => {
  return (
    <section className="bg-blue-600 text-white">
      <Greeting />
      <About />
      <Skills />
    </section>
  );
};

export default Home;
