import { useNavigate } from "react-router-dom";
import TimeDisplay from "./dashboard/TimeDisplay";

interface MainScreenProps {
  className?: string;
}

const MainScreen = ({ className = "" }: MainScreenProps) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Apps",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "Time",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Tasks",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1V23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17 5H9.5C8.11929 5 7 6.11929 7 7.5C7 8.88071 8.11929 10 9.5 10H14.5C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15H7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "Finance",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      label: "Profile",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(117deg, #DCC3A5 0%, #004B60 118.87%)",
      }}
    >
      <div className="w-full min-h-screen p-6">
        {/* Header section */}
        <div className="flex items-center justify-between mb-12">
          {/* Logo */}
          <div className="w-19 h-14 flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00cdc5057e863a3ed5cb701e8a8ecb78c910866?placeholderIfAbsent=true"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation with back arrow */}
          <div className="flex items-center gap-3 flex-1 justify-start ml-6">
            <button
              onClick={() => navigate("/application")}
              className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
            >
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
            </button>
          </div>

          {/* Menu items */}
          <div className="flex items-center gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors text-white"
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>

          {/* Time display */}
          <TimeDisplay className="flex-shrink-0 ml-6" />
        </div>

        {/* Main content area */}
        <div className="flex items-center justify-center flex-1">
          <div className="rounded-3xl border border-white/30 bg-white/20 backdrop-blur-sm p-8 max-w-2xl w-full">
            {/* Glowing orb in center */}
            <div
              className="flex items-center justify-center mb-8 relative"
              style={{ height: "300px" }}
            >
              {/* Multiple glowing circles for the orb effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Background glowing circles */}
                  <div className="absolute w-48 h-48 bg-white/6 rounded-full blur-lg mix-blend-hard-light transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                  <div className="absolute w-44 h-44 bg-white/6 rounded-full blur-md mix-blend-hard-light transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                  <div className="absolute w-44 h-44 bg-white/6 rounded-full blur-md mix-blend-hard-light transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>

                  {/* Main orb */}
                  <div className="w-50 h-50 bg-white/16 rounded-full backdrop-blur-md"></div>

                  {/* Orb borders */}
                  <div className="absolute inset-0 w-50 h-50 border-2 border-white rounded-full mix-blend-hard-light blur-sm"></div>
                  <div className="absolute inset-0 w-50 h-50 border-4 border-white rounded-full mix-blend-hard-light blur-sm"></div>
                  <div className="absolute inset-0 w-50 h-50 border-2 border-white/20 rounded-full mix-blend-hard-light shadow-inner"></div>
                  <div className="absolute inset-0 w-50 h-50 border border-white rounded-full blur-px"></div>
                  <div className="absolute inset-0 w-50 h-50 border border-white rounded-full blur-sm"></div>

                  {/* Small highlight */}
                  <div className="absolute w-6 h-3 bg-white rounded-full blur-md -top-5 right-10"></div>
                </div>
              </div>
            </div>

            {/* Input area */}
            <div className="rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-6">
              <input
                type="text"
                placeholder="Type anything…"
                className="w-full bg-transparent text-white font-inter font-medium text-lg leading-normal uppercase placeholder-white/90 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
