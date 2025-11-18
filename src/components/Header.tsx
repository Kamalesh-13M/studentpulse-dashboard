import { Menu, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 glass-card border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="relative max-w-md w-full hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search subjects, activities..."
              className="pl-10 bg-background/50 border-white/10 focus:border-primary"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground hover:bg-primary/10"
          >
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              3
            </Badge>
          </Button>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">Alex Rivera</p>
              <p className="text-xs text-muted-foreground">Level 7</p>
            </div>
            <div className="w-10 h-10 rounded-full gradient-primary neon-glow flex items-center justify-center text-lg">
              🎓
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
