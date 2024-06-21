import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "./Theme";

const Meat = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1> Dark -Light Mode Switcher</h1>
      <p>
        Escaping tutorial hell requires a shift from passive learning to active
        practice. Setting clear goals, embracing imperfections, and balancing
        tutorial consumption with hands-on projects are key strategies to break
        free from this cycle and build confidence and competence in your skills.
      </p>
      <button
        style={{
          backgroundColor: "#429fa9",
          color: "#fff",
          padding: "12px 155px",
          border: `${currentTheme.border}`,
          fontSize: "15px",
        }}
      >
        Generate button
      </button>
    </div>
  );
};

export default Meat;
