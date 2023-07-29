import { ReactNode } from "react";

export function Bold({ children }: { children: ReactNode }) {
  return <span className="font-semibold">{children}</span>;
}
