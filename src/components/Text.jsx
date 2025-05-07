import React from "react";

const textVarariants = {
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
      className: `${textVarariants[variant]} ${className ? className : ""}`,
      ...props,
    },
    children
  );
}
