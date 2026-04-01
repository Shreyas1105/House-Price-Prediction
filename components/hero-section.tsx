"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export default function HeroSection() {
  const formRef = useRef<HTMLDivElement>(null)

  const handleStartPredicting = () => {
    const formElement = document.getElementById("prediction-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleViewDemo = () => {
    const demoData = {
      state: "Karnataka",
      city: "Bangalore",
      locality: "Koramangala",
      property_type: "Apartment",
      bhk: "2",
      size_in_sqft: "1500",
      year_built: "2015",
      furnished_status: "Semi-Furnished",
      floor_no: "5",
      total_floors: "15",
      nearby_schools: "3",
      nearby_hospitals: "2",
      public_transport: "High",
      parking_space: "1",
      security: "Yes",
      amenities: "Gym, Pool, Garden",
      facing: "South",
      owner_type: "Individual",
    }

    // Fill the form with demo data
    const form = document.querySelector("form") as HTMLFormElement
    if (form) {
      Object.keys(demoData).forEach((key) => {
        const input = form.querySelector(`[name="${key}"]`) as HTMLInputElement | HTMLSelectElement
        if (input) {
          input.value = demoData[key as keyof typeof demoData]
          input.dispatchEvent(new Event("change", { bubbles: true }))
        }
      })

      // Scroll to form
      const formElement = document.getElementById("prediction-form")
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="relative overflow-hidden pt-32 pb-20 px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase">Advanced ML Technology</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Predict House Prices with <span className="text-teal-400">AI Precision</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Leverage cutting-edge machine learning to forecast real estate values with remarkable accuracy. Make
            data-driven decisions in seconds.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            onClick={handleStartPredicting}
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 h-12 text-base font-semibold cursor-pointer"
          >
            Start Predicting <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={handleViewDemo}
            size="lg"
            variant="outline"
            className="border-teal-600 text-white hover:bg-teal-500/10 rounded-full px-8 h-12 text-base font-semibold bg-transparent cursor-pointer"
          >
            View Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
          <div>
            <p className="text-2xl font-bold text-teal-400">95%</p>
            <p className="text-sm text-slate-400">Accuracy Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-400">10K+</p>
            <p className="text-sm text-slate-400">Properties Analyzed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-400">&lt;1s</p>
            <p className="text-sm text-slate-400">Prediction Time</p>
          </div>
        </div>
      </div>
    </div>
  )
}
