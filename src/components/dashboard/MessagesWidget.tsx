interface MessagesWidgetProps {
  className?: string;
}

const MessagesWidget = ({ className = "" }: MessagesWidgetProps) => {
  const messageStats = [
    { value: "32", label: "Unread", color: "bg-[#718777]" },
    { value: "02", label: "Mentions", color: "bg-[#435F4F]" },
    { value: "12", label: "Today Messages", color: "bg-[#718777]" },
  ];

  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-4 ${className}`}
    >
      <div className="text-white font-inter font-bold text-base leading-5 capitalize mb-4">
        messages
      </div>

      <div className="flex justify-between items-end mb-4">
        {messageStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-[102px] h-[156px] rounded-full ${stat.color} flex items-center justify-center mb-4`}
            >
              <span className="text-white text-center font-inter font-bold text-3xl leading-normal capitalize">
                {stat.value}
              </span>
            </div>
            <div className="text-white text-center font-inter font-medium text-xs leading-normal capitalize opacity-90">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesWidget;
