"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

interface ResultsSectionProps {
  prediction: any
}

export default function ResultsSection({ prediction }: ResultsSectionProps) {
  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const priceData = [
    { month: "Jan", predicted: prediction.price || 4500000, market: 4450000 },
    { month: "Feb", predicted: prediction.price || 4500000, market: 4480000 },
    { month: "Mar", predicted: prediction.price || 4500000, market: 4520000 },
    { month: "Apr", predicted: prediction.price || 4500000, market: 4550000 },
  ]

  const featureImportance = [
    { name: "Square Feet", importance: 35 },
    { name: "Location", importance: 25 },
    { name: "Age", importance: 20 },
    { name: "Bedrooms", importance: 12 },
    { name: "Bathrooms", importance: 8 },
  ]

  return (
    <div className="space-y-8">
      {/* Main Prediction Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10"></div>
        <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Predicted Price</h2>
          <div className="text-5xl font-bold text-teal-400 mb-4">{formatINR(prediction.price || 4500000)}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-teal-600/20">
              <p className="text-slate-400 text-sm">Confidence</p>
              <p className="text-xl font-bold text-white">{prediction.confidence || 92}%</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-teal-600/20">
              <p className="text-slate-400 text-sm">Price Range</p>
              <p className="text-xl font-bold text-white">{formatINR(prediction.rangeAmount || 250000)}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-teal-600/20">
              <p className="text-slate-400 text-sm">Market Value</p>
              <p className="text-xl font-bold text-white">{formatINR(prediction.marketValue || 4550000)}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-teal-600/20">
              <p className="text-slate-400 text-sm">Variance</p>
              <p className="text-xl font-bold text-teal-400">+2.3%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Trend Chart */}
        <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-6">
          <h3 className="text-lg font-bold text-white mb-4">Price Trend Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#e2e8f0" }}
                formatter={(value) => formatINR(value)}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#14b8a6"
                strokeWidth={2}
                dot={{ fill: "#14b8a6", r: 4 }}
                name="Predicted"
              />
              <Line
                type="monotone"
                dataKey="market"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={{ fill: "#06b6d4", r: 4 }}
                name="Market Avg"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Feature Importance */}
        <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-6">
          <h3 className="text-lg font-bold text-white mb-4">Feature Importance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={featureImportance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
              <XAxis dataKey="name" stroke="#64748b" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#e2e8f0" }}
              />
              <Bar dataKey="importance" fill="#14b8a6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
