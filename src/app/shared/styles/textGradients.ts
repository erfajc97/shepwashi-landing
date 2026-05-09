import type { CSSProperties } from "react";

const gradientBase: CSSProperties = {
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

export const gradientTextVertical: CSSProperties = {
  ...gradientBase,
  backgroundImage: "linear-gradient(180deg, #43C3FF 0%, #FFFFFF 100%)",
};

export const gradientTextHorizontal: CSSProperties = {
  ...gradientBase,
  backgroundImage: "linear-gradient(90deg, #43C3FF 0%, #FFFFFF 100%)",
};
