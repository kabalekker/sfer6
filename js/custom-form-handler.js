/**
 * Обработчик формы обратной связи для сайта Fin-Sfera
 * Версия: 1.0.0
 */
document.addEventListener('DOMContentLoaded', function () {
  // Находим кнопку отправки
  let submitBtn = document.querySelector('a[href="#sendform"]');

  if (submitBtn) {
    // Отменяем стандартное поведение Tilda
    submitBtn.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Собираем данные из формы
        let nameInput = document.querySelector('[name="name"]');
        let emailInput = document.querySelector('[name="email"]');
        let phoneInput = document.querySelector('[name="phone"]');
        let messageInput = document.querySelector('[name="Text"]');

        let name = nameInput ? nameInput.value.trim() : '';
        let email = emailInput ? emailInput.value.trim() : '';
        let phone = phoneInput ? phoneInput.value.trim() : '';
        let message = messageInput ? messageInput.value.trim() : '';

        // Валидация формы
        if (!validateForm(name, email, phone)) {
          return;
        }

        // Показываем индикатор загрузки
        showLoadingIndicator();

        // Отправляем данные формы
        sendFormData(name, email, phone, message);

        return false;
      },
      true
    );
  } else {
    console.error('Форма обратной связи: кнопка отправки не найдена');
  }

  /**
   * Валидация формы
   */
  function validateForm(name, email, phone) {
    // Проверка имени
    if (!name) {
      showCustomErrorMessage('Пожалуйста, укажите ваше имя');
      return false;
    }

    // Проверка email
    if (!email) {
      showCustomErrorMessage('Пожалуйста, укажите ваш email');
      return false;
    }

    // Простая проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showCustomErrorMessage('Пожалуйста, укажите корректный email');
      return false;
    }

    // Проверка телефона
    if (!phone) {
      showCustomErrorMessage('Пожалуйста, укажите ваш телефон');
      return false;
    }

    // Простая проверка формата телефона (минимум 10 цифр)
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      showCustomErrorMessage('Пожалуйста, укажите корректный номер телефона');
      return false;
    }

    return true;
  }

  /**
   * Отправка данных формы
   */
  function sendFormData(name, email, phone, message) {
    // Используем iframe для отправки формы
    const iframeId = 'mail-sender-iframe';
    let iframe = document.getElementById(iframeId);

    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = iframeId;
      iframe.name = iframeId;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    // Формируем URL для отправки
    const url = `direct-mail.php?name=${encodeURIComponent(name)}&email=${encodeURIComponent(
      email
    )}&phone=${encodeURIComponent(phone)}&message=${encodeURIComponent(message)}`;

    // Отправляем запрос через iframe
    iframe.src = url;

    // Показываем успешное сообщение через 1 секунду
    setTimeout(function () {
      hideLoadingIndicator();
      showCustomSuccessMessage(
        'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.'
      );

      // Очищаем форму
      clearForm();
    }, 1000);
  }

  /**
   * Очистка формы
   */
  function clearForm() {
    let nameInput = document.querySelector('[name="name"]');
    let emailInput = document.querySelector('[name="email"]');
    let phoneInput = document.querySelector('[name="phone"]');
    let messageInput = document.querySelector('[name="Text"]');

    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (messageInput) messageInput.value = '';
  }

  /**
   * Показ сообщения об успехе
   */
  function showCustomSuccessMessage(message) {
    // Удаляем предыдущее окно, если оно есть
    removeExistingPopup();

    // Создаем модальное окно
    const popupHTML = `
      <div id="custom-success-popup" class="custom-modal">
        <div class="custom-modal-content">
          <button id="close-success-popup" class="custom-modal-close">×</button>
          <h3 class="custom-modal-title success">Успешно!</h3>
          <p id="success-message-text" class="custom-modal-text">${message}</p>
          <button id="ok-success-button" class="custom-modal-button success">OK</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Добавляем обработчики для закрытия
    document.getElementById('close-success-popup').addEventListener('click', function () {
      removeExistingPopup();
    });

    document.getElementById('ok-success-button').addEventListener('click', function () {
      removeExistingPopup();
    });

    // Закрытие по клику вне окна
    document.getElementById('custom-success-popup').addEventListener('click', function (e) {
      if (e.target === this) {
        removeExistingPopup();
      }
    });

    // Закрытие по нажатию Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        removeExistingPopup();
      }
    });
  }

  /**
   * Показ сообщения об ошибке
   */
  function showCustomErrorMessage(message) {
    // Удаляем предыдущее окно, если оно есть
    removeExistingPopup();

    // Создаем модальное окно
    const popupHTML = `
      <div id="custom-error-popup" class="custom-modal">
        <div class="custom-modal-content">
          <button id="close-error-popup" class="custom-modal-close">×</button>
          <h3 class="custom-modal-title error">Ошибка!</h3>
          <p id="error-message-text" class="custom-modal-text">${message}</p>
          <button id="ok-error-button" class="custom-modal-button error">OK</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Добавляем обработчики для закрытия
    document.getElementById('close-error-popup').addEventListener('click', function () {
      removeExistingPopup();
    });

    document.getElementById('ok-error-button').addEventListener('click', function () {
      removeExistingPopup();
    });

    // Закрытие по клику вне окна
    document.getElementById('custom-error-popup').addEventListener('click', function (e) {
      if (e.target === this) {
        removeExistingPopup();
      }
    });

    // Закрытие по нажатию Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        removeExistingPopup();
      }
    });
  }

  /**
   * Показ индикатора загрузки
   */
  function showLoadingIndicator() {
    // Удаляем предыдущий индикатор, если он есть
    hideLoadingIndicator();

    const loaderHTML = `
      <div id="custom-loader" class="custom-loader">
        <div class="custom-loader-spinner"></div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', loaderHTML);
  }

  /**
   * Скрытие индикатора загрузки
   */
  function hideLoadingIndicator() {
    const loader = document.getElementById('custom-loader');
    if (loader) {
      loader.remove();
    }
  }

  /**
   * Удаление существующих попапов
   */
  function removeExistingPopup() {
    const successPopup = document.getElementById('custom-success-popup');
    if (successPopup) {
      successPopup.remove();
    }

    const errorPopup = document.getElementById('custom-error-popup');
    if (errorPopup) {
      errorPopup.remove();
    }
  }
});
