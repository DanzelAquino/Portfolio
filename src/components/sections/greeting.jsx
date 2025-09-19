const Greeting = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">Hi, I'm Danzel Aquino</h1>
      <p className="mt-4 text-xl">Diploma in Computer Engineering Technology Graduate | Aspiring Developer<br />
      Graduate of Polytechnic University of the Philippines
      </p>
      <a
        href="#skills"
        className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-200 transition"
      >
        Explore My Skills
      </a>
    </div>
  );
};

export default Greeting;
