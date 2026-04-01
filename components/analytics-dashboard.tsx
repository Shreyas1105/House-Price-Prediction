"use client"

import { Card } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AnalyticsDashboard() {
  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value)
  }

  // Market comparison data in INR
  const marketData = [
    { price: 3000000, volume: 45 },
    { price: 3500000, volume: 52 },
    { price: 4000000, volume: 68 },
    { price: 4500000, volume: 85 },
    { price: 5000000, volume: 72 },
    { price: 5500000, volume: 58 },
    { price: 6000000, volume: 42 },
  ]

  // Property distribution
  const propertyDistribution = [
    { name: "Under ₹30L", value: 15 },
    { name: "₹30L-₹45L", value: 35 },
    { name: "₹45L-₹60L", value: 30 },
    { name: "₹60L-₹80L", value: 15 },
    { name: "Over ₹80L", value: 5 },
  ]

  const COLORS = ["#14b8a6", "#06b6d4", "#0891b2", "#0e7490", "#155e75"]

  // Price history in INR
  const priceHistory = [
    { month: "Jan", urban: 4250000, suburban: 3500000, rural: 2800000 },
    { month: "Feb", urban: 4300000, suburban: 3520000, rural: 2850000 },
    { month: "Mar", urban: 4350000, suburban: 3550000, rural: 2900000 },
    { month: "Apr", urban: 4400000, suburban: 3580000, rural: 2950000 },
    { month: "May", urban: 4450000, suburban: 3620000, rural: 2980000 },
    { month: "Jun", urban: 4500000, suburban: 3650000, rural: 3020000 },
  ]

  // Feature correlation
  const correlationData = [
    { sqft: 1500, price: 3500000 },
    { sqft: 2000, price: 4200000 },
    { sqft: 2500, price: 4800000 },
    { sqft: 3000, price: 5500000 },
    { sqft: 3500, price: 6200000 },
    { sqft: 4000, price: 6800000 },
  ]

  return (
    <section className="py-16 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Advanced Analytics</h2>
        <p className="text-slate-400">Deep insights into real estate market trends and predictions</p>
      </div>

      {/* Market Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-6">
          <h3 className="text-lg font-bold text-white mb-4">Price Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {propertyDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-6">
          <h3 className="text-lg font-bold text-white mb-4">Market Volume by Price</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
              <XAxis dataKey="price" stroke="#64748b" tickFormatter={(value) => formatINR(value / 1000000) + "M"} />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
                formatter={(value) => `${value} properties`}
              />
              <Bar dataKey="volume" fill="#14b8a6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Price Trends by Location */}
      <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-6">
        <h3 className="text-lg font-bold text-white mb-4">Price Trends by Location</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={priceHistory}>
            <defs>
              <linearGradient id="colorUrban" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSuburban" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRural" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0891b2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0891b2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" tickFormatter={(value) => formatINR(value / 1000000) + "M"} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #475569",
                borderRadius: "8px",
              }}
              formatter={(value) => formatINR(value)}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="urban"
              stroke="#14b8a6"
              fillOpacity={1}
              fill="url(#colorUrban)"
              name="Urban"
            />
            <Area
              type="monotone"
              dataKey="suburban"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorSuburban)"
              name="Suburban"
            />
            <Area
              type="monotone"
              dataKey="rural"
              stroke="#0891b2"
              fillOpacity={1}
              fill="url(#colorRural)"
              name="Rural"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Correlation Analysis */}
      <Card className="bg-slate-900/80 border-teal-700/50 backdrop-blur-sm p-6">
        <h3 className="text-lg font-bold text-white mb-4">Square Footage vs Price Correlation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
            <XAxis type="number" dataKey="sqft" name="Square Feet" stroke="#64748b" />
            <YAxis type="number" dataKey="price" name="Price" stroke="#64748b" />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #475569",
                borderRadius: "8px",
              }}
              formatter={(value) => formatINR(value)}
            />
            <Legend />
            <Scatter name="Properties" data={correlationData} fill="#14b8a6" shape="circle" />
          </ScatterChart>
        </ResponsiveContainer>
      </Card>

      {/* Accuracy Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "R² Score", value: "0.947", color: "from-teal-500" },
          { label: "RMSE", value: "₹1.82L", color: "from-cyan-500" },
          { label: "MAE", value: "₹1.25L", color: "from-teal-600" },
          { label: "Coverage", value: "10K+", color: "from-blue-500" },
        ].map((metric, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-slate-800/40 to-slate-900/80 border-teal-700/50 backdrop-blur-sm p-6"
          >
            <p className="text-slate-400 text-sm mb-2">{metric.label}</p>
            <p
              className={`text-3xl font-bold bg-gradient-to-r ${metric.color} to-slate-200 bg-clip-text text-transparent`}
            >
              {metric.value}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
