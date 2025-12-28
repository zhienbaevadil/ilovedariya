(function () {
  'use strict';

  const nextBtn = document.getElementById('nextBtn');

  // map unit -> container id
  const containers = {
    days: 'days-container',
    hours: 'hours-container',
    minutes: 'minutes-container',
    seconds: 'seconds-container'
  };

  // Utility: ensure container has exactly N digit spans (create if needed)
  function ensureDigits(containerEl, length) {
    const current = containerEl.querySelectorAll('.digit').length;
    if (current === length) return;
    containerEl.innerHTML = ''; // rebuild
    for (let i = 0; i < length; i++) {
      const s = document.createElement('span');
      s.className = 'digit';
      s.textContent = '0';
      containerEl.appendChild(s);
    }
  }

  // Update digits for a unit (only flip digits that change)
  function updateDigits(unit, newStr) {
    const contId = containers[unit];
    const container = document.getElementById(contId);
    if (!container) return;

    // make sure number of digit spans equals length of newStr
    ensureDigits(container, newStr.length);

    const digits = container.querySelectorAll('.digit');
    for (let i = 0; i < newStr.length; i++) {
      const ch = newStr[i];
      const span = digits[i];
      if (!span) continue;
      if (span.textContent !== ch) {
        // animate only the changing digit
        span.classList.add('digit-flip');
        // after half the animation, change text (makes flip look nicer)
        setTimeout(() => {
          span.textContent = ch;
        }, 180);
        // remove class at the end so future flips work
        setTimeout(() => span.classList.remove('digit-flip'), 90);
      }
    }
  }

  // compute timer strings and update
  function updateTimer() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;

    if (diff <= 0) {
      // show zeros if passed
      updateDigits('days', '0');
      updateDigits('hours', '00');
      updateDigits('minutes', '00');
      updateDigits('seconds', '00');
      return;
    }

    const daysNum = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursNum = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutesNum = Math.floor((diff / (1000 * 60)) % 60);
    const secondsNum = Math.floor((diff / 1000) % 60);

    const daysStr = String(daysNum); // variable length allowed
    const hoursStr = String(hoursNum).padStart(2, '0');
    const minutesStr = String(minutesNum).padStart(2, '0');
    const secondsStr = String(secondsNum).padStart(2, '0');

    updateDigits('days', daysStr);
    updateDigits('hours', hoursStr);
    updateDigits('minutes', minutesStr);
    updateDigits('seconds', secondsStr);
  }

  // Next button: переход только по клику
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // relative path from page1 to page2 folder (project/page1 -> project/page2)
      window.location.href = '../page2/index.html';
    });
  }

  // on load, initialize containers with correct digit counts and start timer
  document.addEventListener('DOMContentLoaded', () => {
    // initial values to set spans count
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;
    const daysNum = diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
    // set up containers: days may be multiple digits
    const daysStr = String(daysNum);
    ensureDigits(document.getElementById(containers.days), daysStr.length || 1);
    ensureDigits(document.getElementById(containers.hours), 2);
    ensureDigits(document.getElementById(containers.minutes), 2);
    ensureDigits(document.getElementById(containers.seconds), 2);

    // animate entrance for main elements (preserve your previous behaviour)
    const elements = [
      document.querySelector('.title-top'),
      document.querySelector('.timer-wrapper'),
      document.querySelector('.title-bottom'),
      document.querySelector('.gif-container'),
      nextBtn
    ].filter(Boolean);
    elements.forEach(el => el.classList.add('animate-once'));

    // start timer
    updateTimer();
    setInterval(updateTimer, 1000);
  });

})();
