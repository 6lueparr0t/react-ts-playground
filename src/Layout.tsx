import { PropsWithChildren, useEffect } from "react";
import "@/Layout.scss";

const Layout : React.FC<PropsWithChildren> = (props) => {
  useEffect(() => {
  }, []);

  return (
    <>
      {props.children}
    </>
  );
}

export default Layout;
