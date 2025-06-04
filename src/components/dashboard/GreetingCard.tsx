interface GreetingCardProps {
  className?: string;
}

const GreetingCard = ({ className = "" }: GreetingCardProps) => {
  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-5 ${className}`}
    >
      <div className="space-y-4">
        <div className="text-white text-center font-inter font-medium text-sm leading-normal capitalize">
          hi, summer
        </div>
        <div className="text-[#004B60] font-inter font-bold text-2xl leading-[34px] capitalize">
          good morning!
        </div>
        <div className="text-white font-inter font-medium text-sm leading-normal tracking-wider">
          Hope you had a great night
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
