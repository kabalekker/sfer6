(function () {
  window.nlm001blockId1011363471 = '1011363471';
  window.nlm001blockId1011363471bf204n = '1017188201';
  window.nlm001 = true;
  if (typeof window.nlm001form1017188201 == 'undefined') {
    window.nlm001form1017188201 = [];
    window.nlm001form1017188201[0] = 'add001mod';
  } else {
    window.nlm001form1017188201.push('add001mod');
  }
  function t_ready(e) {
    'loading' != document.readyState
      ? e()
      : document.addEventListener
      ? document.addEventListener('DOMContentLoaded', e)
      : document.attachEvent('onreadystatechange', function () {
          'loading' != document.readyState && e();
        });
  }
  t_ready(function () {
    let intForClosePopup = setInterval(function () {
      if (window.t1093__closeOnLink) {
        clearInterval(intForClosePopup);
        /* Перезаписываем функцию тильды закрытия попапа на кнопку отправки, чтоб попап не закрывался, если в нем есть 001 мод */ t1093__closeOnLink =
          function (e) {
            var openPopupList = t1093__getPopupObjValue('openPopUpList');
            if (!openPopupList.length) return;
            var popupLink = e.target.closest('a[href*="#"]');
            if (!popupLink) return;
            let t396 = e.target.closest('[data-record-type="396"]');
            if (t396) {
              let t396Id = t396.getAttribute('id').replace('rec', '');
              let nlmBlock = 'nlm001blockId' + t396Id;
              if (window[nlmBlock]) {
                return;
              }
            }
            var exceptionSelectors = [
              '.t978__tm-link',
              '.t966__tm-link',
              '.t794__tm-link',
              'a[href="#closepopup"]',
              'a[href="#closeallpopup"]',
            ];
            var isLinkHasSubmenu = exceptionSelectors.some(function (selector) {
              return popupLink.closest(selector);
            });
            if (!isLinkHasSubmenu && window.t1093__closePopup) t1093__closePopup(!0, -1, !0);
          };
      }
    }, 500);
    setTimeout(function () {
      clearInterval(intForClosePopup);
      if (!window.t1093__closeOnLink) {
        var t1093__closeOnLink = function (e) {
          var openPopupList = t1093__getPopupObjValue('openPopUpList');
          if (!openPopupList.length) return;
          var popupLink = e.target.closest('a[href*="#"]');
          if (!popupLink) return;
          let t396 = e.target.closest('[data-record-type="396"]');
          if (t396) {
            let t396Id = t396.getAttribute('id').replace('rec', '');
            let nlmBlock = 'nlm001blockId' + t396Id;
            if (window[nlmBlock]) {
              return;
            }
          }
          var exceptionSelectors = [
            '.t978__tm-link',
            '.t966__tm-link',
            '.t794__tm-link',
            'a[href="#closepopup"]',
            'a[href="#closeallpopup"]',
          ];
          var isLinkHasSubmenu = exceptionSelectors.some(function (selector) {
            return popupLink.closest(selector);
          });
          if (!isLinkHasSubmenu && window.t1093__closePopup) t1093__closePopup(!0, -1, !0);
        };
      }
    }, 5000);
    let redid1 = '#rec1011363471';
    let zeroBlock = document.querySelector(redid1);
    let sI = setInterval(function () {
      if (zeroBlock) {
        clearInterval(sI);
        var redid2 = '#rec1017188201';
        var hurl = '#sendform';
        let eventDispatched = false;
        let clickEvent = function (el) {
          if (!eventDispatched) {
            eventDispatched = true;
            el.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
          } else {
            eventDispatched = false;
          }
        };
        let inputsBf204nList = document.querySelectorAll(
          redid2 + ' .t-form__inputsbox .t-input-group'
        );
        inputsBf204nList.forEach(function (item) {
          item.remove();
        });
        let int = setInterval(function () {
          let submitBtnList = document.querySelectorAll(redid1 + ' .t-submit');
          if (submitBtnList.length > 0) {
            submitBtnList.forEach(function (btn) {
              btn.setAttribute('tabindex', '-1');
            });
          }
        }, 50);
        setTimeout(function () {
          clearInterval(int);
        }, 2000);
        setTimeout(() => {
          let selectsInitValuesList = [];
          let selectsList = [];
          setTimeout(function () {
            selectsList = document.querySelectorAll(redid1 + ' .t-input-group select');
            selectsList.forEach(function (item) {
              selectsInitValuesList.push(item.value);
            });
          }, 2000);
          let checkboxInitValuesList = [];
          let allCheckboxList = [];
          setTimeout(function () {
            allCheckboxList = document.querySelectorAll(
              redid1 +
                " .t-input-group input[type='checkbox'], " +
                redid1 +
                " .t-input-group input[type='radio']"
            );
            allCheckboxList.forEach(function (item) {
              if (item.checked) {
                checkboxInitValuesList.push('checked');
              } else {
                checkboxInitValuesList.push('not-checked');
              }
            });
          }, 2000);
          let quantityInitValuesList = [];
          let quantityList = [];
          setTimeout(function () {
            quantityList = document.querySelectorAll(
              redid1 + ' .t-input-group input.t-inputquantity'
            );
            quantityList.forEach(function (item) {
              quantityInitValuesList.push(item.value);
            });
          }, 2000);
          let rangeStyleTagInitList = [];
          let rangeTxtInitStyleList = [];
          let rangeTxtInitValuesList = [];
          let rangeTxtList = [];
          let rangeInitValuesList = [];
          let rangeList = [];
          setTimeout(function () {
            rangeList = document.querySelectorAll(redid1 + ' .t-input-group input.t-range');
            rangeList.forEach(function (item) {
              rangeInitValuesList.push(item.value);
              rangeStyleTagInitList.push(
                item.closest('.t-input-group').querySelector("style[class*='range']").innerHTML
              );
            });
            rangeTxtList = document.querySelectorAll(
              redid1 + ' .t-input-group .t-range__value-txt'
            );
            rangeTxtList.forEach(function (item) {
              rangeTxtInitValuesList.push(item.innerHTML);
              rangeTxtInitStyleList.push(item.style.left);
            });
          }, 2000);
          let calcsInitValuesList = [];
          let calcsList = [];
          setTimeout(function () {
            calcsList = document.querySelectorAll(redid1 + ' .t-input-group .t-calc');
            calcsList.forEach(function (item) {
              calcsInitValuesList.push(item.innerHTML);
            });
          }, 2000);
        }, 0);
        let zeroBtnList = document.querySelectorAll(redid1 + ' [href="' + hurl + '"]');
        zeroBtnList.forEach(function (btn) {
          btn.addEventListener('click', function () {
            let inputsGroup = zeroBlock.querySelectorAll(
              '.t-input-group:not(.t-input-group_da):not(.t-input-group_ph):not(.t-input-group_uw):not(.t-input-group_ri):not(.t-input-group_cb):not(.t-input-group_rg) .t-input-block, .t-datepicker__wrapper'
            );
            Array.prototype.forEach.call(inputsGroup, function (input) {
              input.classList.add('input-errors-show');
            });
            var a = redid1.replace('#rec', '');
            a = document.querySelectorAll('[name="form' + a + '"]');
            let showErrorInPopupArr = [];
            a.forEach(function (item) {
              hideErrors(item);
              o = validate(item);
              if (showErrors(item, o)) {
                showErrorInPopupArr.push('true');
              }
            });
            if (showErrorInPopupArr.length == 0) {
              inputsBf204nList = document.querySelectorAll(
                redid2 + ' .t-form__inputsbox .t-input-group'
              );
              inputsBf204nList.forEach(function (item) {
                item.remove();
              });
              function getParents(el, cls) {
                let parents = [];
                let p = el.parentNode;
                let htmlBlk = document.querySelector('html');
                while (p !== htmlBlk) {
                  let x = p;
                  if (x.classList.contains(cls)) {
                    parents.push(x);
                  }
                  p = x.parentNode;
                }
                return parents;
              }
              let inpBox = document.querySelector(redid2 + ' .t-form__inputsbox');
              let allInputsList = document.querySelectorAll(
                redid1 +
                  ' .js-tilda-rule, ' +
                  redid1 +
                  ' [type="hidden"][tabindex="-1"]:not(.js-tilda-rule):not(.js-formaction-services)'
              );
              let allInputsNamesList = [];
              let newInputsList = [];
              allInputsList.forEach(function (item) {
                let nm = item.getAttribute('name');
                if (!allInputsNamesList.includes(nm)) {
                  allInputsNamesList.push(nm);
                  newInputsList.push(item);
                }
              });
              newInputsList.forEach(function (item) {
                if (
                  item.classList.contains('js-tilda-rule') &&
                  !item.classList.contains('t-input__own-answer')
                ) {
                  let parrentsList = getParents(item, 't-upwidget');
                  if (parrentsList.length == 0) {
                    var inputname = item.getAttribute('name');
                    var gg =
                      '<div class="t-input-group t-input-group_in"> <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no"></div> <div class="t-input-block"> <input type="text" name="' +
                      inputname +
                      '" class="t-input js-tilda-rule " value="" placeholder="' +
                      inputname +
                      '" style="color:#000000; border:1px solid #000000; "> <div class="t-input-error"></div> </div> </div>';
                    let inpList = document.querySelectorAll(redid2 + ' [name="' + inputname + '"]');
                    if (item.getAttribute('type') == 'radio' && inpList.length >= 1) {
                    } else {
                      inpBox.insertAdjacentHTML('beforeend', gg);
                    }
                  }
                }
              });
              newInputsList.forEach(function (item) {
                if (!item.classList.contains('js-tilda-rule')) {
                  var inputname = item.getAttribute('name');
                  var gg =
                    '<div class="t-input-group t-input-group_in"> <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no"></div> <div class="t-input-block"> <input type="text" name="' +
                    inputname +
                    '" class="t-input js-tilda-rule " value="" placeholder="' +
                    inputname +
                    '" style="color:#000000; border:1px solid #000000; "> <div class="t-input-error"></div> </div> </div>';
                  inpBox.insertAdjacentHTML('beforeend', gg);
                }
              });
              newInputsList.forEach(function (item) {
                if (
                  item.classList.contains('js-tilda-rule') &&
                  !item.classList.contains('t-input__own-answer')
                ) {
                  var inputname = item.getAttribute('name');
                  let zeroChecked = document.querySelectorAll(
                    redid1 + ' [name="' + inputname + '"]:checked'
                  );
                  let zeroNotChecked = document.querySelectorAll(
                    redid1 + ' [name="' + inputname + '"]'
                  );
                  let inp204 = document.querySelector(redid2 + ' [name="' + inputname + '"]');
                  if (
                    item.getAttribute('type') == 'checkbox' ||
                    item.classList.contains('t-radio') ||
                    item.classList.contains('t-checkbox') ||
                    item.classList.contains('t-img-select')
                  ) {
                    if (zeroChecked.length >= 1) {
                      inp204.value = zeroChecked[0].value;
                      localStorage.setItem(inputname, inp204.value);
                    }
                  } else {
                    if (
                      item.getAttribute('type') == 'hidden' &&
                      item.classList.contains('t-img-select__hiddeninput') &&
                      !item.hasAttribute('value')
                    ) {
                      inp204.value = "У поля нет атрибута 'value'. Пожалуйста проверьте настройки!";
                    } else {
                      inp204.value = zeroNotChecked[0].value;
                      localStorage.setItem(inputname, inp204.value);
                    }
                  }
                }
              });
              newInputsList.forEach(function (item) {
                if (!item.classList.contains('js-tilda-rule')) {
                  var inputname = item.getAttribute('name');
                  let inpList = document.querySelectorAll(redid2 + ' [name="' + inputname + '"]');
                  let zeroNotChecked = document.querySelector(
                    redid1 + ' [name="' + inputname + '"]'
                  );
                  inpList.forEach(function (el) {
                    el.value = zeroNotChecked.value;
                    localStorage.setItem(inputname, el.value);
                  });
                }
              });
              document.querySelectorAll(redid1 + ' .t-upwidget').forEach(function (item) {
                let parrentsList = getParents(item, 't-input-group');
                var inputname = parrentsList[0].cloneNode(true);
                inpBox.prepend(inputname);
              });
              clickEvent(document.querySelector(redid2 + ' .t-submit'));
              setTimeout(() => {
                let formsList = document.querySelectorAll(redid1 + ' form');
                formsList.forEach(function (item) {
                  item.reset();
                  item.querySelectorAll('input[type="tel"]').forEach(function (inp) {
                    if (inp.hasAttribute('data-phonemask-current')) {
                      inp.setAttribute('data-phonemask-current', '');
                    }
                  });
                  item.querySelectorAll('input[data-tilda-rule="phone"]').forEach(function (inp) {
                    if (inp.hasAttribute('value')) {
                      inp.value = '';
                    }
                  });
                });
                for (let i = 0; i < selectsList.length; i++) {
                  selectsList[i].value = selectsInitValuesList[i];
                }
                for (let i = 0; i < allCheckboxList.length; i++) {
                  if (checkboxInitValuesList[i] == 'checked') {
                    allCheckboxList[i].click();
                  }
                }
                for (let i = 0; i < quantityList.length; i++) {
                  quantityList[i].value = quantityInitValuesList[i];
                }
                for (let i = 0; i < rangeList.length; i++) {
                  rangeList[i].value = rangeInitValuesList[i];
                  rangeTxtList[i].innerHTML = rangeTxtInitValuesList[i];
                  rangeTxtList[i].style.left = rangeTxtInitStyleList[i];
                  rangeList[i]
                    .closest('.t-input-group')
                    .querySelector("style[class*='range']").innerHTML = rangeStyleTagInitList[i];
                }
                for (let i = 0; i < calcsList.length; i++) {
                  calcsList[i].innerHTML = calcsInitValuesList[i];
                }
                document
                  .querySelectorAll(
                    redid1 + ' .t-uploadcare .uploadcare--widget__button_type_remove'
                  )
                  .forEach(function (item) {
                    item.click();
                  });
                document
                  .querySelectorAll(redid1 + ' .t-upwidget-container__button_fileholder')
                  .forEach(function (item) {
                    setTimeout(function () {
                      clickEvent(item);
                      if (
                        item
                          .closest('.t-upwidget-container')
                          .querySelector('.t-upwidget-container__data_table_actions_remove')
                      ) {
                        clickEvent(
                          item
                            .closest('.t-upwidget-container')
                            .querySelector('.t-upwidget-container__data_table_actions_remove svg')
                        );
                      }
                    }, 100);
                  });
              }, 0);
            }
          });
        });
        var zeroForma = function ($form) {
          let = nlm001;
          if (window.NolimSuccessFunction1017188201.length >= 1) {
            var hasSuccessUrl = document
              .querySelector(redid2 + ' form')
              .hasAttribute('data-success-url');
            if (hasSuccessUrl) {
              var successUrl = document
                .querySelector(redid2 + ' form')
                .getAttribute('data-success-url');
              if (successUrl !== undefined && successUrl !== '') {
                window.location.href = successUrl;
              }
            } else {
              setTimeout(function () {
                var st = document.querySelector(redid2 + ' .js-successbox').innerHTML;
                nolimShowSuccessPopup984518021();
                document.querySelector('#nolimnolimtildaformsuccesspopuptext').innerHTML = st;
                if (window.t1093__closePopup) {
                  t1093__closePopup(!0, -1, !0);
                }
              }, 0);
            }
          }
        };
        if (typeof window.NolimSuccessFunction1017188201 == 'undefined') {
          window.NolimSuccessFunction1017188201 = [];
          window.NolimSuccessFunction1017188201[0] = zeroForma;
        } else {
          window.NolimSuccessFunction1017188201.push(zeroForma);
        }
        window.mySuccessFunction1017188201 = function ($form) {
          for (var i = 0; i < window.NolimSuccessFunction1017188201.length; i++) {
            window.NolimSuccessFunction1017188201[i]($form);
          }
        };
        if (!window.nlm609rec1017188201) {
          function afterSuccessNlm(form) {
            window.mySuccessFunction1017188201(form);
            if (window.nlm020block1011363471) {
              clickEvent(document.querySelector('#rec1011363471 .nolim_popup_close'));
            }
          }
          setInterval(function () {
            let forms = document.querySelectorAll(redid2 + ' .js-form-proccess');
            Array.prototype.forEach.call(forms, function (form) {
              form.removeEventListener('tildaform:aftersuccess', afterSuccessNlm);
              form.addEventListener('tildaform:aftersuccess', afterSuccessNlm);
            });
          }, 1000);
        }
        zeroBlock.addEventListener('keypress', function (e) {
          var keyCode = e.keyCode || e.which;
          let btn = document.querySelectorAll(redid1 + ' [href="' + hurl + '"]');
          if (keyCode === 13) {
            e.preventDefault();
            btn[0].click();
            return false;
          }
        });
      }
    }, 50);
  });
  function hideErrors(t) {
    var e, r, o, a, n, i, s;
    ('object' == typeof t && !t.length) ||
      (t instanceof Element || (t = t[0]),
      (e = t.querySelectorAll('.js-errorbox-all')),
      (r = t.querySelectorAll('.js-rule-error')),
      (o = t.querySelectorAll('.js-error-rule-all')),
      (a = t.querySelectorAll('.js-successbox')),
      (n = t.querySelectorAll('.js-error-control-box')),
      (i = t.querySelectorAll('.js-error-control-box .t-input-error')),
      (s = document.getElementById('tilda-popup-for-error')),
      Array.prototype.forEach.call(e, function (t) {
        t.style.display = 'none';
      }),
      Array.prototype.forEach.call(r, function (t) {
        t.style.display = 'none';
      }),
      Array.prototype.forEach.call(o, function (t) {
        t.innerHTML = '';
      }),
      Array.prototype.forEach.call(a, function (t) {
        t.style.display = 'none';
      }),
      Array.prototype.forEach.call(i, function (t) {
        t.innerHTML = '';
      }),
      Array.prototype.forEach.call(n, function (t) {
        t_removeClass(t, 'js-error-control-box');
      }),
      t_removeClass(t, 'js-send-form-error'),
      t_removeClass(t, 'js-send-form-success'));
  }
  function validate(t) {
    t instanceof Element || (t = t[0]);
    for (
      var e, r, o = t.querySelectorAll('.js-tilda-rule'), a = [], n = !0, i = 0;
      i < o.length;
      i++
    ) {
      var s = o[i],
        l = !!parseInt(s.getAttribute('data-tilda-req') || 0, 10),
        d = s.getAttribute('data-tilda-rule') || 'none',
        c = '',
        u = '',
        m = s.getAttribute('data-tilda-rule-minlength') || 0,
        p = s.getAttribute('data-tilda-rule-maxlength') || 0,
        f = {},
        _ = s.value,
        y = '',
        w = s.getAttribute('type'),
        h = s.getAttribute('name'),
        g = t.getAttribute('data-formcart');
      (f.obj = s),
        (f.type = []),
        _ &&
          _.length &&
          ((y = _.replace(/[\s\u0000—\u001F\u2000-\u200F\uFEFF\u2028-\u202F\u205F-\u206F]/gi, '')),
          (_ = _.trim())),
        0 < _.length && (n = !1),
        (m = m && parseInt(m, 10)),
        (p = p && parseInt(p, 10));
      var v = !_.length && !y.length,
        w = 'checkbox' === w || 'radio' === w,
        h = !t.querySelectorAll('[name="' + h + '"]:checked').length;
      if (l && (v || (w && h))) f.type.push('req');
      else {
        switch (d) {
          case 'email':
            (c =
              /^(?!\.)(?!.*\.\.)[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\.\-\+]{0,63}[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\-\+]@[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}$/gi),
              _.length && !_.match(c) && f.type.push('email');
            break;
          case 'url':
            (c =
              /^((https?|ftp):\/\/)?[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9_\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}\/?$/gi),
              _.length &&
                ((u = (u = (u = _.split('//')) && 1 < u.length ? u[1] : u[0]).split('/')) &&
                u.length &&
                u[0]
                  ? (u = u[0]).match(c) || f.type.push('url')
                  : ((u && !u[0]) || f.type.push('url'), (u = '')));
            break;
          case 'phone':
            var b = s.getAttribute('data-tilda-mask'),
              E = '^[0-9()+-';
            b &&
              (-1 !== b.indexOf('*')
                ? (E += 'a-zёа-я')
                : (-1 !== b.indexOf('a') && (E += 'a-z'), -1 !== b.indexOf('а') && (E += 'а-яё'))),
              (E += ']+$'),
              (c = new RegExp(E, 'gi')),
              ((y.length && !y.match(c)) ||
                1 == (u = y.replace(/[^0-9]+/g, '')).indexOf('000') ||
                1 == u.indexOf('111') ||
                (1 == u.indexOf('222') && '5' != u.substring(0, 1)) ||
                1 == u.indexOf('333') ||
                1 == u.indexOf('444') ||
                (1 == u.indexOf('555') && '0' != u.substring(0, 1)) ||
                (1 == u.indexOf('666') && '0' != u.substring(0, 1)) ||
                (1 == u.indexOf('8888') && '4' != u.substring(0, 1))) &&
                f.type.push('phone');
            break;
          case 'number':
            (c = /^[0-9]+$/gi), 0 < y.length && !y.match(c) && f.type.push('number');
            break;
          case 'date':
            0 < y.length &&
              !y.match(
                {
                  'DD-MM-YYYY':
                    /^(0[1-9]|1[0-9]|2[0-9]|3[01])[\-\.\/](0[1-9]|1[012])[\-\.\/][0-9]{4}$/,
                  'MM-DD-YYYY':
                    /^(0[1-9]|1[012])[\-\.\/](0[1-9]|1[0-9]|2[0-9]|3[01])[\-\.\/][0-9]{4}$/,
                  'YYYY-MM-DD':
                    /^[0-9]{4}[\-\.\/](0[1-9]|1[012])[\-\.\/](0[1-9]|1[0-9]|2[0-9]|3[01])$/,
                }[s.getAttribute('data-tilda-dateformat')] ||
                  /^[0-9]{1,4}[\-\.\/][0-9]{1,2}[\-\.\/][0-9]{1,4}$/gi
              ) &&
              f.type.push('date');
            break;
          case 'time':
            (c = /^[0-9]{2}[:\.][0-9]{2}$/gi), 0 < y.length && !y.match(c) && f.type.push('time');
            break;
          case 'name':
            (c =
              /^([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0027\u2019\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\u0041-\u007A\u00C0-\u02B8\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD]{1,})([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD\-\'\‘\s\.]{0,})$/gi),
              _.length && !_.match(c) && f.type.push('name');
            break;
          case 'nameeng':
            (c = /^([A-Za-z\s]{1,}((\-)?[A-Za-z\.\s](\')?){0,})*$/i),
              _.length && !_.match(c) && f.type.push('nameeng');
            break;
          case 'namerus':
            (c = /^([А-Яа-яЁё\s]{1,}((\-)?[А-Яа-яЁё\.\s](\')?){0,})*$/i),
              _.length && !_.match(c) && f.type.push('namerus');
            break;
          case 'string':
            (c =
              /^[A-Za-zА-Яа-я0-9ЁёЁёäöüÄÖÜßèéûӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶ\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD,\.:;\"\'`\-\_\+\?\!\%\$\@\*\&\^\s]$/i),
              _.length && !_.match(c) && f.type.push('string');
            break;
          case 'chosevalue':
            'true' === s.getAttribute('data-option-selected') || f.type.push('chosevalue');
            break;
          case 'promocode':
            'y' !== g ||
              !y.length ||
              !window.tcart ||
              (window.tcart.promocode && window.tcart.prodamount_discountsum) ||
              f.type.push('promocode');
            break;
          case 'deliveryreq':
            f.type.push('deliveryreq');
        }
        0 < m && _.length && _.length < m && f.type.push('minlength'),
          0 < p && _.length && _.length > p && f.type.push('maxlength');
      }
      f.type && f.type.length && (a[a.length] = f);
    }
    return (
      'y' === g &&
        ((e = void 0 !== window.tcart_minorder && 0 < window.tcart_minorder),
        (r = void 0 !== window.tcart_mincntorder && 0 < window.tcart_mincntorder),
        e &&
          window.tcart.prodamount < window.tcart_minorder &&
          ((f = { obj: {}, type: [] }).type.push('minorder'), a.push(f)),
        r &&
          window.tcart.total < window.tcart_mincntorder &&
          ((f = { obj: {}, type: [] }).type.push('minquantity'), a.push(f))),
      n && !a.length && (a = [{ obj: 'none', type: ['emptyfill'] }]),
      a
    );
  }
  function showErrors(t, e) {
    if ((t instanceof Element || (t = t[0]), !e || !e.length)) return !1;
    if ('y' === t.getAttribute('data-error-popup')) return showErrorInPopup(t, e);
    for (
      var r = (r = t.getAttribute('data-inputbox')) || '.blockinput',
        o = '',
        a = !1,
        n = '',
        i = '',
        s = '',
        l = 0;
      l < e.length;
      l++
    )
      if (e[l] && e[l].obj) {
        if (0 === l && 'none' === e[l].obj) {
          return false;
        }
        var c = e[l].obj;
        c instanceof Element || (c = c[0]),
          c && (o = c.closest(r)),
          o &&
            ((i = o.querySelectorAll('.t-input-error')),
            t_addClass(o, 'js-error-control-box'),
            0 < i.length && (a = !0));
        for (d = 0; d < e[l].type.length; d++) {
          var u = e[l].type[d],
            s = '';
          if ((1, (n = t.querySelectorAll('.js-rule-error-' + u)).length))
            for (var m = 0; m < n.length; m++)
              n[m].getAttribute('data-rule-filled') ||
                ((n[m].textContent && n[m].innerText) || !t_forms__getMsg(u)
                  ? (s = n[0].textContent || n[0].innerText)
                  : (n[m].innerHTML = t_forms__getMsg(u))),
                (n[m].style.display = 'block');
          else if (t_forms__getMsg(u) && (n = t.querySelectorAll('.js-rule-error-all')).length)
            for (m = 0; m < n.length; m++)
              (n[m].innerHTML = t_forms__getMsg(u)), (n[m].style.display = 'block');
          a &&
            (!s && t_forms__getMsg(u + 'field')
              ? (s = t_forms__getMsg(u + 'field'))
              : t_forms__getMsg(u) && (s = t_forms__getMsg(u)),
            s &&
              o &&
              ((i = o.querySelectorAll('.t-input-error')),
              Array.prototype.forEach.call(i, function (t) {
                t.innerHTML = s;
              })));
        }
      }
    var p = t.querySelectorAll('.js-errorbox-all');
    return (
      Array.prototype.forEach.call(p, function (t) {
        t.style.display = 'block';
      }),
      t_triggerEvent(t, 'tildaform:aftererror'),
      !0
    );
  }
  function showErrorInPopup(t, e) {
    if ((t instanceof Element || (t = t[0]), !e || !e.length)) return !1;
    let arr = [];
    let arrUniq = [];
    var r,
      o = t.getAttribute('id'),
      a = (a = t.getAttribute('data-inputbox')) || '.blockinput',
      n = '',
      i = !1,
      s = '',
      l = '',
      d = '',
      c = document.getElementById('tilda-popup-for-error');
    c ||
      (document.body.insertAdjacentHTML(
        'beforeend',
        '<div id="tilda-popup-for-error" class="js-form-popup-errorbox tn-form__errorbox-popup" style="display: none;"> <div class="t-form__errorbox-text t-text t-text_xs"></div> <div class="tn-form__errorbox-close js-errorbox-close"> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-left"></div> <div class="tn-form__errorbox-close-line tn-form__errorbox-close-line-right"></div> </div> </div>'
      ),
      t_addEventListener(
        (c = document.getElementById('tilda-popup-for-error')),
        'click',
        function (t) {
          if (((t = t || window.event).target || t.srcElement).closest('.js-errorbox-close'))
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), t_fadeOut(c), !1;
        }
      ));
    for (var u, m, p = 0; p < e.length; p++)
      if (e[p] && e[p].obj) {
        if (0 === p && 'none' === e[p].obj) {
          return false;
        }
        var f = e[p].obj;
        f instanceof Element || (f = f[0]),
          f && (n = f.closest(a)),
          n &&
            ((s = n.querySelectorAll('.t-input-error')),
            t_addClass(n, 'js-error-control-box'),
            s.length && (i = !0));
        for (var _ = 0; _ < e[p].type.length; _++) {
          var y = e[p].type[_],
            w = t_forms__getMsg(y),
            l = '';
          (r = t.querySelector('.js-rule-error-' + y))
            ? (r.textContent && r.innerText) || !w || -1 !== d.indexOf(w)
              ? ((l = r.textContent || r.innerText),
                -1 === d.indexOf(w) && (d = d + '<p class="t-form__errorbox-item">' + l + '</p>'))
              : (d = d + '<p class="t-form__errorbox-item">' + w + '</p>')
            : w &&
              -1 === d.indexOf(w) &&
              (d = d + '<p class="t-form__errorbox-item">' + w + '</p>'),
            i &&
              (!l && t_forms__getMsg(y + 'field')
                ? (l = t_forms__getMsg(y + 'field'))
                : w && (l = w),
              l &&
                n &&
                ((s = n.querySelectorAll('.t-input-error')),
                Array.prototype.forEach.call(s, function (t) {
                  (t.innerHTML = l), t_fadeIn(t);
                })));
        }
      }
    function h(t) {
      'INPUT' === ((t = t || window.event).target || t.srcElement).tagName &&
        ((t = u.querySelectorAll('form .t-input-error')),
        t_fadeOut(c),
        Array.prototype.forEach.call(t, function (t) {
          (t.innerHTML = ''), t_fadeOut(t);
        }),
        window.t_forms__errorTimerID &&
          (window.clearTimeout(window.t_forms__errorTimerID), (window.t_forms__errorTimerID = 0)),
        (window.isInitEventsZB[o] = !0));
    }
    return (
      d &&
        ((c.querySelector('.t-form__errorbox-text').innerHTML += d),
        (m = c.querySelectorAll('.t-form__errorbox-item')),
        (arr = Array.from(m)),
        (arrUniq = arr.reduce((o, i) => {
          if (!o.find(v => v.innerHTML == i.innerHTML)) {
            o.push(i);
          }
          return o;
        }, [])),
        Array.prototype.forEach.call(arrUniq, function (t) {
          t.style.display = 'block';
        }),
        t_fadeIn(c)),
      window.t_forms__errorTimerID && window.clearTimeout(window.t_forms__errorTimerID),
      (window.t_forms__errorTimerID = window.setTimeout(function () {
        t_fadeOut(c),
          (s = t.querySelectorAll('.t-input-error')),
          Array.prototype.forEach.call(s, function (t) {
            (t.innerHTML = ''), t_fadeOut(t);
          }),
          (window.t_forms__errorTimerID = 0);
      }, 1e4)),
      window.isInitEventsZB[o] ||
        ((u = t.closest('.r')),
        (m = 'focus'),
        document.addEventListener || (m = 'focusin'),
        t_removeEventListener(u, m, h),
        t_addEventListener(u, m, h, !0),
        t_removeEventListener(u, 'change', h),
        t_addEventListener(u, 'change', h, !0)),
      t_triggerEvent(t, 'tildaform:aftererror'),
      !0
    );
  }
  function t_forms__getMsg(t) {
    var e = [],
      r = window.t_forms__lang;
    return (
      (e.EN = {
        success: 'Thank you! Your data has been submitted.',
        successorder:
          'Thank you! Order created. Please wait while you are redirected to the payment page...',
        email: 'Please enter a valid email address',
        url: 'Please put a correct URL',
        phone: 'Please put a correct phone number',
        number: 'Please put a correct number',
        date: 'Please put a correct date',
        time: 'Please put a correct time (HH:mm)',
        name: 'Please put a name',
        namerus: 'Please put a correct name (only cyrillic letters)',
        nameeng: 'Please put a correct name (only latin letters)',
        string:
          'You put incorrect symbols. Only letters, numbers and punctuation symbols are allowed',
        req: 'Please fill out all required fields',
        reqfield: 'Required field',
        minlength: 'Value is too short',
        maxlength: 'Value too big',
        emptyfill: 'None of the fields are filled in',
        chosevalue: 'Please select an address from the options',
        deliveryreq:
          'It is not possible to place an order without delivery. Please refresh the page and try again',
        promocode: 'Please activate promo code or clear input field',
      }),
      (e.RU = {
        success: 'Спасибо! Данные успешно отправлены.',
        successorder: 'Спасибо! Заказ оформлен. Пожалуйста, подождите. Идет переход к оплате...',
        email: 'Укажите, пожалуйста, корректный email',
        url: 'Укажите, пожалуйста, корректный URL',
        phone: 'Укажите, пожалуйста, корректный номер телефона',
        number: 'Укажите, пожалуйста, корректный номер',
        date: 'Укажите, пожалуйста, корректную дату',
        time: 'Укажите, пожалуйста, корректное время (ЧЧ:ММ)',
        name: 'Укажите, пожалуйста, имя',
        namerus: 'Укажите, пожалуйста, имя (только кириллица)',
        nameeng: 'Укажите, пожалуйста, имя (только латиница)',
        string:
          'Вы написали некорректные символы. Разрешены только буквы, числа и знаки пунктуации',
        req: 'Пожалуйста, заполните все обязательные поля',
        reqfield: 'Обязательное поле',
        minlength: 'Слишком короткое значение',
        maxlength: 'Слишком длинное',
        emptyfill: 'Ни одно поле не заполнено',
        chosevalue: 'Пожалуйста, выберите адрес из предложенных вариантов',
        deliveryreq:
          'Невозможно оформить заказ без доставки. Пожалуйста, перезагрузите страницу и попробуйте еще раз.',
        promocode: 'Активируйте, пожалуйста промокод или очистите поле',
      }),
      'function' == typeof t_forms__getDict && 'RU' !== r && 'EN' !== r && (e = t_forms__getDict()),
      (e[r] || e.EN)[t]
    );
  }
})();
function nolimShowSuccessPopup984518021(t) {
  if (document.querySelector('#nolimnolimtildaformsuccesspopuptext')) {
    document
      .querySelector('#nolimnolimtildaformsuccesspopuptext')
      .closest('.t-form-success-popup')
      .remove();
  }
  var e = '',
    r = document.getElementById('nolimnolimtildaformsuccesspopup1017188201'),
    o = document.getElementById('nolimnolimtildaformsuccesspopuptext'),
    a = document.body;
  r ||
    ((e +=
      '<style media="screen"> .t-form-success-popup { display: none; position: fixed; background-color: rgba(0,0,0,.8); top: 0px; left: 0px; width: 100%; height: 100%; z-index: 10000; overflow-y: auto; cursor: pointer; } .t-body_success-popup-showed { height: 100vh; min-height: 100vh; overflow: hidden; } .t-form-success-popup__window { width: 100%; max-width: 400px; position: absolute; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); left: 0px; right: 0px; margin: 0 auto; padding: 20px; box-sizing: border-box; } .t-form-success-popup__wrapper { background-color: #fff; padding: 40px 40px 50px; box-sizing: border-box; border-radius: 5px; text-align: center; position: relative; cursor: default; } .t-form-success-popup__text { padding-top: 20px; } .t-form-success-popup__close-icon { position: absolute; top: 14px; right: 14px; cursor: pointer; } @media screen and (max-width: 480px) { .t-form-success-popup__text { padding-top: 10px; } .t-form-success-popup__wrapper { padding-left: 20px; padding-right: 20px; } } </style>'),
    (e +=
      '<div class="t-form-success-popup" style="display:none;" id="nolimnolimtildaformsuccesspopup1017188201"> <div class="t-form-success-popup__window"> <div class="t-form-success-popup__wrapper"> <svg class="t-form-success-popup__close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="t657__icon-close" viewBox="0 0 23 23"> <g fill-rule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"/> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"/> </g> </svg> <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"/> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"/> </svg> <div class="t-form-success-popup__text t-descr t-descr_sm" id="nolimnolimtildaformsuccesspopuptext"> Thank You! </div> </div> </div> </div>'),
    a.insertAdjacentHTML(
      'beforeend',
      '<style media="screen"> .t-form-success-popup { display: none; position: fixed; background-color: rgba(0,0,0,.8); top: 0px; left: 0px; width: 100%; height: 100%; z-index: 10000; overflow-y: auto; cursor: pointer; } .t-body_success-popup-showed { height: 100vh; min-height: 100vh; overflow: hidden; } .t-form-success-popup__window { width: 100%; max-width: 400px; position: absolute; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); left: 0px; right: 0px; margin: 0 auto; padding: 20px; box-sizing: border-box; } .t-form-success-popup__wrapper { background-color: #fff; padding: 40px 40px 50px; box-sizing: border-box; border-radius: 5px; text-align: center; position: relative; cursor: default; } .t-form-success-popup__text { padding-top: 20px; } .t-form-success-popup__close-icon { position: absolute; top: 14px; right: 14px; cursor: pointer; } @media screen and (max-width: 480px) { .t-form-success-popup__text { padding-top: 10px; } .t-form-success-popup__wrapper { padding-left: 20px; padding-right: 20px; } } </style><div class="t-form-success-popup" style="display:none;" id="nolimnolimtildaformsuccesspopup1017188201"> <div class="t-form-success-popup__window"> <div class="t-form-success-popup__wrapper"> <svg class="t-form-success-popup__close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" class="t657__icon-close" viewBox="0 0 23 23"> <g fill-rule="evenodd"> <path d="M0 1.41L1.4 0l21.22 21.21-1.41 1.42z"/> <path d="M21.21 0l1.42 1.4L1.4 22.63 0 21.21z"/> </g> </svg> <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"/> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 0 1 1 1.25 1.26L22.84 30.53z"/> </svg> <div class="t-form-success-popup__text t-descr t-descr_sm" id="nolimnolimtildaformsuccesspopuptext"> Thank You! </div> </div> </div> </div>'
    ),
    (r = document.getElementById('nolimnolimtildaformsuccesspopup1017188201')),
    (o = document.getElementById('nolimnolimtildaformsuccesspopuptext')),
    (e = r.querySelector('.t-form-success-popup__close-icon')),
    t_addEventListener(r, 'click', function (t) {
      ((t = t || window.event).target || t.srcElement) === this &&
        nolimCloseSuccessPopup984518021();
    }),
    t_addEventListener(e, 'click', function () {
      nolimCloseSuccessPopup984518021();
    }),
    t_addEventListener(a, 'keydown', function (t) {
      27 == ((t = t || window.event).keyCode || t.which) && nolimCloseSuccessPopup984518021();
    })),
    (o.innerHTML = t),
    t_fadeIn(r),
    t_addClass(a, 't-body_success-popup-showed'),
    /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
      !window.MSStream &&
      setTimeout(function () {
        nolimLockBodyScroll984518021();
      }, 500);
}
function nolimCloseSuccessPopup984518021() {
  var t = document.getElementById('nolimnolimtildaformsuccesspopup1017188201');
  t &&
    (t_removeClass(document.body, 't-body_success-popup-showed'),
    /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
      !window.MSStream &&
      nolimUnlockBodyScroll984518021(),
    t_fadeOut(t));
}
function nolimLockBodyScroll984518021() {
  var t,
    e = document.body;
  t_hasClass(e, 't-body_scroll-locked') ||
    ((t =
      void 0 !== window.pageYOffset
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop),
    t_addClass(e, 't-body_scroll-locked'),
    (e.style.top = '-' + t + 'px'),
    e.setAttribute('data-popup-scrolltop', t));
}
function nolimUnlockBodyScroll984518021() {
  var t,
    e = document.body;
  t_hasClass(e, 't-body_scroll-locked') &&
    ((t = e.getAttribute('data-popup-scrolltop')),
    t_removeClass(e, 't-body_scroll-locked'),
    (e.style.top = null),
    e.removeAttribute('data-popup-scrolltop'),
    (document.documentElement.scrollTop = parseInt(t)));
}
