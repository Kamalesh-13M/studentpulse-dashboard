import { notifications } from "@/data/mockData";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NotificationsCard = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      default: return "secondary";
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 hover:pulse-glow transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Notifications
        </h3>
        <Badge variant="secondary" className="text-xs">
          {notifications.length} new
        </Badge>
      </div>

      <div className="space-y-3">
        {notifications.map((notif, index) => (
          <div 
            key={index}
            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="font-medium text-sm">{notif.title}</h4>
              <Badge variant={getPriorityColor(notif.priority)} className="text-xs shrink-0">
                {notif.category}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{notif.description}</p>
            <p className="text-xs text-muted-foreground opacity-70">{notif.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsCard;
