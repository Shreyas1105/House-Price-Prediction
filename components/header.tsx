"use client"

import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-teal-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image
              src="/logo.png"
              alt="House Price Prediction Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white">PropValue</h1>
            <p className="text-xs text-teal-400">AI-Powered Price Prediction</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => document.getElementById("prediction")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-300 hover:text-teal-400 transition-colors text-sm cursor-pointer"
          >
            Predict
          </button>
          <button
            onClick={() => document.getElementById("analytics")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-300 hover:text-teal-400 transition-colors text-sm cursor-pointer"
          >
            Analytics
          </button>
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-300 hover:text-teal-400 transition-colors text-sm cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-slate-300 hover:text-teal-400 transition-colors text-sm cursor-pointer"
          >
            About
          </button>
        </nav>
      </div>
    </header>
  )
}
