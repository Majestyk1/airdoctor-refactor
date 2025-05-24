import { useState } from 'react'
import { Phone, TrendingUp, Leaf, DollarSign, Zap, CheckCircle, Clock, Award, Calculator, ArrowRight } from 'lucide-react'

function Retrofit() {
  const [selectedCalculator, setSelectedCalculator] = useState('cooling')

  const retrofitOptions = [
    {
      id: 'efficiency',
      title: 'Energy Efficiency Upgrades',
      icon: '⚡',
      description: 'Modernize your existing system for maximum efficiency and lower energy bills.',
      features: ['High-Efficiency Units', 'Smart Thermostats', 'Improved Ductwork', 'Zoning Systems'],
      savings: 'Save 20-40% on energy costs',
      price: 'From $2,500'
    },
    {
      id: 'smart',
      title: 'Smart System Integration',
      icon: '📱',
      description: 'Add smart controls and automation to your existing HVAC system.',
      features: ['WiFi Thermostats', 'Remote Monitoring', 'Automated Scheduling', 'Energy Reports'],
      savings: 'Optimize comfort & efficiency',
      price: 'From $800'
    },
    {
      id: 'air-quality',
      title: 'Indoor Air Quality',
      icon: '🌬️',
      description: 'Enhance your system with advanced filtration and air purification.',
      features: ['HEPA Filtration', 'UV Air Purifiers', 'Humidity Control', 'Ventilation Upgrades'],
      savings: 'Healthier indoor environment',
      price: 'From $1,200'
    },
    {
      id: 'ductwork',
      title: 'Ductwork Modernization',
      icon: '🔧',
      description: 'Seal, insulate, and optimize your ductwork for better performance.',
      features: ['Duct Sealing', 'Insulation Upgrade', 'Airflow Optimization', 'Leak Detection'],
      savings: 'Improve system efficiency by 30%',
      price: 'From $1,800'
    }
  ]

  const savingsCalculator = {
    cooling: { current: 280, upgraded: 168, savings: 112 },
    heating: { current: 320, upgraded: 192, savings: 128 },
    combined: { current: 600, upgraded: 360, savings: 240 }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="retrofit-hero bg-gradient-to-br from-green-600 to-blue-600 text-white pt-24 pb-16">
        <div className="retrofit-hero__container container mx-auto px-4 text-center">
          <h1 className="retrofit-hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            HVAC System Retrofits & Upgrades
          </h1>
          <p className="retrofit-hero__subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Transform your existing HVAC system with modern upgrades that boost efficiency, 
            reduce costs, and improve comfort without full replacement.
          </p>
          <div className="retrofit-hero__benefits flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="retrofit-hero__benefit flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Save 20-40% on Energy Bills</span>
            </div>
            <div className="retrofit-hero__benefit flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Leaf className="w-5 h-5" />
              <span className="font-medium">Eco-Friendly Solutions</span>
            </div>
            <div className="retrofit-hero__benefit flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Increase Home Value</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Assessment CTA */}
      <section className="retrofit-assessment py-8 bg-orange-500 text-white">
        <div className="retrofit-assessment__container container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="retrofit-assessment__content text-center md:text-left">
              <h2 className="retrofit-assessment__title text-xl md:text-2xl font-bold mb-2">
                Free Energy Efficiency Assessment
              </h2>
              <p className="retrofit-assessment__text">
                Discover how much you could save with our professional system evaluation.
              </p>
            </div>
            <div className="retrofit-assessment__actions flex flex-col sm:flex-row gap-3">
              <a 
                href="/contact" 
                className="retrofit-assessment__schedule bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Assessment
              </a>
              <a 
                href="tel:5551234567" 
                className="retrofit-assessment__phone border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="retrofit-calculator py-16 bg-white">
        <div className="retrofit-calculator__container container mx-auto px-4">
          <h2 className="retrofit-calculator__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Calculate Your Potential Savings
          </h2>
          <div className="retrofit-calculator__content bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="retrofit-calculator__tabs flex justify-center gap-4 mb-8">
              {[
                { id: 'cooling', label: 'Cooling Only', icon: '❄️' },
                { id: 'heating', label: 'Heating Only', icon: '🔥' },
                { id: 'combined', label: 'Year-Round', icon: '🏠' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCalculator(tab.id)}
                  className={`retrofit-calculator__tab px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    selectedCalculator === tab.id
                      ? 'retrofit-calculator__tab_active bg-green-600 text-white'
                      : 'retrofit-calculator__tab_inactive bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="retrofit-calculator__results grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="retrofit-calculator__current bg-red-50 rounded-lg p-6">
                <h3 className="retrofit-calculator__result-title text-lg font-semibold text-gray-800 mb-2">
                  Current Monthly Cost
                </h3>
                <div className="retrofit-calculator__amount text-3xl font-bold text-red-600 mb-2">
                  ${savingsCalculator[selectedCalculator].current}
                </div>
                <p className="retrofit-calculator__note text-sm text-gray-600">Based on average usage</p>
              </div>
              
              <div className="retrofit-calculator__upgraded bg-green-50 rounded-lg p-6">
                <h3 className="retrofit-calculator__result-title text-lg font-semibold text-gray-800 mb-2">
                  After Retrofit
                </h3>
                <div className="retrofit-calculator__amount text-3xl font-bold text-green-600 mb-2">
                  ${savingsCalculator[selectedCalculator].upgraded}
                </div>
                <p className="retrofit-calculator__note text-sm text-gray-600">With efficiency upgrades</p>
              </div>
              
              <div className="retrofit-calculator__savings bg-blue-50 rounded-lg p-6">
                <h3 className="retrofit-calculator__result-title text-lg font-semibold text-gray-800 mb-2">
                  Monthly Savings
                </h3>
                <div className="retrofit-calculator__amount text-3xl font-bold text-blue-600 mb-2">
                  ${savingsCalculator[selectedCalculator].savings}
                </div>
                <p className="retrofit-calculator__note text-sm text-gray-600">
                  ${savingsCalculator[selectedCalculator].savings * 12}/year savings
                </p>
              </div>
            </div>
            
            <div className="retrofit-calculator__cta text-center mt-8">
              <a 
                href="/contact" 
                className="retrofit-calculator__quote bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Get Personalized Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Retrofit Options */}
      <section className="retrofit-options py-16 bg-gray-50">
        <div className="retrofit-options__container container mx-auto px-4">
          <h2 className="retrofit-options__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Popular Retrofit Solutions
          </h2>
          <div className="retrofit-options__grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {retrofitOptions.map((option) => (
              <div key={option.id} className="retrofit-options__card bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="retrofit-options__header flex items-start gap-4 mb-4">
                  <div className="retrofit-options__icon text-3xl">{option.icon}</div>
                  <div className="retrofit-options__info flex-1">
                    <h3 className="retrofit-options__card-title text-xl font-semibold text-gray-800 mb-2">
                      {option.title}
                    </h3>
                    <p className="retrofit-options__description text-gray-600 mb-4">
                      {option.description}
                    </p>
                  </div>
                </div>
                
                <ul className="retrofit-options__features space-y-2 mb-6">
                  {option.features.map((feature, index) => (
                    <li key={index} className="retrofit-options__feature flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="retrofit-options__footer flex items-center justify-between">
                  <div className="retrofit-options__pricing">
                    <div className="retrofit-options__price text-lg font-bold text-blue-600">{option.price}</div>
                    <div className="retrofit-options__savings text-sm text-green-600">{option.savings}</div>
                  </div>
                  <a 
                    href="/contact" 
                    className="retrofit-options__cta bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="retrofit-process py-16 bg-white">
        <div className="retrofit-process__container container mx-auto px-4">
          <h2 className="retrofit-process__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            The Retrofit Process
          </h2>
          <div className="retrofit-process__timeline grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: 'Energy Assessment', 
                description: 'Comprehensive evaluation of your current system and energy usage patterns.',
                time: '1-2 hours'
              },
              { 
                step: '2', 
                title: 'Custom Proposal', 
                description: 'Detailed retrofit plan with ROI analysis and financing options.',
                time: '2-3 days'
              },
              { 
                step: '3', 
                title: 'Professional Installation', 
                description: 'Expert installation with minimal disruption to your daily routine.',
                time: '1-3 days'
              },
              { 
                step: '4', 
                title: 'Performance Verification', 
                description: 'Testing and optimization to ensure maximum efficiency gains.',
                time: '1 day'
              }
            ].map((item, index) => (
              <div key={index} className="retrofit-process__step text-center">
                <div className="retrofit-process__step-number w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="retrofit-process__step-title text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="retrofit-process__step-description text-gray-600 mb-2">
                  {item.description}
                </p>
                <div className="retrofit-process__step-time flex items-center justify-center gap-1 text-sm text-blue-600">
                  <Clock className="w-4 h-4" />
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="retrofit-results py-16 bg-gray-50">
        <div className="retrofit-results__container container mx-auto px-4">
          <h2 className="retrofit-results__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Real Customer Results
          </h2>
          <div className="retrofit-results__grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                customer: 'Johnson Family - Austin',
                project: 'Smart Thermostat + Duct Sealing',
                before: '$245/month',
                after: '$147/month',
                savings: '40% reduction',
                payback: '18 months'
              },
              { 
                customer: 'Miller Office - Round Rock',
                project: 'High-Efficiency Unit + Controls',
                before: '$890/month',
                after: '$534/month',
                savings: '40% reduction',
                payback: '24 months'
              },
              { 
                customer: 'Davis Home - Cedar Park',
                project: 'Complete System Retrofit',
                before: '$320/month',
                after: '$192/month',
                savings: '40% reduction',
                payback: '20 months'
              }
            ].map((result, index) => (
              <div key={index} className="retrofit-results__case bg-white rounded-lg p-6 shadow-sm">
                <h3 className="retrofit-results__customer text-lg font-semibold text-gray-800 mb-2">
                  {result.customer}
                </h3>
                <p className="retrofit-results__project text-sm text-gray-600 mb-4">
                  {result.project}
                </p>
                
                <div className="retrofit-results__comparison grid grid-cols-2 gap-4 mb-4">
                  <div className="retrofit-results__before text-center">
                    <div className="text-sm text-gray-500 mb-1">Before</div>
                    <div className="text-xl font-bold text-red-600">{result.before}</div>
                  </div>
                  <div className="retrofit-results__after text-center">
                    <div className="text-sm text-gray-500 mb-1">After</div>
                    <div className="text-xl font-bold text-green-600">{result.after}</div>
                  </div>
                </div>
                
                <div className="retrofit-results__metrics text-center">
                  <div className="retrofit-results__savings text-lg font-semibold text-blue-600 mb-1">
                    {result.savings}
                  </div>
                  <div className="retrofit-results__payback text-sm text-gray-600">
                    Payback: {result.payback}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives */}
      <section className="retrofit-incentives py-16 bg-blue-600 text-white">
        <div className="retrofit-incentives__container container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="retrofit-incentives__content">
              <h2 className="retrofit-incentives__title text-2xl md:text-3xl font-bold mb-6">
                Available Rebates & Incentives
              </h2>
              <p className="retrofit-incentives__description text-lg mb-6">
                Take advantage of federal tax credits, utility rebates, and local incentives 
                to reduce your retrofit costs even further.
              </p>
              <ul className="retrofit-incentives__list space-y-3 mb-8">
                <li className="retrofit-incentives__item flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Federal tax credits up to 30%</span>
                </li>
                <li className="retrofit-incentives__item flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Utility company rebates up to $2,000</span>
                </li>
                <li className="retrofit-incentives__item flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Local energy efficiency programs</span>
                </li>
                <li className="retrofit-incentives__item flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>We handle all paperwork</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="retrofit-incentives__cta bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Check Your Eligibility
              </a>
            </div>
            <div className="retrofit-incentives__image bg-white/20 backdrop-blur-sm rounded-lg p-8 text-center">
              <DollarSign className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Save Even More</h3>
              <p className="text-white/80 mb-4">
                Combine incentives to reduce your total investment by up to 50%
              </p>
              <div className="text-3xl font-bold">Up to $5,000</div>
              <div className="text-white/80">in available incentives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="retrofit-cta py-16 bg-gray-800 text-white">
        <div className="retrofit-cta__container container mx-auto px-4 text-center">
          <h2 className="retrofit-cta__title text-2xl md:text-3xl font-bold mb-4">
            Start Saving Today with an HVAC Retrofit
          </h2>
          <p className="retrofit-cta__text text-lg mb-8 max-w-2xl mx-auto">
            Get your free energy assessment and discover how much you could save 
            with a professional HVAC retrofit.
          </p>
          <div className="retrofit-cta__buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="retrofit-cta__assessment bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Schedule Free Assessment
            </a>
            <a 
              href="tel:5551234567" 
              className="retrofit-cta__phone border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Retrofit