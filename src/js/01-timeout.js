import '../css/style.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

// console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Виклик ф-ції logger через ${time}ms`);
};

const timerId = setTimeout(logger, 2000, 2000);
console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;

if (shouldCancelTimer) {
  console.log('Cancel timer:', shouldCancelTimer);
  clearTimeout(timerId);
}
