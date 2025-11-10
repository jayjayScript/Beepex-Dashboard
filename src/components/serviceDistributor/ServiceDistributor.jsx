import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Sector,
} from "recharts";

// Colors matched to your screenshot
const COLORS = {
  gift: "#10b981",   // green
  airtime: "#3b82f6",// blue
  data: "#8b5cf6",   // purple
  utility: "#f59e0b" // orange
};

// Values chosen to reflect the shown percentages (42 / 38 / 25 / 10)
const RAW = [
  { key: "gift",    name: "Gift Card Redemption", value: 42, color: COLORS.gift },
  { key: "airtime", name: "Airtime",              value: 38, color: COLORS.airtime },
  { key: "data",    name: "Data",                 value: 25, color: COLORS.data },
  { key: "utility", name: "Utility",              value: 10, color: COLORS.utility },
];

const total = RAW.reduce((a, b) => a + b.value, 0);

// Label: percentage text outside with colored line (leader)
const renderLabel = (props) => {
  const {
    cx, cy, midAngle, outerRadius, percent, name, fill,
  } = props;

  // Position label slightly outside the arc
  const RAD = Math.PI / 180;
  const r = outerRadius + 14;
  const x = cx + r * Math.cos(-midAngle * RAD);
  const y = cy + r * Math.sin(-midAngle * RAD);

  // Small elbow leader line in the same color as the slice
  const lineR1 = outerRadius + 4;
  const lineR2 = outerRadius + 18;
  const x1 = cx + lineR1 * Math.cos(-midAngle * RAD);
  const y1 = cy + lineR1 * Math.sin(-midAngle * RAD);
  const x2 = cx + lineR2 * Math.cos(-midAngle * RAD);
  const y2 = cy + lineR2 * Math.sin(-midAngle * RAD);
  const x3 = x2 + (x2 > cx ? 18 : -18);
  const y3 = y2;

  const pct = Math.round(percent * 100);

  return (
    <g>
      {/* leader line */}
      <path
        d={`M ${x1},${y1} L ${x2},${y2} L ${x3},${y3}`}
        stroke={fill}
        strokeWidth={1.5}
        fill="none"
      />
      {/* label text: show just the percent, label is implied by leader */}
      <text
        x={x3 + (x3 > cx ? 4 : -4)}
        y={y3}
        textAnchor={x3 > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight={600}
        fill={fill}
      >
        {pct}%
      </text>
      {/* small caption near the inner segment for category name (subtle) */}
      <text
        x={x1}
        y={y1}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={11}
        fill="#111827"
        opacity={0.7}
      >
        {name}
      </text>
    </g>
  );
};

const currencyFormatter = (v) =>
  `${Math.round((v / total) * 100)}%`;

export default function ServiceDistributionChart() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 pt-4">
        <h3 className="text-base font-semibold text-gray-900">Service Distribution</h3>
        <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          Last 7 days
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Chart */}
      <div className="h-[360px] px-2 sm:px-4 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              formatter={(value, name) => [currencyFormatter(value), name]}
              cursor={{ fill: "rgba(148,163,184,0.10)" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #E5E7EB",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            />
            <Pie
              data={RAW}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              startAngle={90}
              endAngle={-270} // clockwise
              cornerRadius={6}
              stroke="#fff"
              strokeWidth={3}
              labelLine={false}
              label={renderLabel}
            >
              {RAW.map((entry) => (
                <Sector key={entry.key} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 sm:px-6 pb-4 text-sm">
        {RAW.map((d) => (
          <div key={d.key} className="inline-flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-gray-700">{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
