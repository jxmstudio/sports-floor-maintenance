export default function LineMarkingPage() {
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
                className="text-green-500 font-semibold hover:text-green-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Line Marking
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500"></span>
              </a>
              <a
                href="/cleaning"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative group"
              >
                Cleaning
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
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
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 px-4 relative overflow-hidden">
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
            <span className="inline-block animate-slide-in-right text-orange-300">Line Marking</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            At Sports Floor Maintenance Australia, we provide expert line marking services for a wide range of indoor sports, including basketball, netball, volleyball, badminton, and more. Whether you're updating an existing court or marking out a brand new layout, our team delivers precise, regulation-compliant markings on both timber and vinyl floors.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            We proudly service clients across South Australia, Victoria, New South Wales, and Canberra, offering reliable and high-quality results every time.
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in-up animation-delay-600 group"
          >
            <span className="relative z-10">Get Free Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>

      {/* Regulation-Compliant Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Accurate, Regulation-Compliant Court Marking
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team understands the importance of accuracy and clarity when it comes to court line marking. We follow the latest official sport regulations and dimensions, ensuring every court meets the requirements for training, school competitions, and professional play.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you need a single-sport court or a multi-court overlay, we'll design and lay out the markings for optimal functionality and visibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sports We Mark</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">🏀</span>
                  Basketball courts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">🏐</span>
                  Netball courts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">🏐</span>
                  Volleyball courts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">🏸</span>
                  Badminton courts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">⚽</span>
                  Multi-sport layouts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">🎯</span>
                  Custom lines for school sports or recreational use
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Line Marking on Timber & Vinyl Floors
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Different surfaces require different approaches. We apply the right techniques and products depending on your floor type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🪵</span>
                <h3 className="text-2xl font-semibold text-gray-900">Timber Floors</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Lines are applied using high-quality, hard-wearing sports floor paint that bonds well with timber coatings. We ensure clean, crisp edges and long-lasting durability.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• High-quality sports floor paint</li>
                <li>• Excellent adhesion to timber coatings</li>
                <li>• Clean, crisp line edges</li>
                <li>• Long-lasting durability</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🏢</span>
                <h3 className="text-2xl font-semibold text-gray-900">Vinyl Floors</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We use specialised vinyl-safe marking paints that offer strong adhesion without damaging the surface. Perfect for multi-purpose gymnasiums and school halls.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Vinyl-safe marking paints</li>
                <li>• Strong adhesion without damage</li>
                <li>• Perfect for gymnasiums</li>
                <li>• Ideal for school halls</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Paint Quality</h3>
            <p className="text-lg text-gray-700">
              We only use premium-grade sports floor paints in a wide range of colours, chosen for their durability, non-slip performance, and resistance to wear.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Sport Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Multi-Sport Design Benefits</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🎨</span>
                  <div>
                    <strong>Contrasting Colours:</strong> Use different colours for each sport to avoid confusion
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">👁️</span>
                  <div>
                    <strong>Minimal Visual Confusion:</strong> Strategic line positioning for clarity
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">📐</span>
                  <div>
                    <strong>Functional Layout:</strong> Clear, easy-to-use and officiate design
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">🎯</span>
                  <div>
                    <strong>Custom Zones:</strong> Training grids and school-specific layouts available
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Multi-Sport Courts & Custom Layouts
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Need to fit multiple sports into one space? No problem. We're experienced in designing and applying multi-line court markings for facilities that host various activities throughout the week.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We can also mark custom zones, training grids, or school-specific layouts upon request.
              </p>
              <div className="bg-green-100 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Popular Multi-Sport Combinations:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Basketball + Netball</li>
                  <li>• Volleyball + Badminton</li>
                  <li>• Basketball + Volleyball + Netball</li>
                  <li>• Custom school sports combinations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Sports Floor Maintenance Australia?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">📏</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulation-Compliant</h3>
              <p className="text-gray-700">Accurate, regulation-compliant line marking for all sports</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">🪵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All Surface Types</h3>
              <p className="text-gray-700">Suitable for timber and vinyl floors</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Paints</h3>
              <p className="text-gray-700">Durable, non-slip, high-visibility paints</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">🏟️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Layouts</h3>
              <p className="text-gray-700">Custom layouts and multi-sport designs</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Service Area</h3>
              <p className="text-gray-700">Servicing SA, VIC, NSW and ACT</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-700">Professional technicians with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 px-4 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Line Marking Service Today
          </h2>
          <p className="text-xl mb-8">
            If your court lines are fading, outdated, or you're setting up a new space, Sports Floor Maintenance Australia has the experience and tools to deliver a precise and professional finish.
          </p>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Us Today</h3>
            <p className="text-lg mb-6">
              📞 Request a quote or discuss your line marking requirements
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
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
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
            Professional sports floor line marking services across South Australia, Victoria, New South Wales and Canberra
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
