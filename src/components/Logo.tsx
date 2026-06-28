interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <span
      className={`font-sentient text-xl md:text-2xl tracking-tight text-foreground whitespace-nowrap ${className ?? ""}`}
    >
      Моё <i className="font-light">Портфолио</i>
    </span>
  );
};
