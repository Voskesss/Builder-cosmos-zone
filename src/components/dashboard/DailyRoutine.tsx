interface RoutineItem {
  time: string;
  task: string;
  completed: boolean;
  active?: boolean;
}

interface DailyRoutineProps {
  className?: string;
}

const DailyRoutine = ({ className = "" }: DailyRoutineProps) => {
  const routineItems: RoutineItem[] = [
    { time: "7:00am", task: "Wake up", completed: true },
    { time: "9:00am", task: "Start work", completed: false, active: true },
    { time: "06:00 pm", task: "Wrap up", completed: false },
    { time: "08:00 pm", task: "go to gym", completed: false },
  ];

  return (
    <div
      className={`rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-4 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-white font-inter font-bold text-base leading-normal capitalize">
          Daily Routine
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-white/25 border border-white/30 rounded-full flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.91359 11.9662L13.5035 3.33735C13.9746 2.86635 13.9747 2.10387 13.5035 1.63282L12.3672 0.496406C11.8973 0.0264772 11.1326 0.0264772 10.662 0.497075C8.08529 3.08543 4.64217 6.54416 2.06533 9.13266C2.03528 9.16279 2.003 9.20803 1.98329 9.25212C1.96453 9.29407 0.186392 13.271 0.176749 13.2931C0.0596419 13.5606 0.258553 13.8557 0.544892 13.8557C0.544972 13.8557 0.545053 13.8557 0.54516 13.8557H10.2407C10.4626 13.8557 10.6425 13.6758 10.6425 13.4539C10.6425 13.232 10.4626 13.0522 10.2407 13.0522H2.48442L4.78237 12.0575C4.83149 12.0362 4.87794 12.0031 4.91359 11.9662ZM11.2308 1.06461C11.3875 0.907942 11.6423 0.907968 11.799 1.06461L12.9354 2.20099C13.09 2.35558 13.095 2.6095 12.9347 2.76982L12.085 3.62334L10.3805 1.91881L11.2308 1.06461ZM9.81358 2.48825L11.5181 4.19278L10.3843 5.33174L8.67977 3.6272L9.81358 2.48825ZM1.33314 12.6749L2.47863 10.1129L3.9207 11.5549L1.33314 12.6749ZM2.9176 9.41546L8.1129 4.19666L9.81746 5.9012L4.62216 11.12L2.9176 9.41546Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="w-8 h-8 bg-[#004B60] rounded-full flex items-center justify-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.73588 10C4.18359 10 3.73588 9.55229 3.73588 9V1C3.73588 0.447716 4.18359 0 4.73588 0H5.26412C5.81641 0 6.26412 0.447715 6.26412 1V9C6.26412 9.55228 5.81641 10 5.26412 10H4.73588ZM1 6.26412C0.447716 6.26412 0 5.81641 0 5.26412V4.73588C0 4.18359 0.447715 3.73588 1 3.73588H9C9.55228 3.73588 10 4.18359 10 4.73588V5.26413C10 5.81641 9.55229 6.26412 9 6.26412H1Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#AABAB8]"></div>

        <div className="space-y-6">
          {routineItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 relative">
              {/* Checkpoint */}
              <div className="relative z-10">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                  {item.completed ? (
                    <div className="w-7 h-7 bg-[#004B60] rounded-full flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.42871 9.9996L8.6612 13.2321L15.1255 6.76709"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : item.active ? (
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.42871 9.9996L8.6612 13.2321L15.1255 6.76709"
                          stroke="#C3B59D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 bg-[#C5D0CF] rounded-full"></div>
                  )}
                </div>
              </div>

              {/* Task text */}
              <div className="text-white font-inter font-medium text-sm leading-normal tracking-wider">
                {item.time} – {item.task}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyRoutine;
