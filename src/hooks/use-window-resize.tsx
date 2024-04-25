import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export type TDimensions = {
  height: number;
  width: number;
};

export function useWindowResize() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = useDebouncedCallback((value) => {
    setDimensions(value);
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
}
