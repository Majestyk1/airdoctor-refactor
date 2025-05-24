import { DollarSign, Leaf, TrendingUp } from 'lucide-react'

function RetrofitHero() {
  return (
    <section className="retrofit-hero bg-brand-gradient text-white pt-24 pb-16">
      <div className="retrofit-hero__container container mx-auto px-4 text-center">
        <h1 className="retrofit-hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
          HVAC System Retrofits &amp; Upgrades
        </h1>
        <p className="retrofit-hero__subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8 hover:scale-105 transition-transform duration-300 cursor-default">
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
  )
}

export default RetrofitHero 