"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { useState } from "react"

interface PredictionFormProps {
  onPrediction: (data: any) => void
  isLoading: boolean
}

export default function PredictionForm({ onPrediction, isLoading }: PredictionFormProps) {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    locality: "",
    property_type: "Apartment",
    bhk: "2",
    size_in_sqft: "",
    year_built: "",
    furnished_status: "Semi-Furnished",
    floor_no: "",
    total_floors: "",
    nearby_schools: "",
    nearby_hospitals: "",
    public_transport: "",
    parking_space: "0",
    security: "Yes",
    amenities: "",
    facing: "South",
    owner_type: "Individual",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onPrediction(formData)
  }

  return (
    <div id="prediction-form" className="relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10"></div>

      <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Property Details</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Location Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* State */}
              <div className="space-y-2">
                <Label className="text-slate-200">State</Label>
                <Input
                  type="text"
                  name="state"
                  placeholder="e.g., Karnataka"
                  value={formData.state}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                  required
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label className="text-slate-200">City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="e.g., Bangalore"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                  required
                />
              </div>

              {/* Locality */}
              <div className="space-y-2">
                <Label className="text-slate-200">Locality</Label>
                <Input
                  type="text"
                  name="locality"
                  placeholder="e.g., Koramangala"
                  value={formData.locality}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Property Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Property Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Property Type */}
              <div className="space-y-2">
                <Label className="text-slate-200">Property Type</Label>
                <select
                  name="property_type"
                  value={formData.property_type}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-teal-600/30 text-white rounded-md px-4 py-2 focus:border-teal-500"
                >
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Independent House</option>
                  <option>Townhouse</option>
                  <option>Plot</option>
                </select>
              </div>

              {/* BHK */}
              <div className="space-y-2">
                <Label className="text-slate-200">BHK</Label>
                <select
                  name="bhk"
                  value={formData.bhk}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-teal-600/30 text-white rounded-md px-4 py-2 focus:border-teal-500"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>

              {/* Size in Sq Ft */}
              <div className="space-y-2">
                <Label className="text-slate-200">Size (Sq Ft)</Label>
                <Input
                  type="number"
                  name="size_in_sqft"
                  placeholder="1500"
                  value={formData.size_in_sqft}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Building Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Building Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Year Built */}
              <div className="space-y-2">
                <Label className="text-slate-200">Year Built</Label>
                <Input
                  type="number"
                  name="year_built"
                  placeholder="2010"
                  value={formData.year_built}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                  required
                />
              </div>

              {/* Floor Number */}
              <div className="space-y-2">
                <Label className="text-slate-200">Floor Number</Label>
                <Input
                  type="number"
                  name="floor_no"
                  placeholder="5"
                  value={formData.floor_no}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                />
              </div>

              {/* Total Floors */}
              <div className="space-y-2">
                <Label className="text-slate-200">Total Floors</Label>
                <Input
                  type="number"
                  name="total_floors"
                  placeholder="10"
                  value={formData.total_floors}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Amenities & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Furnished Status */}
              <div className="space-y-2">
                <Label className="text-slate-200">Furnished Status</Label>
                <select
                  name="furnished_status"
                  value={formData.furnished_status}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-teal-600/30 text-white rounded-md px-4 py-2 focus:border-teal-500"
                >
                  <option>Unfurnished</option>
                  <option>Semi-Furnished</option>
                  <option>Fully Furnished</option>
                </select>
              </div>

              {/* Parking Space */}
              <div className="space-y-2">
                <Label className="text-slate-200">Parking Spaces</Label>
                <Input
                  type="number"
                  name="parking_space"
                  placeholder="2"
                  value={formData.parking_space}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                />
              </div>

              {/* Facing */}
              <div className="space-y-2">
                <Label className="text-slate-200">Facing</Label>
                <select
                  name="facing"
                  value={formData.facing}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-teal-600/30 text-white rounded-md px-4 py-2 focus:border-teal-500"
                >
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                </select>
              </div>
            </div>
          </div>

          {/* Nearby Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Nearby Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Nearby Schools */}
              <div className="space-y-2">
                <Label className="text-slate-200">Nearby Schools (count)</Label>
                <Input
                  type="number"
                  name="nearby_schools"
                  placeholder="3"
                  value={formData.nearby_schools}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                />
              </div>

              {/* Nearby Hospitals */}
              <div className="space-y-2">
                <Label className="text-slate-200">Nearby Hospitals (count)</Label>
                <Input
                  type="number"
                  name="nearby_hospitals"
                  placeholder="2"
                  value={formData.nearby_hospitals}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                />
              </div>

              {/* Public Transport */}
              <div className="space-y-2">
                <Label className="text-slate-200">Public Transport Accessibility</Label>
                <Input
                  type="text"
                  name="public_transport"
                  placeholder="e.g., High, Medium, Low"
                  value={formData.public_transport}
                  onChange={handleChange}
                  className="bg-slate-800/50 border-teal-600/30 text-white placeholder-slate-500 focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          {/* Other Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Security */}
              <div className="space-y-2">
                <Label className="text-slate-200">Security</Label>
                <select
                  name="security"
                  value={formData.security}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-teal-600/30 text-white rounded-md px-4 py-2 focus:border-teal-500"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Owner Type */}
              <div className="space-y-2">
                <Label className="text-slate-200">Owner Type</Label>
                <select
                  name="owner_type"
                  value={formData.owner_type}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-teal-600/30 text-white rounded-md px-4 py-2 focus:border-teal-500"
                >
                  <option>Individual</option>
                  <option>Builder</option>
                  <option>Corporate</option>
                </select>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white h-12 font-semibold rounded-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Predicting...
              </>
            ) : (
              "Get Prediction"
            )}
          </Button>
        </form>
      </Card>
    </div>
  )
}
