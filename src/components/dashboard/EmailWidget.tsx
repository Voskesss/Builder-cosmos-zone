interface EmailWidgetProps {
  className?: string;
}

const EmailWidget = ({ className = "" }: EmailWidgetProps) => {
  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-4 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-18 h-18 bg-white/30 rounded-2xl flex items-center justify-center">
          {/* Email icon */}
          <svg
            width="29"
            height="22"
            viewBox="0 0 29 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M2 2L14.5 13L27 2M2 2V20H27V2H2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1 space-y-2">
          <div className="text-white font-inter font-semibold text-[15px] leading-5">
            You have received 3 emails today
          </div>
          <div className="text-white font-inter font-medium text-xs leading-normal opacity-90">
            Last Email : 5 min ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailWidget;
