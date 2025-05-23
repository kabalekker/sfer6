(function () {
  if (typeof window.nlm113obj == 'undefined') {
    window.blocksForAllMods = [];
    window.nlm113obj = {};
    window.nlm113obj.allBlocksArr = [];
    window.nlm113obj.allClassesArr = [];
    window.nlm113obj.modId166392503 = {};
    window.nlm113obj.modId166392503.allBlocksArr = [];
    window.nlm113obj.modId166392503.allClassesArr = [];
    window.nlm113obj.modId166392503.btns = {
      bt1: '#rec1015817746',
      bt2: '#rec1015817861',
      bt3: '#rec1015818001',
    };
  } else {
    window.nlm113obj.modId166392503 = {};
    window.nlm113obj.modId166392503.allBlocksArr = [];
    window.nlm113obj.modId166392503.allClassesArr = [];
    window.nlm113obj.modId166392503.btns = {
      bt1: '#rec1015817746',
      bt2: '#rec1015817861',
      bt3: '#rec1015818001',
    };
  }
  let isFirstOpen = { block979: {} };
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
    const nlm087DivList = Array.from(document.querySelectorAll('.nlm-087mode-in-the-house'));
    if (nlm087DivList.length > 0) {
      let intFor087 = setInterval(() => {
        let countInit087Mods = 0;
        nlm087DivList.forEach(nlm087Div => {
          if (nlm087Div.hasAttribute('data-mode-ready')) {
            countInit087Mods += 1;
          }
        });
        if (nlm087DivList.length === countInit087Mods) {
          clearInterval(intFor087);
          startMod();
        }
      }, 500);
    } else {
      startMod();
    }
    function startMod() {
      for (let key in window.nlm113obj.modId166392503.btns) {
        let keyArr = window.nlm113obj.modId166392503.btns[key].replace(/s+/g, '').split(',');
        let button = document.querySelector('.' + key);
        let icon = document.createElement('div');
        icon.classList.add('nlm113-icon');
        let defaultIcon = document.createElement('div');
        defaultIcon.classList.add('default');
        let activeIcon = document.createElement('div');
        activeIcon.classList.add('active');
        icon.appendChild(defaultIcon);
        icon.appendChild(activeIcon);
        button.querySelector('.tn-atom').prepend(icon);
        keyArr.forEach(function (item) {
          const pikedBlock = document.querySelector(item);
          if (pikedBlock && pikedBlock.closest('[data-record-type="734"]')) {
            const newItem = (block = document.querySelector('[data-record-type="734"]').id);
          }
          if (window.nlm113obj.allBlocksArr.indexOf(item) === -1) {
            window.nlm113obj.allBlocksArr.push(item);
          }
          if (window.nlm113obj.modId166392503.allBlocksArr.indexOf(item) === -1) {
            window.nlm113obj.modId166392503.allBlocksArr.push(item);
          }
        });
        if (window.nlm113obj.allClassesArr.indexOf(key) === -1) {
          window.nlm113obj.allClassesArr.push(key);
        }
        if (window.nlm113obj.modId166392503.allClassesArr.indexOf(key) === -1) {
          window.nlm113obj.modId166392503.allClassesArr.push(key);
        }
      }
      let tabsId = 166392503;
      let myOpts;
      let slidesNotChangeYet = true;
      let isScrollToTop = false;
      for (let key in window.nlm113obj.modId166392503.btns) {
        let keyArr = window.nlm113obj.modId166392503.btns[key].replace(/s+/g, '').split(',');
        keyArr.forEach(function (item) {
          if (window.nlm113obj.allBlocksArr.indexOf(item) === -1) {
            window.nlm113obj.allBlocksArr.push(item);
          }
          if (window.nlm113obj.modId166392503.allBlocksArr.indexOf(item) === -1) {
            window.nlm113obj.modId166392503.allBlocksArr.push(item);
          }
        });
        if (window.nlm113obj.allClassesArr.indexOf(key) === -1) {
          window.nlm113obj.allClassesArr.push(key);
        }
        if (window.nlm113obj.modId166392503.allClassesArr.indexOf(key) === -1) {
          window.nlm113obj.modId166392503.allClassesArr.push(key);
        }
      }
      let ab = setInterval(function () {
        if (window.t_animateSbs__checkIntoviewEls != undefined) {
          clearInterval(ab);
          window.t_animateSbs__checkIntoviewEls = function (s, t) {
            t &&
              t.length &&
              ((s.scrollTop = window.pageYOffset),
              t.filter(function (t) {
                let block = t.closest('.r');
                var e = s.scrollTop + t.triggerOffset,
                  a = 'blockintoview' === t.animType ? e >= t.blockTopOffset : e >= t.topOffset,
                  e = t.closest('.t396').parentElement,
                  e =
                    e.classList.contains('t397__off') ||
                    e.classList.contains('t395__off') ||
                    e.classList.contains('t400__off');
                if (!window.nlm113obj.allBlocksArr.includes('#' + block.id)) {
                  return (
                    !(a && !t.classList.contains('t-sbs-anim_started') && !e) ||
                    (t.classList.add('t-sbs-anim_started'), !1)
                  );
                } else {
                  return !(a && !t.classList.contains('t-sbs-anim_started') && !e) || !1;
                }
              }));
          };
        } else if (window.t_animationSBS__updateIntoViewElsState != undefined) {
          clearInterval(ab);
          window.t_animationSBS__updateIntoViewElsState = function (t) {
            t &&
              t.length &&
              t.forEach(function (t) {
                let block = t.closest('.r');
                var e = window.pageYOffset + t.triggerOffset,
                  e = 'blockintoview' === t.animType ? e >= t.parentRecTopPos : e >= t.topOffset,
                  n = t.closest('.t396').parentElement,
                  a = ['t397__off', 't395__off', 't400__off'].some(function (t) {
                    return n.classList.contains(t);
                  });
                if (!window.nlm113obj.allBlocksArr.includes('#' + block.id)) {
                  !e ||
                    a ||
                    t.classList.contains('t-sbs-anim_started') ||
                    t.classList.add('t-sbs-anim_started');
                } else {
                  !e || a || t.classList.contains('t-sbs-anim_started');
                }
              });
          };
        }
      }, 10);
      let ab2 = setInterval(function () {
        if (window.t_animate__setAnimELemsState != undefined) {
          clearInterval(ab2);
          window.t_animate__setAnimELemsState = function (t, e, a) {
            t.forEach(function (t) {
              let block = t.closest('.r');
              if (!window.nlm113obj.allBlocksArr.includes('#' + block.id)) {
                var n = t.getBoundingClientRect().top + window.pageYOffset;
                if (n < e - 500)
                  return (
                    t.classList.remove('t-animate'),
                    t.classList.remove('t-animate_no-hover'),
                    'animatednumber' === t_animate__getAttrByResBase(t, 'style') &&
                      t_animate__animateNumbers(t),
                    !0
                  );
                var i = t_animate__detectElemTriggerOffset(t, a);
                t_animate__setCustomAnimSettings(t, n, a),
                  n < i &&
                    (t_animate__removeNoHoverClassFromBtns(t),
                    t.classList.add('t-animate_started'),
                    'animatednumber' === t_animate__getAttrByResBase(t, 'style') &&
                      t_animate__animateNumbers(t)),
                  n >= i && t.classList.add('t-animate_wait');
              }
            });
          };
        }
      }, 10);
      let ab3 = setInterval(function () {
        if (window.t_animateSbs__rereadElsValues != undefined) {
          clearInterval(ab3);
          window.t_animateSbs__rereadElsValues = function (opts) {
            myOpts = opts;
            var elements = opts ? opts.els : null;
            if (elements && elements.length) {
              Array.prototype.forEach.call(elements, function (element) {
                t_animateSbs__cashElsTopOffset(element, opts);
                if (element.changeType === 'scroll') {
                  t_animateSbs__updateStepsStartValues(element);
                }
              });
            }
          };
        } else if (window.t_animationSBS__changeElValues != undefined) {
          clearInterval(ab3);
          window.t_animationSBS__changeElValues = function (animatedObject) {
            myOpts = animatedObject;
            if (animatedObject) {
              animatedObject.elements.forEach(function (element) {
                t_animationSBS__setAndCacheElTopPos(element, animatedObject);
                if (element.animType !== 'scroll') return;
                t_animationSBS__updateStepsValues(element);
              });
            }
          };
        }
      }, 10);
      function hideShowFix087(block, action, buttonClass) {
        if (block.closest('[data-record-type="734"]') && !block.id.includes('nlm')) {
          const block734id = '#' + block.closest('[data-record-type="734"]').id;
          if (!window.nlm113obj.modId166392503.allBlocksArr.includes(block734id)) {
            window.nlm113obj.modId166392503.allBlocksArr.push(block734id);
          }
          if (!block.id.includes('nlm')) {
            window.nlm113obj.modId166392503.allBlocksArr =
              window.nlm113obj.modId166392503.allBlocksArr.filter(item => item !== '#' + block.id);
          }
          const btnBlockArr = window.nlm113obj.modId166392503.btns[buttonClass].split(',');
          const otherKeys = Object.keys(window.nlm113obj.modId166392503.btns).filter(
            key => key !== buttonClass
          );
          let isSubstringInOtherValues = false;
          for (let key of otherKeys) {
            if (window.nlm113obj.modId166392503.btns[key].includes(block734id)) {
              isSubstringInOtherValues = true;
              break;
            }
          }
          if (!btnBlockArr.includes(block734id) && !isSubstringInOtherValues) {
            btnBlockArr.push(block734id);
          }
          if (!block.id.includes('nlm')) {
            let btnBlockNewString = btnBlockArr
              .filter(blockId => blockId !== '#' + block.id)
              .join(',');
            if (btnBlockNewString.charAt(0) === ',') {
              btnBlockNewString = btnBlockNewString.substring(1);
            }
            window.nlm113obj.modId166392503.btns[buttonClass] = btnBlockNewString;
          }
          if (action == 'add') {
            block.closest('[data-record-type="734"]').classList.add('nolimAutoScaleFix113');
            block
              .closest('[data-record-type="734"]')
              .classList.add('nlm113-notactive-block166392503');
            block
              .closest('[data-record-type="734"]')
              .classList.remove('nlm113-active-block166392503');
            block
              .closest('[data-record-type="734"]')
              .querySelectorAll('.r')
              .forEach(function (item) {
                item.classList.add('nolimAutoScaleFix113');
                item.classList.add('nlm113-notactive-block166392503');
                item.classList.remove('nlm113-active-block166392503');
              });
          } else if (action == 'remove') {
            block.closest('[data-record-type="734"]').classList.remove('nolimAutoScaleFix113');
            block
              .closest('[data-record-type="734"]')
              .classList.remove('nlm113-notactive-block166392503');
            block.closest('[data-record-type="734"]').classList.add('nlm113-active-block166392503');
            block
              .closest('[data-record-type="734"]')
              .querySelectorAll('.r')
              .forEach(function (item) {
                item.classList.add('nlm113-active-block166392503');
                item.classList.remove('nolimAutoScaleFix113');
                item.classList.remove('nlm113-notactive-block166392503');
              });
          }
        }
      }
      let firstBlocksIdArr = Object.values(window.nlm113obj.modId166392503.btns)[0];
      window.nlm113obj.modId166392503.allBlocksArr.forEach(function (item) {
        let block = document.querySelector(item);
        if (!block) return;
        if (block.children[0].className === 't117') {
          let classNameBtn = null;
          Object.keys(window.nlm113obj.modId166392503.btns).forEach(key => {
            const arrKeys = window.nlm113obj.modId166392503.btns[key].split(',');
            arrKeys.forEach(elemId => {
              if ('#' + block.id === elemId) {
                classNameBtn = '.' + key;
              }
            });
          });
          const mapInterval = setInterval(() => {
            const yandexMap = block.querySelector('.ymaps-2-1-79-map');
            const tabBtn = document.querySelector(classNameBtn);
            if (tabBtn && tabBtn.className.includes('nlm113-active')) {
              clearInterval(mapInterval);
              return;
            }
            if (tabBtn) {
              clearInterval(mapInterval);
              if (yandexMap) {
                yandexMap.remove();
              }
              let keyMap = null;
              const mapElement = block.querySelector('.t117_map');
              if (mapElement) {
                const scriptTag = mapElement.querySelector('script');
                if (scriptTag) {
                  const scriptContent = scriptTag.textContent || scriptTag.innerText;
                  const regex = /t_appendYandexMap\([^,]+,\s*["']([^"']+)["']/;
                  const match = scriptContent.match(regex);
                  if (match && match[1]) {
                    keyMap = match[1];
                  }
                }
              }
              let i = 0;
              tabBtn.addEventListener('click', () => {
                if (i === 0) {
                  t_appendYandexMap(block.id.replace('rec', ''), keyMap);
                  i = i + 1;
                }
              });
            }
          }, 50);
          setTimeout(() => clearInterval(mapInterval), 5000);
        }
        if (block.closest('[data-record-type="734"]')) {
          block = block.closest('[data-record-type="734"]');
        }
        if (!firstBlocksIdArr.includes(item)) {
          block.classList.add('nolimAutoScaleFix113');
          block.classList.add('nlm113-notactive-block166392503');
        } else {
          block.classList.add('nlm113-active-block166392503');
        }
        block.setAttribute('nlm113tab-id', tabsId);
        if (block.classList.contains('r_hidden')) {
          block.classList.replace('r_hidden', 'r_showed');
        }
        block.querySelectorAll('[data-elem-type="video"]').forEach(function (vid) {
          if (
            vid.querySelector('.tn-atom').hasAttribute('data-atom-video-has-cover') &&
            vid.querySelector('.tn-atom').getAttribute('data-atom-video-has-cover') == 'y'
          ) {
            if (vid.querySelector('.tn-atom').hasAttribute('data-original')) {
              let bgImg = vid.querySelector('.tn-atom').getAttribute('data-original');
              vid.querySelector('.tn-atom').setAttribute('init-bg-img', `url("${bgImg}")`);
            }
          }
        });
      });
      let btnInitInt = setInterval(function () {
        let btnsList = Object.keys(window.nlm113obj.modId166392503.btns);
        let btnsLoadedList = [];
        btnsList.forEach(function (item) {
          if (document.querySelector('.' + item)) {
            btnsLoadedList.push(true);
          } else {
            btnsLoadedList.push(false);
          }
        });
        if (!btnsLoadedList.includes(false)) {
          clearInterval(btnInitInt);
          for (let i = 0; i < btnsList.length; i++) {
            document.querySelector('.' + btnsList[i]).classList.add('nlm113-btn');
            if (i == 0) {
              document.querySelector('.' + btnsList[i]).classList.add('nlm113-active-btn166392503');
            } else {
              document
                .querySelector('.' + btnsList[i])
                .classList.add('nlm113-notactive-btn166392503');
            }
          }

          window.nlm113obj.modId166392503.allClassesArr.forEach(function (item) {
            let btn = document.querySelector('.' + item);
            btn.addEventListener('click', function (e) {
              const isPlayingAnimEls = document.querySelectorAll('.t-sbs-anim_playing');
              if (isPlayingAnimEls.length > 0) {
                isPlayingAnimEls.forEach(function (item) {
                  item.classList.remove('t-sbs-anim_playing');
                });
              }
              e.preventDefault();
              function stopInactiveSlideVideos() {
                const slideSelector = '.nlm113-notactive-block864614574';
                const inactiveSlides = document.querySelectorAll(slideSelector);
                inactiveSlides.forEach(slide => {
                  slide
                    .querySelectorAll('[data-elem-type="video"], [data-elem-type="html"]')
                    .forEach(function (vid) {
                      if (vid.querySelector('iframe')) {
                        if (vid.getAttribute('data-elem-type') == 'video') {
                          vid.querySelector('iframe').remove();
                          t396_initVideo(vid);
                        } else if (vid.getAttribute('data-elem-type') == 'html') {
                          vid
                            .querySelector('iframe')
                            .setAttribute('src', vid.querySelector('iframe').getAttribute('src'));
                        }
                        if (vid.querySelector('.tn-atom').hasAttribute('init-bg-img')) {
                          vid.querySelector('.tn-atom').style.backgroundImage = vid
                            .querySelector('.tn-atom')
                            .getAttribute('init-bg-img');
                          if (vid.querySelector('.tn-atom .tn-atom__video-play-link')) {
                            vid.querySelector('.tn-atom .tn-atom__video-play-link').style.display =
                              'inline-block';
                          }
                        }
                      } else if (vid.querySelector('video')) {
                        vid.querySelector('video').pause();
                      }
                    });
                });
              }
              window.nlm113obj.modId166392503.allClassesArr.forEach(function (item) {
                document.querySelector('.' + item).classList.remove('nlm113-active-btn166392503');
                document.querySelector('.' + item).classList.add('nlm113-notactive-btn166392503');
              });
              btn.classList.add('nlm113-active-btn166392503');
              btn.classList.remove('nlm113-notactive-btn166392503');
              document.querySelectorAll('.nlm113-active-block166392503').forEach(function (blk) {
                blk.classList.add('nolimAutoScaleFix113');
                hideShowFix087(blk, 'add', item);
                blk.classList.remove('nlm113-active-block166392503');
                blk.classList.add('nlm113-notactive-block166392503');
                removeAnimation('#' + blk.id);
              });
              document
                .querySelectorAll(window.nlm113obj.modId166392503.btns[item])
                .forEach(function (blk) {
                  let hasNlmBtn = blk.querySelector('.nlm113-btn') !== null;
                  if (hasNlmBtn) {
                    let hasNlmActiveClass = Array.from(blk.classList).some(className =>
                      className.includes('nlm113-active')
                    );
                  }
                  if (!blk.classList.contains('nlm061-hide')) {
                    const HiddenChildElements = blk.querySelectorAll('.nolimAutoScaleFix113');
                    if (HiddenChildElements.length > 0) {
                      HiddenChildElements.forEach(childElement => {
                        childElement.classList.remove('nolimAutoScaleFix113');
                        childElement.classList.remove('nlm113-notactive-block166392503');
                        childElement.classList.add('nlm113-active-block166392503');
                      });
                    }
                    blk.classList.remove('nolimAutoScaleFix113');
                  }
                  hideShowFix087(blk, 'remove', item);
                  blk.classList.add('nlm113-active-block166392503');
                  blk.classList.remove('nlm113-notactive-block166392503');
                  let nlmNotActiveClasses = Array.from(blk.classList).filter(className =>
                    className.includes('nlm113-notactive')
                  );
                  if (nlmNotActiveClasses.length > 0) {
                    blk.classList.add('nolimAutoScaleFix113');
                  }
                  stopInactiveSlideVideos();
                  function executeScriptInsideElement(element) {
                    const scriptTags = element.getElementsByTagName('script');
                    for (let i = 0; i < scriptTags.length; i++) {
                      const script = scriptTags[i].textContent;
                      const scriptElement = document.createElement('script');
                      scriptElement.textContent = script;
                      element.appendChild(scriptElement);
                      element.removeChild(scriptElement);
                    }
                  }
                  if (
                    blk.hasAttribute('data-record-type') &&
                    blk.getAttribute('data-record-type') == '979'
                  ) {
                    let blkId = blk.id.replace('rec', '');
                    if (!isFirstOpen['block979'][blkId]) {
                      executeScriptInsideElement(blk);
                    }
                    isFirstOpen['block979'][blkId] = true;
                  }
                  if (
                    blk.hasAttribute('data-record-type') &&
                    blk.getAttribute('data-record-type') == '754'
                  ) {
                    t754__alignButtons_init(blk.id.replace('rec', ''));
                  }
                  if (
                    blk.hasAttribute('data-record-type') &&
                    blk.getAttribute('data-record-type') == '776'
                  ) {
                    t776__alignButtons_init(blk.id.replace('rec', ''));
                  }
                  if (
                    blk.hasAttribute('data-record-type') &&
                    blk.getAttribute('data-record-type') == '778'
                  ) {
                    t778__alignButtons_init(blk.id.replace('rec', ''));
                  }
                  if (
                    blk.hasAttribute('data-record-type') &&
                    blk.getAttribute('data-record-type') == '786'
                  ) {
                    t786__alignButtons_init(blk.id.replace('rec', ''));
                  }
                  addAnimation('#' + blk.id);
                  if (typeof t_slds_updateSlider != 'undefined') {
                    let blockNumber = blk.id.replace('rec', '');
                    t_slds_updateSlider(blockNumber);
                  }
                  setTimeout(function () {
                    t396_allelems__renderView(blk.querySelector('.t396__artboard'));
                  }, 100);
                });
              if (typeof t_animationExt__init != 'undefined') {
                t_animationExt__init();
              }
              setTimeout(function () {
                window.t_animateSbs__rereadElsValues
                  ? t_animateSbs__rereadElsValues(myOpts)
                  : t_animationSBS__changeElValues(myOpts);
              }, 0);
              if ('y' === window.lazy) {
                t_lazyload_update();
              }
              if (isScrollToTop) {
                let nextBlock = document.querySelector(
                  window.nlm113obj.modId166392503.btns[item].replace(/\s+/g, '').split(',')[0]
                );
                function scrollSlideToTop() {
                  let v = 0.8;
                  let w = window.pageYOffset,
                    t = nextBlock.getBoundingClientRect().top,
                    start = null;
                  requestAnimationFrame(step);
                  function step(time) {
                    if (start === null) start = time;
                    let progress = time - start,
                      r =
                        t < 0
                          ? Math.max(w - progress / v, w + t)
                          : Math.min(w + progress / v, w + t);
                    window.scrollTo(0, r);
                    if (r != w + t) {
                      requestAnimationFrame(step);
                    }
                  }
                }
                scrollSlideToTop();
              }
              window.t_animateSbs__initAllRes
                ? window.t_animateSbs__initAllRes()
                : window.t_animationSBS__initAllRes(false);
              slidesNotChangeYet = false;
            });
          });
          if (window.location.hash.includes(`nlm${tabsId}`)) {
            document
              .querySelector('.' + window.location.hash.replace(`#nlm${tabsId}-`, ''))
              .click();
          }
        }
      }, 10);
      function removeAnimation(blk) {
        let block = document.querySelector(blk);
        let elemList = block.querySelectorAll('.t396__elem');
        elemList.forEach(function (el) {
          if (
            el.hasAttribute('data-animate-sbs-event') &&
            el.getAttribute('data-animate-sbs-event') != 'hover' &&
            el.getAttribute('data-animate-sbs-event') != 'click' &&
            el.getAttribute('data-animate-sbs-event') != 'scroll'
          ) {
            el.classList.remove('t-sbs-anim_started');
          }
          if (el.classList.contains('t-sbs-anim_reversed')) {
            el.classList.remove('t-sbs-anim_reversed');
            el.classList.remove('t-sbs-anim_started');
          }
          if (el.hasAttribute('data-animate-style')) {
            if (el.hasAttribute('data-animate-delay')) {
              el.style.transitionDelay = '0s';
            }
            if (el.hasAttribute('data-animate-duration')) {
              el.style.transitionDuration = '0s';
            }
            el.classList.remove('t-animate_started');
          }
        });
      }
      function addAnimation(blk) {
        let block = document.querySelector(blk);
        let elemList = block.querySelectorAll('.t396__elem');
        elemList.forEach(function (el) {
          if (
            el.hasAttribute('data-animate-sbs-event') &&
            el.getAttribute('data-animate-sbs-event') != 'hover' &&
            el.getAttribute('data-animate-sbs-event') != 'click' &&
            el.getAttribute('data-animate-sbs-event') != 'scroll'
          ) {
            el.classList.add('t-sbs-anim_started');
          }
          if (el.hasAttribute('data-animate-style')) {
            if (el.hasAttribute('data-animate-delay')) {
              el.style.transitionDelay = el.getAttribute('data-animate-delay') + 's';
            }
            if (el.hasAttribute('data-animate-duration')) {
              el.style.transitionDuration = el.getAttribute('data-animate-duration') + 's';
            }
            el.classList.add('t-animate_started');
          }
        });
      }
      function checkTopAndAnimate() {
        if (slidesNotChangeYet) {
          let blocks = document.querySelectorAll(
            Object.values(window.nlm113obj.modId166392503.btns)[0]
          );
          blocks.forEach(function (block) {
            let elemList = block.querySelectorAll(
              '.t-animate, .t396__elem[data-animate-sbs-event]'
            );
            elemList.forEach(function (el) {
              let h3 = el.clientHeight / 1000;
              scrollEvent =
                window.pageYOffset >
                el.getBoundingClientRect().top +
                  window.pageYOffset -
                  document.documentElement.clientHeight +
                  h3;
              if (scrollEvent) {
                if (
                  el.hasAttribute('data-animate-sbs-event') &&
                  el.getAttribute('data-animate-sbs-event') != 'hover' &&
                  el.getAttribute('data-animate-sbs-event') != 'click' &&
                  el.getAttribute('data-animate-sbs-event') != 'scroll'
                ) {
                  el.classList.add('t-sbs-anim_started');
                }
                if (el.hasAttribute('data-animate-style')) {
                  if (el.hasAttribute('data-animate-delay')) {
                    el.style.transitionDelay = el.getAttribute('data-animate-delay') + 's';
                  }
                  if (el.hasAttribute('data-animate-duration')) {
                    el.style.transitionDuration = el.getAttribute('data-animate-duration') + 's';
                  }
                  el.classList.add('t-animate_started');
                }
              }
            });
          });
        }
      }
      window.addEventListener('scroll', function () {
        checkTopAndAnimate();
      });
      checkTopAndAnimate();
      for (let i = 1; i < window.nlm113obj.modId166392503.allClassesArr.length; i++) {
        document
          .querySelectorAll(Object.values(window.nlm113obj.modId166392503.btns)[i])
          .forEach(function (item) {
            removeAnimation('#' + item.id);
          });
      }
    }
  });
})();

