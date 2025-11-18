import { studentProfile } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";
import { Zap } from "lucide-react";

const XPProgressCard = () => {
  const progress = (studentProfile.xp / studentProfile.nextLevelXP) * 100;
  const xpNeeded = studentProfile.nextLevelXP - studentProfile.xp;

  return (
    <div className="glass-card rounded-2xl p-6 hover:pulse-glow transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          XP Progress
        </h3>
        <div className="px-3 py-1 rounded-full gradient-primary text-xs font-bold">
          Level {studentProfile.level}
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Progress value={progress} className="h-3" />
          <div 
            className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Current XP</p>
            <p className="text-2xl font-bold text-accent">{studentProfile.xp}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Next Level</p>
            <p className="text-2xl font-bold text-primary">{studentProfile.nextLevelXP}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-center">
            <span className="text-muted-foreground">Only </span>
            <span className="font-bold text-accent">{xpNeeded} XP</span>
            <span className="text-muted-foreground"> to Level {studentProfile.level + 1}! 🚀</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default XPProgressCard;
