import type React from "react";

export const Stack: React.FC<{
  children: React.ReactNode;
  spacing: number;
}> = ({ children, spacing = 4 }) => {
  const space = `space-y-${spacing}`;
  return <div className={`flex ${space}`}>{children}</div>;
};
