export default function HeroButton({
  label = "Learn More",
  onClick,
  size = "sm", // sm | md | lg
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-3
                 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5
                 rounded-xl transition-all duration-300
                 hover:scale-105
                 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA] cursor-pointer"
    >
      <span
        className={`block w-full rounded-[11px] bg-gray-900
                    transition-all duration-300
                    group-hover:bg-gradient-to-r
                    group-hover:from-blue-500
                    group-hover:to-teal-400
                    ${sizeClasses[size]}`}
      >
        <span className="relative flex items-center justify-center gap-2 text-white font-medium">
          <span>{label}</span>
          <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
        </span>
      </span>
    </a>
  );
}
