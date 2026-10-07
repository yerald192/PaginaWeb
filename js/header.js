// ============================================
// COMPONENTE HEADER Y NAVEGACIÓN INSTITUCIONAL
// IESTP HUANTA - Renderizado Dinámico con Iconografía Vectorial
// ============================================

(function () {
  function isInsidePagesDir() {
    const p = window.location.pathname.replace(/\\/g, '/');
    return p.includes('/pages/');
  }

  function resolveUrl(target) {
    if (!target) return '#';
    if (target.startsWith('http://') || target.startsWith('https://') || target.startsWith('tel:') || target.startsWith('mailto:')) {
      return target;
    }

    const inPages = isInsidePagesDir();

    if (target.startsWith('#')) return target;

    if (target.startsWith('pages/')) {
      const pageFile = target.replace('pages/', '');
      return inPages ? pageFile : target;
    }

    if (target === 'index.html' || target.startsWith('index.html#')) {
      return inPages ? '../' + target : target;
    }

    if (target.startsWith('assets/')) {
      return inPages ? '../' + target : target;
    }

    return inPages ? '../' + target : target;
  }

  function renderDynamicHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    if (typeof SITE_DATA === 'undefined') {
      console.warn('SITE_DATA no encontrado al renderizar Header');
      return;
    }

    const info = SITE_DATA.info;
    const I = window.APP_ICONS || {};
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Barra superior institucional completa
    const topBarHtml = `
      <div class="top-contact hidden lg:block border-b border-slate-200/90 bg-slate-50 text-slate-600 text-xs font-semibold py-2">
        <div class="header-wrap flex items-center justify-between gap-4">
          <div class="flex items-center gap-6">
            <span class="inline-flex items-center gap-1.5 text-navy font-bold">
              ${I.building ? I.building('size-3.5 text-teal') : ''}
              ${info.nombreCompleto} · R.M. N° 265-86-ED
            </span>
            <span class="h-3.5 w-px bg-slate-200"></span>
            <span class="inline-flex items-center gap-1.5 text-slate-500">
              ${I.mapPin ? I.mapPin('size-3.5 text-slate-400') : ''}
              ${info.direccion}, ${info.distrito} - ${info.departamento}
            </span>
            <span class="h-3.5 w-px bg-slate-200"></span>
            <span class="inline-flex items-center gap-1.5 text-slate-500">
              ${I.clock ? I.clock('size-3.5 text-slate-400') : ''}
              ${info.horario}
            </span>
          </div>

          <div class="flex items-center gap-5">
            <a class="inline-flex items-center gap-1.5 text-slate-700 transition hover:text-teal font-bold" href="tel:${info.telefonoLink}">
              ${I.phone ? I.phone('size-3.5 text-teal') : ''}
              ${info.telefono}
            </a>
            <span class="h-3.5 w-px bg-slate-200"></span>
            <a class="inline-flex items-center gap-1.5 text-slate-700 transition hover:text-teal font-medium" href="mailto:${info.email}">
              ${I.mail ? I.mail('size-3.5 text-teal') : ''}
              ${info.email}
            </a>
            <span class="h-3.5 w-px bg-slate-200"></span>
            <a class="inline-flex items-center gap-1.5 text-blue-700 transition hover:text-blue-900 font-bold" href="${info.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook Oficial">
              ${I.facebook ? I.facebook('size-3.5') : ''}
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    `;

    // Ítems de navegación principal
    const navItems = [
      {
        titulo: "Inicio",
        url: "index.html",
        isActive: currentPage === 'index.html' || currentPage === ''
      },
      {
        titulo: "Nosotros",
        url: "pages/nosotros.html",
        isActive: currentPage === 'nosotros.html',
        submenu: [
          { titulo: "Presentación & Reseña Histórica", url: "pages/nosotros.html#historia", iconName: "document" },
          { titulo: "Instituto Licenciado", url: "pages/nosotros.html#licenciamiento", iconName: "shieldCheck" },
          { titulo: "Visión, Misión y Valores", url: "pages/nosotros.html#valores", iconName: "award" },
          { titulo: "Organización Institucional", url: "pages/nosotros.html#organizacion", iconName: "building" },
          { titulo: "Plana Jerárquica", url: "pages/nosotros.html#plana-jerarquica", iconName: "users" },
          { isDivider: true },
          { titulo: "Plana Docente 2026-II", url: "pages/plana-docente.html", iconName: "academicCap", isSpecial: true }
        ]
      },
      {
        titulo: "Plana Docente",
        url: "pages/plana-docente.html",
        isActive: currentPage === 'plana-docente.html'
      },
      {
        titulo: "Programas de Estudio",
        url: "pages/carreras.html",
        isActive: currentPage === 'carreras.html',
        submenu: [
          { titulo: "Diseño y Programación Web", url: "pages/carreras.html#web" },
          { titulo: "Enfermería Técnica", url: "pages/carreras.html#enfermeria" },
          { titulo: "Mecatrónica Automotriz", url: "pages/carreras.html#mecatronica" },
          { titulo: "Industrias de Alimentos y Bebidas", url: "pages/carreras.html#alimentos" },
          { titulo: "Producción Agropecuaria", url: "pages/carreras.html#agropecuaria" }
        ]
      },
      {
        titulo: "Transparencia",
        url: "pages/transparencia.html",
        isActive: currentPage === 'transparencia.html'
      },
      {
        titulo: "Contacto",
        url: "pages/contacto.html",
        isActive: currentPage === 'contacto.html'
      }
    ];

    const logoSrc = resolveUrl('assets/logo.png');
    const homeUrl = resolveUrl('index.html');
    const admisionUrl = resolveUrl('pages/admision.html');

    const mainNavHtml = `
      <nav class="header-wrap flex min-h-[4.75rem] items-center justify-between gap-6 py-2.5" aria-label="Navegación principal">
        <!-- Logo institucional -->
        <a href="${homeUrl}" class="flex items-center gap-3 text-navy group py-1" aria-label="IESTP Huanta - Ir al inicio">
          <img class="h-12 sm:h-14 w-auto max-w-[220px] sm:max-w-[260px] object-contain object-left transition duration-200 group-hover:opacity-95 group-hover:scale-[1.01]" src="${logoSrc}" alt="Logo IESTP Huanta" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <span class="hidden items-center gap-2.5" style="display: none;">
            <span class="grid size-11 place-items-center rounded-xl bg-navy text-lg font-black text-white shadow">H</span>
            <span class="leading-tight">
              <strong class="block text-sm font-extrabold text-navy">IESTP Huanta</strong>
              <small class="block text-[10px] font-bold uppercase tracking-[0.16em] text-teal">Instituto Licenciado</small>
            </span>
          </span>
        </a>

        <!-- Enlaces Desktop -->
        <div class="hidden items-center gap-1 text-sm font-bold text-slate-700 lg:flex">
          ${navItems.map(item => {
            if (item.submenu) {
              return `
                <div class="group relative">
                  <a href="${resolveUrl(item.url)}" class="inline-flex items-center gap-1.5 rounded-full px-4 py-2 transition ${item.isActive ? 'bg-navy text-white font-extrabold shadow-sm' : 'hover:bg-slate-100 hover:text-navy'}">
                    <span>${item.titulo}</span>
                    ${I.chevronDown ? I.chevronDown(item.isActive ? 'size-3 text-white' : 'size-3 text-slate-400') : ''}
                  </a>
                  <div class="absolute left-0 top-full z-50 hidden min-w-[260px] rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-2xl shadow-slate-200/80 group-hover:block animate-in fade-in duration-150">
                    ${item.submenu.map(sub => {
                      if (sub.isDivider) {
                        return '<div class="my-1 border-t border-slate-100"></div>';
                      }
                      const iconSvg = sub.iconName && I[sub.iconName] ? I[sub.iconName]('size-4 text-slate-400 group-hover/sub:text-teal') : '';
                      if (sub.isSpecial) {
                        return `
                          <a class="flex items-center justify-between rounded-xl bg-teal/10 px-3.5 py-2.5 text-xs font-extrabold text-teal transition hover:bg-teal hover:text-white group/spec" href="${resolveUrl(sub.url)}">
                            <span class="flex items-center gap-2.5">
                              ${I.academicCap ? I.academicCap('size-4') : ''}
                              <span>${sub.titulo}</span>
                            </span>
                            ${I.arrowRight ? I.arrowRight('size-3.5 transition group-hover/spec:translate-x-0.5') : ''}
                          </a>
                        `;
                      }
                      return `
                        <a class="group/sub flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-navy" href="${resolveUrl(sub.url)}">
                          ${iconSvg}
                          <span>${sub.titulo}</span>
                        </a>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }
            return `
              <a href="${resolveUrl(item.url)}" class="rounded-full px-4 py-2 transition ${item.isActive ? 'bg-navy text-white font-extrabold shadow-sm' : 'hover:bg-slate-100 hover:text-navy'}">
                ${item.titulo}
              </a>
            `;
          }).join('')}
        </div>

        <!-- Botón Admisión 2026 y Menú Móvil -->
        <div class="flex items-center gap-3">
          <a href="${admisionUrl}" class="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold text-navy shadow-sm transition hover:bg-amber-300 hover:shadow-md">
            <span>Admisión 2026</span>
            ${I.arrowRight ? I.arrowRight('size-3.5') : ''}
          </a>

          <button class="grid size-10 place-items-center rounded-xl border border-slate-200 text-navy transition hover:bg-slate-100 lg:hidden" type="button" id="btn-toggle-mobile-menu" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú">
            <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Menú Móvil -->
      <div id="mobile-menu" class="header-wrap hidden border-t border-slate-200 py-4 lg:hidden" aria-label="Menú móvil">
        <div class="grid gap-1 text-sm font-bold text-navy">
          ${navItems.map(item => `
            <a class="rounded-xl px-4 py-2.5 hover:bg-slate-100 ${item.isActive ? 'bg-navy text-white font-black' : ''}" href="${resolveUrl(item.url)}">
              ${item.titulo}
            </a>
          `).join('')}
          <div class="pt-3">
            <a class="flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-center text-xs font-black text-navy" href="${admisionUrl}">
              <span>Postular - Admisión 2026</span>
              ${I.arrowRight ? I.arrowRight('size-3.5') : ''}
            </a>
          </div>
        </div>
      </div>
    `;

    header.innerHTML = topBarHtml + mainNavHtml;

    const btnMobile = document.getElementById('btn-toggle-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    if (btnMobile && mobileMenu) {
      btnMobile.addEventListener('click', () => {
        const isOpen = btnMobile.getAttribute('aria-expanded') === 'true';
        btnMobile.setAttribute('aria-expanded', String(!isOpen));
        mobileMenu.classList.toggle('hidden', isOpen);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDynamicHeader);
  } else {
    renderDynamicHeader();
  }

  window.renderDynamicHeader = renderDynamicHeader;
})();
