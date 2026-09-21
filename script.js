const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.47 11.47 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46C23.2 24 24 23.2 22.23 22.23V1.77C22.23.8 22.23 0 22.23 0Z"/></svg>`,
  itch: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.63 4.1h14.74L21 7.02v1.71l-2.34 2.15v7.05c0 1.08-.54 1.73-1.62 1.94-.97.19-1.71-.27-2.22-1.39l-.68-1.47H9.86l-.68 1.47c-.51 1.12-1.25 1.58-2.22 1.39-1.08-.21-1.62-.86-1.62-1.94v-7.05L3 8.73V7.02L4.63 4.1Zm3.02 8.04a1.58 1.58 0 1 0 0 3.16 1.58 1.58 0 0 0 0-3.16Zm8.7 0a1.58 1.58 0 1 0 0 3.16 1.58 1.58 0 0 0 0-3.16ZM6.24 6.75l-.9 1.6.9.85 1.04-1.7-1.04-.75Zm11.52 0-1.04.75 1.04 1.7.9-.85-.9-1.6ZM9.6 8.28h4.8v1.44H9.6V8.28Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.54 3.55 12 3.55 12 3.55s-7.54 0-9.4.53A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.86.53 9.4.53 9.4.53s7.54 0 9.4-.53a3 3 0 0 0 2.1-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.67V8.33L15.8 12l-6.2 3.67-6.2 3.67Z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Z" stroke="currentColor" stroke-width="1.8"/><path d="m3 7 9 6.2L21 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.2 3.5 2.9 10.56c-1.25.5-1.24 1.2-.23 1.5l4.7 1.46 1.81 5.56c.22.61.11.85.76.85.5 0 .72-.23.99-.5l2.4-2.33 4.99 3.68c.92.5 1.58.24 1.81-.85l3.16-14.9c.34-1.35-.52-1.96-1.36-1.53Zm-10.8 10.02-.17 2.56-1.02-3.16 8.94-5.65-7.75 6.25Z"/></svg>`
};

const THEMES = ['light', 'dark', 'midnight', 'warm'];
const THEME_META = {
  light: { label: 'Тема: Светлая', icon: '☼', color: '#f5f5f7' },
  dark: { label: 'Тема: Тёмная', icon: '◐', color: '#0f1013' },
  midnight: { label: 'Тема: Midnight', icon: '✦', color: '#0d1420' },
  warm: { label: 'Тема: Тёплая', icon: '◒', color: '#f4f0e8' }
};

function createLinkCard(link, index) {
  const external = link.url.startsWith('http');
  const card = document.createElement('a');

  card.className = 'link-card';
  card.href = link.url;
  card.style.animationDelay = `${90 + index * 55}ms`;

  if (external) {
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
  }

  card.innerHTML = `
    <span class="icon ${link.icon}" aria-hidden="true">
      ${ICONS[link.icon] || ICONS.email}
    </span>
    <span class="link-copy">
      <strong>${link.title}</strong>
      <small>${link.detail}</small>
    </span>
    <span class="arrow" aria-hidden="true">↗</span>
  `;

  return card;
}

function applyTheme(theme) {
  const safeTheme = THEMES.includes(theme) ? theme : 'light';
  document.body.dataset.theme = safeTheme;

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', THEME_META[safeTheme].color);

  const button = document.getElementById('theme-toggle');
  if (button) {
    button.textContent = THEME_META[safeTheme].icon;
    button.setAttribute('aria-label', `${THEME_META[safeTheme].label}. Нажмите, чтобы сменить тему.`);
    button.title = `${THEME_META[safeTheme].label} · сменить`;
  }

  localStorage.setItem('linktree-theme', safeTheme);
}

function initTheme() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  const saved = localStorage.getItem('linktree-theme');
  applyTheme(THEMES.includes(saved) ? saved : 'light');

  button.addEventListener('click', () => {
    const current = document.body.dataset.theme || 'light';
    const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
    applyTheme(next);
  });
}

function initPage() {
  const config = window.SITE_CONFIG;
  if (!config) return;

  document.getElementById('profile-name').textContent = config.profile.name;
  document.getElementById('profile-subtitle').textContent = config.profile.subtitle;
  document.getElementById('footer-name').textContent = config.profile.footer;

  const avatar = document.querySelector('.avatar');
  avatar.src = config.profile.avatar;
  avatar.alt = `Фото ${config.profile.name}`;
  avatar.addEventListener('error', () => {
    avatar.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d7d7dc"/><stop offset="100%" stop-color="#a5a5ad"/></linearGradient></defs>
        <rect width="200" height="200" fill="url(#g)"/>
        <circle cx="100" cy="82" r="38" fill="#f5f5f7" opacity=".95"/>
        <path d="M41 173c8-34 31-52 59-52s51 18 59 52" fill="#f5f5f7" opacity=".95"/>
      </svg>
    `);
  }, { once: true });

  const linksList = document.getElementById('links-list');
  linksList.replaceChildren(...config.links.map(createLinkCard));
  document.getElementById('year').textContent = new Date().getFullYear();
  initTheme();
}

document.addEventListener('DOMContentLoaded', initPage);
