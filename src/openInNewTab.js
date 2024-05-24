import React from 'react';
import ReactDOM from 'react-dom';
import APIDemo from './APIData/APIDemo';

const openInNewTab = () => {
  console.log("Opening new tab...");
  const newWindow = window.open('', '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.document.title = "External Component";
    newWindow.document.body.onload = function() {
      const container = newWindow.document.createElement('div');
      newWindow.document.body.appendChild(container);
      ReactDOM.render(<APIDemo />, container);
    };
  } else {
    console.error('Failed to open new window.');
  }
};

export default openInNewTab;
