"use client";
import { skills } from "@/config/seeds/skills";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample Colors – feel free to replace or extend
const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#00c49f",
  "#ff6f91",
  "#845ec2",
  "#2c73d2",
  "#0081cf",
  "#ffc75f",
  "#f9f871",
];

const excludedCategories = ["languages"]; // you can add more here

const skillCounts = Object.entries(skills)
  .filter(([key]) => !excludedCategories.includes(key))
  .map(([category, skillsArray]) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    value: skillsArray.length,
  }));

export default function SkillsPieChart() {
  return (
    <div className="w-full h-96 p-4" tabIndex={-1}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={skillCounts}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {skillCounts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
