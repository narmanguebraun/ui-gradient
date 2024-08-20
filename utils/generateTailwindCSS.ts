const generateTailwindCSS = (
  direction: string,
  color1: string,
  color2: string,
) => {
  const directionClassMap: Record<string, string> = {
    "to top": "bg-gradient-to-t",
    "to right top": "bg-gradient-to-tr",
    "to right": "bg-gradient-to-r",
    "to right bottom": "bg-gradient-to-br",
    "to bottom": "bg-gradient-to-b",
    "to left bottom": "bg-gradient-to-bl",
    "to left": "bg-gradient-to-l",
    "to left top": "bg-gradient-to-tl",
  };

  const directionClass = directionClassMap[direction] || "bg-gradient-to-r";
  return `${directionClass} from-[${color1}] to-[${color2}] bg-clip-text text-transparent`;
};

export default generateTailwindCSS;
