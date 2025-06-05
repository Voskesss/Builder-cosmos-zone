import { useNavigate } from "react-router-dom";
import TimeDisplay from "./dashboard/TimeDisplay";

interface ApplicationViewProps {
  className?: string;
}

const ApplicationView = ({ className = "" }: ApplicationViewProps) => {
  const navigate = useNavigate();

  const themeOptions = [
    {
      name: "Orange & Teal",
      gradient: "linear-gradient(90deg, #D59D60 0%, #1C5962 100%)",
    },
    {
      name: "Forest Green",
      gradient: "linear-gradient(90deg, #435F4F 0%, #718777 100%)",
    },
    {
      name: "Deep Blue",
      gradient: "linear-gradient(90deg, #06414D 0%, #1C5962 100%)",
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
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <div className="w-19 h-14 flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00cdc5057e863a3ed5cb701e8a8ecb78c910866?placeholderIfAbsent=true"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation with back arrow and application title */}
          <div className="flex items-center gap-3 flex-1 justify-start ml-6">
            <button
              onClick={() => navigate(-1)}
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
            <div className="text-white font-inter font-semibold text-3xl leading-[42px] uppercase">
              application
            </div>
          </div>

          {/* Time display */}
          <TimeDisplay className="flex-shrink-0" />
        </div>

        {/* Main preview section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="rounded-3xl border border-white/30 bg-white/20 backdrop-blur-sm p-3">
              {/* Dashboard preview image placeholder */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden">
                {/* Mini dashboard preview */}
                <div className="absolute inset-4 grid grid-cols-12 gap-2">
                  {/* Mini time display */}
                  <div className="col-span-12 flex justify-between items-start mb-2">
                    <div className="w-8 h-6 bg-white/20 rounded"></div>
                    <div className="text-right">
                      <div className="w-12 h-4 bg-white/30 rounded mb-1"></div>
                      <div className="w-16 h-2 bg-white/20 rounded"></div>
                    </div>
                  </div>

                  {/* Mini widgets grid */}
                  <div className="col-span-3 space-y-2">
                    <div className="h-12 bg-white/15 rounded-lg"></div>
                    <div className="h-16 bg-white/15 rounded-lg"></div>
                    <div className="h-8 bg-white/15 rounded-lg"></div>
                    <div className="h-20 bg-white/15 rounded-lg"></div>
                  </div>

                  <div className="col-span-6 space-y-2">
                    <div className="h-32 bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-white/30 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-white/15 rounded-lg"></div>
                      <div className="h-20 bg-white/15 rounded-lg"></div>
                    </div>
                  </div>

                  <div className="col-span-3">
                    <div className="h-full bg-white/15 rounded-lg"></div>
                  </div>
                </div>

                {/* Overlay to show it's a preview */}
                <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
              </div>

              <button
                onClick={() => navigate("/")}
                className="w-full bg-[#004B60] text-white font-inter font-semibold text-base uppercase rounded-full py-4 hover:bg-[#005a73] transition-colors"
              >
                go to dashboard
              </button>
            </div>
          </div>

          {/* Main Screen Preview */}
          <div className="relative">
            <div className="rounded-3xl border border-white/30 bg-white/20 backdrop-blur-sm p-3">
              {/* Main screen preview placeholder */}
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden">
                {/* Mini main screen preview */}
                <div className="absolute inset-4">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-8 h-6 bg-white/20 rounded"></div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="text-right">
                      <div className="w-12 h-4 bg-white/30 rounded mb-1"></div>
                      <div className="w-16 h-2 bg-white/20 rounded"></div>
                    </div>
                  </div>

                  {/* Main content area */}
                  <div className="space-y-2 flex-1">
                    <div className="h-32 bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 border-2 border-white/30 rounded-full"></div>
                    </div>
                    <div className="h-12 bg-white/15 rounded-lg"></div>
                  </div>
                </div>

                {/* Overlay to show it's a preview */}
                <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
              </div>

              <button
                onClick={() => navigate("/main")}
                className="w-full bg-[#004B60] text-white font-inter font-semibold text-base uppercase rounded-full py-4 hover:bg-[#005a73] transition-colors"
              >
                go to main screen
              </button>
            </div>

            {/* Small navigation arrow between previews */}
            <div className="absolute -left-8 top-6 lg:relative lg:left-0 lg:top-0 lg:hidden">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6.75C13.4142 6.75 13.75 6.41421 13.75 6C13.75 5.58579 13.4142 5.25 13 5.25V6.75ZM1.13634 5.46967C0.843444 5.76256 0.843444 6.23744 1.13634 6.53033L5.90931 11.3033C6.2022 11.5962 6.67707 11.5962 6.96997 11.3033C7.26286 11.0104 7.26286 10.5355 6.96997 10.2426L2.72733 6L6.96997 1.75736C7.26286 1.46447 7.26286 0.989593 6.96997 0.696699C6.67707 0.403806 6.2022 0.403806 5.90931 0.696699L1.13634 5.46967ZM13 6V5.25L1.66667 5.25V6V6.75L13 6.75V6Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Theme customization section */}
        <div className="mb-8">
          <h2 className="text-white font-inter font-semibold text-2xl uppercase mb-6">
            customize theme
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {themeOptions.map((theme, index) => (
              <button
                key={index}
                className="group rounded-3xl border border-white/30 bg-white/20 backdrop-blur-sm p-4 hover:bg-white/25 transition-colors"
                onClick={() => {
                  // Here you could implement theme switching logic
                  console.log(`Selected theme: ${theme.name}`);
                }}
              >
                <div
                  className="w-full h-48 rounded-2xl shadow-lg group-hover:scale-105 transition-transform"
                  style={{ background: theme.gradient }}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationView;
