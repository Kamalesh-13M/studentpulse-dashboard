import { studentProfile } from "@/data/mockData";
import { User } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="glass-card rounded-2xl p-6 hover:neon-glow transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl gradient-primary neon-glow flex items-center justify-center text-3xl shrink-0">
          🎓
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold mb-1 truncate">{studentProfile.name}</h3>
          <p className="text-sm text-muted-foreground mb-2 truncate">
            {studentProfile.department}
          </p>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/30">
              {studentProfile.rollNumber}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Current Level</p>
            <p className="text-2xl font-bold text-primary">{studentProfile.level}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total XP</p>
            <p className="text-2xl font-bold text-secondary">{studentProfile.xp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
