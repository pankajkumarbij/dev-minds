export default function Intro() {
  return (
    <div className="bg-white min-h-screen">
      <header className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to My Landing Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
          >
            Get Started
          </a>
        </div>
      </header>

      <section className="bg-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Feature 1
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed magna felis.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Feature 2
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed magna felis.
              </p>
            </div>
            {/* Add more feature sections here */}
          </div>
        </div>
      </section>
    </div>
  );
}
