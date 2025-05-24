import { Phone } from 'lucide-react'

function RetrofitAssessment() {
  return (
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
  )
}

export default RetrofitAssessment 