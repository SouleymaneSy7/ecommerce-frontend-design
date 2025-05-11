import * as React from "react";
import { TitlePropsType } from "@/types";

const Title: React.FC<TitlePropsType> = ({
  level,
  ariaLevel,
  children,
  ...delegatedProps
}) => {
  const Heading: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    ...delegatedProps
  }) => {
    return React.createElement(level, delegatedProps, children);
  };

  return (
    <Heading {...delegatedProps} role="heading" aria-level={ariaLevel}>
      {children}
    </Heading>
  );
};

export default Title;
