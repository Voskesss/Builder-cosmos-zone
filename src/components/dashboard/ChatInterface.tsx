interface ChatInterfaceProps {
  className?: string;
}

const ChatInterface = ({ className = "" }: ChatInterfaceProps) => {
  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-4 ${className}`}
    >
      {/* Chat area - Glowing orb in center */}
      <div
        className="flex items-center justify-center mb-6 relative"
        style={{ height: "300px" }}
      >
        {/* Multiple glowing circles for the orb effect */}
        <div className="absolute">
          <div className="w-48 h-48 bg-white/6 rounded-full blur-sm mix-blend-hard-light"></div>
        </div>
        <div className="absolute">
          <div className="w-44 h-44 bg-white/6 rounded-full blur-sm mix-blend-hard-light"></div>
        </div>
        <div className="absolute">
          <div className="w-44 h-44 bg-white/6 rounded-full blur-sm mix-blend-hard-light"></div>
        </div>
        <div className="absolute">
          <div className="w-50 h-50 bg-white/16 rounded-full backdrop-blur-md"></div>
        </div>
        <div className="absolute">
          <div className="w-50 h-50 border-2 border-white rounded-full mix-blend-hard-light blur-sm"></div>
        </div>
        <div className="absolute">
          <div className="w-50 h-50 border-4 border-white rounded-full mix-blend-hard-light blur-sm"></div>
        </div>
        <div className="absolute">
          <div className="w-50 h-50 border-2 border-white/20 rounded-full mix-blend-hard-light shadow-inner"></div>
        </div>
        <div className="absolute">
          <div className="w-50 h-50 border border-white rounded-full blur-px"></div>
        </div>
        <div className="absolute">
          <div className="w-50 h-50 border border-white rounded-full blur-sm"></div>
        </div>
        <div className="absolute">
          <div className="w-6 h-3 bg-white rounded-full blur-md top-[-20px] right-10"></div>
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