(function () {
  let delay = 0;
  if (window.nlm087obj && window.nlm087obj.blocksArrObj) {
    Object.keys(window.nlm087obj.blocksArrObj).forEach(_ => (delay += 50));
  }
  setTimeout(() => {
    (function () {
      let sliderId = '173661124';
      let blocks = '#rec1015952281,#rec1015945351,#rec1015956506,#rec1015957391,#rec1015957926';
      let isAnimationOnce = false;
      let isSliderCircle = true;
      let scrollToTop = false;
      let rewindVideo = false;
      let controlsSelect = 'inMod';
      let controlsType = 'onlyDots';
      let nextBtnClass = 'nlm079-next';
      let prevBtnClass = 'nlm079-prev';
      let tabsLink = '#nlm079-tabs';
      let standartArrow = true;
      let arrowType = '0.5,0.5 6.5,6.5 0.5,12.5';
      let animationSpeed = '2';
      let autoPlaySpeed = '10000';
      let autoPlayOffOnHover = false;
      let autoPlayOffOnMobile = false;
      let swipeMouseOnDesktop = false;
      let arrowsPosition = '0';
      let arrowsPositionMobile = '0';
      let dotsPosition = '3';
      let dotsPositionMobile = '3';
      let paddingRightLeftArrows = 10;
      let paddingBetweenArrows = 10;
      let paddingRightLeftDots = 10;
      let paddingBetweenDots = 10;
      let circleSize = 30;
      let circleSizeOnMobile = 24;
      let arrowSize = 7;
      let arrowSizeOnMobile = 6;
      let miniaturesDots = false;
      let miniatureLinksList = [''];
      let gridModeArrows = false;
      let gridModeDots = false;
      let swipeOffOnMobile = false;
      let myOpts;
      let blocksID = 0;
      let slidesNotChangeYet = true;
      let divForReadyMode = document.querySelector('.nlm-087mode-in-the-house-173661124');
      if (!window.nlm087obj) {
        window.nlm087obj = {
          buttonsList: [],
          bulletsList: [],
          autoPlayOffOnHover: [],
          autoPlayOffOnMobile: [],
          mouseSwipeOn: [],
          animOnceArrObj: {},
          blocksArrObj: {},
          animationDelay: {},
          swipeOffOnMobile: [],
          errorForGallery: {},
          isSlidersLoaded: {},
          rewindVideo: [],
        };
      }
      window.nlm087obj.buttonsList.push(nextBtnClass);
      window.nlm087obj.buttonsList.push(prevBtnClass);
      window.nlm087obj.bulletsList.push(tabsLink);
      if (autoPlayOffOnHover) {
        window.nlm087obj.autoPlayOffOnHover.push(sliderId);
      }
      if (autoPlayOffOnMobile) {
        window.nlm087obj.autoPlayOffOnMobile.push(sliderId);
      }
      if (swipeMouseOnDesktop) {
        window.nlm087obj.mouseSwipeOn.push(sliderId);
      }
      if (swipeOffOnMobile) {
        window.nlm087obj.swipeOffOnMobile.push(sliderId);
      }
      if (rewindVideo) {
        window.nlm087obj.rewindVideo.push(sliderId);
      }
      if (animationSpeed == '0') {
        window.nlm087obj.animationDelay[`${sliderId}`] = 0;
      } else if (animationSpeed == '1') {
        window.nlm087obj.animationDelay[`${sliderId}`] = 300;
      } else if (animationSpeed == '2') {
        window.nlm087obj.animationDelay[`${sliderId}`] = 500;
      }
      window.nlm087obj.errorForGallery[`${sliderId}`] = false;
      let blocksArr = blocks.replace(/\s+/g, '').split(',');
      let firstSlideClone = blocksArr[0] + '1';
      let lastSlideClone = blocksArr[blocksArr.length - 1] + '1';
      let clonesArr = [];
      clonesArr.push(firstSlideClone);
      clonesArr.push(lastSlideClone);
      let slidesAmount = blocksArr.length;
      window.nlm087obj.isSlidersLoaded[`${sliderId}`] = false;
      if (
        (controlsSelect == 'inMod' || controlsSelect == 'combi') &&
        (controlsType == 'arrowsAndDots' || controlsType == 'onlyDots') &&
        miniaturesDots &&
        blocksArr.length != miniatureLinksList.length
      ) {
        alert('Количество загруженных миниатюр не соответствует количеству слайдов!');
      }
      function scrollSlideToTop(pos, slider) {
        let nextBlock = slider.querySelector(`[data-slide-index="${pos}"]`);
        let v = 0.8;
        let w = window.pageYOffset,
          t = nextBlock.getBoundingClientRect().top,
          start = null;
        requestAnimationFrame(step);
        function step(time) {
          if (start === null) start = time;
          let progress = time - start,
            r = t < 0 ? Math.max(w - progress / v, w + t) : Math.min(w + progress / v, w + t);
          window.scrollTo(0, r);
          if (r != w + t) {
            requestAnimationFrame(step);
          }
        }
      }
      function removeAnimation(blk) {
        let blocks = document.querySelectorAll(blk);
        blocks.forEach(function (item) {
          let elemList = item.querySelectorAll('.t396__elem');
          elemList.forEach(function (el) {
            if (
              el.hasAttribute('data-animate-sbs-event') &&
              el.getAttribute('data-animate-sbs-event') != 'hover' &&
              el.getAttribute('data-animate-sbs-event') != 'click' &&
              el.getAttribute('data-animate-sbs-event') != 'scroll'
            ) {
              el.classList.remove('t-sbs-anim_started');
            }
            if (el.classList.contains('t-sbs-anim_reversed')) {
              el.classList.remove('t-sbs-anim_reversed');
              el.classList.remove('t-sbs-anim_started');
            }
            if (el.classList.contains('t-sbs-anim_playing')) {
              el.classList.remove('t-sbs-anim_playing');
            }
            if (el.hasAttribute('data-animate-style')) {
              if (el.hasAttribute('data-animate-delay')) {
                el.style.transitionDelay = '0s';
              }
              if (el.hasAttribute('data-animate-duration')) {
                el.style.transitionDuration = '0s';
              }
              el.classList.remove('t-animate_started');
            }
          });
        });
      }
      function addAnimation(blk) {
        let blocks = document.querySelectorAll(blk);
        blocks.forEach(function (item) {
          let elemList = item.querySelectorAll('.t396__elem');
          elemList.forEach(function (el) {
            if (
              el.hasAttribute('data-animate-sbs-event') &&
              el.getAttribute('data-animate-sbs-event') != 'hover' &&
              el.getAttribute('data-animate-sbs-event') != 'click' &&
              el.getAttribute('data-animate-sbs-event') != 'scroll'
            ) {
              el.classList.add('t-sbs-anim_started');
            }
            if (el.hasAttribute('data-animate-style')) {
              if (el.hasAttribute('data-animate-delay')) {
                el.style.transitionDelay = el.getAttribute('data-animate-delay') + 's';
              }
              if (el.hasAttribute('data-animate-duration')) {
                el.style.transitionDuration = el.getAttribute('data-animate-duration') + 's';
              }
              el.classList.add('t-animate_started');
            }
          });
        });
      }
      let animOnceArr = [];
      blocksArr.forEach(function (item) {
        animOnceArr.push(false);
      });
      animOnceArr[blocksID] = isAnimationOnce;
      window.nlm087obj.animOnceArrObj[`${sliderId}`] = animOnceArr;
      window.nlm087obj.blocksArrObj[`${sliderId}`] = blocksArr;
      let isFuncChange = false;
      if (tabsLink != '' && tabsLink != '#') {
        if (typeof window.nlm079tabs == 'undefined') {
          window.nlm079tabs = [];
          window.nlm079tabs.push(tabsLink);
        } else {
          window.nlm079tabs.push(tabsLink);
        }
      }
      const checkTildaFuncs = new Promise((resolve, reject) => {
        let int = setInterval(function () {
          if (window.t396_init != undefined && window.t734_init != undefined) {
            clearInterval(int);
            resolve('ok');
          }
        }, 10);
        setTimeout(function () {
          if (window.t396_init == undefined || window.t734_init == undefined) {
            reject('tilda func not available');
          }
        }, 10000);
      });
      checkTildaFuncs
        .then(data => {
          startMod();
        })
        .then(() => {
          divForReadyMode.dataset.modeReady = 'yes';
        })
        .catch(error => {
          console.log(error);
        });
      function startMod() {
        function t_ready(e) {
          'loading' != document.readyState
            ? e()
            : document.addEventListener
            ? document.addEventListener('DOMContentLoaded', e)
            : document.attachEvent('onreadystatechange', function () {
                'loading' != document.readyState && e();
              });
        }
        let int1 = setInterval(function () {
          if (window.t_slds_initSliderControls != undefined) {
            clearInterval(int1);
            window.t_slds_initSliderControls = function (rec, sliderOptions) {
              if (typeof rec === 'string' && rec.includes('nlm')) {
                var sliderRec =
                  typeof rec === 'object' ? rec[0] : document.querySelector('#rec' + rec);
                if (!sliderRec) return;
                var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper');
                if (!sliderWrapper) return;
                var itemsInRow = sliderWrapper.getAttribute('data-slider-items-in-row') || 0;
                var sliderItem = sliderRec.querySelector('.t-slds__container .t-slds__item');
                var sliderContainer = sliderRec.querySelector('.t-slds__container');
                var sliderWidth =
                  itemsInRow > 0 && sliderItem && sliderContainer
                    ? sliderItem.offsetWidth
                    : sliderContainer.offsetWidth;
                var stopSlider = sliderWrapper.getAttribute('data-slider-stop');
                if (stopSlider == 'true') return false;
                sliderWrapper.style.transform = 'translateX(-' + sliderWidth + 'px)';
                var arrowWrapper = sliderRec.querySelectorAll(
                  `.t-slds__arrow_wrapper, .${window.nlm087obj.buttonsList.join(', .')}`
                );
                let animOnceArr =
                  window.nlm087obj.animOnceArrObj[
                    `${sliderRec.id.replace('rec', '').replace('nlm', '')}`
                  ];
                let blocksArr =
                  window.nlm087obj.blocksArrObj[
                    `${sliderRec.id.replace('rec', '').replace('nlm', '')}`
                  ];
                if (isSliderCircle) {
                  let firstSlide = sliderWrapper.querySelector(
                    '.t-slds__item[data-slide-index="0"]'
                  );
                  const classChangeHandler = mutationsList => {
                    for (let mutation of mutationsList) {
                      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if (firstSlide.classList.contains('t-slds__item-innactive')) {
                          firstSlide.classList.remove('t-slds__item-innactive');
                        }
                      }
                    }
                  };
                  const observer = new MutationObserver(classChangeHandler);
                  const config = { attributes: true, attributeFilter: ['class'] };
                  observer.observe(firstSlide, config);
                }
                let bulletsListInTildaFunc = [];
                window.nlm087obj.bulletsList.forEach(function (item) {
                  item = "[href*='" + item + "']";
                  bulletsListInTildaFunc.push(item);
                });
                sliderRec.addEventListener(
                  'click',
                  function (e) {
                    let isBreak = false;
                    for (
                      let target = e.target;
                      target && target != this;
                      target = target.parentNode
                    ) {
                      for (let i = 0; i < bulletsListInTildaFunc.length; i++) {
                        if (
                          target.matches(bulletsListInTildaFunc[i]) ||
                          target.matches('.t-slds__bullet')
                        ) {
                          let prevPosition = sliderWrapper.getAttribute('data-slider-pos');
                          var currentTranslate = t_slds_getCurrentTranslate(sliderRec);
                          var position = parseFloat(target.getAttribute('data-slide-bullet-for'));
                          sliderWrapper.setAttribute('data-slider-pos', position);
                          t_slideMoveWithoutAnimation(rec, false, sliderOptions, currentTranslate);
                          t_slds_updateSlider(rec);
                          if (scrollToTop) {
                            scrollSlideToTop(position, sliderRec);
                          }
                          setTimeout(function () {
                            if (
                              document.querySelector(
                                `#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`
                              )
                            ) {
                              document
                                .querySelector(
                                  `#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`
                                )
                                .remove();
                            }
                            slidesNotChangeYet = false;
                            if (sliderWrapper.getAttribute('data-slider-pos') > blocksArr.length) {
                              blocksID = 0;
                            } else if (sliderWrapper.getAttribute('data-slider-pos') == 0) {
                              blocksID = blocksArr.length - 1;
                            } else {
                              blocksID = sliderWrapper.getAttribute('data-slider-pos') - 1;
                            }
                            window.t_animateSbs__initAllRes
                              ? window.t_animateSbs__initAllRes()
                              : window.t_animationSBS__initAllRes(false);
                            setTimeout(function () {
                              window.t_animateSbs__rereadElsValues
                                ? t_animateSbs__rereadElsValues(myOpts)
                                : t_animationSBS__changeElValues(myOpts);
                            }, 0);
                            if (!animOnceArr[blocksID]) {
                              for (let i = 0; i < blocksArr.length; i++) {
                                if (i != blocksID) {
                                  if (!animOnceArr[i]) {
                                    removeAnimation(blocksArr[i]);
                                  }
                                }
                              }
                              addAnimation(blocksArr[blocksID]);
                              animOnceArr[blocksID] = isAnimationOnce;
                            }
                            if (isAnimationOnce && blocksID == blocksArr.length - 1) {
                              removeAnimation(clonesArr[1]);
                              addAnimation(clonesArr[1]);
                              document
                                .querySelectorAll(
                                  `${clonesArr[1]} [data-animate-sbs-event="blockintoview"] .tn-atom__sbs-anim-wrapper, ${clonesArr[1]} [data-animate-sbs-event="intoview"] .tn-atom__sbs-anim-wrapper`
                                )
                                .forEach(function (item) {
                                  item.style.animationDuration = '0s';
                                });
                              document
                                .querySelectorAll(
                                  `${clonesArr[1]} .t396__elem.t-animate, ${clonesArr[1]} .t396__elem.t-animate`
                                )
                                .forEach(function (item) {
                                  item.style.transitionDuration = '0s';
                                });
                            }
                            if ('y' === window.lazy) {
                              t_lazyload_update();
                            }
                            if (typeof t_slds_updateSlider != 'undefined') {
                              t_slds_updateSlider(rec);
                            }
                            if (typeof t_animationExt__init != 'undefined') {
                              t_animationExt__init();
                            }
                            setTimeout(function () {
                              t396_allelems__renderView(
                                document.querySelector(blocksArr[blocksID] + ' .t396__artboard')
                              );
                            }, 100);
                            let slideWithVideoAutoplay = document.querySelector(
                              `#rec${rec} ul.t-slds__items-wrapper li.t-slds__item_active:not([aria-hidden="true"])`
                            );
                            if (slideWithVideoAutoplay) {
                              slideWithVideoAutoplay
                                .querySelectorAll('[data-field-autoplay-value="y"]')
                                .forEach(function (vid) {
                                  if (vid.querySelector('video') && !vid.querySelector('iframe')) {
                                    setTimeout(function () {
                                      vid.querySelector('video').play();
                                    }, 300);
                                  }
                                });
                              slideWithVideoAutoplay
                                .querySelectorAll('[data-elem-type="html"]')
                                .forEach(function (vid) {
                                  if (vid.querySelector('video[autoplay]')) {
                                    setTimeout(function () {
                                      vid.querySelector('video[autoplay]').play();
                                    }, 300);
                                  }
                                });
                            }
                          }, window
                            .nlm087obj.animationDelay[`${sliderRec.id.replace('rec', '').replace('nlm', '')}`]);
                          let slideWithVideo = document.querySelector(
                            `#rec${rec} ul.t-slds__items-wrapper li[data-slide-index="${prevPosition}"]:not(:first-child):not(:last-child)`
                          );
                          if (slideWithVideo) {
                            slideWithVideo
                              .querySelectorAll('[data-elem-type="video"], [data-elem-type="html"]')
                              .forEach(function (vid) {
                                if (vid.querySelector('iframe')) {
                                  if (vid.getAttribute('data-elem-type') == 'video') {
                                    vid.querySelector('iframe').remove();
                                    t396_initVideo(vid);
                                  } else if (vid.getAttribute('data-elem-type') == 'html') {
                                    vid
                                      .querySelector('iframe')
                                      .setAttribute(
                                        'src',
                                        vid.querySelector('iframe').getAttribute('src')
                                      );
                                  }
                                  if (vid.querySelector('.tn-atom').hasAttribute('init-bg-img')) {
                                    vid.querySelector('.tn-atom').style.backgroundImage = vid
                                      .querySelector('.tn-atom')
                                      .getAttribute('init-bg-img');
                                    if (vid.querySelector('.tn-atom .tn-atom__video-play-link')) {
                                      vid.querySelector(
                                        '.tn-atom .tn-atom__video-play-link'
                                      ).style.display = 'inline-block';
                                    }
                                  }
                                } else if (vid.querySelector('video')) {
                                  vid.querySelector('video').pause();
                                  if (
                                    !window.nlm087obj.rewindVideo.includes(
                                      sliderRec.id.replace('rec', '').replace('nlm', '')
                                    )
                                  ) {
                                    vid.querySelector('video').currentTime = 0;
                                  }
                                }
                              });
                          }
                          isBreak = true;
                          break;
                        }
                      }
                      if (isBreak) {
                        break;
                      }
                      for (let j = 0; j < window.nlm087obj.buttonsList.length; j++) {
                        if (
                          target.matches('.' + window.nlm087obj.buttonsList[j]) ||
                          target.matches('.t-slds__arrow_wrapper')
                        ) {
                          var currentTranslate = t_slds_getCurrentTranslate(sliderRec);
                          var isAnimated = sliderWrapper.getAttribute('data-slider-animated');
                          var position = parseFloat(sliderWrapper.getAttribute('data-slider-pos'));
                          let prevPosition = position;
                          var totalSlides = parseFloat(
                            sliderWrapper.getAttribute('data-slider-totalslides')
                          );
                          var isCycled = sliderWrapper.getAttribute('data-slider-with-cycle');
                          var cycle = '';
                          if (isAnimated == '') {
                            sliderWrapper.setAttribute('data-slider-animated', 'yes');
                            var direction = target.getAttribute('data-slide-direction');
                            if (direction === 'left') {
                              if (isCycled == 'false' && position == 1) {
                                position = 1;
                              } else {
                                position--;
                              }
                            } else if (isCycled == 'false' && position == totalSlides) {
                              position = totalSlides;
                            } else {
                              position++;
                            }
                            sliderWrapper.setAttribute('data-slider-pos', position);
                            if (position == totalSlides + 1 || position == 0) {
                              cycle = 'yes';
                            }
                            sliderWrapper.setAttribute('data-slider-cycle', cycle);
                            t_slideMoveWithoutAnimation(
                              rec,
                              false,
                              sliderOptions,
                              currentTranslate
                            );
                          }
                          t_slds_updateSlider(rec);
                          if (scrollToTop) {
                            scrollSlideToTop(position, sliderRec);
                          }
                          setTimeout(function () {
                            if (
                              document.querySelector(
                                `#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`
                              )
                            ) {
                              document
                                .querySelector(
                                  `#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`
                                )
                                .remove();
                            }
                            slidesNotChangeYet = false;
                            if (sliderWrapper.getAttribute('data-slider-pos') > blocksArr.length) {
                              blocksID = 0;
                            } else if (sliderWrapper.getAttribute('data-slider-pos') == 0) {
                              blocksID = blocksArr.length - 1;
                            } else {
                              blocksID = sliderWrapper.getAttribute('data-slider-pos') - 1;
                            }
                            window.t_animateSbs__initAllRes
                              ? window.t_animateSbs__initAllRes()
                              : window.t_animationSBS__initAllRes(false);
                            setTimeout(function () {
                              window.t_animateSbs__rereadElsValues
                                ? t_animateSbs__rereadElsValues(myOpts)
                                : t_animationSBS__changeElValues(myOpts);
                            }, 0);
                            if (!animOnceArr[blocksID]) {
                              for (let i = 0; i < blocksArr.length; i++) {
                                if (i != blocksID) {
                                  if (!animOnceArr[i]) {
                                    removeAnimation(blocksArr[i]);
                                  }
                                }
                              }
                              addAnimation(blocksArr[blocksID]);
                              animOnceArr[blocksID] = isAnimationOnce;
                            }
                            if (isAnimationOnce && blocksID == blocksArr.length - 1) {
                              removeAnimation(clonesArr[1]);
                              addAnimation(clonesArr[1]);
                              document
                                .querySelectorAll(
                                  `${clonesArr[1]} [data-animate-sbs-event="blockintoview"] .tn-atom__sbs-anim-wrapper, ${clonesArr[1]} [data-animate-sbs-event="intoview"] .tn-atom__sbs-anim-wrapper`
                                )
                                .forEach(function (item) {
                                  item.style.animationDuration = '0s';
                                });
                              document
                                .querySelectorAll(
                                  `${clonesArr[1]} .t396__elem.t-animate, ${clonesArr[1]} .t396__elem.t-animate`
                                )
                                .forEach(function (item) {
                                  item.style.transitionDuration = '0s';
                                });
                            }
                            if ('y' === window.lazy) {
                              t_lazyload_update();
                            }
                            if (typeof t_slds_updateSlider != 'undefined') {
                              t_slds_updateSlider(rec);
                            }
                            if (typeof t_animationExt__init != 'undefined') {
                              t_animationExt__init();
                            }
                            setTimeout(function () {
                              t396_allelems__renderView(
                                document.querySelector(blocksArr[blocksID] + ' .t396__artboard')
                              );
                            }, 100);
                            let slideWithVideoAutoplay = document.querySelector(
                              `#rec${rec} ul.t-slds__items-wrapper li.t-slds__item_active:not([aria-hidden="true"])`
                            );
                            if (slideWithVideoAutoplay) {
                              slideWithVideoAutoplay
                                .querySelectorAll('[data-field-autoplay-value="y"]')
                                .forEach(function (vid) {
                                  if (vid.querySelector('video') && !vid.querySelector('iframe')) {
                                    setTimeout(function () {
                                      vid.querySelector('video').play();
                                    }, 300);
                                  }
                                });
                              slideWithVideoAutoplay
                                .querySelectorAll('[data-elem-type="html"]')
                                .forEach(function (vid) {
                                  if (vid.querySelector('video[autoplay]')) {
                                    setTimeout(function () {
                                      vid.querySelector('video[autoplay]').play();
                                    }, 300);
                                  }
                                });
                            }
                          }, window
                            .nlm087obj.animationDelay[`${sliderRec.id.replace('rec', '').replace('nlm', '')}`]);
                          let slideWithVideo = document.querySelector(
                            `#rec${rec} ul.t-slds__items-wrapper li[data-slide-index="${prevPosition}"]:not(:first-child):not(:last-child)`
                          );
                          if (slideWithVideo) {
                            slideWithVideo
                              .querySelectorAll('[data-elem-type="video"], [data-elem-type="html"]')
                              .forEach(function (vid) {
                                if (vid.querySelector('iframe')) {
                                  if (vid.getAttribute('data-elem-type') == 'video') {
                                    vid.querySelector('iframe').remove();
                                    t396_initVideo(vid);
                                  } else if (vid.getAttribute('data-elem-type') == 'html') {
                                    vid
                                      .querySelector('iframe')
                                      .setAttribute(
                                        'src',
                                        vid.querySelector('iframe').getAttribute('src')
                                      );
                                  }
                                  if (vid.querySelector('.tn-atom').hasAttribute('init-bg-img')) {
                                    vid.querySelector('.tn-atom').style.backgroundImage = vid
                                      .querySelector('.tn-atom')
                                      .getAttribute('init-bg-img');
                                    if (vid.querySelector('.tn-atom .tn-atom__video-play-link')) {
                                      vid.querySelector(
                                        '.tn-atom .tn-atom__video-play-link'
                                      ).style.display = 'inline-block';
                                    }
                                  }
                                } else if (vid.querySelector('video')) {
                                  vid.querySelector('video').pause();
                                  if (
                                    !window.nlm087obj.rewindVideo.includes(
                                      sliderRec.id.replace('rec', '').replace('nlm', '')
                                    )
                                  ) {
                                    vid.querySelector('video').currentTime = 0;
                                  }
                                }
                              });
                          }
                          isBreak = true;
                          break;
                        }
                      }
                      if (isBreak) {
                        break;
                      }
                    }
                  },
                  false
                );
              } else {
                var sliderRec =
                  typeof rec === 'object' ? rec[0] : document.querySelector('#rec' + rec);
                if (!sliderRec) return;
                var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper');
                if (!sliderWrapper) return;
                var itemsInRow = sliderWrapper.getAttribute('data-slider-items-in-row') || 0;
                var sliderItem = sliderRec.querySelector('.t-slds__container .t-slds__item');
                var sliderContainer = sliderRec.querySelector('.t-slds__container');
                var sliderWidth =
                  itemsInRow > 0 && sliderItem && sliderContainer
                    ? sliderItem.offsetWidth
                    : sliderContainer.offsetWidth;
                var stopSlider = sliderWrapper.getAttribute('data-slider-stop');
                if (stopSlider === 'true') return;
                sliderWrapper.style.transform = 'translateX(-' + sliderWidth + 'px)';
                var arrowWrapper = sliderRec.querySelectorAll('.t-slds__arrow_wrapper');
                if (arrowWrapper.length) {
                  Array.prototype.forEach.call(arrowWrapper, function (wrapper) {
                    wrapper.addEventListener('click', function () {
                      var currentTranslate = t_slds_getCurrentTranslate(sliderRec);
                      var isAnimated = sliderWrapper.getAttribute('data-slider-animated');
                      var position = parseFloat(sliderWrapper.getAttribute('data-slider-pos'));
                      var totalSlides = parseFloat(
                        sliderWrapper.getAttribute('data-slider-totalslides')
                      );
                      var isCycled = sliderWrapper.getAttribute('data-slider-with-cycle');
                      var cycle = '';
                      if (isAnimated == '') {
                        sliderWrapper.setAttribute('data-slider-animated', 'yes');
                        var direction = this.getAttribute('data-slide-direction');
                        if (direction === 'left') {
                          if (isCycled == 'false' && position == 1) {
                            position = 1;
                          } else {
                            position--;
                          }
                        } else if (isCycled == 'false' && position == totalSlides) {
                          position = totalSlides;
                        } else {
                          position++;
                        }
                        sliderWrapper.setAttribute('data-slider-pos', position);
                        if (position == totalSlides + 1 || position == 0) {
                          cycle = 'yes';
                        }
                        sliderWrapper.setAttribute('data-slider-cycle', cycle);
                        t_slideMoveWithoutAnimation(rec, false, sliderOptions, currentTranslate);
                      }
                      t_slds_updateSlider(rec);
                    });
                  });
                }
                var bullets = sliderRec.querySelectorAll('.t-slds__bullet');
                if (bullets.length) {
                  Array.prototype.forEach.call(bullets, function (bullet) {
                    bullet.addEventListener('click', function () {
                      var newPosition = parseInt(bullet.getAttribute('data-slide-bullet-for'), 10);
                      var currentPosition = parseInt(
                        sliderWrapper.getAttribute('data-slider-pos'),
                        10
                      );
                      if (currentPosition === newPosition) return;
                      var currentTranslate = t_slds_getCurrentTranslate(sliderRec);
                      sliderWrapper.setAttribute('data-slider-pos', newPosition);
                      t_slideMoveWithoutAnimation(rec, false, sliderOptions, currentTranslate);
                      t_slds_updateSlider(rec);
                    });
                  });
                }
              }
            };
            isFuncChange = true;
          }
        }, 10);
        t_ready(function () {
          function cloneZeroBlock(block) {
            let clonedElement = block.cloneNode(true);
            let elementText = clonedElement.outerHTML;
            let regex = new RegExp(block.id.replace('rec', ''), 'g');
            let newText = elementText.replace(regex, `${block.id.replace('rec', '')}1`);
            let tempContainer = document.createElement('div');
            tempContainer.innerHTML = newText;
            let sbsEls = tempContainer.querySelectorAll('.tn-atom__sbs-anim-wrapper');
            sbsEls.forEach(function (item) {
              item.removeAttribute('id');
            });
            let t396Div = tempContainer.querySelector('.t396');
            let scriptTag = t396Div.nextElementSibling;
            if (scriptTag && scriptTag.tagName.toLowerCase() === 'script') {
              scriptTag.parentNode.removeChild(scriptTag);
            }
            let scriptTags = tempContainer.getElementsByTagName('script');
            for (let i = 0; i < scriptTags.length; i++) {
              var script = document.createElement('script');
              script.textContent = scriptTags[i].textContent;
              scriptTags[i].parentNode.replaceChild(script, scriptTags[i]);
            }
            let newElement = tempContainer.firstChild;
            block.parentNode.insertBefore(newElement, block.nextSibling);
            setTimeout(function () {
              t396_init(`${block.id.replace('rec', '')}1`);
            }, 0);
          }
          let int111 = setInterval(function () {
            if (window.t_slds__createDummies != undefined) {
              clearInterval(int111);
              window.t_slds__createDummies = function (firstSlide, lastSlide, sliderWrapper) {
                var sliderItems = sliderWrapper.querySelectorAll(
                  '.t-slds__item:not(.t-slds__item_dummy)'
                );
                var totalSlides = sliderItems.length;
                var itemsInRow =
                  parseInt(sliderWrapper.getAttribute('data-slider-items-in-row'), 10) || 0;
                var sliderWithCycle = sliderWrapper.getAttribute('data-slider-with-cycle');
                var isFeedsSlider = sliderWrapper.classList.contains('js-feed-container');
                var restoreAttrClassFirst = false;
                var restoreAttrClassLast = false;
                if (firstSlide) {
                  var firstSlideImgwrapper = firstSlide.querySelector('[data-zoomable="yes"]');
                  if (firstSlideImgwrapper) {
                    restoreAttrClassFirst = true;
                    if (firstSlideImgwrapper.classList.contains('t-zoomable'))
                      firstSlideImgwrapper.classList.remove('t-zoomable');
                    firstSlideImgwrapper.removeAttribute('data-zoomable');
                  }
                }
                if (lastSlide) {
                  var lastSlideImgwrapper = lastSlide.querySelector('[data-zoomable="yes"]');
                  if (lastSlideImgwrapper) {
                    restoreAttrClassLast = true;
                    if (lastSlideImgwrapper.classList.contains('t-zoomable'))
                      lastSlideImgwrapper.classList.remove('t-zoomable');
                    lastSlideImgwrapper.removeAttribute('data-zoomable');
                  }
                }
                if (
                  lastSlide &&
                  sliderWrapper.querySelectorAll('.t-slds__item[data-slide-index="0"]').length == 0
                ) {
                  var lastSlideDummy = lastSlide.cloneNode(true);
                  lastSlideDummy.setAttribute('data-slide-index', '0');
                  lastSlideDummy.setAttribute('aria-hidden', 'true');
                  let videoElementList = lastSlideDummy.querySelectorAll('video');
                  if (videoElementList.length) {
                    videoElementList.forEach(videoElem => {
                      videoElem.remove();
                    });
                  }
                  if (sliderWrapper.id.includes('nlm')) {
                    cloneZeroBlock(lastSlideDummy.firstChild);
                    lastSlideDummy.firstChild.remove();
                  }
                  var sldsWrapper = firstSlide.parentNode;
                  sldsWrapper.insertBefore(lastSlideDummy, firstSlide);
                  var fieldItem = sldsWrapper.querySelectorAll('[data-slide-index="0"] [field]');
                  if (fieldItem.length > 0) {
                    Array.prototype.forEach.call(fieldItem, function (item) {
                      item.removeAttribute('field');
                    });
                  }
                  const lastDummyTRecBlock = lastSlideDummy.querySelector('.t-rec');
                  if (lastDummyTRecBlock) {
                    const lastDummyTRec = lastDummyTRecBlock.getAttribute('id').replace('rec', '');
                    setTimeout(function () {
                      t396_allelems__renderView(lastSlideDummy);
                      t396_allgroups__renderView(lastSlideDummy);
                      t396_doResize(lastDummyTRec);
                    }, 0);
                    setTimeout(function () {
                      t396_allelems__renderView(lastSlideDummy);
                      t396_allgroups__renderView(lastSlideDummy);
                      t396_doResize(lastDummyTRec);
                    }, 500);
                    setTimeout(function () {
                      t396_allelems__renderView(lastSlideDummy);
                      t396_allgroups__renderView(lastSlideDummy);
                      t396_doResize(lastDummyTRec);
                    }, 1500);
                  }
                }
                if (
                  !isFeedsSlider &&
                  firstSlide &&
                  !sliderWrapper.querySelector(
                    '.t-slds__item[data-slide-index="' + (totalSlides + 1) + '"]'
                  )
                ) {
                  var firstSlideDummy = firstSlide.cloneNode(true);
                  let videoElementList = firstSlideDummy.querySelectorAll('video');
                  if (videoElementList.length) {
                    videoElementList.forEach(videoElem => {
                      videoElem.remove();
                    });
                  }
                  firstSlideDummy.setAttribute('data-slide-index', totalSlides + 1);
                  firstSlideDummy.classList.remove('t-slds__item_active');
                  firstSlideDummy.setAttribute('aria-hidden', 'true');
                  if (sliderWrapper.id.includes('nlm')) {
                    cloneZeroBlock(firstSlideDummy.firstChild);
                    firstSlideDummy.firstChild.remove();
                  }
                  lastSlide.insertAdjacentElement('afterend', firstSlideDummy);
                  lastSlide.classList.add('t-slds__item-loaded');
                  if (itemsInRow > 0 && sliderWithCycle === 'true') {
                    var beginningSlide = firstSlide;
                    var endSlide = lastSlide;
                    for (var i = 0; i < itemsInRow - 1; i++) {
                      var newSlide = beginningSlide.nextElementSibling.cloneNode(true);
                      newSlide.setAttribute('data-slide-index', totalSlides + i + 1);
                      endSlide.nextElementSibling.insertAdjacentElement('afterend', newSlide);
                      endSlide = endSlide.nextElementSibling;
                      beginningSlide = beginningSlide.nextElementSibling;
                    }
                  }
                  const dummyTRecBlock = firstSlideDummy.querySelector('.t-rec');
                  if (dummyTRecBlock) {
                    const dummyTRec = dummyTRecBlock.getAttribute('id').replace('rec', '');
                    setTimeout(function () {
                      t396_allelems__renderView(firstSlideDummy);
                      t396_allgroups__renderView(firstSlideDummy);
                      t396_doResize(dummyTRec);
                    }, 0);
                    setTimeout(function () {
                      t396_allelems__renderView(firstSlideDummy);
                      t396_allgroups__renderView(firstSlideDummy);
                      t396_doResize(dummyTRec);
                    }, 500);
                    setTimeout(function () {
                      t396_allelems__renderView(firstSlideDummy);
                      t396_allgroups__renderView(firstSlideDummy);
                      t396_doResize(dummyTRec);
                    }, 1500);
                  }
                }
                if (restoreAttrClassFirst) {
                  firstSlideImgwrapper.classList.add('t-zoomable');
                  firstSlideImgwrapper.setAttribute('data-zoomable', 'yes');
                }
                if (restoreAttrClassLast) {
                  lastSlideImgwrapper.classList.add('t-zoomable');
                  lastSlideImgwrapper.setAttribute('data-zoomable', 'yes');
                }
              };
            }
          }, 10);
          let int1118 = setInterval(function () {
            if (window.t_slds_UpdateSliderHeight != undefined) {
              clearInterval(int1118);
              window.t_slds_UpdateSliderHeight = function (rec) {
                var sliderRec =
                  typeof rec === 'object' ? rec[0] : document.querySelector('#rec' + rec);
                if (!sliderRec) return;
                var sliderWrapper = sliderRec.querySelector(
                  '.t-slds__items-wrapper:not([data-slider-correct-height="false"])'
                );
                if (!sliderWrapper) return;
                var isFeedsSlider = sliderWrapper.classList.contains('js-feed-container');
                var activeItem = sliderRec.querySelector('.t-slds__item_active');
                if (activeItem) {
                  var itemPaddingTop = parseFloat(getComputedStyle(activeItem).paddingTop) || 0;
                  var itemPaddingBottom =
                    parseFloat(getComputedStyle(activeItem).paddingBottom) || 0;
                  var height = activeItem.clientHeight - (itemPaddingTop + itemPaddingBottom);
                }
                if (height !== 0 && sliderWrapper) {
                  sliderWrapper.style.height = isFeedsSlider ? '' : height + 'px';
                }
                if (typeof rec !== 'object' && rec.includes('nlm')) {
                  let int = setInterval(function () {
                    if (activeItem.querySelector('.t396__artboard.rendered')) {
                      clearInterval(int);
                      sliderWrapper.style.height = window.getComputedStyle(activeItem).height;
                    }
                  }, 10);
                }
              };
            }
          }, 10);
          let int1117 = setInterval(function () {
            if (window.t_slideMove != undefined) {
              clearInterval(int1117);
              window.t_slideMove = function (rec, withoutNewInterval, sliderOptions) {
                var sliderRec =
                  typeof rec === 'object' ? rec[0] : document.querySelector('#rec' + rec);
                if (!sliderRec) return;
                var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper');
                if (!sliderWrapper) return;
                var sliderItems = sliderRec.querySelectorAll(
                  '.t-slds__item:not(.t-slds__item_dummy)'
                );
                var isFeedsSlider = sliderWrapper.classList.contains('js-feed-container');
                var itemsInRow = parseInt(
                  sliderWrapper.getAttribute('data-slider-items-in-row') || 0
                );
                var loadedPosts = parseInt(sliderWrapper.getAttribute('data-feed-show-count') || 0);
                var sliderWidth =
                  itemsInRow > 0
                    ? sliderRec.querySelector('.t-slds__container .t-slds__item').offsetWidth
                    : sliderRec.querySelector('.t-slds__container').offsetWidth;
                var sliderTransition = parseFloat(
                  sliderWrapper.getAttribute('data-slider-transition')
                );
                if (
                  window.nlm087obj.animationDelay[
                    `${sliderRec.id.replace('rec', '').replace('nlm', '')}`
                  ] != 0
                ) {
                  sliderTransition += 100;
                }
                var position = parseFloat(sliderWrapper.getAttribute('data-slider-pos'));
                var totalSlides = parseFloat(sliderWrapper.getAttribute('data-slider-totalslides'));
                var cycle = sliderWrapper.getAttribute('data-slider-cycle');
                var sliderNotAnimated = sliderWrapper.classList.contains('t-slds_animated-none');
                var sliderAutoPlay = sliderWrapper.getAttribute('data-slider-timeout') > 0;
                var stopSlider = sliderWrapper.getAttribute('data-slider-stop');
                var arrowWrapperRight = sliderRec.querySelector('.t-slds__arrow_wrapper-right');
                var arrowWrapperLeft = sliderRec.querySelector('.t-slds__arrow_wrapper-left');
                var ariaLiveAttr = sliderWrapper.getAttribute('aria-live');
                if (ariaLiveAttr === 'off') {
                  sliderWrapper.setAttribute('aria-live', 'polite');
                }
                var safariMajorVersion = 0;
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                  var version = navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);
                  if (version !== null) {
                    safariMajorVersion = parseInt(version[1], 10);
                  }
                }
                var isiOSChrome = navigator.userAgent.match('CriOS') ? true : false;
                if (!sliderTransition && sliderTransition !== 0) sliderTransition = 300;
                if (position > totalSlides + 1) {
                  position = 1;
                  sliderWrapper.setAttribute('data-slider-pos', 1);
                }
                if (stopSlider == 'true') return false;
                if (arrowWrapperRight) {
                  if (isFeedsSlider) {
                    var lastSlide = sliderItems[sliderItems.length - 1];
                    var lastSlideIndex = parseInt(lastSlide.getAttribute('data-slide-index'), 10);
                    if (itemsInRow < totalSlides) {
                      t_slds_fadeIn(arrowWrapperRight, 300);
                    }
                    if (
                      lastSlideIndex < totalSlides &&
                      itemsInRow > 0 &&
                      (position == lastSlideIndex - loadedPosts + 1 ||
                        lastSlideIndex === loadedPosts)
                    ) {
                      var lastSlideEvent = document.createEvent('Event');
                      lastSlideEvent.initEvent('feedsLastSlide', true, true);
                      sliderWrapper.dispatchEvent(lastSlideEvent);
                      document.addEventListener('feedsLoadSlide', function () {
                        t_slds_updateSlider(rec);
                        if (typeof t_animate__startAnimation === 'function') {
                          t_animate__startAnimation();
                        }
                      });
                      t_slds_fadeIn(arrowWrapperRight, 300);
                    } else if (
                      lastSlideIndex === totalSlides &&
                      position === totalSlides - itemsInRow + 1
                    ) {
                      t_slds_fadeOut(arrowWrapperRight, 300);
                    }
                  } else {
                    if (
                      sliderWrapper.getAttribute('data-slider-with-cycle') == 'false' &&
                      (position == totalSlides ||
                        (itemsInRow > 1 && position == totalSlides - itemsInRow + 1))
                    ) {
                      t_slds_fadeOut(arrowWrapperRight, 300);
                    } else {
                      t_slds_fadeIn(arrowWrapperRight, 300);
                    }
                  }
                }
                if (arrowWrapperLeft) {
                  if (
                    sliderWrapper.getAttribute('data-slider-with-cycle') == 'false' &&
                    position == 1
                  ) {
                    t_slds_fadeOut(arrowWrapperLeft, 300);
                  } else {
                    t_slds_fadeIn(arrowWrapperLeft, 300);
                  }
                }
                sliderWrapper.classList.add('t-slds_animated');
                if (safariMajorVersion >= 13 && isiOSChrome && !sliderNotAnimated) {
                  t_slide_MoveAnimation(sliderWrapper, position, sliderWidth, sliderTransition);
                } else {
                  sliderWrapper.style.transform = 'translateX(-' + sliderWidth * position + 'px)';
                }
                setTimeout(function () {
                  sliderWrapper.classList.remove('t-slds_animated');
                  sliderWrapper.setAttribute('data-slider-animated', '');
                  cycle = sliderWrapper.getAttribute('data-slider-cycle');
                  if (cycle == 'yes') {
                    if (position == totalSlides + 1) {
                      position = 1;
                    }
                    if (position == 0) {
                      position = totalSlides;
                    }
                    if (safariMajorVersion >= 13 && isiOSChrome && !sliderNotAnimated) {
                      t_slide_MoveAnimation(sliderWrapper, position, sliderWidth, 0);
                    } else {
                      sliderWrapper.style.transform =
                        'translateX(-' + sliderWidth * position + 'px)';
                    }
                    if (sliderNotAnimated !== true) {
                      t_slds_ActiveSlide(rec, position, totalSlides, sliderOptions);
                    }
                    sliderWrapper.setAttribute('data-slider-pos', position);
                  }
                  if (
                    window.lazy === 'y' ||
                    (document.querySelector('#allrecords') &&
                      document.querySelector('#allrecords').getAttribute('data-tilda-lazy') ===
                        'yes')
                  ) {
                    t_slds_onHammerLoad('t_lazyload_update', function () {
                      t_lazyload_update();
                    });
                  }
                  if (!withoutNewInterval && sliderAutoPlay) {
                    t_slds_initAutoPlay(rec, position, totalSlides, sliderOptions);
                  }
                }, sliderTransition);
                t_slds_ActiveBullet(rec, position, totalSlides, sliderOptions);
                t_slds_ActiveSlide(rec, position, totalSlides);
                if (sliderWrapper.getAttribute('data-slider-correct-height') == 'true') {
                  t_slds_SliderHeight(rec);
                }
                t_slds_SliderArrowsHeight(rec);
                t_slds_ActiveCaption(rec, position, totalSlides);
                if (sliderRec.querySelectorAll('.t-slds__item-loaded').length < totalSlides + 2) {
                  t_slds_UpdateImages(rec, position);
                }
                sliderWrapper.getAttribute('data-slider-curr-pos', position);
              };
            }
          }, 10);
          let int2 = setInterval(function () {
            if (window.t_slds_initAutoPlay != undefined) {
              clearInterval(int2);
              window.t_slds_initAutoPlay = function (rec, position, totalSlides, sliderOptions) {
                var isZeroBlock = typeof rec === 'object';
                var sliderRec = isZeroBlock ? rec[0] : document.querySelector('#rec' + rec);
                if (!sliderRec) return;
                var sliderContainer = sliderRec.querySelector('.t-slds');
                var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper');
                if (!sliderWrapper) return;
                var sliderTimeOut = parseFloat(sliderWrapper.getAttribute('data-slider-timeout'));
                var cycle = '';
                var stopSlider = sliderWrapper.getAttribute('data-slider-stop');
                var galleryIntervalIdAttr = sliderWrapper.getAttribute('data-slider-interval-id');
                if (galleryIntervalIdAttr) {
                  clearInterval(galleryIntervalIdAttr);
                }
                if (stopSlider == 'true') return false;
                let animOnceArr =
                  window.nlm087obj.animOnceArrObj[
                    `${sliderRec.id.replace('rec', '').replace('nlm', '')}`
                  ];
                let blocksArr =
                  window.nlm087obj.blocksArrObj[
                    `${sliderRec.id.replace('rec', '').replace('nlm', '')}`
                  ];
                var isMobile =
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  );
                if (
                  window.nlm087obj.autoPlayOffOnMobile.includes(
                    sliderRec.id.replace('rec', '').replace('nlm', '')
                  )
                ) {
                  const windowWidth =
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth;
                  if ((!isMobile && windowWidth <= 640) || isMobile) {
                    sliderWrapper.setAttribute('data-slider-stopped', 'yes');
                    return false;
                  }
                }
                if (!isMobile && sliderContainer) {
                  sliderContainer.addEventListener('mouseover', function () {
                    if (
                      window.nlm087obj.autoPlayOffOnHover.includes(
                        sliderRec.id.replace('rec', '').replace('nlm', '')
                      )
                    ) {
                      sliderWrapper.setAttribute('data-slider-stopped', 'yes');
                    } else {
                      sliderWrapper.setAttribute('data-slider-stopped', '');
                    }
                  });
                  sliderContainer.addEventListener('mouseout', function () {
                    if (sliderWrapper.getAttribute('data-slider-stopped-by-video') === 'y') return;
                    sliderWrapper.setAttribute('data-slider-stopped', '');
                  });
                }
                var elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset;
                var elementBottom = elementTop + sliderRec.offsetHeight;
                window.addEventListener(
                  'resize',
                  t_throttle(function () {
                    elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset;
                    elementBottom = elementTop + sliderRec.offsetHeight;
                  })
                );
                var hidden, visibilityChange;
                if (typeof document.hidden !== 'undefined') {
                  hidden = 'hidden';
                  visibilityChange = 'visibilitychange';
                } else if (typeof document.msHidden !== 'undefined') {
                  hidden = 'msHidden';
                  visibilityChange = 'msvisibilitychange';
                } else if (typeof document.webkitHidden !== 'undefined') {
                  hidden = 'webkitHidden';
                  visibilityChange = 'webkitvisibilitychange';
                }
                function forVisibilityChangeListener() {
                  if (document[hidden]) {
                    sliderWrapper.setAttribute('data-slider-stopped', 'yes');
                  } else {
                    var display = getComputedStyle(sliderRec).display;
                    var viewportTop = window.pageYOffset;
                    var viewportBottom = viewportTop + window.innerHeight;
                    elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset;
                    elementBottom = elementTop + sliderRec.offsetHeight;
                    if (
                      elementBottom > viewportTop &&
                      elementTop < viewportBottom &&
                      display !== 'none' &&
                      sliderWrapper.getAttribute('data-slider-stopped-by-video') !== 'y'
                    ) {
                      sliderWrapper.setAttribute('data-slider-stopped', '');
                    }
                  }
                }
                document.removeEventListener(visibilityChange, forVisibilityChangeListener);
                document.addEventListener(visibilityChange, forVisibilityChangeListener);
                if (sliderRec.length === 1) {
                  window.bind(
                    'scroll',
                    t_throttle(function () {
                      var display = getComputedStyle(sliderRec).display;
                      var viewportTop = window.pageYOffset;
                      var viewportBottom = viewportTop + window.innerHeight;
                      if (display !== 'none') {
                        elementTop = sliderRec.getBoundingClientRect().top + window.pageYOffset;
                        elementBottom = elementTop + sliderRec.offsetHeight;
                        if (
                          elementBottom > viewportTop &&
                          elementTop < viewportBottom &&
                          sliderWrapper.getAttribute('data-slider-stopped-by-video') !== 'y'
                        ) {
                          sliderWrapper.setAttribute('data-slider-stopped', '');
                        } else if (sliderWrapper.getAttribute('data-slider-stopped') === '') {
                          sliderWrapper.setAttribute('data-slider-stopped', 'yes');
                        }
                      } else if (!isZeroBlock) {
                        sliderWrapper.setAttribute('data-slider-stopped', 'yes');
                      }
                    })
                  );
                }
                var galleryIntervalId = setInterval(function () {
                  let prevPosition = position;
                  var stopped = sliderWrapper.getAttribute('data-slider-stopped');
                  var ignorehover = sliderWrapper.getAttribute('data-slider-autoplay-ignore-hover');
                  var isSliderTouch = sliderWrapper.getAttribute('data-slider-touch');
                  var currentTranslate = t_slds_getCurrentTranslate(sliderRec);
                  if (stopped != 'yes' && ignorehover != 'yes' && isSliderTouch != 'yes') {
                    if (
                      sliderWrapper.getAttribute('data-slider-with-cycle') == 'false' &&
                      position == totalSlides
                    ) {
                      position = totalSlides;
                    } else if (
                      sliderWrapper.getAttribute('data-slider-with-cycle') == 'true' &&
                      position == totalSlides
                    ) {
                      sliderRec.querySelector('.t-slds__arrow-right').click();
                      return;
                    } else {
                      position++;
                    }
                    sliderWrapper.setAttribute('data-slider-pos', position);
                    if (position == totalSlides + 1 || position == 0) {
                      cycle = 'yes';
                    }
                    t_slideMoveWithoutAnimation(rec, true, sliderOptions, currentTranslate);
                    t_slds_updateSlider(rec);
                    if (cycle == 'yes') {
                      if (position == totalSlides + 1) {
                        position = 1;
                      }
                      if (position == 0) {
                        position = totalSlides;
                      }
                      sliderWrapper.setAttribute('data-slider-pos', position);
                    }
                    sliderWrapper.setAttribute('data-slider-cycle', cycle);
                    setTimeout(function () {
                      if (
                        document.querySelector(
                          `#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`
                        )
                      ) {
                        document
                          .querySelector(`#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`)
                          .remove();
                      }
                      slidesNotChangeYet = false;
                      if (sliderWrapper.getAttribute('data-slider-pos') > blocksArr.length) {
                        blocksID = 0;
                      } else if (sliderWrapper.getAttribute('data-slider-pos') == 0) {
                        blocksID = blocksArr.length - 1;
                      } else {
                        blocksID = sliderWrapper.getAttribute('data-slider-pos') - 1;
                      }
                      window.t_animateSbs__initAllRes
                        ? window.t_animateSbs__initAllRes()
                        : window.t_animationSBS__initAllRes(false);
                      setTimeout(function () {
                        window.t_animateSbs__rereadElsValues
                          ? t_animateSbs__rereadElsValues(myOpts)
                          : t_animationSBS__changeElValues(myOpts);
                      }, 0);
                      if (!animOnceArr[blocksID]) {
                        for (let i = 0; i < blocksArr.length; i++) {
                          if (i != blocksID) {
                            if (!animOnceArr[i]) {
                              removeAnimation(blocksArr[i]);
                            }
                          }
                        }
                        addAnimation(blocksArr[blocksID]);
                        animOnceArr[blocksID] = isAnimationOnce;
                      }
                      if (isAnimationOnce && blocksID == blocksArr.length - 1) {
                        removeAnimation(clonesArr[1]);
                        addAnimation(clonesArr[1]);
                        document
                          .querySelectorAll(
                            `${clonesArr[1]} [data-animate-sbs-event="blockintoview"] .tn-atom__sbs-anim-wrapper, ${clonesArr[1]} [data-animate-sbs-event="intoview"] .tn-atom__sbs-anim-wrapper`
                          )
                          .forEach(function (item) {
                            item.style.animationDuration = '0s';
                          });
                        document
                          .querySelectorAll(
                            `${clonesArr[1]} .t396__elem.t-animate, ${clonesArr[1]} .t396__elem.t-animate`
                          )
                          .forEach(function (item) {
                            item.style.transitionDuration = '0s';
                          });
                      }
                      if ('y' === window.lazy) {
                        t_lazyload_update();
                      }
                      if (typeof t_slds_updateSlider != 'undefined') {
                        t_slds_updateSlider(rec);
                      }
                      if (typeof t_animationExt__init != 'undefined') {
                        t_animationExt__init();
                      }
                      setTimeout(function () {
                        t396_allelems__renderView(
                          document.querySelector(blocksArr[blocksID] + ' .t396__artboard')
                        );
                      }, 100);
                      let slideWithVideoAutoplay = document.querySelector(
                        `#rec${rec} ul.t-slds__items-wrapper li.t-slds__item_active:not([aria-hidden="true"])`
                      );
                      if (slideWithVideoAutoplay) {
                        slideWithVideoAutoplay
                          .querySelectorAll('[data-field-autoplay-value="y"]')
                          .forEach(function (vid) {
                            if (vid.querySelector('video') && !vid.querySelector('iframe')) {
                              setTimeout(function () {
                                vid.querySelector('video').play();
                              }, 300);
                            }
                          });
                        slideWithVideoAutoplay
                          .querySelectorAll('[data-elem-type="html"]')
                          .forEach(function (vid) {
                            if (vid.querySelector('video[autoplay]')) {
                              setTimeout(function () {
                                vid.querySelector('video[autoplay]').play();
                              }, 300);
                            }
                          });
                      }
                    }, window
                      .nlm087obj.animationDelay[`${sliderRec.id.replace('rec', '').replace('nlm', '')}`]);
                    let slideWithVideo = document.querySelector(
                      `#rec${rec} ul.t-slds__items-wrapper li[data-slide-index="${prevPosition}"]:not(:first-child):not(:last-child)`
                    );
                    if (slideWithVideo) {
                      slideWithVideo
                        .querySelectorAll('[data-elem-type="video"], [data-elem-type="html"]')
                        .forEach(function (vid) {
                          if (vid.querySelector('iframe')) {
                            if (vid.getAttribute('data-elem-type') == 'video') {
                              vid.querySelector('iframe').remove();
                              t396_initVideo(vid);
                            } else if (vid.getAttribute('data-elem-type') == 'html') {
                              vid
                                .querySelector('iframe')
                                .setAttribute(
                                  'src',
                                  vid.querySelector('iframe').getAttribute('src')
                                );
                            }
                            if (vid.querySelector('.tn-atom').hasAttribute('init-bg-img')) {
                              vid.querySelector('.tn-atom').style.backgroundImage = vid
                                .querySelector('.tn-atom')
                                .getAttribute('init-bg-img');
                              if (vid.querySelector('.tn-atom .tn-atom__video-play-link')) {
                                vid.querySelector(
                                  '.tn-atom .tn-atom__video-play-link'
                                ).style.display = 'inline-block';
                              }
                            }
                          } else if (vid.querySelector('video')) {
                            vid.querySelector('video').pause();
                            if (
                              !window.nlm087obj.rewindVideo.includes(
                                sliderRec.id.replace('rec', '').replace('nlm', '')
                              )
                            ) {
                              vid.querySelector('video').currentTime = 0;
                            }
                          }
                        });
                    }
                  }
                }, sliderTimeOut);
                sliderWrapper.setAttribute('data-slider-interval-id', galleryIntervalId);
              };
            }
          }, 10);
          let int3 = setInterval(function () {
            if (window.t_slds_initSliderSwipe != undefined) {
              clearInterval(int3);
              window.t_slds_initSliderSwipe = function (
                rec,
                totalSlides,
                windowWidth,
                sliderOptions
              ) {
                var sliderRec =
                  typeof rec === 'object' ? rec[0] : document.querySelector('#rec' + rec);
                if (!sliderRec) return;
                var sliderMain = sliderRec.querySelector('.t-slds__main');
                if (!sliderMain) return;
                var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper');
                if (!sliderWrapper) return;
                var stopSlider = sliderWrapper.getAttribute('data-slider-stop');
                var isSwiperInit = sliderWrapper.getAttribute('data-swiper-initialized');
                var timeout;
                var isScrolling = false;
                var isSwiping = false;
                if (stopSlider == 'true') return false;
                if (isSwiperInit == 'true') return false;
                delete Hammer.defaults.cssProps.userSelect;
                let animOnceArr =
                  window.nlm087obj.animOnceArrObj[
                    `${sliderRec.id.replace('rec', '').replace('nlm', '')}`
                  ];
                let blocksArr =
                  window.nlm087obj.blocksArrObj[
                    `${sliderRec.id.replace('rec', '').replace('nlm', '')}`
                  ];
                if (
                  window.nlm087obj.mouseSwipeOn.includes(
                    sliderRec.id.replace('rec', '').replace('nlm', '')
                  )
                ) {
                  hammer = new Hammer(sliderMain, {
                    domEvents: true,
                    inputClass: Hammer.TouchMouseInput,
                    recognizers: [[Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }]],
                  });
                } else {
                  hammer = new Hammer(sliderMain, {
                    domEvents: true,
                    inputClass: Hammer.TouchInput,
                    recognizers: [[Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }]],
                  });
                }
                sliderWrapper.setAttribute('data-swiper-initialized', 'true');
                var stopSliderIfNeed = function (stopAttribute) {
                  if (
                    window.pageYOffset >
                      sliderRec.getBoundingClientRect().bottom + window.pageYOffset ||
                    window.pageYOffset + document.documentElement.clientHeight <
                      sliderRec.getBoundingClientRect().top + window.pageYOffset
                  ) {
                    sliderWrapper.setAttribute(stopAttribute, 'yes');
                  } else if (sliderWrapper.getAttribute('data-slider-stopped-by-video') !== 'y') {
                    sliderWrapper.setAttribute(stopAttribute, '');
                  }
                };
                var stopAttribute =
                  'ontouchend' in document ? 'data-slider-touch' : 'data-slider-stopped';
                if ('IntersectionObserver' in window) {
                  var observer = new IntersectionObserver(function (entries) {
                    var entry = entries[0];
                    sliderWrapper.setAttribute(stopAttribute, entry.isIntersecting ? '' : 'yes');
                  });
                  observer.observe(sliderRec);
                } else {
                  stopSliderIfNeed(stopAttribute);
                  window.addEventListener('scroll', function () {
                    isScrolling = true;
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                      stopSliderIfNeed(stopAttribute);
                      isScrolling = false;
                    }, 250);
                  });
                }
                if (totalSlides == 1) {
                  return false;
                }
                var scrollPrevent = function (event) {
                  if (isSwiping) {
                    event.preventDefault();
                    return false;
                  }
                };
                window.removeEventListener('touchmove', scrollPrevent, {
                  passive: false,
                });
                window.addEventListener('touchmove', scrollPrevent, {
                  passive: false,
                });
                hammer.on('pan', function (event) {
                  if (isScrolling) return false;
                  if (
                    window.nlm087obj.swipeOffOnMobile.includes(
                      sliderRec.id.replace('rec', '').replace('nlm', '')
                    ) &&
                    document.documentElement.clientWidth < 1201
                  ) {
                    return false;
                  }
                  isSwiping = true;
                  var sliderWrapper = sliderRec.querySelector('.t-slds__items-wrapper');
                  var itemsInRow = sliderWrapper.getAttribute('data-slider-items-in-row') || 0;
                  var withSingleMove = itemsInRow > 1;
                  var sliderWidth = withSingleMove
                    ? sliderRec.querySelector('.t-slds__container .t-slds__item').offsetWidth
                    : sliderRec.querySelector('.t-slds__container').offsetWidth;
                  var position = parseFloat(sliderWrapper.getAttribute('data-slider-pos'));
                  let prevPosition = position;
                  var totalSlides = parseFloat(
                    sliderWrapper.getAttribute('data-slider-totalslides')
                  );
                  var cycle = '';
                  var distance = event.deltaX;
                  var percentage = ((100 / totalSlides) * event.deltaX) / window.innerWidth;
                  var sensitivity = 30;
                  var stopSlider = sliderWrapper.getAttribute('data-slider-stop');
                  if (stopSlider == 'true') return false;
                  sliderWrapper.setAttribute('data-slider-touch', 'yes');
                  t_slds_scrollImages(rec, sliderWidth * position - distance);
                  if (event.isFinal) {
                    if (event.velocityX > 0.4) {
                      if (
                        sliderWrapper.getAttribute('data-slider-with-cycle') == 'false' &&
                        position == 1
                      ) {
                        position = 1;
                      } else {
                        position--;
                      }
                      sliderWrapper.setAttribute('data-slider-pos', position);
                      if (position == 0) {
                        cycle = 'yes';
                      }
                      sliderWrapper.setAttribute('data-slider-cycle', cycle);
                      t_slideMove(rec, false, sliderOptions);
                    } else if (event.velocityX < -0.4) {
                      if (
                        sliderWrapper.getAttribute('data-slider-with-cycle') == 'false' &&
                        (position == totalSlides ||
                          (withSingleMove && position == totalSlides - itemsInRow + 1))
                      ) {
                        position = withSingleMove ? totalSlides - itemsInRow : totalSlides;
                      } else {
                        var sliderItems = sliderRec.querySelectorAll(
                          '.t-slds__item:not(.t-slds__item_dummy)'
                        );
                        var lastSlide = sliderItems[sliderItems.length - 1];
                        var lastSlideIndex = parseFloat(
                          lastSlide.getAttribute('data-slide-index'),
                          10
                        );
                        if (lastSlideIndex < totalSlides && position == lastSlideIndex) {
                          var lastSlideEvent = document.createEvent('Event');
                          lastSlideEvent.initEvent('feedsLastSlide', true, true);
                          sliderWrapper.dispatchEvent(lastSlideEvent);
                          document.addEventListener('feedsLoadSlide', function () {
                            t_slds_updateSlider(rec);
                          });
                        }
                        position++;
                      }
                      sliderWrapper.setAttribute('data-slider-pos', position);
                      if (position == totalSlides + 1) {
                        cycle = 'yes';
                      }
                      sliderWrapper.setAttribute('data-slider-cycle', cycle);
                      t_slideMove(rec, false, sliderOptions);
                    } else if (percentage <= -(sensitivity / totalSlides)) {
                      if (
                        sliderWrapper.getAttribute('data-slider-with-cycle') == 'false' &&
                        (position == totalSlides ||
                          (withSingleMove && position == totalSlides - itemsInRow + 1))
                      ) {
                        position = withSingleMove ? totalSlides - itemsInRow : totalSlides;
                      } else {
                        position++;
                      }
                      sliderWrapper.setAttribute('data-slider-pos', position);
                      if (position == totalSlides + 1) {
                        cycle = 'yes';
                      }
                      sliderWrapper.setAttribute('data-slider-cycle', cycle);
                      t_slideMove(rec, false, sliderOptions);
                    } else if (percentage >= sensitivity / totalSlides) {
                      if (
                        sliderWrapper.getAttribute('data-slider-with-cycle') == 'false' &&
                        position == 1
                      ) {
                        position = 1;
                      } else {
                        position--;
                      }
                      sliderWrapper.setAttribute('data-slider-pos', position);
                      if (position == 0) {
                        cycle = 'yes';
                      }
                      sliderWrapper.setAttribute('data-slider-cycle', cycle);
                      t_slideMove(rec, false, sliderOptions);
                    } else {
                      t_slideMove(rec, false, sliderOptions);
                    }
                    sliderWrapper.setAttribute('data-slider-touch', '');
                    isSwiping = false;
                    if (scrollToTop) {
                      scrollSlideToTop(position, sliderRec);
                    }
                    setTimeout(function () {
                      if (
                        document.querySelector(
                          `#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`
                        )
                      ) {
                        document
                          .querySelector(`#firstBlockAnimOff${sliderRec.id.replace('rec', '')}`)
                          .remove();
                      }
                      slidesNotChangeYet = false;
                      if (sliderWrapper.getAttribute('data-slider-pos') > blocksArr.length) {
                        blocksID = 0;
                      } else if (sliderWrapper.getAttribute('data-slider-pos') == 0) {
                        blocksID = blocksArr.length - 1;
                      } else {
                        blocksID = sliderWrapper.getAttribute('data-slider-pos') - 1;
                      }
                      window.t_animateSbs__initAllRes
                        ? window.t_animateSbs__initAllRes()
                        : window.t_animationSBS__initAllRes(false);
                      setTimeout(function () {
                        window.t_animateSbs__rereadElsValues
                          ? t_animateSbs__rereadElsValues(myOpts)
                          : t_animationSBS__changeElValues(myOpts);
                      }, 0);
                      if (!animOnceArr[blocksID]) {
                        for (let i = 0; i < blocksArr.length; i++) {
                          if (i != blocksID) {
                            if (!animOnceArr[i]) {
                              removeAnimation(blocksArr[i]);
                            }
                          }
                        }
                        addAnimation(blocksArr[blocksID]);
                        animOnceArr[blocksID] = isAnimationOnce;
                      }
                      if (isAnimationOnce && blocksID == blocksArr.length - 1) {
                        removeAnimation(clonesArr[1]);
                        addAnimation(clonesArr[1]);
                        document
                          .querySelectorAll(
                            `${clonesArr[1]} [data-animate-sbs-event="blockintoview"] .tn-atom__sbs-anim-wrapper, ${clonesArr[1]} [data-animate-sbs-event="intoview"] .tn-atom__sbs-anim-wrapper`
                          )
                          .forEach(function (item) {
                            item.style.animationDuration = '0s';
                          });
                        document
                          .querySelectorAll(
                            `${clonesArr[1]} .t396__elem.t-animate, ${clonesArr[1]} .t396__elem.t-animate`
                          )
                          .forEach(function (item) {
                            item.style.transitionDuration = '0s';
                          });
                      }
                      if ('y' === window.lazy) {
                        t_lazyload_update();
                      }
                      if (typeof t_slds_updateSlider != 'undefined') {
                        t_slds_updateSlider(rec);
                      }
                      if (typeof t_animationExt__init != 'undefined') {
                        t_animationExt__init();
                      }
                      setTimeout(function () {
                        t396_allelems__renderView(
                          document.querySelector(blocksArr[blocksID] + ' .t396__artboard')
                        );
                      }, 100);
                      let slideWithVideoAutoplay = document.querySelector(
                        `#rec${rec} ul.t-slds__items-wrapper li.t-slds__item_active:not([aria-hidden="true"])`
                      );
                      if (slideWithVideoAutoplay) {
                        slideWithVideoAutoplay
                          .querySelectorAll('[data-field-autoplay-value="y"]')
                          .forEach(function (vid) {
                            if (vid.querySelector('video') && !vid.querySelector('iframe')) {
                              setTimeout(function () {
                                vid.querySelector('video').play();
                              }, 300);
                            }
                          });
                        slideWithVideoAutoplay
                          .querySelectorAll('[data-elem-type="html"]')
                          .forEach(function (vid) {
                            if (vid.querySelector('video[autoplay]')) {
                              setTimeout(function () {
                                vid.querySelector('video[autoplay]').play();
                              }, 300);
                            }
                          });
                      }
                    }, window
                      .nlm087obj.animationDelay[`${sliderRec.id.replace('rec', '').replace('nlm', '')}`]);
                    let slideWithVideo = document.querySelector(
                      `#rec${rec} ul.t-slds__items-wrapper li[data-slide-index="${prevPosition}"]:not(:first-child):not(:last-child)`
                    );
                    if (slideWithVideo) {
                      slideWithVideo
                        .querySelectorAll('[data-elem-type="video"], [data-elem-type="html"]')
                        .forEach(function (vid) {
                          if (vid.querySelector('iframe')) {
                            if (vid.getAttribute('data-elem-type') == 'video') {
                              vid.querySelector('iframe').remove();
                              t396_initVideo(vid);
                            } else if (vid.getAttribute('data-elem-type') == 'html') {
                              vid
                                .querySelector('iframe')
                                .setAttribute(
                                  'src',
                                  vid.querySelector('iframe').getAttribute('src')
                                );
                            }
                            if (vid.querySelector('.tn-atom').hasAttribute('init-bg-img')) {
                              vid.querySelector('.tn-atom').style.backgroundImage = vid
                                .querySelector('.tn-atom')
                                .getAttribute('init-bg-img');
                              if (vid.querySelector('.tn-atom .tn-atom__video-play-link')) {
                                vid.querySelector(
                                  '.tn-atom .tn-atom__video-play-link'
                                ).style.display = 'inline-block';
                              }
                            }
                          } else if (vid.querySelector('video')) {
                            vid.querySelector('video').pause();
                            if (
                              !window.nlm087obj.rewindVideo.includes(
                                sliderRec.id.replace('rec', '').replace('nlm', '')
                              )
                            ) {
                              vid.querySelector('video').currentTime = 0;
                            }
                          }
                        });
                    }
                  }
                });
                hammer.on('panend', function () {
                  t_slideMove(rec, false, sliderOptions);
                  isSwiping = false;
                });
              };
            }
          }, 10);
          let stopFunc = false;
          if (tabsLink != '' && tabsLink != '#') {
            function checkTabsNames() {
              for (let i = 0; i < window.nlm079tabs.length; i++) {
                window.nlm079tabs.forEach(function (item) {
                  if (
                    window.nlm079tabsError == undefined &&
                    window.nlm079tabs[i] != item &&
                    window.nlm079tabs[i].includes(item)
                  ) {
                    alert(
                      'Пожалуйста измените имена ссылок для табов! Они не должны быть похожи друг на друга.'
                    );
                    window.nlm079tabsError = true;
                  }
                });
              }
            }
            checkTabsNames();
          }
          if (typeof window.sliderBlocksList == 'undefined') {
            window.sliderBlocksList = [];
            blocksArr.forEach(function (item) {
              let block = document.querySelector(item);
              window.sliderBlocksList.push(block);
            });
          } else {
            blocksArr.forEach(function (item) {
              let block = document.querySelector(item);
              window.sliderBlocksList.push(block);
            });
          }
          document.querySelectorAll(`${blocksArr}`).forEach(function (item) {
            item.classList.add('nolimAutoScaleFix');
          });
          let ab = setInterval(function () {
            if (window.t_animateSbs__checkIntoviewEls != undefined) {
              clearInterval(ab);
              window.t_animateSbs__checkIntoviewEls = function (s, t) {
                t &&
                  t.length &&
                  ((s.scrollTop = window.pageYOffset),
                  t.filter(function (t) {
                    let block = t.closest('.r');
                    var e = s.scrollTop + t.triggerOffset,
                      a = 'blockintoview' === t.animType ? e >= t.blockTopOffset : e >= t.topOffset,
                      e = t.closest('.t396').parentElement,
                      e =
                        e.classList.contains('t397__off') ||
                        e.classList.contains('t395__off') ||
                        e.classList.contains('t400__off');
                    if (!window.sliderBlocksList.includes(block)) {
                      return (
                        !(a && !t.classList.contains('t-sbs-anim_started') && !e) ||
                        (t.classList.add('t-sbs-anim_started'), !1)
                      );
                    } else {
                      return !(a && !t.classList.contains('t-sbs-anim_started') && !e) || !1;
                    }
                  }));
              };
            } else if (window.t_animationSBS__updateIntoViewElsState != undefined) {
              clearInterval(ab);
              window.t_animationSBS__updateIntoViewElsState = function (t) {
                t &&
                  t.length &&
                  t.forEach(function (t) {
                    let block = t.closest('.r');
                    var e = window.pageYOffset + t.triggerOffset,
                      e =
                        'blockintoview' === t.animType ? e >= t.parentRecTopPos : e >= t.topOffset,
                      n = t.closest('.t396').parentElement,
                      a = ['t397__off', 't395__off', 't400__off'].some(function (t) {
                        return n.classList.contains(t);
                      });
                    if (!window.sliderBlocksList.includes(block)) {
                      !e ||
                        a ||
                        t.classList.contains('t-sbs-anim_started') ||
                        t.classList.add('t-sbs-anim_started');
                    } else {
                      !e || a || t.classList.contains('t-sbs-anim_started');
                    }
                  });
              };
            }
          }, 10);
          let ab2 = setInterval(function () {
            if (window.t_animate__setAnimELemsState != undefined) {
              clearInterval(ab2);
              window.t_animate__setAnimELemsState = function (t, e, a) {
                t.forEach(function (t) {
                  let block = t.closest('.r');
                  if (!window.sliderBlocksList.includes(block)) {
                    var n = t.getBoundingClientRect().top + window.pageYOffset;
                    if (n < e - 500)
                      return (
                        t.classList.remove('t-animate'),
                        t.classList.remove('t-animate_no-hover'),
                        'animatednumber' === t_animate__getAttrByResBase(t, 'style') &&
                          t_animate__animateNumbers(t),
                        !0
                      );
                    var i = t_animate__detectElemTriggerOffset(t, a);
                    t_animate__setCustomAnimSettings(t, n, a),
                      n < i &&
                        (t_animate__removeNoHoverClassFromBtns(t),
                        t.classList.add('t-animate_started'),
                        'animatednumber' === t_animate__getAttrByResBase(t, 'style') &&
                          t_animate__animateNumbers(t)),
                      n >= i && t.classList.add('t-animate_wait');
                  }
                });
              };
            }
          }, 10);
          let ab3 = setInterval(function () {
            if (window.t_animateSbs__rereadElsValues != undefined) {
              clearInterval(ab3);
              window.t_animateSbs__rereadElsValues = function (opts) {
                myOpts = opts;
                var elements = opts ? opts.els : null;
                if (elements && elements.length) {
                  Array.prototype.forEach.call(elements, function (element) {
                    t_animateSbs__cashElsTopOffset(element, opts);
                    if (element.changeType === 'scroll') {
                      t_animateSbs__updateStepsStartValues(element);
                    }
                  });
                }
              };
            } else if (window.t_animationSBS__changeElValues != undefined) {
              clearInterval(ab3);
              window.t_animationSBS__changeElValues = function (animatedObject) {
                myOpts = animatedObject;
                if (animatedObject) {
                  animatedObject.elements.forEach(function (element) {
                    t_animationSBS__setAndCacheElTopPos(element, animatedObject);
                    if (element.animType !== 'scroll') return;
                    t_animationSBS__updateStepsValues(element);
                  });
                }
              };
            }
          }, 10);
          function checkTopAndAnimate() {
            if (slidesNotChangeYet) {
              let blocks = document.querySelectorAll(blocksArr[0]);
              blocks.forEach(function (item) {
                if (!item.closest('.t-slds__item[aria-hidden="true"]')) {
                  let elemList = item.querySelectorAll(
                    '.t-animate, .t396__elem[data-animate-sbs-event]'
                  );
                  elemList.forEach(function (el) {
                    let h3 = el.clientHeight / 1000;
                    scrollEvent =
                      window.pageYOffset >
                      el.getBoundingClientRect().top +
                        window.pageYOffset -
                        document.documentElement.clientHeight +
                        h3;
                    if (scrollEvent) {
                      if (
                        el.hasAttribute('data-animate-sbs-event') &&
                        el.getAttribute('data-animate-sbs-event') != 'hover' &&
                        el.getAttribute('data-animate-sbs-event') != 'click' &&
                        el.getAttribute('data-animate-sbs-event') != 'scroll'
                      ) {
                        el.classList.add('t-sbs-anim_started');
                      }
                      if (el.hasAttribute('data-animate-style')) {
                        if (el.hasAttribute('data-animate-delay')) {
                          el.style.transitionDelay = el.getAttribute('data-animate-delay') + 's';
                        }
                        if (el.hasAttribute('data-animate-duration')) {
                          el.style.transitionDuration =
                            el.getAttribute('data-animate-duration') + 's';
                        }
                        el.classList.add('t-animate_started');
                      }
                    }
                  });
                }
              });
            }
          }
          window.addEventListener(
            'scroll',
            t_throttle(function () {
              checkTopAndAnimate();
            })
          );
          checkTopAndAnimate();
          for (let i = 1; i < blocksArr.length; i++) {
            removeAnimation(blocksArr[i]);
          }
          let firstBlock = document.querySelector(blocksArr[0]);
          let sliderBlock = ` <div id="rec${sliderId}nlm" class="r t-rec" data-animationappear="off" data-record-type="734"><!-- t734 --> <div class="t734"> <div class="t-slds t734__witharrows"> <div class="t-container_100 t-slds__main" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"> <ul class="t-slds__arrow_container $isSliderCircle == false ? 't-slds__nocycle' : ''
                          }"> <li class="t-slds__arrow_wrapper t-slds__arrow_wrapper-left" data-slide-direction="left"><button type="button" class="t-slds__arrow t-slds__arrow-left t-slds__arrow-withbg" aria-controls="carousel_${sliderId}nlm" aria-disabled="false" aria-label="Предыдущий слайд" style="background-color: rgb(255, 255, 255); margin-top: 0px;"> ${
            standartArrow == true
              ? ` <div class="t-slds__arrow_body t-slds__arrow_body-left"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <polyline fill="none" stroke="#222222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="${arrowType}"></polyline> </svg></div> `
              : ''
          } </button></li> <li class="t-slds__arrow_wrapper t-slds__arrow_wrapper-right" data-slide-direction="right"><button type="button" class="t-slds__arrow t-slds__arrow-right t-slds__arrow-withbg" aria-controls="carousel_${sliderId}nlm" aria-disabled="false" aria-label="Следующий слайд" style="background-color: rgb(255, 255, 255); margin-top: 0px;"> ${
            standartArrow == true
              ? ` <div class="t-slds__arrow_body t-slds__arrow_body-right"><svg role="presentation" focusable="false" style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <polyline fill="none" stroke="#222222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="${arrowType}"></polyline> </svg></div> `
              : ''
          } </button></li> </ul> <div class="t-slds__container"> <ul class="t-slds__items-wrapper t-slds_animated-${
            animationSpeed == 1 ? 'fast' : animationSpeed == 2 ? 'slow' : 'none'
          }" id="carousel_${sliderId}nlm" data-slider-transition="${
            animationSpeed == 0 ? '0' : animationSpeed == 1 ? '300' : '500'
          }" data-slider-with-cycle="${isSliderCircle}" data-slider-correct-height="true" data-auto-correct-mobile-width="" data-slider-timeout="${autoPlaySpeed}" aria-live="off" data-slider-initialized="" data-slider-totalslides="" data-slider-pos="" data-slider-curr-pos="" data-slider-cycle="" data-slider-animated="" data-swiper-initialized="" data-slider-stopped=""> </ul> </div> <ul class="t-slds__bullet_wrapper"> </ul> </div> </div> </div> <style type="text/css"> #rec${sliderId}nlm .t-slds__bullet_active .t-slds__bullet_body { background-color: #ffffff; } #rec${sliderId}nlm .t-slds__bullet:hover .t-slds__bullet_body { background-color: #ffffff; } </style> </div> `;
          firstBlock.insertAdjacentHTML('beforebegin', sliderBlock);
          for (let i = 0; i < blocksArr.length; i++) {
            let slideBlock = ` <li class="t-slds__item t-slds__item-loaded" data-slide-index="${
              i + 1
            }" role="group" aria-roledescription="slide" aria-label="${i + 1} из ${
              blocksArr.length
            }"></li> `;
            let bullet = ` <li class="t-slds__bullet" data-slide-bullet-for="${
              i + 1
            }"><button type="button" class="t-slds__bullet_body" aria-label="Перейти к слайду ${
              i + 1
            }" style="width: 10px; height: 10px;background-color: transparent;border: 2px solid #ffffff;"></button></li> `;
            document
              .querySelector(`#rec${sliderId}nlm .t-slds__container ul`)
              .insertAdjacentHTML('beforeend', slideBlock);
            document
              .querySelector(
                `#rec${sliderId}nlm .t-slds__container ul li[data-slide-index="${i + 1}"]`
              )
              .append(document.querySelector(blocksArr[i]));
            document
              .querySelector(`#rec${sliderId}nlm .t-slds__bullet_wrapper`)
              .insertAdjacentHTML('beforeend', bullet);
          }
          document
            .querySelector(`#rec${sliderId}nlm .t-slds__container ul li[data-slide-index="1"]`)
            .classList.add('t-slds__item_active');
          document
            .querySelector(
              `#rec${sliderId}nlm .t-slds__bullet_wrapper li[data-slide-bullet-for="1"]`
            )
            .classList.add('t-slds__bullet_active');
          document.querySelectorAll(blocks).forEach(function (item) {
            if (
              item.querySelectorAll('[data-elem-type="gallery"]').length > 0 &&
              window.nlm087obj.errorForGallery[`${sliderId}`] == false
            ) {
              alert(
                `Внутри блоков ${blocks} есть элементы типа "Галерея". К сожалению, в данный момент этот мод не работает с такими элементами. Пожалуйста удалите их.`
              );
              window.nlm087obj.errorForGallery[`${sliderId}`] = true;
              stopFunc = true;
            }
          });
          if (stopFunc) {
            return;
          }
          let int734Init = setInterval(function () {
            if (isFuncChange) {
              clearInterval(int734Init);
              t734_init(`${sliderId}nlm`);
              setTimeout(function () {
                t_slds_UpdateSliderArrowsHeight(`${sliderId}nlm`);
              }, 0);
              document
                .querySelector(`#rec${sliderId}nlm ul.t-slds__items-wrapper`)
                .classList.remove('t-slds_animated-none');
              document.querySelectorAll(`#rec${sliderId}nlm .r`).forEach(function (item) {
                let cloneItem = item.id.slice(0, -1);
                if (
                  (window.nlm061obj &&
                    window.nlm061obj.blocksHideOnLoadPage.includes('#' + item.id)) ||
                  (window.nlm113obj &&
                    (window.nlm113obj.allBlocksArr.includes('#' + item.id) ||
                      window.nlm113obj.allBlocksArr.includes('#' + cloneItem)))
                ) {
                } else {
                  item.classList.remove('nolimAutoScaleFix');
                }
                item.setAttribute('nlm087slider-id', sliderId);
              });
              let clonesSlidesList = document.querySelectorAll(
                `#rec${sliderId}nlm ul.t-slds__items-wrapper li.t-slds__item`
              );
              clonesSlidesList.forEach(function (item) {
                item.querySelectorAll('[data-elem-type="image"]').forEach(function (img) {
                  let imageElem = img.querySelector('.tn-atom img');
                  if (
                    imageElem &&
                    imageElem.hasAttribute('data-original') &&
                    imageElem.getAttribute('data-original') != '' &&
                    !imageElem.hasAttribute('src')
                  ) {
                    let imgUrl = imageElem.getAttribute('data-original');
                    imageElem.setAttribute('src', imgUrl);
                  }
                });
                item.querySelectorAll('[data-elem-type="shape"]').forEach(function (shape) {
                  let shapeElem = shape.querySelector('.tn-atom');
                  if (
                    shapeElem &&
                    shapeElem.hasAttribute('data-original') &&
                    shapeElem.getAttribute('data-original') != '' &&
                    !shapeElem.style.backgroundImage
                  ) {
                    let shapeBgUrl = shapeElem.getAttribute('data-original');
                    shapeElem.style.backgroundImage = `url(${shapeBgUrl})`;
                  }
                });
              });
              function fixAnimationInClones() {
                if (isAnimationOnce) {
                  removeAnimation(clonesArr[0]);
                  addAnimation(clonesArr[0]);
                  document
                    .querySelectorAll(
                      `${clonesArr[0]} [data-animate-sbs-event="blockintoview"] .tn-atom__sbs-anim-wrapper, ${clonesArr[0]} [data-animate-sbs-event="intoview"] .tn-atom__sbs-anim-wrapper`
                    )
                    .forEach(function (item) {
                      item.style.animationDuration = '0s';
                    });
                  document
                    .querySelectorAll(
                      `${clonesArr[0]} .t396__elem.t-animate, ${clonesArr[0]} .t396__elem.t-animate`
                    )
                    .forEach(function (item) {
                      item.style.transitionDuration = '0s';
                    });
                } else {
                  removeAnimation(clonesArr[0]);
                  addAnimation(clonesArr[0]);
                  document
                    .querySelectorAll(
                      `${clonesArr[0]} [data-animate-sbs-event="blockintoview"] .tn-atom__sbs-anim-wrapper, ${clonesArr[0]} [data-animate-sbs-event="intoview"] .tn-atom__sbs-anim-wrapper`
                    )
                    .forEach(function (item) {
                      item.style.animationDuration = '99999999999999999999s';
                    });
                  document
                    .querySelectorAll(
                      `${clonesArr[0]} .t396__elem.t-animate, ${clonesArr[0]} .t396__elem.t-animate`
                    )
                    .forEach(function (item) {
                      item.style.transitionDuration = '99999999999999999999s';
                    });
                  removeAnimation(clonesArr[1]);
                  addAnimation(clonesArr[1]);
                  document
                    .querySelectorAll(
                      `${clonesArr[1]} [data-animate-sbs-event="blockintoview"] .tn-atom__sbs-anim-wrapper, ${clonesArr[1]} [data-animate-sbs-event="intoview"] .tn-atom__sbs-anim-wrapper`
                    )
                    .forEach(function (item) {
                      item.style.animationDuration = '99999999999999999999s';
                    });
                  document
                    .querySelectorAll(
                      `${clonesArr[1]} .t396__elem.t-animate, ${clonesArr[1]} .t396__elem.t-animate`
                    )
                    .forEach(function (item) {
                      item.style.transitionDuration = '99999999999999999999s';
                    });
                }
              }
              let int88 = setInterval(function () {
                if (
                  document.querySelectorAll(`#rec${sliderId}nlm .t396__artboard`).length ==
                  document.querySelectorAll(`#rec${sliderId}nlm .t396__artboard.rendered`).length
                ) {
                  clearInterval(int88);
                  fixAnimationInClones();
                }
              }, 10);
              window.dispatchEvent(new Event('scroll'));
              let firstSlideWithVideoAutoplay = document.querySelector(
                `#rec${sliderId}nlm ul.t-slds__items-wrapper li.t-slds__item_active:not([aria-hidden="true"])`
              );
              if (firstSlideWithVideoAutoplay) {
                firstSlideWithVideoAutoplay
                  .querySelectorAll('[data-elem-type="html"]')
                  .forEach(function (vid) {
                    if (vid.querySelector('video[autoplay]')) {
                      vid.querySelector('video[autoplay]').play();
                    }
                  });
              }
              document
                .querySelectorAll(`#rec${sliderId}nlm ul.t-slds__items-wrapper li`)
                .forEach(function (item) {
                  item.querySelectorAll('[data-elem-type="video"]').forEach(function (vid) {
                    if (
                      vid.querySelector('.tn-atom').hasAttribute('data-atom-video-has-cover') &&
                      vid.querySelector('.tn-atom').getAttribute('data-atom-video-has-cover') == 'y'
                    ) {
                      if (vid.querySelector('.tn-atom').hasAttribute('data-original')) {
                        let bgImg = vid.querySelector('.tn-atom').getAttribute('data-original');
                        vid
                          .querySelector('.tn-atom')
                          .setAttribute('init-bg-img', `url("${bgImg}")`);
                      }
                    }
                  });
                });
              let intIframeListDel = setInterval(function () {
                let iframeWrapperList = document.querySelectorAll(
                  `#rec${sliderId}nlm [data-elem-type="video"] .tn-atom__videoiframe`
                );
                iframeWrapperList.forEach(function (item) {
                  if (item.querySelectorAll('iframe').length > 1) {
                    for (let i = 1; i < item.querySelectorAll('iframe').length; i++) {
                      item.querySelectorAll('iframe')[i].remove();
                    }
                  }
                });
              }, 100);
              document
                .querySelectorAll(`#rec${sliderId}nlm .${prevBtnClass}`)
                .forEach(function (item) {
                  item.setAttribute('data-slide-direction', 'left');
                });
              document
                .querySelectorAll(`#rec${sliderId}nlm .${nextBtnClass}`)
                .forEach(function (item) {
                  item.setAttribute('data-slide-direction', 'right');
                });
              document
                .querySelectorAll(`#rec${sliderId}nlm .t-slds__item`)
                .forEach(function (item) {
                  let bulletsInZeroList = item.querySelectorAll(`[href*="${tabsLink}"]`);
                  bulletsInZeroList.forEach(function (item) {
                    let position = item.getAttribute('href').replace(`${tabsLink}`, '');
                    item.setAttribute('data-slide-bullet-for', `${position}`);
                  });
                  let zeroSlide = item.querySelector('div:first-child');
                  const config = { attributes: true, attributeFilter: ['class'] };
                  const slider = document.querySelector(`#rec${sliderId}nlm`);
                  const callback = function (mutationsList, observer) {
                    for (let mutation of mutationsList) {
                      if (mutation.type === 'attributes') {
                        if (zeroSlide.classList.contains('t395__off')) {
                          slider.classList.add('t395__off');
                          window.dispatchEvent(new Event('resize'));
                        } else {
                          slider.classList.remove('t395__off');
                          window.dispatchEvent(new Event('resize'));
                        }
                      }
                    }
                  };
                  const observer = new MutationObserver(callback);
                  observer.observe(zeroSlide, config);
                });
              if (gridModeArrows) {
                let int8 = setInterval(function () {
                  let rightArrowEl = document.querySelector(
                    `#rec${sliderId}nlm .t-slds__arrow-right`
                  );
                  let rightArrowStyles = window.getComputedStyle(rightArrowEl);
                  if (rightArrowEl.querySelector('polyline') || rightArrowStyles.backgroundImage) {
                    clearInterval(int8);
                    function gridContainerArrows() {
                      let windowWidth = document.documentElement.clientWidth;
                      if (windowWidth > 1200 && arrowsPosition == '0') {
                        let padding = (windowWidth - 1200) / 2;
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow-left`)
                          .style.setProperty('left', `${padding}px`, 'important');
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow-right`)
                          .style.setProperty('right', `${padding}px`, 'important');
                      } else if (
                        (windowWidth < 1201 && windowWidth > 640 && arrowsPosition == '0') ||
                        (windowWidth < 641 && arrowsPositionMobile == '0')
                      ) {
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow-left`)
                          .style.setProperty('left', '0px', 'important');
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow-right`)
                          .style.setProperty('right', '0px', 'important');
                      } else if (
                        windowWidth > 1200 &&
                        (arrowsPosition == '1' || arrowsPosition == '4')
                      ) {
                        let padding = (windowWidth - 1200) / 2;
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow_container`)
                          .style.setProperty(
                            'left',
                            `${padding + paddingRightLeftArrows}px`,
                            'important'
                          );
                      } else if (
                        (windowWidth < 1201 &&
                          windowWidth > 640 &&
                          (arrowsPosition == '1' || arrowsPosition == '4')) ||
                        (windowWidth < 641 &&
                          (arrowsPositionMobile == '1' || arrowsPositionMobile == '4'))
                      ) {
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow_container`)
                          .style.setProperty('left', `${paddingRightLeftArrows}px`, 'important');
                      } else if (
                        windowWidth > 1200 &&
                        (arrowsPosition == '2' || arrowsPosition == '3')
                      ) {
                        let padding = (windowWidth - 1200) / 2;
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow_container`)
                          .style.setProperty(
                            'right',
                            `${padding + paddingRightLeftArrows}px`,
                            'important'
                          );
                      } else if (
                        (windowWidth < 1201 &&
                          windowWidth > 640 &&
                          (arrowsPosition == '2' || arrowsPosition == '3')) ||
                        (windowWidth < 641 &&
                          (arrowsPositionMobile == '2' || arrowsPositionMobile == '3'))
                      ) {
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow_container`)
                          .style.setProperty('right', `${paddingRightLeftArrows}px`, 'important');
                      } else if (
                        windowWidth > 640 &&
                        (arrowsPosition == '5' || arrowsPosition == '6')
                      ) {
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow_container`)
                          .style.setProperty(
                            'left',
                            `calc(50% - ${circleSize}px - ${paddingBetween / 2}px)`,
                            'important'
                          );
                      } else if (
                        windowWidth < 641 &&
                        (arrowsPositionMobile == '5' || arrowsPositionMobile == '6')
                      ) {
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__arrow_container`)
                          .style.setProperty(
                            'left',
                            `calc(50% - ${circleSizeOnMobile}px - ${paddingBetween / 2}px)`,
                            'important'
                          );
                      }
                    }
                    gridContainerArrows();
                    window.addEventListener('resize', gridContainerArrows);
                  }
                }, 10);
              }
              if (gridModeDots) {
                let int9 = setInterval(function () {
                  if (
                    document.querySelector(
                      `#rec${sliderId}nlm .t-slds__bullet:last-child .t-slds__bullet_body`
                    )
                  ) {
                    clearInterval(int9);
                    function gridContainerDots() {
                      let windowWidth = document.documentElement.clientWidth;
                      if (
                        windowWidth > 1200 &&
                        (dotsPosition == '0' || dotsPosition == '4' || dotsPosition == '6')
                      ) {
                        let padding = (windowWidth - 1200) / 2;
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__bullet_wrapper`)
                          .style.setProperty(
                            'left',
                            `${padding + paddingRightLeftDots}px`,
                            'important'
                          );
                      } else if (
                        (windowWidth < 1201 &&
                          windowWidth > 640 &&
                          (dotsPosition == '0' || dotsPosition == '4' || dotsPosition == '6')) ||
                        (windowWidth < 641 &&
                          (dotsPositionMobile == '0' ||
                            dotsPositionMobile == '4' ||
                            dotsPositionMobile == '6'))
                      ) {
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__bullet_wrapper`)
                          .style.setProperty('left', `${paddingRightLeftDots}px`, 'important');
                      } else if (
                        windowWidth > 1200 &&
                        (dotsPosition == '1' || dotsPosition == '5' || dotsPosition == '7')
                      ) {
                        let padding = (windowWidth - 1200) / 2;
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__bullet_wrapper`)
                          .style.setProperty(
                            'right',
                            `${padding + paddingRightLeftDots}px`,
                            'important'
                          );
                      } else if (
                        (windowWidth < 1201 &&
                          windowWidth > 640 &&
                          (dotsPosition == '1' || dotsPosition == '5' || dotsPosition == '7')) ||
                        (windowWidth < 641 &&
                          (dotsPositionMobile == '1' ||
                            dotsPositionMobile == '5' ||
                            dotsPositionMobile == '7'))
                      ) {
                        document
                          .querySelector(`#rec${sliderId}nlm .t-slds__bullet_wrapper`)
                          .style.setProperty('right', `${paddingRightLeftDots}px`, 'important');
                      }
                    }
                    gridContainerDots();
                    window.addEventListener('resize', gridContainerDots);
                  }
                }, 10);
              }
              if (miniaturesDots) {
                let int = setInterval(function () {
                  if (
                    document.querySelector(
                      `#rec${sliderId}nlm .t-slds__bullet[data-slide-bullet-for="${slidesAmount}"] .t-slds__bullet_body`
                    )
                  ) {
                    for (let i = 0; i < miniatureLinksList.length; i++) {
                      document.querySelector(
                        `#rec${sliderId}nlm .t-slds__bullet[data-slide-bullet-for="${
                          i + 1
                        }"] .t-slds__bullet_body`
                      ).style.backgroundImage = `url(${miniatureLinksList[i]})`;
                    }
                  }
                }, 10);
              }
              let int7 = setInterval(function () {
                if (document.querySelector(`#rec${sliderId}nlm .t-slds__bullet_wrapper`)) {
                  clearInterval(int7);
                  let bulletWrapperWidth = document.querySelector(
                    `#rec${sliderId}nlm .t-slds__bullet_wrapper`
                  ).offsetWidth;
                  function setBulletWrapperWidth() {
                    let windowWidth = document.documentElement.clientWidth;
                    if (windowWidth > 640 && (dotsPosition == '2' || dotsPosition == '3')) {
                      if (!document.querySelector(`#bulletWrapperWidthStyleDesktop${sliderId}`)) {
                        document
                          .querySelector('body')
                          .insertAdjacentHTML(
                            'beforeend',
                            ` <style id="bulletWrapperWidthStyleDesktop${sliderId}"> @media screen and (min-width: 641px) { #rec${sliderId}nlm ul.t-slds__bullet_wrapper { width: ${bulletWrapperWidth}px !important; right: 0 !important; left: 0 !important; margin: 0 auto !important; } } </style>`
                          );
                      }
                    } else if (
                      windowWidth < 641 &&
                      (dotsPositionMobile == '2' || dotsPositionMobile == '3')
                    ) {
                      if (!document.querySelector(`#bulletWrapperWidthStyleMobile${sliderId}`)) {
                        document
                          .querySelector('body')
                          .insertAdjacentHTML(
                            'beforeend',
                            ` <style id="bulletWrapperWidthStyleMobile${sliderId}"> @media screen and (max-width: 640px) { #rec${sliderId}nlm ul.t-slds__bullet_wrapper { width: ${bulletWrapperWidth}px !important; right: 0 !important; left: 0 !important; margin: 0 auto !important; } } </style>`
                          );
                      }
                    }
                  }
                  setBulletWrapperWidth();
                  window.addEventListener('resize', setBulletWrapperWidth);
                }
              }, 10);
              function debounce(fn, delay) {
                let timeoutID = null;
                return function () {
                  if (timeoutID) {
                    clearTimeout(timeoutID);
                  }
                  const args = arguments;
                  const that = this;
                  timeoutID = setTimeout(function () {
                    fn.apply(that, args);
                  }, delay);
                };
              }
              const resizeChange = debounce(function () {
                document.querySelectorAll(`#rec${sliderId}nlm .r`).forEach(function (item) {
                  let id = item.id.replace('rec', '');
                  t396_doResize(id);
                });
                t_slds_updateSlider(`${sliderId}nlm`);
              }, 500);
              let isIos = function () {
                var agent = window.navigator.userAgent;
                var start = agent.indexOf('OS ');
                if ((agent.indexOf('iPhone') > -1 || agent.indexOf('iPad') > -1) && start > -1) {
                  return true;
                }
                return false;
              };
              let isAndroid = function () {
                var agent = window.navigator.userAgent;
                return agent.toLowerCase().indexOf('android') > -1;
              };
              if (!isIos() && !isAndroid()) {
                window.addEventListener('resize', resizeChange);
              }
              document.querySelector('#hideBlocksOnPageLoad').remove();
              window.nlm087obj.isSlidersLoaded[`${sliderId}`] = true;
            }
          }, 10);
        });
      }
    })();
  }, delay);
})();
