import ProfileCard from "@/components/dashboard/ProfileCard";
import XPProgressCard from "@/components/dashboard/XPProgressCard";
import AttendanceCard from "@/components/dashboard/AttendanceCard";
import MarksOverviewCard from "@/components/dashboard/MarksOverviewCard";
import ActivitiesCard from "@/components/dashboard/ActivitiesCard";
import EventsCard from "@/components/dashboard/EventsCard";
import NotificationsCard from "@/components/dashboard/NotificationsCard";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome Back, Alex! 👋
        </h1>
        <p className="text-muted-foreground">Here's your academic pulse for today</p>
      </div>

      {/* Top Row - Profile, XP, Attendance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />
        <XPProgressCard />
        <AttendanceCard />
      </div>

      {/* Middle Row - Marks and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MarksOverviewCard />
        <ActivitiesCard />
      </div>

      {/* Bottom Row - Events and Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EventsCard />
        <NotificationsCard />
      </div>
    </div>
  );
};

export default Dashboard;
