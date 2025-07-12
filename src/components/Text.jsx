import React from "react";

const textVariants = {
  mini: "text-md text-(--text-secondary)",
  default: "text-xl",
  muted: "text-xl text-(--text-secondary)",
  heading: "text-2xl",
  blast: "text-3xl",
};

export function Text({
  as = "span",
  variant = "default",
  className,
  children,
  ...props
}) {
  return React.createElement(
    as,
    {
      className: `${textVariants[variant]} ${className ? className : ""}`,
      ...props,
    },
    children
  );
}
