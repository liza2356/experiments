class SiteNav extends HTMLElement {
  connectedCallback() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const active = (href) => current === href ? ' nav-link--active' : '';

    this.innerHTML = `
      <nav class="site-nav">
        <ul class="nav-links">
          <li><a href="index.html" class="nav-link${active('index.html')}">home</a></li>
          <li><a href="index.html#projects" class="nav-link">play</a></li>
          <li><a href="about.html" class="nav-link${active('about.html')}">about me</a></li>
          <li><a href="resume.pdf" class="nav-link" target="_blank" rel="noopener">resume</a></li>
        </ul>
      </nav>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <p class="footer-copy">Designed &amp; built by Liza Intskirveli</p>
          <div class="footer-links">
            <a href="mailto:lizai2356@gmail.com" class="footer-link" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/lizaintskirveli" class="footer-link" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com/" class="footer-link" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-nav', SiteNav);
customElements.define('site-footer', SiteFooter);
