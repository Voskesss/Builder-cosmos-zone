interface TimeDisplayProps {
  className?: string;
}

const TimeDisplay = ({ className = "" }: TimeDisplayProps) => {
  // In a real app, you'd use real time data
  const time = "8:45";
  const date = "friday / april 14";

  return (
    <div className={`flex flex-col items-end ${className}`}>
      <div className="text-white text-center font-inter font-bold text-3xl leading-normal">
        {time}
      </div>
      <div className="text-white text-center font-inter font-medium text-sm leading-normal uppercase">
        {date}
      </div>
    </div>
  );
};

export default TimeDisplay;
