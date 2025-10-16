export default function SprungFloorsPage() {
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
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative group"
              >
                Cleaning
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/sprung-floors"
                className="text-blue-500 font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Sprung Floors
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-orange-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="inline-block animate-slide-in-left">KTL Sprung Floor</span>
            <br />
            <span className="inline-block animate-slide-in-right text-orange-300">Supply & Installation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Premium Sprung Flooring Solutions for Sports Venues
          </p>
          <p className="text-lg mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
            At Sports Floor Maintenance Australia, we supply and install KTL sprung flooring systems—a world‑class solution combining durability, performance, and tailored engineering. Whether you're building a gymnasium, stadium, recreation centre or multi‑purpose hall, we deliver sprung floors designed for your site's specific needs.
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in-up animation-delay-600 group"
          >
            <span className="relative z-10">Get Custom Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </section>

      {/* Why Choose KTL Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose KTL Sprung Floors?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High Quality, Engineered Flooring</h3>
              <p className="text-gray-700 mb-4">
                KTL's systems are crafted with precision, using solid hardwood boards, resilient sub‑construction, shock‑absorbing pads, and strong coating finishes (e.g. multi‑layer UV coatings).
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Solid hardwood boards</li>
                <li>• Resilient sub-construction</li>
                <li>• Shock-absorbing pads</li>
                <li>• Multi-layer UV coatings</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Certified</h3>
              <p className="text-gray-700 mb-4">
                Many KTL systems are tested and certified to FIBA competition levels, as well as meeting relevant EN/DIN/ISO standards. This ensures they are suitable for elite sport, endurance, and safety.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• FIBA competition certified</li>
                <li>• EN/DIN/ISO standards</li>
                <li>• Elite sport suitable</li>
                <li>• Safety tested</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiple Systems Available</h3>
              <p className="text-gray-700 mb-4">
                We can supply fixed systems, portable systems, clip‑together or batten substructures, wedge leveling, etc. This means we can adapt the system to your subfloor conditions, climate, loading requirements, usage intensity etc.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fixed systems</li>
                <li>• Portable systems</li>
                <li>• Clip-together systems</li>
                <li>• Wedge leveling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Site Preparation Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Site‑Specific Preparation & Drying
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To ensure long life and stability, correct site preparation is essential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">🌡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Moisture Content Matching</h3>
              <p className="text-gray-700">The timber and substructure are conditioned to suit local humidity and moisture conditions. This helps to avoid cracking, warping, shrinkage or over‑expansion due to climate differences.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Drying & Curing</h3>
              <p className="text-gray-700">Before installing the sprung floor, the concrete or structural base must be fully dry. Drying to appropriate moisture levels, sometimes using dehumidification or site‑specific drying techniques.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">📏</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Levelling & Precision</h3>
              <p className="text-gray-700">If the existing floor or base is uneven, we use systems (e.g. wedge systems or shims) to level accurately, so that the sprung floor functions uniformly — no dead spots or inconsistent bounce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency & Value Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Efficiency & Long‑Term Value
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">⚡</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast, Professional Installation</h3>
                    <p className="text-gray-700">Our team works efficiently to install with minimal disruption. Because we supply complete systems (substrate, pads, boards, finishes) matched to the site, we avoid delays due to mismatched materials.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3">🛡️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Durability & Warranty</h3>
                    <p className="text-gray-700">KTL wood systems often come with long warranties (for example, 10 years on coating in many cases) and are built to resist wear, moisture, cleaning agents etc. The solid hardwood boards and resilient subfloor structure mean the floor should perform for decades if maintained properly.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Installation Benefits</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <strong>Complete Systems:</strong> Substrate, pads, boards, finishes all matched
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <strong>Minimal Disruption:</strong> Efficient installation process
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <strong>Long Warranties:</strong> Up to 10 years on coatings
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <div>
                    <strong>Decades of Performance:</strong> Built to last with proper maintenance
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FIBA & Competition Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              FIBA & Competition‑Authorization
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              If your facility hosts high‑level competitions, tournaments, or must comply with FIBA/other governing body standards, our KTL sprung floors deliver:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">FIBA Approved Systems</h3>
              <p className="text-gray-700 mb-4">
                Many systems are FIBA approved for competition levels 1, 2 & 3.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Competition Level 1</li>
                <li>• Competition Level 2</li>
                <li>• Competition Level 3</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tested Performance</h3>
              <p className="text-gray-700 mb-4">
                Tested performance in shock absorption, ball rebound, rolling load, slip/friction etcetera. These certifications ensure your floor not only meets the look and feel, but the safety & performance needed.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Shock absorption</li>
                <li>• Ball rebound</li>
                <li>• Rolling load</li>
                <li>• Slip/friction resistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Supply & Installation Service
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here's how we make sure your sprung floor is perfect:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Site Analysis</h3>
              <p className="text-gray-700">We assess existing subfloor structure, moisture levels, climate, usage (sports types, frequency), regulatory requirements.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Design & Specification</h3>
              <p className="text-gray-700">We choose the KTL system that best fits your budget, performance level, and site conditions (fixed or portable, batten or clip system, wood species, finish, etc.).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Preparation & Drying</h3>
              <p className="text-gray-700">Prepare the site, ensure moisture is below acceptable thresholds, use drying or conditioning as required. If needed, level the base accurately.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-700">Installation of sub‑construction, shock pads or elastic elements, hardwood boards, surface finish. Careful alignment and finishing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Certification & Handover</h3>
              <p className="text-gray-700">Testing if required (bounce, shock absorption), compliance with FIBA or other relevant certs, final inspections.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                6
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Advice</h3>
              <p className="text-gray-700">Guidance on cleaning, annual checks, repair etc., to ensure the system continues to perform and maintain appearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in Touch to Specify Your Sprung Floor
          </h2>
          <p className="text-xl mb-8">
            Ready to invest in a high‑performance flooring solution? Whether you're looking for FIBA competition standard timber, a portable system, or a timber vs vinyl hybrid, we can help.
          </p>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Us Today</h3>
            <p className="text-lg mb-6">
              📞 Contact us for a site visit and custom quote
            </p>
            <p className="text-lg mb-6">
              📧 Email us for system spec sheets and examples
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
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
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
            Professional KTL sprung floor supply and installation across South Australia, Victoria, New South Wales and Canberra
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
