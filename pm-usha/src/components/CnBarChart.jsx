import React from "react";
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Apr", Expense: 2788, Income: 3908 },
  { name: "May", Expense: 3123, Income: 4200 },
  { name: "Jun", Expense: 2895, Income: 3850 },
  { name: "Jul", Expense: 2500, Income: 4000 },
  { name: "Aug", Expense: 3100, Income: 4100 },
  { name: "Sep", Expense: 2750, Income: 3900 }];

export default function TransactionChart() {
  return (
    <div className="h-[22rem] bg-green-50 p-4 rounded-md border border-green-300 ring-green-400 flex flex-col flex-1 ">
      <strong className="text-gray-700 font-medium">Transaction</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
