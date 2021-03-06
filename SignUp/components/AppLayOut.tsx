import { ReactNode } from "react";

interface AppLayOutProps {
  children: ReactNode;
}

const AppLayOut = ({ children }: AppLayOutProps) => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "500px",
        height: "500px",
        border: "1px solid red",
      }}
    >
      {children}
    </div>
  );
};
export default AppLayOut;
