export default function CleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:scale-105">
              Sports Floor Maintenance Australia
            </div>
            <nav className="flex space-x-6">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative group"
              >
                Sanding & Finishing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/line-marking"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative group"
              >
                Line Marking
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/cleaning"
                className="text-purple-500 font-semibold hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Cleaning
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500"></span>
              </a>
              <a
                href="/sprung-floors"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative group"
              >
                Sprung Floors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-orange-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="inline-block animate-slide-in-left">Sports Floor</span>
            <br />
            <span className="inline-block animate-slide-in-right text-orange-300">Cleaning</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Timber & Vinyl Surfaces
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Protect Performance. Preserve Appearance.
          </p>
          <p className="text-lg mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
            Sports floors in gyms, stadiums, and recreation centers are built to perform — but over time, body sweat, oils, dust, and shoe marks can build up, dulling the surface and affecting traction. Regular sweeping and mopping help, but they're not enough on their own.
          </p>
          <p className="text-xl font-semibold mb-8 animate-fade-in-up animation-delay-500">
            That's why we recommend a professional deep clean at least once a year.
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in-up animation-delay-600 group"
          >
            <span className="relative z-10">Schedule Your Clean</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>

      {/* Why Annual Deep Cleaning Matters */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Annual Deep Cleaning Matters
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our annual cleaning process is designed to maintain the integrity of your surface without damaging the finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 text-2xl">🧼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Removes Contaminants</h3>
              <p className="text-gray-700">Removes sweat, oils & grime that can damage floor coatings</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 text-2xl">🏃‍♂️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Restores Grip</h3>
              <p className="text-gray-700">Restores grip and reduces the risk of slips during play</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Improves Appearance</h3>
              <p className="text-gray-700">Improves appearance and keeps floors looking professional</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extends Life</h3>
              <p className="text-gray-700">Extends the life of timber or vinyl sports flooring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Sports Floor Cleaning Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dry Debris Removal</h3>
                  <p className="text-gray-700">We start by removing dust, dirt, and loose particles.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gentle Deep Cleaning</h3>
                  <p className="text-gray-700">Using specialised cleaning solutions safe for timber and vinyl.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto Scrubbing</h3>
                  <p className="text-gray-700">Carefully used where appropriate to lift embedded dirt and sweat without harming the floor.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Spot Detailing</h3>
                  <p className="text-gray-700">We finish by addressing scuff marks, corners, and high-traffic areas manually.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ideal for:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="text-purple-500 text-xl mr-3">🏀</span>
                  Indoor basketball courts
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 text-xl mr-3">🏫</span>
                  School gymnasiums
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 text-xl mr-3">💪</span>
                  Fitness studios
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 text-xl mr-3">🏟️</span>
                  Multi-sport complexes
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 text-xl mr-3">🏛️</span>
                  Community recreation centres
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 px-4 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Your Annual Clean Today
          </h2>
          <p className="text-xl mb-8">
            Whether it's a sealed timber floor or resilient vinyl surface, we know how to clean it right — safely, thoroughly, and professionally.
          </p>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Us Today</h3>
            <p className="text-lg mb-6">
              📞 Call us today to book your annual sports floor clean
            </p>
            <p className="text-lg mb-6">
              📧 Or email us for a quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61-XXX-XXX-XXX"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Call Now
              </a>
              <a
                href="mailto:info@sportsfloormaintenance.com.au"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-4">Sports Floor Maintenance Australia</p>
          <p className="text-gray-400">
            Professional sports floor cleaning services across South Australia, Victoria, New South Wales and Canberra
          </p>
          <div className="mt-4">
            <a
              href="/"
              className="text-orange-400 hover:text-orange-300 underline mr-4"
            >
              Sanding & Finishing
            </a>
            <a
              href="/line-marking"
              className="text-green-400 hover:text-green-300 underline mr-4"
            >
              Line Marking
            </a>
            <a
              href="/cleaning"
              className="text-purple-400 hover:text-purple-300 underline mr-4"
            >
              Cleaning
            </a>
            <a
              href="/sprung-floors"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Sprung Floors
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
