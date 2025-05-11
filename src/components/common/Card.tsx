import * as React from "react";

import { CardPropsType } from "@/types";

const Card: React.FC<CardPropsType> = ({
  children,
  classNames,
  ...delegatedProps
}) => {
  return (
    <article
      className={classNames}
      {...delegatedProps}
      aria-labelledby="card-title"
    >
      {children}
    </article>
  );
};

export default Card;
