// Footer.js
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils'; // Adjust the path if necessary

const Footer = () => {
  return (
    <div className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy()}
    </div>
  );
}

export default Footer;
