"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PredictionForm from "@/components/prediction-form"
import ResultsSection from "@/components/results-section"
import FeaturesSection from "@/components/features-section"
import AnalyticsDashboard from "@/components/analytics-dashboard"
import Footer from "@/components/footer"
import { useState } from "react"

export default function Page() {
  const [prediction, setPrediction] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePrediction = async (data: any) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      setPrediction(result)
    } catch (error) {
      console.error("Prediction error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-blue-900/40">
        <HeroSection />
        <div className="container mx-auto px-4 py-20 space-y-20">
          <div id="prediction">
            <PredictionForm onPrediction={handlePrediction} isLoading={isLoading} />
          </div>
          {prediction && <ResultsSection prediction={prediction} />}
          <div id="analytics">
            <AnalyticsDashboard />
          </div>
          <div id="features">
            <FeaturesSection />
          </div>
        </div>
      </main>
      <footer id="about">
        <Footer />
      </footer>
    </>
  )
}
