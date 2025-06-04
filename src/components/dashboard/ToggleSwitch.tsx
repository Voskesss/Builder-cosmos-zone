interface ToggleSwitchProps {
  className?: string;
}

const ToggleSwitch = ({ className = "" }: ToggleSwitchProps) => {
  return (
    <div
      className={`rounded-full border border-white/30 bg-white/20 backdrop-blur-sm p-4 shadow-md ${className}`}
    >
      <div className="flex items-center gap-6">
        <div className="text-white text-center font-inter font-semibold text-sm leading-normal uppercase">
          private
        </div>

        {/* Toggle switch */}
        <div className="relative">
          <div className="w-12 h-7 bg-[#004B60] rounded-full flex items-center justify-end pr-1">
            <div className="w-5 h-5 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="text-white text-right font-inter font-semibold text-sm leading-normal uppercase">
          work
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
