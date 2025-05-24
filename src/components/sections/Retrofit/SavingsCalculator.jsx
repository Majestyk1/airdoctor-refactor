import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { savingsCalculator } from '../../../data/retrofitData'

const tabs = [
  { id: 'cooling', label: 'Cooling Only', icon: '❄️' },
  { id: 'heating', label: 'Heating Only', icon: '🔥' },
  { id: 'combined', label: 'Year-Round', icon: '🏠' },
]

function SavingsCalculator() {
  const [selected, setSelected] = useState('cooling')
  const data = savingsCalculator[selected]

  return (
    <section className="retrofit-calculator py-16 bg-white">
      <div className="retrofit-calculator__container container mx-auto px-4">
        <h2 className="retrofit-calculator__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Calculate Your Potential Savings
        </h2>
        <div className="retrofit-calculator__content bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="retrofit-calculator__tabs flex justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelected(tab.id)}
                className={`retrofit-calculator__tab px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  selected === tab.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="retrofit-calculator__results grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <ResultCard title="Current Monthly Cost" color="red" amount={data.current} />
            <ResultCard title="After Retrofit" color="green" amount={data.upgraded} />
            <ResultCard
              title="Monthly Savings"
              color="blue"
              amount={data.savings}
              extra={`$${data.savings * 12}/year savings`}
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              Get Personalized Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultCard({ title, amount, color, extra }) {
  return (
    <div className={`bg-${color}-50 rounded-lg p-6`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>${amount}</div>
      {extra && <p className="text-sm text-gray-600">{extra}</p>}
    </div>
  )
}

export default SavingsCalculator 