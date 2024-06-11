import React from "react";

import { footerContainerStyles, footerTelegramStyles, footerTextStyles } from "./style.css";

function Footer() {
  return (
    <div className={footerContainerStyles}>
      <div className={footerTextStyles}>© 2024 АО «ГОРОДСКОЙ ПРОЕКТНЫЙ ИНСТИТУТ ЖИЛЫХ И ОБЩЕСТВЕННЫХ ЗДАНИЙ»</div>
      <a href="https://t.me/MintWater" target="_blank" rel="noreferrer" className={footerTelegramStyles}>
        Создано @MintWater
      </a>
    </div>
  );
}

export default React.memo(Footer);
