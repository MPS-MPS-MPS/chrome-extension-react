import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        Your app injected to DOM correctly!
      </div>
    );
  }
}

chrome.runtime.onMessage.addListener((request, sender, response) => {
  if (request.injectApp) {
    injectApp();
    response({ startedExtension: true });
  }
});

function injectApp() {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'chrome-extension-react-app');
  document.body.appendChild(newDiv);
  ReactDOM.render(<App />, newDiv); 
}