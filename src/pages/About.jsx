function About() {
    return (
      <>
        {/* Hero Section */}
        <section className="about-hero bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 mt-16">
          <div className="about-hero__container container mx-auto px-4 text-center">
            <h1 className="about-hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About AirDoctorHVAC
            </h1>
            <p className="about-hero__subtitle text-lg md:text-xl max-w-2xl mx-auto">
              Your trusted HVAC experts with over 15 years of experience keeping homes and businesses comfortable year-round.
            </p>
          </div>
        </section>
  
        {/* Company Story */}
        <section className="about-story py-16 bg-white">
          <div className="about-story__container container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="about-story__content">
                <h2 className="about-story__title text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <p className="about-story__text text-gray-600 mb-4">
                  Founded in 2009, AirDoctorHVAC began as a small family business with a simple mission: 
                  provide honest, reliable HVAC services that keep our community comfortable and safe.
                </p>
                <p className="about-story__text text-gray-600 mb-4">
                  What started as emergency repairs for neighbors has grown into a full-service HVAC company 
                  serving residential and commercial clients throughout the region. We've never forgotten our roots 
                  or our commitment to treating every customer like family.
                </p>
                <p className="about-story__text text-gray-600">
                  Today, we're proud to be your local HVAC experts, combining old-fashioned values with 
                  cutting-edge technology to deliver exceptional service every time.
                </p>
              </div>
              <div className="about-story__image bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Company Photo</span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Values */}
        <section className="about-values py-16 bg-gray-50">
          <div className="about-values__container container mx-auto px-4">
            <h2 className="about-values__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              Our Values
            </h2>
            <div className="about-values__grid grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="about-values__card bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="about-values__icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="about-values__card-title text-xl font-semibold text-gray-800 mb-3">
                  Quality First
                </h3>
                <p className="about-values__card-text text-gray-600">
                  We use only the highest quality parts and materials, ensuring every job is done right the first time.
                </p>
              </div>
              <div className="about-values__card bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="about-values__icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="about-values__card-title text-xl font-semibold text-gray-800 mb-3">
                  Always Available
                </h3>
                <p className="about-values__card-text text-gray-600">
                  HVAC emergencies don't wait for business hours. That's why we offer 24/7 emergency service.
                </p>
              </div>
              <div className="about-values__card bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="about-values__icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💯</span>
                </div>
                <h3 className="about-values__card-title text-xl font-semibold text-gray-800 mb-3">
                  Honest Pricing
                </h3>
                <p className="about-values__card-text text-gray-600">
                  No surprises, no hidden fees. We provide transparent, upfront pricing on every job.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team */}
        <section className="about-team py-16 bg-white">
          <div className="about-team__container container mx-auto px-4">
            <h2 className="about-team__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              Meet Our Team
            </h2>
            <div className="about-team__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="about-team__member text-center">
                <div className="about-team__photo w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="about-team__name text-xl font-semibold text-gray-800 mb-1">
                  Mike Johnson
                </h3>
                <p className="about-team__role text-blue-600 font-medium mb-2">
                  Founder & Lead Technician
                </p>
                <p className="about-team__bio text-gray-600 text-sm">
                  15+ years experience, certified in all major HVAC systems
                </p>
              </div>
              <div className="about-team__member text-center">
                <div className="about-team__photo w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="about-team__name text-xl font-semibold text-gray-800 mb-1">
                  Sarah Williams
                </h3>
                <p className="about-team__role text-blue-600 font-medium mb-2">
                  Operations Manager
                </p>
                <p className="about-team__bio text-gray-600 text-sm">
                  Ensures every customer receives exceptional service
                </p>
              </div>
              <div className="about-team__member text-center">
                <div className="about-team__photo w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="about-team__name text-xl font-semibold text-gray-800 mb-1">
                  Carlos Rodriguez
                </h3>
                <p className="about-team__role text-blue-600 font-medium mb-2">
                  Senior Installer
                </p>
                <p className="about-team__bio text-gray-600 text-sm">
                  Specializes in new system installations and retrofits
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="about-cta py-16 bg-blue-600 text-white">
          <div className="about-cta__container container mx-auto px-4 text-center">
            <h2 className="about-cta__title text-2xl md:text-3xl font-bold mb-4">
              Ready to Work with Us?
            </h2>
            <p className="about-cta__text text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and see why hundreds of customers trust AirDoctorHVAC 
              with their comfort needs.
            </p>
            <div className="about-cta__buttons flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="about-cta__button bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:5551234567" 
                className="about-cta__button border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default About