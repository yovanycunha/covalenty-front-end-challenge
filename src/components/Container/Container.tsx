import { ReactNode } from "react";
import "./container.css";

interface IContainerProps {
  children: ReactNode;
}

export function Container({ children }: IContainerProps) {
  return (
    <div className="container" role="container">
      <main className="main">{children}</main>
    </div>
  );
}
