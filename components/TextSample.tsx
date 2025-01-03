type TextSampleProps = {
  text: string;
  direction: string;
  color1: string;
  color2: string;
};

export default function TextSample({
  text,
  direction,
  color1,
  color2,
}: TextSampleProps) {
  return (
    <span
      className="bg-clip-text text-center text-4xl font-bold -tracking-widest text-transparent"
      style={{
        backgroundImage: `linear-gradient(${direction}, ${color1}, ${color2})`,
      }}
    >
      {text}
    </span>
  );
}
