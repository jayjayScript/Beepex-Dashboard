
import React from "react";


const statusStyles = {
  Success: "bg-green-50 text-green-700 ring-1 ring-green-200",
  Verified: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  Pending: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200",
  Failed: "bg-red-50 text-red-700 ring-1 ring-red-200",
  Rejected: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
  Default: "bg-slate-50 text-slate-700 ring-1 ring-slate-200",
};

const typeStyles = {
  Airtime: { chip: "bg-blue-50 text-blue-700 ring-1 ring-blue-200", icon: "📱" },
  Data: { chip: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200", icon: "📶" },
  Electricity: { chip: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", icon: "⚡" },
  Cable: { chip: "bg-purple-50 text-purple-700 ring-1 ring-purple-200", icon: "📺" },
  "Gift Card": { chip: "bg-pink-50 text-pink-700 ring-1 ring-pink-200", icon: "🎁" },
  Default: { chip: "bg-slate-50 text-slate-700 ring-1 ring-slate-200", icon: "💳" },
};

const StatusBadge = ({ status }) => {
  const cls = statusStyles[status] || statusStyles.Default;
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${cls}`}>
      {status}
    </span>
  );
};

const TypeChip = ({ type }) => {
  const { chip, icon } = typeStyles[type] || typeStyles.Default;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${chip}`}>
      <span className="text-sm leading-none">{icon}</span>
      {type}
    </span>
  );
};

const AmountCell = ({ amount }) => (
  <span className="font-semibold text-slate-900">{amount}</span>
);

const DateTimeCell = ({ date, time }) => (
  <div className="flex flex-col">
    <span className="text-slate-900">{date}</span>
    <span className="text-slate-500 text-xs">{time}</span>
  </div>
);

export default function TransactionsTable({ data = [] }) {
  return (
    <div className="w-full">
      {/* Desktop / tablet table */}
      <div className="hidden sm:block overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-slate-600">
              <th className="px-4 py-3 font-semibold">Transaction Type</th>
              <th className="px-4 py-3 font-semibold">User</th>
              <th className="px-4 py-3 font-semibold">Amount</th>
              <th className="px-4 py-3 font-semibold">Provider</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Date & Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-3">
                  <TypeChip type={row.type} />
                </td>
                <td className="px-4 py-3 text-slate-900">{row.user}</td>
                <td className="px-4 py-3"><AmountCell amount={row.amount} /></td>
                <td className="px-4 py-3 text-slate-700">{row.provider}</td>
                <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                <td className="px-4 py-3">
                  <DateTimeCell date={row.date} time={row.time} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {data.map((row) => (
          <div
            key={row.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <TypeChip type={row.type} />
              <StatusBadge status={row.status} />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div className="text-slate-500">User</div>
              <div className="text-slate-900 text-right">{row.user}</div>

              <div className="text-slate-500">Amount</div>
              <div className="text-right">
                <AmountCell amount={row.amount} />
              </div>

              <div className="text-slate-500">Provider</div>
              <div className="text-right text-slate-700">{row.provider}</div>

              <div className="text-slate-500">When</div>
              <div className="text-right">
                <DateTimeCell date={row.date} time={row.time} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
