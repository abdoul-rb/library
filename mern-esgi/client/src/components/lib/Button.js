import React from "react";

function Button({
  variant = "default",
  title,
  size = 20,
  theme,
  ...restProps
}) {
  const style = { textTransform: "uppercase" };

  if (["rounded", "icon"].includes(variant)) {
    style.borderRadius = "50%";
  }

  if (variant === "icon") {
    style.width = size;
    style.height = style.width;
    style.maxHeight = style.width;
    style.maxWith = style.width;
    style.minHeight = style.width;
    style.minWith = style.width;
  }

  style.color = theme === "dark" ? "white" : "black";
  style.backgroundColor = theme !== "dark" ? "white" : "black";

  return (
    <button style={style} {...restProps}>
      {title}
    </button>
  );
}

export default Button;
