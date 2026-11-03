const resetIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 8a9 9 0 1 0 1 7M20 2v6h-6"/></svg>`;

function enhanceClayControls() {
  const reset = document.querySelector('[data-act="reset"]');
  if (reset && !reset.dataset.enhanced) {
    reset.dataset.enhanced = 'true';
    reset.classList.remove('icon-btn');
    reset.classList.add('clay-reset');
    reset.innerHTML = `${resetIcon}<span>還原黏土</span>`;
    reset.title = '還原黏土並重新裝滿黏土罐';
    reset.setAttribute('aria-label', '還原黏土並重新裝滿黏土罐');
  }

  const orbit = document.querySelector('[data-view="orbit"]');
  if (orbit && orbit.textContent?.trim() === '還原') {
    orbit.textContent = '立體';
    orbit.title = '回到立體觀看角度';
  }
}

const observer = new MutationObserver(enhanceClayControls);
observer.observe(document.body, {childList: true, subtree: true});
enhanceClayControls();
