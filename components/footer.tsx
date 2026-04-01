"use client"

import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const developedby = [
    { name: "Shreyas M Shenoy", role: "Developer", email: "shreyas.m.shenoy@email.com" }
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-900/50 via-teal-950/40 to-blue-950/50 border-t border-teal-700/30 text-slate-300 py-16">
      <div className="container mx-auto px-4">


        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-teal-300 mb-4">About Us</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are a passionate team of developers and data scientists dedicated to revolutionizing property valuation
              through machine learning. Our mission is to provide accurate, fast, and reliable house price predictions
              using cutting-edge AI technology.
            </p>
          </div>

          {/* Developed by */}
          <div>
            <h3 className="text-xl font-bold text-teal-300 mb-4">Developed By</h3>
            <div className="space-y-3">
              {developedby.map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 border border-teal-700/20 hover:border-teal-500/40 transition-colors"
                >
                  <p className="text-teal-300 font-semibold text-sm">{member.name}</p>
                  <p className="text-slate-400 text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-teal-300 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm font-semibold">Email</p>
                  <p className="text-slate-400 text-xs">team@houseprice.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm font-semibold">Location</p>
                  <p className="text-slate-400 text-xs">India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm font-semibold">Phone</p>
                  <p className="text-slate-400 text-xs">+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-700/20 my-8"></div>

        {/* Copyright & Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              Copyright © 2025 <span className="text-teal-300 font-semibold">HousePrice.com</span>. All rights
              reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              House Price Prediction using ML
            </p>
          </div>

          {/* Social Links Placeholder */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-teal-900/30 hover:bg-teal-700/40 transition-colors text-teal-300 hover:text-teal-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-teal-900/30 hover:bg-teal-700/40 transition-colors text-teal-300 hover:text-teal-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-teal-900/30 hover:bg-teal-700/40 transition-colors text-teal-300 hover:text-teal-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
