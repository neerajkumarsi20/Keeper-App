import React from "react";

function Footer() {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <footer>
      <p>Copyrights {year}</p>
    </footer>
  );
}
export default Footer;
