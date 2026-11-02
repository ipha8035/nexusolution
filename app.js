(() => {
  'use strict';
  const config = window.NEXUS_CONFIG || {};
  const toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.querySelector('nav').classList.toggle('open', !expanded);
  });
  let noticeTimer;
  document.querySelectorAll('[data-soon]').forEach(button => button.addEventListener('click', () => {
    const notice = document.querySelector('#notice');
    notice.textContent = 'Tech Collections is coming soon.';
    notice.hidden = false;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => { notice.hidden = true; }, 4500);
  }));
  document.querySelectorAll('[data-form]').forEach(form => {
    const report = form.dataset.form === 'report';
    const endpoint = report ? config.reportEndpoint : config.newsletterEndpoint;
    if (report && endpoint) form.querySelector('.demo-note').hidden = true;
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector('.form-status');
      const button = form.querySelector('[type="submit"]');
      status.textContent = '';
      if (!endpoint) {
        if (report) showSuccess(true);
        else status.textContent = 'Subscription is not available yet. No email has been sent or saved.';
        return;
      }
      button.disabled = true;
      status.textContent = 'Sending…';
      try {
        const response = await fetch(endpoint, {
          method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
          signal: AbortSignal.timeout(15000)
        });
        if (!response.ok) throw new Error('Request failed');
        if (report) showSuccess(false);
        else { status.textContent = 'Thank you for subscribing!'; form.reset(); }
      } catch {
        status.textContent = 'We could not send your request. Please try again. Your entries are still here.';
      } finally { button.disabled = false; }
    });
  });
  function showSuccess(demo) {
    document.querySelector('#report-view').hidden = true;
    const view = document.querySelector('#success-view');
    view.hidden = false;
    document.querySelector('#success-title').textContent = demo ? 'Report Preview Complete' : 'Your Report is Processing';
    document.querySelector('#success-copy').textContent = demo ? 'This is a preview of the completion screen. Your report has not been sent or saved.' : 'Your report will be posted on the website after review. We’ll contact you by email once it has been published. Thank you for your support.';
    view.focus(); window.scrollTo({ top: 0, behavior: 'instant' });
  }
  document.querySelector('.reset-report')?.addEventListener('click', () => {
    document.querySelector('#success-view').hidden = true;
    document.querySelector('#report-view').hidden = false;
    document.querySelector('#report-form input').focus();
  });
})();
