type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton: React.FC<Props> = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="relative w-8 h-6 flex flex-col justify-between items-center group z-1000"
    aria-label="Toggle menu"
  >
    <span className={`h-[3.5px] w-full bg-secondary rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
    <span className={`h-[2.5px] w-full bg-secondary rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
    <span className={`h-[1.5px] w-full bg-secondary rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
  </button>
);

export default HamburgerButton;
