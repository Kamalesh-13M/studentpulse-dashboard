import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, Trophy, TrendingUp, Settings, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "Academics", path: "/academics" },
  { icon: Trophy, label: "Extracurricular", path: "/extracurricular" },
  { icon: TrendingUp, label: "Insights", path: "/insights" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen z-50 transition-all duration-300",
          "glass-card border-r border-white/10",
          isOpen ? "w-64 translate-x-0" : "w-0 lg:w-20 -translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center neon-glow">
                <span className="text-2xl">⚡</span>
              </div>
              {isOpen && (
                <div className="flex flex-col">
                  <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    StudentPulse
                  </span>
                  <span className="text-xs text-muted-foreground">Track Your Journey</span>
                </div>
              )}
            </div>
            
            {isOpen && (
              <button 
                onClick={() => setIsOpen(false)}
                className="lg:hidden text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                    "hover:bg-primary/10 hover:neon-glow",
                    isActive && "bg-primary/20 text-primary neon-glow",
                    !isActive && "text-muted-foreground hover:text-foreground"
                  )
                }
                onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {isOpen && <span className="font-medium">{item.label}</span>}
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          {isOpen && (
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-muted-foreground text-center">
                Feel Your Growth 🚀
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
