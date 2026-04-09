import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypewriterText = ({
  text,
  speed = 28,
  className
}: TypewriterTextProps) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    const interval = window.setInterval(() => {
      setVisibleCount((value) => {
        if (value >= text.length) {
          window.clearInterval(interval);
          return value;
        }
        return value + 1;
      });
    }, speed);

    return () => window.clearInterval(interval);
  }, [speed, text]);

  return (
    <span className={className}>
      {text.slice(0, visibleCount)}
      <span className="cursor-blink" aria-hidden="true">
        _
      </span>
    </span>
  );
};
