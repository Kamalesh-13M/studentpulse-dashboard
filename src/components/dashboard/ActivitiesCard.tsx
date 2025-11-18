import { activities, badges } from "@/data/mockData";
import { Trophy } from "lucide-react";

const ActivitiesCard = () => {
  const earnedBadges = badges.filter(b => b.earned);

  return (
    <div className="glass-card rounded-2xl p-6 hover:success-glow transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5 text-secondary" />
          Achievements
        </h3>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {earnedBadges.slice(0, 3).map((badge) => (
            <div 
              key={badge.name}
              className="flex flex-col items-center p-3 rounded-xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all"
            >
              <span className="text-2xl mb-1">{badge.icon}</span>
              <span className="text-xs text-center text-muted-foreground">{badge.name}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 space-y-2">
          {activities.slice(0, 2).map((activity) => (
            <div key={activity.title} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all">
              <span className="text-xl">{activity.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
