import TimeDisplay from "./TimeDisplay";
import GreetingCard from "./GreetingCard";
import WeatherWidget from "./WeatherWidget";
import EmailWidget from "./EmailWidget";
import MessagesWidget from "./MessagesWidget";
import MusicPlayer from "./MusicPlayer";
import DailyRoutine from "./DailyRoutine";
import CalendarWidget from "./CalendarWidget";
import ToggleSwitch from "./ToggleSwitch";
import ChatInterface from "./ChatInterface";

interface DashboardProps {
  className?: string;
}

const Dashboard = ({ className = "" }: DashboardProps) => {
  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(117deg, #DCC3A5 0%, #004B60 118.87%)",
      }}
    >
      {/* Main container */}
      <div className="w-full min-h-screen p-6">
        {/* Header section */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <div className="w-19 h-14 flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00cdc5057e863a3ed5cb701e8a8ecb78c910866?placeholderIfAbsent=true"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation with back arrow and dashboard title */}
          <div className="flex items-center gap-3 flex-1 justify-start ml-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg
                width="17"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9C18.5523 9 19 8.55228 19 8C19 7.44772 18.5523 7 18 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM18 8V7L1 7V8V9L18 9V8Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-white font-inter font-semibold text-3xl leading-[42px] uppercase">
              dashboard
            </div>
          </div>

          {/* Toggle switch */}
          <ToggleSwitch className="flex-shrink-0" />

          {/* Time display */}
          <TimeDisplay className="flex-shrink-0 ml-6" />
        </div>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="xl:col-span-3 space-y-6">
            <GreetingCard />
            <WeatherWidget />
            <EmailWidget />
            <MessagesWidget />
          </div>

          {/* Center column */}
          <div className="xl:col-span-5 space-y-6">
            <ChatInterface />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MusicPlayer />
              <DailyRoutine />
            </div>
          </div>

          {/* Right column */}
          <div className="xl:col-span-4">
            <CalendarWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
