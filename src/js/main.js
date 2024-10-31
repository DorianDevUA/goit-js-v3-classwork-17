import '../css/style.css';

console.log('Everything is fine!\nJavaScript successfully connected!');

const refs = {
  rootContainer: document.querySelector('#root'),
};

refs.rootContainer.innerHTML = `
  <div class="container">
    <h1>Модуль 10. Асинхронний JavaScript та проміси</h1>
    <h2>Асинхронність: таймери</h2>
  </div>
`;
