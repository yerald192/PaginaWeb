// ============================================
// COMPONENTE FOOTER INSTITUCIONAL
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

  function renderDynamicFooter() {
    const footer = document.getElementById('site-footer') || document.querySelector('[data-site-footer]');
    if (!footer) return;

    if (typeof SITE_DATA === 'undefined') {
      console.warn('SITE_DATA no encontrado al renderizar Footer');
      return;
    }

    const info = SITE_DATA.info;
    const I = window.APP_ICONS || {};
    const logoSrc = resolveUrl('assets/logo.png');

    footer.className = "border-t-4 border-gold bg-navy text-white";
    footer.setAttribute("aria-labelledby", "footer-title");

    footer.innerHTML = `
      <div class="footer-wrap grid gap-12 py-16 sm:grid-cols-2 xl:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">
        <!-- Columna 1: Identidad Institucional y Licenciamiento -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <div class="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 shadow-md shrink-0">
              <img class="h-11 w-auto max-w-[200px] object-contain" src="${logoSrc}" alt="Logo IESTP Huanta" onerror="this.parentElement.style.display='none';" />
            </div>
            <div>
              <p id="footer-title" class="text-lg font-black tracking-tight leading-snug">${info.nombreCompleto}</p>
              <span class="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold font-bold mt-0.5">
                ${I.shieldCheck ? I.shieldCheck('size-3.5') : ''}
                Instituto Licenciado por MINEDU
              </span>
            </div>
          </div>
          <p class="mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-300">
            Institución de educación superior técnica pública fundada en 1986 mediante R.M. N° 265-86-ED. Comprometida con la formación de profesionales líderes para Ayacucho y el Perú.
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-3">
            <a href="${resolveUrl('pages/admision.html')}" class="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-black text-navy shadow-sm transition hover:bg-amber-300">
              <span>Admisión 2026</span>
              ${I.arrowRight ? I.arrowRight('size-3.5') : ''}
            </a>
            <a href="${resolveUrl('pages/plana-docente.html')}" class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/20">
              ${I.academicCap ? I.academicCap('size-3.5 text-gold') : ''}
              <span>Plana Docente</span>
            </a>
          </div>
        </div>

        <!-- Columna 2: Navegación y Páginas Principales -->
        <nav aria-label="Navegación general del pie de página">
          <h3 class="font-black text-xs uppercase tracking-widest text-gold flex items-center gap-2">
            ${I.document ? I.document('size-4') : ''}
            <span>Explora el Instituto</span>
          </h3>
          <ul class="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/nosotros.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Sobre Nosotros & Historia</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/nosotros.html#licenciamiento')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Licenciamiento Institucional</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/plana-docente.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span class="font-bold text-white">Plana Docente 2026-II</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/carreras.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>5 Programas de Estudio</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/servicios.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Laboratorios & Biblioteca</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/noticias.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Noticias y Acontecimientos</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Columna 3: Gestión y Transparencia -->
        <nav aria-label="Gestión institucional y transparencia">
          <h3 class="font-black text-xs uppercase tracking-widest text-gold flex items-center gap-2">
            ${I.scale ? I.scale('size-4') : ''}
            <span>Gestión & Servicios</span>
          </h3>
          <ul class="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/admision.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Proceso de Admisión</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/transparencia.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Portal de Transparencia</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/tramites.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Trámites Académicos (TUPA)</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${resolveUrl('pages/contacto.html')}">
                ${I.chevronDown ? I.chevronDown('size-3 text-gold -rotate-90') : ''}
                <span>Mesa de Partes Virtual</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="https://titula.minedu.gob.pe/" target="_blank" rel="noopener noreferrer">
                ${I.externalLink ? I.externalLink('size-3.5 text-gold') : ''}
                <span>Portal TITULA - MINEDU</span>
              </a>
            </li>
            <li>
              <a class="transition hover:text-white flex items-center gap-2 py-0.5" href="${info.facebook}" target="_blank" rel="noopener noreferrer">
                ${I.externalLink ? I.externalLink('size-3.5 text-gold') : ''}
                <span>Página Oficial de Facebook</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Columna 4: Ubicación y Contacto Directo -->
        <div>
          <h3 class="font-black text-xs uppercase tracking-widest text-gold flex items-center gap-2">
            ${I.mapPin ? I.mapPin('size-4') : ''}
            <span>Sede Institucional</span>
          </h3>
          <address class="mt-5 space-y-3 text-xs sm:text-sm not-italic leading-relaxed text-slate-300">
            <p class="flex items-start gap-2.5">
              <span class="text-gold mt-0.5">${I.building ? I.building('size-4 text-gold') : ''}</span>
              <span><strong>Campus Principal:</strong><br />${info.direccion}, ${info.distrito}<br />Prov. Huanta, Dpto. Ayacucho - Perú</span>
            </p>
            <p class="flex items-center gap-2.5">
              <span class="text-gold">${I.phone ? I.phone('size-4 text-gold') : ''}</span>
              <a class="transition hover:text-white font-bold" href="tel:${info.telefonoLink}">${info.telefono}</a>
            </p>
            <p class="flex items-center gap-2.5 truncate">
              <span class="text-gold">${I.mail ? I.mail('size-4 text-gold') : ''}</span>
              <a class="transition hover:text-white font-medium truncate" href="mailto:${info.email}">${info.email}</a>
            </p>
            <div class="mt-4 rounded-xl bg-white/5 border border-white/10 p-3.5 text-xs text-slate-300">
              <div class="flex items-center gap-2 font-bold text-gold">
                ${I.clock ? I.clock('size-3.5 text-gold') : ''}
                <span>Atención al Público:</span>
              </div>
              <p class="mt-1">${info.horario}</p>
            </div>
          </address>
        </div>
      </div>

      <!-- Barra de Derechos Reservados -->
      <div class="border-t border-white/10 bg-slate-950/40">
        <div class="footer-wrap flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Instituto de Educación Superior Tecnológico Público "Huanta". Todos los derechos reservados.</p>
          <div class="flex items-center gap-4 text-slate-400">
            <span>Educación Pública Superior de Calidad</span>
            <span class="size-1 rounded-full bg-gold"></span>
            <span class="text-slate-300 font-bold">Ayacucho, Perú</span>
          </div>
        </div>
      </div>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDynamicFooter);
  } else {
    renderDynamicFooter();
  }

  window.renderDynamicFooter = renderDynamicFooter;
})();
