import Index from './components/Index';

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(<Index />, reactNode);
  }
};

$(documentReady);
