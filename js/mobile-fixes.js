/**
 * Дополнительные исправления для мобильной версии формы
 * Версия: 1.0.0
 */
(function () {
  // Функция для проверки загрузки DOM
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Функция для определения мобильного устройства
  function isMobile() {
    return (
      window.innerWidth <= 480 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  }

  // Функция для исправления позиционирования кнопки на мобильных устройствах
  function fixMobileButtonPosition() {
    if (!isMobile()) return;

    // Находим кнопку отправки
    const submitButton = document.querySelector(
      '.t396__elem.tn-elem[data-elem-id="1746855544802"]'
    );
    if (!submitButton) return;

    // Исправляем позиционирование
    submitButton.style.position = 'relative';
    submitButton.style.left = '50%';
    submitButton.style.transform = 'translateX(-50%)';
    submitButton.style.width = '80%';
    submitButton.style.maxWidth = '280px';

    // Исправляем стили для ссылки внутри кнопки
    const link = submitButton.querySelector('a');
    if (link) {
      link.style.display = 'block';
      link.style.width = '100%';
      link.style.textAlign = 'center';
      link.style.padding = '12px 0';
      link.style.boxSizing = 'border-box';
    }
  }

  // Функция для исправления высоты полей ввода на iOS
  function fixIOSInputHeight() {
    if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

    const inputs = document.querySelectorAll(
      'input[name="name"], input[name="email"], input[name="phone"], textarea[name="Text"]'
    );
    inputs.forEach(input => {
      input.style.height = 'auto';
      input.style.minHeight = '44px';
      input.style.lineHeight = 'normal';
      input.style.paddingTop = '12px';
      input.style.paddingBottom = '12px';
    });
  }

  // Функция для исправления проблемы с масштабированием на iOS
  function fixIOSZoom() {
    if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

    // Добавляем мета-тег для предотвращения масштабирования
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';

    // Добавляем обработчики для предотвращения масштабирования при фокусе на поле ввода
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        viewportMeta.content =
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
      });
      input.addEventListener('blur', () => {
        viewportMeta.content =
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
      });
    });
  }

  // Применяем все исправления при загрузке страницы
  ready(function () {
    if (isMobile()) {
      fixMobileButtonPosition();
      fixIOSInputHeight();
      fixIOSZoom();

      // Повторно применяем исправления после полной загрузки страницы
      window.addEventListener('load', function () {
        setTimeout(fixMobileButtonPosition, 500);
      });

      // Применяем исправления при изменении размера окна
      window.addEventListener('resize', function () {
        setTimeout(fixMobileButtonPosition, 200);
      });
    }
  });
})();
document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 480) {
    // Телефон
    var phoneLabel = document.querySelector('.tn-elem[data-elem-id="1746511260198"] .tn-atom');
    var phoneValue = document.querySelector('.tn-elem[data-elem-id="1746511260203"] .tn-atom');
    if (phoneLabel && phoneValue) {
      phoneLabel.innerHTML = 'Телефон: ' + phoneValue.innerHTML;
    }

    // Email
    var emailLabel = document.querySelector('.tn-elem[data-elem-id="1746511260229"] .tn-atom');
    var emailValue = document.querySelector('.tn-elem[data-elem-id="1746511260234"] .tn-atom');
    if (emailLabel && emailValue) {
      emailLabel.innerHTML = 'Email: ' + emailValue.innerHTML;
    }

    // Адрес
    var addressLabel = document.querySelector('.tn-elem[data-elem-id="1746511260258"] .tn-atom');
    var addressValue = document.querySelector('.tn-elem[data-elem-id="1746511260280"] .tn-atom');
    if (addressLabel && addressValue) {
      addressLabel.innerHTML = 'Адрес: ' + addressValue.innerHTML;
    }
  }
});
