import { marksData } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BookOpen } from "lucide-react";

const MarksOverviewCard = () => {
  const chartData = marksData.map(subject => ({
    name: subject.subject.split(' ')[0], // Shortened name
    marks: subject.marks,
    grade: subject.grade
  }));

  return (
    <div className="glass-card rounded-2xl p-6 hover:neon-glow transition-all duration-300 lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Academic Performance
        </h3>
        <div className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium border border-secondary/30">
          Average: {(marksData.reduce((acc, m) => acc + m.marks, 0) / marksData.length).toFixed(1)}%
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            stroke="rgba(255,255,255,0.1)"
          />
          <YAxis 
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            stroke="rgba(255,255,255,0.1)"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.5rem',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Bar 
            dataKey="marks" 
            fill="url(#colorGradient)" 
            radius={[8, 8, 0, 0]}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksOverviewCard;
