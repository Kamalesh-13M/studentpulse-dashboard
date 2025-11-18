import { attendanceData } from "@/data/mockData";
import { Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AttendanceCard = () => {
  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 85) return "text-secondary";
    if (percentage >= 75) return "text-accent";
    return "text-destructive";
  };

  const getAttendanceGlow = (percentage: number) => {
    if (percentage >= 85) return "success-glow";
    if (percentage >= 75) return "pulse-glow";
    return "";
  };

  return (
    <div className={`glass-card rounded-2xl p-6 hover:${getAttendanceGlow(attendanceData.overall)} transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Calendar className="h-5 w-5 text-secondary" />
          Attendance
        </h3>
        <div className={`text-3xl font-bold ${getAttendanceColor(attendanceData.overall)}`}>
          {attendanceData.overall}%
        </div>
      </div>

      <div className="space-y-3">
        {attendanceData.bySubject.slice(0, 3).map((subject) => (
          <div key={subject.subject}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-muted-foreground truncate">
                {subject.subject}
              </span>
              <span className={`text-sm font-semibold ${getAttendanceColor(subject.percentage)}`}>
                {subject.percentage}%
              </span>
            </div>
            <Progress value={subject.percentage} className="h-2" />
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-center text-muted-foreground">
          Target: 85% overall attendance
        </p>
      </div>
    </div>
  );
};

export default AttendanceCard;
