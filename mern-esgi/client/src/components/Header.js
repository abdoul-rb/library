import React from "react";
import Button from "./lib/Button";

function Header({ theme, setTheme }) {
  return (
    <nav>
      Website
      <Button
        theme={theme}
        title="Contact"
        role="navigation"
        onClick={() => alert("contact")}
      />
      <Button
        theme={theme}
        title="Toggle Theme"
        role="theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </nav>
  );
}

export default Header;
