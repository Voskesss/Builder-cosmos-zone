interface ChatInterfaceProps {
  className?: string;
}

const ChatInterface = ({ className = "" }: ChatInterfaceProps) => {
  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-4 h-[434px] flex flex-col ${className}`}
    >
      {/* Chat area - Glowing orb in center */}
      <div className="flex-1 flex items-center justify-center relative mb-6">
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
        <div className="text-white font-inter font-medium text-lg leading-normal uppercase opacity-90">
          Type anything…
        </div>
      </div>
    </div>
  );
};
export default ChatInterface;
