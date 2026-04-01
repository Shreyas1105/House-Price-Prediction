"use client"

import { Card } from "@/components/ui/card"
import { Brain, Zap, TrendingUp, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Advanced ML Model",
      description: "Trained on 100,000+ properties using gradient boosting and neural networks",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get predictions in under 1 second with optimized inference",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Track market trends and compare with neighborhood averages",
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "95% prediction accuracy with confidence intervals",
    },
  ]

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our AI</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="bg-slate-900/80 border-slate-700 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-colors"
            >
              <Icon className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
