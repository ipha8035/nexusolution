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

document.querySelectorAll('[data-news-shift]').forEach(button=>button.addEventListener('click',()=>{const grid=document.querySelector('.news-grid');grid.append(grid.firstElementChild)}));document.querySelectorAll('[data-social]').forEach(button=>button.addEventListener('click',()=>{const notice=document.getElementById('notice');notice.textContent=button.dataset.social+' link has not been configured yet.';notice.hidden=false;setTimeout(()=>notice.hidden=true,3500)}));

(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;const candidates=document.querySelectorAll('main>section:not(.impact-section),.impact-heading,.metrics,main>h1,main>.subtitle,main>.search,main>.filters,.collection-body>section,#upload-form>.dropzone,#upload-form>.detail-fields,#upload-form>.category-picker,#upload-form>textarea,#upload-form>.form-actions,.footer-top,.footer-bottom');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal-visible');observer.unobserve(entry.target)}})},{threshold:0,rootMargin:'0px 0px -24px 0px'});candidates.forEach(el=>{el.classList.add('reveal-pending');observer.observe(el)});})();
