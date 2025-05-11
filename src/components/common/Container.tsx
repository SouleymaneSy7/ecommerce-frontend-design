import * as React from "react";
import { ContainerPropsTypes } from "@/types";

function Container<C extends React.ElementType>({
  as,
  className,
  children,
  ...delegatedProps
}: ContainerPropsTypes<C>) {
  const Component = as || "div";
  
  return (
    <Component {...delegatedProps} className={`container | ${className}`}>
      {children}
    </Component>
  );
}

export default Container;
