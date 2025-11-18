import { upcomingEvents } from "@/data/mockData";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EventsCard = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      default: return "secondary";
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 hover:neon-glow transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-accent" />
          Upcoming Events
        </h3>
      </div>

      <div className="space-y-3">
        {upcomingEvents.map((event, index) => (
          <div 
            key={index}
            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-medium text-sm">{event.title}</h4>
              <Badge variant={getPriorityColor(event.priority)} className="text-xs shrink-0">
                {event.category}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              📅 {new Date(event.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCard;
