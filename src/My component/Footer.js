import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "realative",
    top: "100vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyright@2021 pushkar kumar</p>
    </footer>
  );
};
