import '../css/style.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const refs = {
  notification: document.querySelector('.js-alert'),
  showNotificationButton: document.querySelector('button[data-action="show"]'),
};

refs.notification.addEventListener('click', onNotificationClick);
refs.showNotificationButton.addEventListener(
  'click',
  onShowNotificationButtonClick
);

showNotification();

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();
  console.log(
    `Видаляемо setTimeout з id: ${timeoutId}, який автоматично закриває оповіщення після ${NOTIFICATION_DELAY}ms`
  );
  clearTimeout(timeoutId);
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('Закрываем алерт автоматически чтобы не висел');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}

function onShowNotificationButtonClick() {
  showNotification();
}
