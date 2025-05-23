/**
 * Скрипт для исправления конфликтов с Tilda
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

  ready(function () {
    // Исправление конфликта с Tilda при закрытии попапа
    if (window.t1093__closeOnLink) {
      const originalCloseOnLink = window.t1093__closeOnLink;

      window.t1093__closeOnLink = function (e) {
        var popupLink = e && e.target ? e.target.closest('a[href*="#"]') : null;

        // Если это наша кнопка отправки формы, не закрываем попап
        if (popupLink && popupLink.getAttribute('href') === '#sendform') {
          console.log('Предотвращено закрытие попапа при клике на кнопку отправки');
          return;
        }

        // В остальных случаях используем оригинальную функцию
        originalCloseOnLink(e);
      };
    }

    // Исправление стилей для полей формы
    const formFields = document.querySelectorAll(
      'input[name="name"], input[name="email"], input[name="phone"], textarea[name="Text"]'
    );

    formFields.forEach(function (field) {
      // Добавляем класс для отслеживания состояния фокуса
      field.addEventListener('focus', function () {
        this.classList.add('field-focused');
      });

      field.addEventListener('blur', function () {
        this.classList.remove('field-focused');
      });
    });

    // Исправление для мобильных устройств
    function fixMobileIssues() {
      const isMobile = window.innerWidth <= 480;

      if (isMobile) {
        // Исправления для мобильных устройств
        const submitBtn = document.querySelector('a[href="#sendform"]');
        if (submitBtn) {
          // Увеличиваем область клика для мобильных устройств
          submitBtn.style.padding = '15px 20px';
        }
      }
    }

    // Вызываем функцию при загрузке и изменении размера окна
    fixMobileIssues();
    window.addEventListener('resize', fixMobileIssues);
  });
})();
