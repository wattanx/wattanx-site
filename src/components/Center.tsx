import type React from "react";

export const Center: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="flex items-center justify-center">{children}</div>;
