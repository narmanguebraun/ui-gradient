const DirectionButton: React.FC<{
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}> = ({ title, icon, selected, onClick }) => (
  <button
    title={title}
    onClick={onClick}
    className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border border-current text-current ${
      selected ? "text-rose-500" : "hover:text-rose-500"
    }`}
  >
    {icon}
  </button>
);

export default DirectionButton;
