// ============================================
// APLICACIÓN PRINCIPAL - IESTP HUANTA
// Renderizado dinámico de todas las secciones
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderHero();
  renderEstadisticas();
  renderCarreras();
  renderServicios();
  renderMisionVision();
  renderEventos();
  renderGaleria();
  renderTestimonios();
  renderNoticias();
  renderEnlacesInteres();
  renderContacto();
  renderFooter();
  initMobileMenu();
  initScrollAnimations();
});

// ============================================
// HEADER Y NAVEGACIÓN
// ============================================
function renderHeader() {
  if (typeof window.renderDynamicHeader === 'function') {
    window.renderDynamicHeader();
    return;
  }
  const header = document.getElementById('site-header');
  if (!header) return;

  const nav = SITE_DATA.navegacion;

  header.innerHTML = `
    <div class="top-contact hidden md:block">
      <div class="section-wrap flex min-h-10 items-center justify-end gap-5 text-xs font-semibold">
        <div class="flex items-center gap-5">
          <a class="transition hover:text-teal" href="tel:${SITE_DATA.info.telefonoLink}">☎ ${SITE_DATA.info.telefono}</a>
          <span class="h-5 w-px bg-slate-200" aria-hidden="true"></span>
          <span>⚑ ${SITE_DATA.info.direccion}</span>
          <span class="h-5 w-px bg-slate-200" aria-hidden="true"></span>
          <a class="transition hover:text-teal" href="mailto:${SITE_DATA.info.email}">✉ ${SITE_DATA.info.email}</a>
          <span class="h-5 w-px bg-slate-200" aria-hidden="true"></span>
          <a class="font-bold text-slate-400 transition hover:text-teal" href="${SITE_DATA.info.facebook}" target="_blank" rel="noopener" aria-label="Facebook">f</a>
        </div>
      </div>
    </div>

    <nav class="flex min-h-[5.7rem] items-center justify-between gap-6" aria-label="Navegación principal">
      <a href="index.html" class="brand-mark flex items-center gap-3" aria-label="Ir al inicio">
        <img class="h-12 w-auto max-w-[220px] object-contain object-left" src="assets/logo.png" alt="IESTP Huanta" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <span class="hidden items-center gap-2" style="display: none;">
          <span class="grid size-10 place-items-center rounded-xl bg-navy text-lg font-extrabold text-white">H</span>
          <span class="leading-tight">
            <strong class="block text-sm font-extrabold text-navy">IESTP Huanta</strong>
            <small class="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Educación que transforma</small>
          </span>
        </span>
      </a>

      <div class="hidden items-center gap-1 text-sm font-bold text-slate-700 lg:flex">
        ${nav.map(item => `
          <div class="group relative">
            <button type="button" class="flex items-center gap-2 rounded-full px-4 py-2.5 transition hover:bg-slate-100 hover:text-navy">
              ${item.titulo} ${item.submenu ? '<span aria-hidden="true">▾</span>' : ''}
            </button>
            ${item.submenu ? `
              <div class="absolute left-0 top-full z-50 hidden min-w-[220px] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/60 group-hover:block">
                ${item.submenu.map(sub => `
                  <a class="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-mist hover:text-navy" href="${sub.url}">${sub.titulo}</a>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>

      <button class="focus-ring grid size-11 place-items-center rounded-xl border border-slate-200 text-navy lg:hidden" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú">
        <span class="text-xl" aria-hidden="true">☰</span>
      </button>

      <a href="pages/admision.html" class="hidden rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-navy shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:inline-flex">
        Admisión 2026
      </a>
    </nav>

    <div id="mobile-menu" class="section-wrap hidden border-t border-slate-200 py-4 lg:hidden" aria-label="Menú móvil">
      <div class="grid gap-2 text-sm font-bold text-navy">
        ${nav.map(item => `
          <a class="rounded-xl px-4 py-3 hover:bg-mist" href="${item.url}">${item.titulo}</a>
        `).join('')}
        <a class="rounded-xl bg-gold px-4 py-3" href="pages/admision.html">Admisión y matrícula <span aria-hidden="true">→</span></a>
      </div>
    </div>
  `;
}

// ============================================
// HERO
// ============================================
function renderHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  hero.innerHTML = `
    <div class="home-hero-media" aria-hidden="true"></div>
    <div class="section-wrap relative z-10 flex min-h-[38rem] items-center py-20">
      <div class="max-w-2xl">
        <p class="hero-pill">INSTITUTO DE EDUCACIÓN SUPERIOR PÚBLICO "HUANTA"</p>
        <h1 class="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          ${SITE_DATA.hero.titulo}
        </h1>
        <p class="mt-6 max-w-xl text-base font-medium leading-7 text-white/90 sm:text-lg">
          ${SITE_DATA.hero.descripcion}
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="pages/nosotros.html" class="rounded-full bg-gold px-6 py-3.5 text-sm font-extrabold text-navy transition hover:bg-amber-300">
            Sobre Nosotros <span aria-hidden="true">→</span>
          </a>
          <a href="pages/admision.html" class="rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">
            Admisión 2026
          </a>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// ESTADÍSTICAS
// ============================================
function renderEstadisticas() {
  const section = document.getElementById('estadisticas');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Nuestros números</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Comprometidos con la Excelencia en Educación
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
        ${SITE_DATA.estadisticas.map(stat => `
          <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
            <p class="text-4xl font-extrabold text-navy">
              ${stat.numero}<span class="text-teal">${stat.sufijo}</span>
            </p>
            <p class="mt-2 text-sm font-semibold text-slate-500">${stat.etiqueta}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================
// CARRERAS
// ============================================
function renderCarreras() {
  const section = document.getElementById('carreras');
  if (!section) return;

  section.innerHTML = `
    <div class="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div>
        <p class="eyebrow">Formación técnica</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Programas de Estudio
        </h2>
      </div>
      <a href="pages/carreras.html" class="text-sm font-extrabold text-teal hover:underline">
        Ver todos los programas <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      ${SITE_DATA.carreras.map((carrera, index) => `
        <article class="group relative overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <div class="absolute inset-0">
            <img src="${carrera.imagen}" alt="${carrera.nombre}" class="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
          </div>
          <div class="relative flex min-h-[20rem] flex-col justify-end p-7 text-white">
            <span class="absolute right-5 top-5 grid size-12 place-items-center rounded-xl bg-white/20 text-lg font-extrabold text-gold backdrop-blur-sm">${String(index + 1).padStart(2, '0')}</span>
            <span class="text-3xl">${carrera.icono}</span>
            <h3 class="mt-4 text-xl font-extrabold">${carrera.nombre}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-200">${carrera.descripcion}</p>
            <div class="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-300">
              <span>⏱ ${carrera.duracion}</span>
              <span>📍 ${carrera.modalidad}</span>
            </div>
            <a href="pages/carreras.html#${carrera.id}" class="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-gold hover:underline">
              Conocer más <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

// ============================================
// SERVICIOS
// ============================================
function renderServicios() {
  const section = document.getElementById('servicios');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Recursos para aprender mejor</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Nuestros Servicios Destacados
        </h2>
        <p class="mt-4 leading-7 text-slate-600">
          Instalaciones modernas y recursos tecnológicos para una formación integral de calidad.
        </p>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        ${SITE_DATA.servicios.map(servicio => `
          <article class="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal/10">
            <span class="grid size-12 place-items-center rounded-xl bg-teal/10 text-2xl">${servicio.icono}</span>
            <h3 class="mt-6 text-xl font-extrabold text-navy">${servicio.titulo}</h3>
            <p class="mt-3 leading-7 text-slate-600">${servicio.descripcion}</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-600">
              ${servicio.detalles.slice(0, 3).map(d => `<li class="flex items-center gap-2"><span class="text-teal">✓</span> ${d}</li>`).join('')}
            </ul>
            <a href="pages/servicios.html#${servicio.id}" class="mt-6 inline-block text-sm font-extrabold text-teal hover:underline">
              Conocer más <span aria-hidden="true">→</span>
            </a>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================
// MISIÓN, VISIÓN Y VALORES
// ============================================
function renderMisionVision() {
  const section = document.getElementById('mision-vision');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Lo que nos guía</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Misión, Visión y Valores
        </h2>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        ${SITE_DATA.misionVision.map((item, index) => `
          <article class="group relative overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <div class="absolute inset-0">
              <img src="${item.imagen}" alt="${item.tipo}" class="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-transparent"></div>
            </div>
            <div class="relative flex min-h-[22rem] flex-col justify-end p-7 text-white">
              <span class="text-xs font-extrabold uppercase tracking-widest text-gold">${String(index + 1).padStart(2, '0')} · ${item.tipo}</span>
              <h3 class="mt-3 text-xl font-extrabold">${item.titulo}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-200">${item.descripcion}</p>
              ${item.lista ? `
                <ul class="mt-4 space-y-2 text-sm text-slate-200">
                  ${item.lista.map(v => `<li class="flex items-center gap-2"><span class="text-gold">★</span> ${v}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================
// EVENTOS
// ============================================
function renderEventos() {
  const section = document.getElementById('eventos');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="mb-10 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p class="eyebrow">Vive la comunidad</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Acontecimientos Resaltantes
          </h2>
        </div>
        <a href="pages/eventos.html" class="text-sm font-extrabold text-teal hover:underline">
          Calendario de eventos <span aria-hidden="true">→</span>
        </a>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        ${SITE_DATA.eventos.map(evento => `
          <article class="group relative overflow-hidden rounded-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <div class="absolute inset-0">
              <img src="${evento.imagen}" alt="${evento.titulo}" class="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
            </div>
            <div class="relative flex min-h-[18rem] flex-col justify-end p-6 text-white">
              <span class="text-xs font-bold uppercase tracking-widest text-gold">${evento.categoria}</span>
              <h3 class="mt-2 text-lg font-extrabold">${evento.titulo}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-200">${evento.descripcion}</p>
              <span class="mt-3 text-xs font-semibold text-slate-300">📅 ${evento.fecha}</span>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================
// GALERÍA
// ============================================
function renderGaleria() {
  const section = document.getElementById('galeria');
  if (!section) return;

  section.innerHTML = `
    <div class="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div>
        <p class="eyebrow">Conoce nuestros espacios</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Galería Institucional
        </h2>
      </div>
      <a href="pages/galeria.html" class="text-sm font-extrabold text-teal hover:underline">
        Ver galería completa <span aria-hidden="true">→</span>
      </a>
    </div>
    <div class="grid gap-4 sm:grid-cols-3">
      ${SITE_DATA.galeria.map(item => `
        <figure class="group relative flex min-h-64 items-end overflow-hidden rounded-2xl shadow-lg">
          <img src="${item.imagen}" alt="${item.titulo}" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
          <figcaption class="relative p-6 text-white">
            <span class="text-xs font-bold uppercase tracking-widest text-gold">Galería</span>
            <p class="mt-2 font-extrabold">${item.titulo}</p>
          </figcaption>
        </figure>
      `).join('')}
    </div>
  `;
}

// ============================================
// TESTIMONIOS
// ============================================
function renderTestimonios() {
  const section = document.getElementById('testimonios');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Testimonios</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Lo que Dicen Nuestros Estudiantes y Egresados
        </h2>
      </div>
      <div class="grid gap-5 md:grid-cols-2">
        ${SITE_DATA.testimonios.map(testimonio => `
          <article class="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-start gap-4">
              <img src="${testimonio.imagen}" alt="${testimonio.nombre}" class="size-14 rounded-full object-cover" loading="lazy">
              <div>
                <h3 class="font-extrabold text-navy">${testimonio.nombre}</h3>
                <p class="text-sm font-semibold text-teal">${testimonio.cargo}</p>
              </div>
            </div>
            <p class="mt-4 leading-7 text-slate-600">"${testimonio.texto}"</p>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================
// NOTICIAS
// ============================================
function renderNoticias() {
  const section = document.getElementById('noticias');
  if (!section) return;

  section.innerHTML = `
    <div class="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div>
        <p class="eyebrow">Mantente informado</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Últimas Noticias
        </h2>
      </div>
      <a href="pages/noticias.html" class="text-sm font-extrabold text-teal hover:underline">
        Ver todas las noticias <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      ${SITE_DATA.noticias.map(noticia => `
        <article class="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-teal hover:shadow-lg">
          <div class="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-teal">
            <span>${noticia.categoria}</span>
            <span>${noticia.fecha}</span>
          </div>
          <h3 class="mt-4 text-xl font-extrabold text-navy">${noticia.titulo}</h3>
          <p class="mt-3 leading-7 text-slate-600">${noticia.descripcion}</p>
          <a href="pages/noticias.html" class="mt-6 inline-block text-sm font-extrabold text-teal hover:underline">
            Leer más <span aria-hidden="true">→</span>
          </a>
        </article>
      `).join('')}
    </div>
  `;
}

// ============================================
// ENLACES DE INTERÉS
// ============================================
function renderEnlacesInteres() {
  const section = document.getElementById('enlaces-interes');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Enlaces de interés</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Recursos Institucionales
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        ${SITE_DATA.enlacesInteres.map(enlace => `
          <a href="${enlace.url}" target="_blank" rel="noopener" class="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
            <div class="grid size-12 place-items-center rounded-xl bg-navy/5 text-2xl">🔗</div>
            <p class="mt-4 text-sm font-extrabold text-navy">${enlace.titulo}</p>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================
// CONTACTO
// ============================================
function renderContacto() {
  const section = document.getElementById('contacto');
  if (!section) return;

  section.innerHTML = `
    <div class="section-wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div>
        <p class="eyebrow">Estamos para ayudarte</p>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Contáctanos
        </h2>
        <p class="mt-4 leading-7 text-slate-600">
          ¿Tienes preguntas sobre nuestros programas o el proceso de admisión? Escríbenos y te orientaremos.
        </p>
        <div class="mt-8 space-y-4 text-sm text-slate-600">
          <p>
            <strong class="block text-navy">Teléfono</strong>
            <a class="font-semibold text-teal hover:underline" href="tel:${SITE_DATA.info.telefonoLink}">${SITE_DATA.info.telefono}</a>
          </p>
          <p>
            <strong class="block text-navy">Correo institucional</strong>
            <a class="font-semibold text-teal hover:underline" href="mailto:${SITE_DATA.info.emailInformes}">${SITE_DATA.info.emailInformes}</a>
          </p>
          <p>
            <strong class="block text-navy">Dirección</strong>
            ${SITE_DATA.info.direccion}, ${SITE_DATA.info.distrito}, ${SITE_DATA.info.departamento}
          </p>
          <p>
            <strong class="block text-navy">Horario de atención</strong>
            ${SITE_DATA.info.horario}
          </p>
        </div>
      </div>
      <form class="rounded-2xl bg-white p-6 shadow-xl shadow-navy/5 ring-1 ring-slate-200 sm:p-8" action="https://formsubmit.co/${SITE_DATA.info.emailInformes}" method="POST">
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio web" />
        <input type="hidden" name="_captcha" value="false" />
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="text-sm font-bold text-navy">
            Nombre completo
            <input class="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-teal focus:ring-4 focus:ring-teal/10" type="text" name="nombre" placeholder="Tu nombre" autocomplete="name" required />
          </label>
          <label class="text-sm font-bold text-navy">
            Correo electrónico
            <input class="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-teal focus:ring-4 focus:ring-teal/10" type="email" name="correo" placeholder="tu@correo.com" autocomplete="email" required />
          </label>
        </div>
        <label class="mt-5 block text-sm font-bold text-navy">
          Mensaje
          <textarea class="mt-2 min-h-36 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-teal focus:ring-4 focus:ring-teal/10" name="mensaje" placeholder="¿Cómo podemos ayudarte?" required></textarea>
        </label>
        <button class="mt-6 rounded-full bg-navy px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal" type="submit">
          Enviar mensaje <span class="ml-2" aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  `;
}

// ============================================
// FOOTER
// ============================================
function renderFooter() {
  if (typeof window.renderDynamicFooter === 'function') {
    window.renderDynamicFooter();
    return;
  }
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-wrap grid gap-12 py-16 sm:grid-cols-2 xl:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">
      <div>
        <div class="flex items-center gap-3">
          <span class="grid size-12 place-items-center rounded-xl bg-gold text-xl font-extrabold text-navy">H</span>
          <p class="text-xl font-extrabold">IESTP Huanta</p>
        </div>
        <p class="mt-5 max-w-sm text-sm leading-7 text-slate-300">
          Formamos profesionales técnicos con vocación, innovación y compromiso con el desarrollo de Ayacucho.
        </p>
        <a href="pages/admision.html" class="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-navy shadow-lg shadow-gold/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
          Conoce la admisión <span class="ml-2" aria-hidden="true">→</span>
        </a>
      </div>

      <nav aria-label="Enlaces principales del pie de página">
        <h3 class="font-extrabold text-gold">Explora</h3>
        <ul class="mt-5 space-y-3 text-sm text-slate-300">
          <li><a class="transition hover:text-white" href="pages/nosotros.html">Sobre nosotros</a></li>
          <li><a class="transition hover:text-white" href="pages/plana-docente.html">Plana Docente</a></li>
          <li><a class="transition hover:text-white" href="#carreras">Programas de estudio</a></li>
          <li><a class="transition hover:text-white" href="pages/noticias.html">Noticias y eventos</a></li>
        </ul>
      </nav>

      <nav aria-label="Enlaces institucionales">
        <h3 class="font-extrabold text-gold">Institución</h3>
        <ul class="mt-5 space-y-3 text-sm text-slate-300">
          <li><a class="transition hover:text-white" href="pages/admision.html">Admisión y matrícula</a></li>
          <li><a class="transition hover:text-white" href="pages/transparencia.html">Transparencia</a></li>
          <li><a class="transition hover:text-white" href="#contacto">Contáctanos</a></li>
        </ul>
      </nav>

      <div>
        <h3 class="font-extrabold text-gold">Visítanos</h3>
        <address class="mt-5 space-y-3 text-sm not-italic leading-6 text-slate-300">
          ${SITE_DATA.info.direccion}<br />
          ${SITE_DATA.info.distrito}, ${SITE_DATA.info.departamento} - ${SITE_DATA.info.pais}<br />
          <a class="transition hover:text-white" href="tel:${SITE_DATA.info.telefonoLink}">${SITE_DATA.info.telefono}</a><br />
          <a class="transition hover:text-white" href="mailto:${SITE_DATA.info.emailInformes}">${SITE_DATA.info.emailInformes}</a>
        </address>
        <p class="mt-5 text-sm text-slate-300">Horario: ${SITE_DATA.info.horario}</p>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="footer-wrap flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 IESTP Huanta. Todos los derechos reservados.</p>
        <p>Educación pública al servicio de la comunidad.</p>
      </div>
    </div>
  `;
}

// ============================================
// MENÚ MÓVIL
// ============================================
function initMobileMenu() {
  const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("hidden", isOpen);
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// ============================================
// ANIMACIONES DE SCROLL
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}
