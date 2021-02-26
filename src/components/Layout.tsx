import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <section>
      <p className="hoge1">
        <img src="./images/border.png" alt="a" />
      </p>
      {children}
      <p className="hoge2">
        <img src="./images/border.png" alt="a" />
      </p>
    </section>
  );
};
