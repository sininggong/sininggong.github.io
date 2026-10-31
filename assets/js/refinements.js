(() => {
  const nav = document.querySelector('#site-nav');
  const menu = nav?.querySelector('button');
  const hiddenLinks = document.querySelector('#more-navigation');
  const contact = document.querySelector('.author__urls-wrapper > button');
  const contactLinks = document.querySelector('#profile-links');
  const theme = document.querySelector('#theme-toggle a');
  const expanded = () => {
    menu?.setAttribute('aria-expanded', String(!hiddenLinks.classList.contains('hidden')));
    contact?.setAttribute('aria-expanded', String(contact.classList.contains('open')));
    theme?.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  };
  if (theme) theme.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {event.preventDefault();theme.click();}
  });
  new MutationObserver(expanded).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  if (hiddenLinks) new MutationObserver(expanded).observe(hiddenLinks,{attributes:true,attributeFilter:['class']});
  if (contact) new MutationObserver(expanded).observe(contact,{attributes:true,attributeFilter:['class']});
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (menu?.getAttribute('aria-expanded') === 'true') {menu.click();menu.focus();}
    if (contact?.getAttribute('aria-expanded') === 'true') {contact.click();contact.focus();}
  });
  for (const link of document.querySelectorAll('#site-nav a[href]')) {
    if (new URL(link.href).pathname === location.pathname) link.setAttribute('aria-current','page');
  }
  // Avoid leaving an open profile dropdown over a newly selected local anchor.
  contactLinks?.addEventListener('click', event => {
    if (event.target.closest('a') && contact?.classList.contains('open')) contact.click();
  });
  for (const button of document.querySelectorAll('.copy-email')) {
    const row = button.closest('.email-contact');
    const status = row.querySelector('.copy-email-status');
    const fallback = row.querySelector('.copy-email-fallback');
    const label = button.querySelector('.copy-email-label');
    const originalLabel = label.textContent;
    let reset;
    button.hidden = false;
    button.addEventListener('click', async () => {
      clearTimeout(reset);
      try {
        await navigator.clipboard.writeText(button.dataset.email);
        fallback.hidden = true;
        label.textContent = 'Copied!';
        status.textContent = button.dataset.email;
        reset = setTimeout(() => {
          label.textContent = originalLabel;
          status.textContent = '';
        }, 4000);
      } catch {
        label.textContent = originalLabel;
        status.textContent = 'Select and copy the address below:';
        fallback.hidden = false;
        fallback.focus();
        fallback.select();
      }
    });
  }
  expanded();
})();
