interface WeatherWidgetProps {
  className?: string;
}

const WeatherWidget = ({ className = "" }: WeatherWidgetProps) => {
  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-5 relative ${className}`}
    >
      <div className="text-white text-center font-inter font-medium text-base leading-normal capitalize mb-6">
        New York, NY
      </div>

      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="text-[#004B60] font-inter font-bold text-5xl leading-[42px] uppercase">
            72°
          </div>
          <div className="text-white font-inter font-medium text-[15px] leading-normal capitalize">
            mostly sunny
          </div>
        </div>

        {/* Weather icon - simplified cloud and sun */}
        <div className="relative">
          <div className="w-24 h-18 relative">
            {/* Sun */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            {/* Cloud */}
            <div className="absolute bottom-0 left-0 w-20 h-12 bg-white/60 rounded-full"></div>
            <div className="absolute bottom-2 left-4 w-16 h-10 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
