interface CalendarDay {
  day: number;
  isActive?: boolean;
  isToday?: boolean;
  isInactive?: boolean;
}

interface CalendarWidgetProps {
  className?: string;
}

const CalendarWidget = ({ className = "" }: CalendarWidgetProps) => {
  const weekDays = ["S", "S", "M", "T", "W", "T", "F"];

  const calendarDays: CalendarDay[] = [
    { day: 1, isActive: true },
    { day: 2, isActive: true },
    { day: 3, isInactive: true },
    { day: 4, isInactive: true },
    { day: 5, isActive: true },
    { day: 6, isActive: true },
    { day: 7, isActive: true },
    { day: 8, isActive: true },
    { day: 9, isActive: true },
    { day: 10, isInactive: true },
    { day: 11, isInactive: true },
    { day: 12, isActive: true },
    { day: 13, isActive: true },
    { day: 14, isToday: true },
    { day: 15, isActive: true },
    { day: 16, isActive: true },
    { day: 17, isInactive: true },
    { day: 18, isInactive: true },
    { day: 19, isActive: true },
    { day: 20, isActive: true },
    { day: 21, isActive: true },
    { day: 22, isActive: true },
    { day: 23, isActive: true },
    { day: 24, isInactive: true },
    { day: 25, isInactive: true },
    { day: 26, isActive: true },
    { day: 27, isActive: true },
    { day: 28, isActive: true },
    { day: 29, isActive: true },
    { day: 30, isActive: true },
    { day: 31, isInactive: true },
  ];

  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-4 ${className}`}
    >
      <div className="text-white text-center font-inter font-bold text-xl leading-[34px] capitalize mb-4">
        calendar
      </div>

      {/* Week days header */}
      <div className="grid grid-cols-7 gap-2 mb-4 px-3">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="text-white text-center font-inter font-semibold text-[15px] leading-normal"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {calendarDays.map((day, index) => (
          <div key={index} className="relative">
            {day.isToday ? (
              <div className="w-12 h-12 bg-[#004B60] rounded-full flex items-center justify-center">
                <span className="text-white text-center font-bold text-[15px] leading-normal">
                  {day.day}
                </span>
              </div>
            ) : day.isActive ? (
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <span className="text-white text-center font-bold text-[15px] leading-normal">
                  {day.day}
                </span>
              </div>
            ) : (
              <div className="w-12 h-12 flex items-center justify-center">
                <span className="text-white text-center font-bold text-[15px] leading-normal opacity-40">
                  {day.day}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/50 mb-4"></div>

      {/* Today tasks section */}
      <div className="text-white font-inter font-bold text-base leading-normal capitalize mb-4">
        today tasks
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((task, index) => (
          <div key={index} className="flex gap-4">
            <div className="text-white font-inter font-normal text-xs leading-normal tracking-wide">
              07:00 pm
            </div>
            <div className="flex-1">
              <div className="bg-white/20 rounded-xl p-3 border-l-4 border-[#004B60]">
                <div className="text-white font-inter font-semibold text-sm leading-6 tracking-wide">
                  UI/UD design meeting with mira
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
