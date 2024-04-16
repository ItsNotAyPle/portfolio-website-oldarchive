import { FC } from "react";

interface layoutProps {
  classname?:string;
}

const Layout:FC<layoutProps> = (props) => {
  return (
    <div className={props.classname}>
      {props.children}
    </div>
  );
}

export default Layout;
