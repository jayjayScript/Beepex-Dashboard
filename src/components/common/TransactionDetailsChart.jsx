import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";


const data = [
  { date: "Jun 21", gift: 350_000, airtime: 300_000, data: 320_000, utility: 280_000 },
  { date: "Jun 22", gift: 260_000, airtime: 270_000, data: 280_000, utility: 250_000 },
  { date: "Jun 23", gift: 420_000, airtime: 200_000, data: 180_000, utility: 210_000 },
  { date: "Jun 24", gift: 260_000, airtime: 240_000, data: 230_000, utility: 220_000 },
  { date: "Jun 25", gift: 520_000, airtime: 160_000, data: 480_000, utility: 450_000 },
  { date: "Jun 26", gift: 120_000, airtime: 700_000, data: 150_000, utility: 100_000 },
  { date: "Jun 27", gift: 300_000, airtime: 650_000, data: 550_000, utility: 620_000 },
];


const nairaShort = (v) => {
  
  if (v >= 1000) return `₦${Math.round(v / 1000)}k`;
  return `₦${v}`;
};

const tooltipFormatter = (value) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(value);

const TransactionDetailsChart = () => {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white ">
  
      <div className="flex items-center justify-between px-4 sm:px-6 pt-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">Transaction Details</h3>

       
        <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:bg-gray-50">
          Last 7 days
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 px-4 sm:px-6 pb-2 pt-2 text-xs sm:text-sm">
        <LegendSwatch color="#10b981" label="Gift Card Redemption" />
        <LegendSwatch color="#22c55e" label="Airtime" />
        <LegendSwatch color="#3b82f6" label="Data" />
        <LegendSwatch color="#f59e0b" label="Utility" line />
      </div>

      {/* Chart */}
      <div className="h-[320px] sm:h-[360px] px-2 sm:px-4 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={18}
            barGap={8}
            margin={{ top: 8, right: 12, left: 8, bottom: 8 }}
          >
            <CartesianGrid vertical={false} stroke="#edf2f7" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: "#64748b" }}
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 700000]}
              ticks={[0, 175000, 350000, 525000, 700000]}
              tickFormatter={nairaShort}
              tick={{ fontSize: 12, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(148,163,184,0.12)" }}
              formatter={(v, name) => [tooltipFormatter(v), toLabel(name)]}
              labelStyle={{ color: "#0f172a", fontWeight: 600 }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            />
            
            <Bar dataKey="gift" name="Gift Card Redemption" radius={[4, 4, 0, 0]} fill="#10b981" />
            <Bar dataKey="airtime" name="Airtime" radius={[4, 4, 0, 0]} fill="#22c55e" />
            <Bar dataKey="data" name="Data" radius={[4, 4, 0, 0]} fill="#3b82f6" />
            <Bar dataKey="utility" name="Utility" radius={[4, 4, 0, 0]} fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


const LegendSwatch = ({ color, label, line }) => (
  <div className="inline-flex items-center gap-2">
    {line ? (
      <span className="h-[2px] w-4 rounded-full" style={{ backgroundColor: color }} />
    ) : (
      <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
    )}
    <span className="text-gray-600">{label}</span>
  </div>
);

// Ensure tooltip labels are clean
function toLabel(key) {
  switch (key) {
    case "gift": return "Gift Card Redemption";
    case "airtime": return "Airtime";
    case "data": return "Data";
    case "utility": return "Utility";
    default: return key;
  }
}

export default TransactionDetailsChart;
