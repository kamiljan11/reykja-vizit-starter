import { useRef, useState, useEffect, ReactNode, Children } from "react";

interface MobileCarouselProps {
  children: ReactNode;
  className?: string;
}

const MobileCarousel = ({ children, className = "" }: MobileCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = Children.count(children);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.offsetWidth * 0.82;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, childCount - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [childCount]);

  return (
    <div className={className}>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Children.map(children, (child, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start"
            style={{ width: "82%" }}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Dots indicator */}
      {childCount > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: childCount }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-accent w-6"
                  : "bg-muted-foreground/30"
              }`}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const itemWidth = el.offsetWidth * 0.82 + 16;
                el.scrollTo({ left: itemWidth * i, behavior: "smooth" });
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileCarousel;
