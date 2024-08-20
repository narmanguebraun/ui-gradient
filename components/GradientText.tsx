const GradientText: React.FC<{
  text: string;
  direction: string;
  color1: string;
  color2: string;
}> = ({ text, direction, color1, color2 }) => (
  <span
    className="bg-clip-text text-center text-4xl font-bold -tracking-widest text-transparent"
    style={{
      backgroundImage: `linear-gradient(${direction}, ${color1}, ${color2})`,
    }}
  >
    {text}
  </span>
);

export default GradientText;
