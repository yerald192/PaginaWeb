// ============================================
// MÓDULO NOSOTROS - IESTP HUANTA
// Renderizado Dinámico con Iconografía Vectorial Profesional
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderNosotrosHero();
  renderNosotrosTabs();
  renderResenaHistorica();
  renderLicenciamiento();
  renderMisionVisionValores();
  renderOrganizacion();
  renderPlanaJerarquica();
  initNosotrosModals();
});

// ============================================
// HERO SECTION
// ============================================
function renderNosotrosHero() {
  const container = document.getElementById('nosotros-hero');
  if (!container || !SITE_DATA || !SITE_DATA.nosotros) return;

  const data = SITE_DATA.nosotros.presentacion;
  const I = window.APP_ICONS || {};

  container.innerHTML = `
    <div class="section-wrap relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center py-16 lg:py-24">
      <div>
        <div class="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-gold border border-gold/30">
          ${I.shieldCheck ? I.shieldCheck('size-3.5') : ''}
          <span>${data.eyebrow} · Institución Licenciada</span>
        </div>
        <h1 class="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl text-white">
          ${data.titulo}
        </h1>
        <p class="mt-3 text-lg sm:text-xl font-bold text-amber-200/95">
          ${data.subtitulo}
        </p>
        <p class="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
          ${data.descripcionCorta} Formamos profesionales técnicos con sólidos principios éticos, capacidades innovadoras y pertinencia para el desarrollo productivo regional y nacional.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a href="#historia" class="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-xs sm:text-sm font-extrabold text-navy shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-amber-300">
            <span>Explorar reseña histórica</span>
            ${I.arrowDown ? I.arrowDown('size-4') : ''}
          </a>
          <button type="button" id="btn-hero-video" class="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 hover:border-white">
            <span class="grid size-6 place-items-center rounded-full bg-gold text-navy">
              ${I.play ? I.play('size-3 text-navy ml-0.5') : '▶'}
            </span>
            <span>Ver Video Institucional</span>
          </button>
        </div>
      </div>

      <div class="relative">
        <div class="group relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl shadow-black/40">
          <img 
            class="h-80 w-full object-cover sm:h-96 transition duration-700 group-hover:scale-105" 
            src="${data.imagenPrincipal}" 
            alt="Fachada principal del Instituto de Educación Superior Público Huanta" 
            onerror="this.src='${data.imagenRemota}'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <div class="rounded-2xl bg-white/95 backdrop-blur p-4 text-navy shadow-lg max-w-[280px]">
              <div class="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-teal">
                ${I.shieldCheck ? I.shieldCheck('size-3') : ''}
                <span>Educación Superior</span>
              </div>
              <p class="text-xs sm:text-sm font-extrabold mt-1 leading-snug text-slate-800">
                Formación tecnológica de excelencia y calidad acreditada
              </p>
            </div>
            <button type="button" id="btn-play-badge" class="group/btn grid size-14 place-items-center rounded-2xl bg-gold text-navy shadow-xl transition hover:scale-110 hover:bg-amber-300" aria-label="Reproducir video institucional">
              ${I.play ? I.play('size-5 text-navy ml-0.5') : '▶'}
            </button>
          </div>
        </div>

        <div class="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3.5 rounded-2xl bg-navy border border-gold/30 px-5 py-3.5 text-white shadow-xl">
          <span class="grid size-10 place-items-center rounded-xl bg-gold/15 text-gold">
            ${I.award ? I.award('size-5 text-gold') : ''}
          </span>
          <div>
            <strong class="block text-sm font-black text-gold">39 Años de Trayectoria</strong>
            <small class="text-xs text-slate-300">Fundado el 05 de junio de 1986</small>
          </div>
        </div>
      </div>
    </div>
  `;

  const btnVideo = document.getElementById('btn-hero-video');
  const btnBadge = document.getElementById('btn-play-badge');
  if (btnVideo) btnVideo.addEventListener('click', openVideoModal);
  if (btnBadge) btnBadge.addEventListener('click', openVideoModal);
}

// ============================================
// NAVEGACIÓN RÁPIDA POR PESTAÑAS DE NOSOTROS
// ============================================
function renderNosotrosTabs() {
  const container = document.getElementById('nosotros-tabs-nav');
  if (!container) return;

  const I = window.APP_ICONS || {};

  const tabs = [
    { id: "historia", label: "Reseña Histórica", icon: I.document ? I.document('size-3.5') : '' },
    { id: "licenciamiento", label: "Licenciamiento", icon: I.shieldCheck ? I.shieldCheck('size-3.5') : '' },
    { id: "valores", label: "Misión, Visión y Valores", icon: I.award ? I.award('size-3.5') : '' },
    { id: "organizacion", label: "Organización Institucional", icon: I.building ? I.building('size-3.5') : '' },
    { id: "plana-jerarquica", label: "Plana Jerárquica", icon: I.users ? I.users('size-3.5') : '' },
    { id: "plana-docente", label: "Plana Docente", icon: I.academicCap ? I.academicCap('size-3.5 text-teal') : '', url: "plana-docente.html", isSpecial: true }
  ];

  container.innerHTML = `
    <div class="header-wrap py-3">
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        ${tabs.map(t => {
          if (t.url) {
            return `
              <a href="${t.url}" class="whitespace-nowrap inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-2 text-xs font-black text-teal transition hover:bg-teal hover:text-white">
                ${t.icon}
                <span>${t.label}</span>
                ${I.arrowRight ? I.arrowRight('size-3') : '→'}
              </a>
            `;
          }
          return `
            <a href="#${t.id}" class="tab-link whitespace-nowrap inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-navy hover:text-navy hover:bg-slate-50">
              ${t.icon}
              <span>${t.label}</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================
// RESEÑA HISTÓRICA & PRESENTACIÓN
// ============================================
function renderResenaHistorica() {
  const container = document.getElementById('historia');
  if (!container || !SITE_DATA || !SITE_DATA.nosotros) return;

  const data = SITE_DATA.nosotros.presentacion;
  const I = window.APP_ICONS || {};

  container.innerHTML = `
    <div class="section-wrap py-16 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <span class="eyebrow">${data.eyebrow}</span>
          <h2 class="mt-3 text-3xl font-extrabold text-navy sm:text-4xl tracking-tight">
            ${data.subtitulo}
          </h2>
          <div class="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-slate-600">
            ${data.historia.map(p => `<p>${p}</p>`).join('')}
          </div>

          <!-- Métricas Institucionales -->
          <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            ${data.estadisticasClave.map(s => `
              <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <strong class="block text-3xl font-black text-navy">${s.valor}</strong>
                <span class="mt-1 block text-xs font-semibold leading-snug text-slate-500">${s.etiqueta}</span>
              </div>
            `).join('')}
          </div>

          <!-- Reproducción de Video Institucional -->
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" id="btn-video-sec" class="inline-flex items-center gap-3 rounded-full bg-navy px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-md transition hover:bg-teal">
              <span class="grid size-6 place-items-center rounded-full bg-gold text-navy text-xs">
                ${I.play ? I.play('size-3 text-navy ml-0.5') : '▶'}
              </span>
              <span>Reproducir Video Institucional</span>
            </button>
            <a href="${data.videoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
              ${I.download ? I.download('size-4 text-slate-500') : ''}
              <span>Descargar video (720p HD)</span>
            </a>
          </div>
        </div>

        <!-- Línea de Tiempo de Resoluciones y Decretos -->
        <div class="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm">
          <div class="flex items-center justify-between pb-5 border-b border-slate-100">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-teal">Marco Legal & Creación</span>
              <h3 class="text-xl font-extrabold text-navy mt-1">Evolución Histórica</h3>
            </div>
            <span class="grid size-10 place-items-center rounded-xl bg-slate-100 text-navy">
              ${I.document ? I.document('size-5 text-navy') : ''}
            </span>
          </div>

          <div class="mt-6 space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            ${data.hitos.map(h => `
              <div class="relative pl-9 group">
                <span class="absolute left-2 top-1.5 size-3.5 rounded-full border-2 border-white bg-teal shadow transition group-hover:scale-125 group-hover:bg-gold"></span>
                <div class="flex items-center gap-2.5">
                  <span class="rounded-md bg-navy text-white px-2.5 py-0.5 text-xs font-black">${h.anio}</span>
                  <span class="text-xs font-bold text-teal">${h.resolucion}</span>
                </div>
                <p class="mt-1.5 text-sm font-medium leading-relaxed text-slate-700">
                  ${h.detalle}
                </p>
                <small class="text-[11px] font-semibold text-slate-400 block mt-1">${h.fecha}</small>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  const btnSec = document.getElementById('btn-video-sec');
  if (btnSec) btnSec.addEventListener('click', openVideoModal);
}

// ============================================
// SECCIÓN INSTITUTO LICENCIADO
// ============================================
function renderLicenciamiento() {
  const container = document.getElementById('licenciamiento');
  if (!container || !SITE_DATA || !SITE_DATA.nosotros) return;

  const data = SITE_DATA.nosotros.licenciamiento;
  const I = window.APP_ICONS || {};

  container.innerHTML = `
    <div class="section-wrap py-16 lg:py-24">
      <div class="rounded-3xl bg-gradient-to-br from-navy via-[#163857] to-[#0f435c] p-8 sm:p-12 lg:p-16 text-white shadow-xl shadow-navy/20 relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 size-80 rounded-full bg-teal/10 blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -top-20 size-80 rounded-full bg-gold/10 blur-3xl pointer-events-none"></div>

        <div class="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-gold border border-gold/30">
              ${I.shieldCheck ? I.shieldCheck('size-3.5') : ''}
              <span>${data.eyebrow}</span>
            </span>
            <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              ${data.titulo}
            </h2>
            <p class="mt-3 text-lg font-bold text-gold">
              ${data.lema}
            </p>

            <div class="mt-6 space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              ${data.descripcion.map(p => `<p>${p}</p>`).join('')}
            </div>
          </div>

          <div class="rounded-2xl bg-white p-7 text-navy shadow-2xl">
            <div class="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Oferta Académica Acreditada</span>
                <h3 class="text-xl font-black text-navy mt-0.5">5 Programas de Estudios</h3>
              </div>
              <span class="inline-flex items-center gap-1 rounded-full bg-teal/10 px-3 py-1 text-xs font-extrabold text-teal">
                ${I.award ? I.award('size-3.5') : ''}
                <span>3 Años / 6 Semestres</span>
              </span>
            </div>

            <ul class="mt-5 space-y-3">
              ${data.programas.map((prog, idx) => `
                <li class="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition hover:border-teal/40 hover:bg-white hover:shadow-sm">
                  <div class="flex items-center gap-3">
                    <span class="grid size-9 place-items-center rounded-lg bg-navy text-xs font-black text-gold">
                      0${idx + 1}
                    </span>
                    <span class="font-extrabold text-xs sm:text-sm text-navy">${prog.nombre}</span>
                  </div>
                  <span class="text-xs font-semibold text-slate-500">${prog.duracion}</span>
                </li>
              `).join('')}
            </ul>

            <div class="mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-3">
              <a href="carreras.html" class="flex-1 text-center rounded-full bg-navy px-5 py-3 text-xs sm:text-sm font-extrabold text-white transition hover:bg-teal">
                Ver detalle de programas <span aria-hidden="true">→</span>
              </a>
              <a href="admision.html" class="rounded-full bg-gold px-5 py-3 text-xs sm:text-sm font-extrabold text-navy transition hover:bg-amber-300">
                Postular 2026
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// MISIÓN, VISIÓN Y VALORES
// ============================================
function renderMisionVisionValores() {
  const container = document.getElementById('valores');
  if (!container || !SITE_DATA || !SITE_DATA.nosotros) return;

  const data = SITE_DATA.nosotros.misionVisionValores;
  const I = window.APP_ICONS || {};

  container.innerHTML = `
    <div class="section-wrap py-16 lg:py-24">
      <div class="mb-12 max-w-2xl">
        <span class="eyebrow">Principios Institucionales</span>
        <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
          Misión, Visión y Valores
        </h2>
        <p class="mt-3 text-base text-slate-600">
          Nuestra filosofía educativa orienta la formación técnica hacia el liderazgo, el emprendimiento y la sostenibilidad ambiental.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <!-- Tarjeta Misión -->
        <article class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="relative h-64 overflow-hidden bg-navy">
            <img 
              src="${data.mision.imagen}" 
              alt="Misión Institucional IESTP Huanta" 
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
              onerror="this.src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
            <div class="absolute bottom-5 left-6 right-6">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1 text-xs font-black uppercase tracking-wider text-navy">
                ${I.award ? I.award('size-3.5') : ''}
                <span>${data.mision.horizonte}</span>
              </span>
              <h3 class="mt-2 text-2xl font-black text-white">${data.mision.titulo}</h3>
            </div>
          </div>
          <div class="p-7">
            <p class="text-base leading-relaxed text-slate-600">
              ${data.mision.texto}
            </p>
          </div>
        </article>

        <!-- Tarjeta Visión -->
        <article class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="relative h-64 overflow-hidden bg-navy">
            <img 
              src="${data.vision.imagen}" 
              alt="Visión Institucional IESTP Huanta" 
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
              onerror="this.src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
            <div class="absolute bottom-5 left-6 right-6">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-teal px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                ${I.shieldCheck ? I.shieldCheck('size-3.5') : ''}
                <span>${data.vision.horizonte}</span>
              </span>
              <h3 class="mt-2 text-2xl font-black text-white">${data.vision.titulo}</h3>
            </div>
          </div>
          <div class="p-7">
            <p class="text-base leading-relaxed text-slate-600">
              ${data.vision.texto}
            </p>
          </div>
        </article>
      </div>

      <!-- Valores Institucionales -->
      <div class="mt-12 rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
        <div class="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <span class="eyebrow">Cultura y Ética</span>
            <h3 class="mt-1 text-2xl font-extrabold text-navy">Valores Institucionales</h3>
          </div>
          <span class="text-xs sm:text-sm font-semibold text-slate-500">Pilares de integridad que rigen el comportamiento docente, estudiantil y directivo</span>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          ${data.valores.map((val, idx) => `
            <div class="group rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-navy hover:bg-white hover:shadow-md">
              <div class="flex items-center justify-between">
                <span class="grid size-10 place-items-center rounded-xl bg-navy text-gold text-xs font-black">
                  0${idx + 1}
                </span>
                <span class="text-xs font-bold text-teal">${I.check ? I.check('size-4 text-teal') : ''}</span>
              </div>
              <h4 class="mt-4 text-lg font-black text-navy">${val.nombre}</h4>
              <p class="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">${val.descripcion}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ============================================
// ORGANIZACIÓN INSTITUCIONAL (ORGANIGRAMA)
// ============================================
function renderOrganizacion() {
  const container = document.getElementById('organizacion');
  if (!container || !SITE_DATA || !SITE_DATA.nosotros) return;

  const data = SITE_DATA.nosotros.organizacion;
  const I = window.APP_ICONS || {};

  container.innerHTML = `
    <div class="section-wrap py-16 lg:py-24">
      <div class="mb-10 max-w-2xl">
        <span class="eyebrow">${data.eyebrow}</span>
        <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
          ${data.titulo}
        </h2>
        <p class="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
          ${data.descripcion}
        </p>
      </div>

      <!-- Niveles Estructurales -->
      <div class="grid gap-5 sm:grid-cols-3 mb-10">
        ${data.niveles.map((n, i) => `
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span class="inline-flex items-center gap-1 rounded-md bg-navy text-white px-2.5 py-0.5 text-xs font-black">
              ${I.building ? I.building('size-3') : ''}
              <span>Nivel 0${i + 1}</span>
            </span>
            <h3 class="mt-3 text-base font-extrabold text-navy">${n.nivel}</h3>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">${n.detalle}</p>
          </div>
        `).join('')}
      </div>

      <!-- Visor de Organigrama -->
      <div class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <span class="grid size-9 place-items-center rounded-xl bg-teal/10 text-teal">
              ${I.building ? I.building('size-4 text-teal') : ''}
            </span>
            <div>
              <strong class="block text-sm font-black text-navy">Estructura Organizacional Actualizada</strong>
              <small class="text-xs text-slate-500">Haz clic en la imagen o en el botón para ampliar en pantalla completa</small>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="btn-zoom-organigrama" class="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-extrabold text-white transition hover:bg-teal">
              ${I.zoomIn ? I.zoomIn('size-3.5') : ''}
              <span>Ver en pantalla completa</span>
            </button>
            <a href="${data.organigramaImg}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100">
              ${I.externalLink ? I.externalLink('size-3.5') : ''}
              <span>Abrir archivo</span>
            </a>
          </div>
        </div>

        <div class="mt-6 flex justify-center cursor-zoom-in" id="organigrama-click-area">
          <img 
            src="${data.organigramaImg}" 
            alt="Organigrama Institucional IESTP Huanta" 
            class="max-h-[550px] w-auto rounded-xl object-contain shadow-sm transition duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  `;

  const btnZoom = document.getElementById('btn-zoom-organigrama');
  const clickArea = document.getElementById('organigrama-click-area');
  if (btnZoom) btnZoom.addEventListener('click', () => openImageModal(data.organigramaImg, 'Organigrama Institucional Actualizado'));
  if (clickArea) clickArea.addEventListener('click', () => openImageModal(data.organigramaImg, 'Organigrama Institucional Actualizado'));
}

// ============================================
// PLANA JERÁRQUICA COMPLETA
// ============================================
function renderPlanaJerarquica() {
  const container = document.getElementById('plana-jerarquica');
  if (!container || !SITE_DATA || !SITE_DATA.nosotros) return;

  const data = SITE_DATA.nosotros.planaJerarquica;
  const dir = data.director;
  const I = window.APP_ICONS || {};

  container.innerHTML = `
    <div class="section-wrap py-16 lg:py-24">
      <div class="mb-12 max-w-2xl">
        <span class="eyebrow">${data.eyebrow}</span>
        <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
          ${data.titulo}
        </h2>
        <p class="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
          ${data.descripcion}
        </p>
      </div>

      <!-- Tarjeta del Director General -->
      <div class="mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md p-8 sm:p-10">
        <div class="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
          <div class="flex justify-center">
            <div class="relative">
              <div class="size-52 sm:size-60 overflow-hidden rounded-2xl border-4 border-slate-100 shadow-xl bg-slate-900">
                <img 
                  src="${dir.foto}" 
                  alt="${dir.nombre}" 
                  class="h-full w-full object-cover object-top"
                  onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'"
                />
              </div>
              <span class="absolute -bottom-3 -right-2 inline-flex items-center gap-1.5 rounded-xl bg-navy px-3.5 py-1 text-xs font-black text-gold shadow-md">
                ${I.award ? I.award('size-3.5') : ''}
                <span>Dirección</span>
              </span>
            </div>
          </div>

          <div>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-slate-700">
              ${I.building ? I.building('size-3') : ''}
              <span>${dir.area}</span>
            </span>
            <h3 class="mt-3 text-2xl sm:text-3xl font-black text-navy">${dir.nombre}</h3>
            <p class="text-base font-bold text-teal mt-0.5">${dir.cargo}</p>
            <p class="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              ${dir.descripcion}
            </p>

            <div class="mt-6 grid gap-3 sm:grid-cols-3 pt-6 border-t border-slate-100">
              <div class="rounded-xl bg-slate-50 p-3.5 border border-slate-200/80">
                <small class="block text-[11px] font-bold text-slate-400">Teléfono</small>
                <a href="tel:${dir.telefono.replace(/[^0-9+]/g, '')}" class="text-xs sm:text-sm font-extrabold text-navy hover:text-teal">${dir.telefono}</a>
              </div>
              <div class="rounded-xl bg-slate-50 p-3.5 border border-slate-200/80">
                <small class="block text-[11px] font-bold text-slate-400">Correo Electrónico</small>
                <a href="mailto:${dir.email}" class="text-xs sm:text-sm font-extrabold text-navy hover:text-teal truncate block">${dir.email}</a>
              </div>
              <div class="rounded-xl bg-slate-50 p-3.5 border border-slate-200/80">
                <small class="block text-[11px] font-bold text-slate-400">Despacho</small>
                <span class="text-xs sm:text-sm font-extrabold text-navy">${dir.direccion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros de Directorio -->
      <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 class="text-xl font-black text-navy">Directorio de Jefaturas y Coordinaciones</h3>
          <p class="text-xs text-slate-500">12 autoridades académicas y administrativas</p>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto" id="filter-jerarquia-container">
          <button type="button" class="btn-filter-jerarquia active rounded-full bg-navy px-4 py-1.5 text-xs font-extrabold text-white transition" data-cat="all">Todos (12)</button>
          <button type="button" class="btn-filter-jerarquia rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100" data-cat="Académica">Académica</button>
          <button type="button" class="btn-filter-jerarquia rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100" data-cat="Coordinación">Coordinación</button>
          <button type="button" class="btn-filter-jerarquia rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100" data-cat="Administración">Administración</button>
          <button type="button" class="btn-filter-jerarquia rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100" data-cat="Calidad">Calidad & Otros</button>
        </div>
      </div>

      <!-- Grid de Miembros -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="jerarquia-grid">
        ${data.directorio.map(m => createJerarquiaCard(m)).join('')}
      </div>

      <!-- Banner hacia Plana Docente -->
      <div class="mt-16 rounded-3xl bg-slate-100 border border-slate-200 p-8 sm:p-12 text-center">
        <span class="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-teal">
          ${I.academicCap ? I.academicCap('size-3.5') : ''}
          <span>Cuerpo Docente Institucional</span>
        </span>
        <h3 class="mt-3 text-2xl sm:text-3xl font-black text-navy">¿Deseas consultar la Plana Docente?</h3>
        <p class="mt-2 max-w-xl mx-auto text-sm sm:text-base text-slate-600">
          Revisa el cuadro de docentes asignados a los 5 programas de estudios y empleabilidad con sus unidades didácticas y hojas de vida.
        </p>
        <div class="mt-6 flex justify-center">
          <a href="plana-docente.html" class="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-md transition hover:bg-teal/90">
            <span>Ver Plana Docente 2026-II</span>
            ${I.arrowRight ? I.arrowRight('size-4') : '→'}
          </a>
        </div>
      </div>
    </div>
  `;

  initJerarquiaFilters(data.directorio);
}

function createJerarquiaCard(m) {
  const I = window.APP_ICONS || {};

  const catColor = {
    'Académica': 'bg-blue-50 text-blue-800 border-blue-200',
    'Coordinación': 'bg-teal-50 text-teal-800 border-teal-200',
    'Calidad': 'bg-amber-50 text-amber-900 border-amber-200',
    'Administración': 'bg-purple-50 text-purple-800 border-purple-200',
    'Bienestar': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'Investigación': 'bg-rose-50 text-rose-800 border-rose-200',
    'Formación': 'bg-indigo-50 text-indigo-800 border-indigo-200'
  }[m.categoria] || 'bg-slate-50 text-slate-700 border-slate-200';

  return `
    <article class="jerarquia-card group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md" data-category="${m.categoria}">
      <div class="flex items-start justify-between gap-3">
        <span class="rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${catColor}">
          ${m.categoria}
        </span>
        <span class="text-xs font-bold text-slate-400">#${String(m.id).padStart(2, '0')}</span>
      </div>

      <div class="mt-4">
        <small class="block text-[11px] font-bold uppercase tracking-wider text-teal">${m.area}</small>
        <h4 class="mt-1 text-base sm:text-lg font-black text-navy leading-snug">${m.nombre}</h4>
        <p class="mt-1 text-xs font-semibold text-slate-500 leading-relaxed">${m.cargo}</p>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs">
        ${m.email ? `
          <div class="flex items-center gap-2 text-slate-600 truncate">
            ${I.mail ? I.mail('size-3.5 text-slate-400') : ''}
            <a href="mailto:${m.email}" class="hover:text-teal truncate font-medium">${m.email}</a>
          </div>
        ` : ''}
        ${m.celular ? `
          <div class="flex items-center gap-2 text-slate-600">
            ${I.phone ? I.phone('size-3.5 text-slate-400') : ''}
            <a href="tel:${m.celular.replace(/[^0-9+]/g, '')}" class="hover:text-teal font-medium">${m.celular}</a>
          </div>
        ` : ''}
      </div>
    </article>
  `;
}

function initJerarquiaFilters(directorio) {
  const buttons = document.querySelectorAll('.btn-filter-jerarquia');
  const cards = document.querySelectorAll('.jerarquia-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-navy', 'text-white', 'active');
        b.classList.add('border', 'border-slate-200', 'bg-white', 'text-slate-700');
      });
      btn.classList.add('bg-navy', 'text-white', 'active');
      btn.classList.remove('border', 'border-slate-200', 'bg-white', 'text-slate-700');

      const cat = btn.dataset.cat;
      cards.forEach(card => {
        if (cat === 'all') {
          card.style.display = 'block';
        } else if (cat === 'Calidad & Otros') {
          const c = card.dataset.category;
          card.style.display = (c === 'Calidad' || c === 'Bienestar' || c === 'Investigación' || c === 'Formación') ? 'block' : 'none';
        } else {
          card.style.display = card.dataset.category === cat ? 'block' : 'none';
        }
      });
    });
  });
}

// ============================================
// MODALES (VIDEO Y ZOOM ORGANIGRAMA)
// ============================================
function initNosotrosModals() {
  if (document.getElementById('nosotros-modals-container')) return;

  const I = window.APP_ICONS || {};

  const modalContainer = document.createElement('div');
  modalContainer.id = 'nosotros-modals-container';
  modalContainer.innerHTML = `
    <!-- Modal Video -->
    <div id="modal-video" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/85 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <div class="relative w-full max-w-4xl rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-white/10">
        <div class="flex items-center justify-between border-b border-white/10 bg-slate-950 px-6 py-4 text-white">
          <div class="flex items-center gap-3">
            <span class="grid size-7 place-items-center rounded-lg bg-gold text-navy text-xs">
              ${I.play ? I.play('size-3 text-navy ml-0.5') : '▶'}
            </span>
            <strong class="text-xs sm:text-sm font-extrabold">Video Institucional Oficial — IESTP Huanta</strong>
          </div>
          <button type="button" id="btn-close-video" class="grid size-8 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition" aria-label="Cerrar video">
            ${I.close ? I.close('size-4') : '✕'}
          </button>
        </div>
        <div class="aspect-video bg-black flex items-center justify-center">
          <video id="player-video-modal" controls class="h-full w-full" preload="metadata">
            <source src="https://iestphuanta.edu.pe/wp-content/uploads/2024/08/FBDownloader.to_An9si1NBjNlVmW4a0ukUzfTs7jNedomWGKflND3xGdd4ROdJt2df-kX8B_3FKbR3T7s5m-VECAKoFQwBAiBDmUz8_720p_HD-1.mp4" type="video/mp4">
            Tu navegador no soporta reproducción de video HTML5.
          </video>
        </div>
      </div>
    </div>

    <!-- Modal Zoom Imagen -->
    <div id="modal-image" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/85 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <div class="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-white/10">
        <div class="flex items-center justify-between border-b border-white/10 bg-slate-950 px-6 py-4 text-white">
          <strong id="modal-image-title" class="text-xs sm:text-sm font-extrabold">Organigrama Institucional</strong>
          <button type="button" id="btn-close-image" class="grid size-8 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition" aria-label="Cerrar imagen">
            ${I.close ? I.close('size-4') : '✕'}
          </button>
        </div>
        <div class="flex-1 overflow-auto p-4 flex items-center justify-center bg-white">
          <img id="modal-image-src" src="" alt="" class="max-w-full max-h-[80vh] object-contain" />
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalContainer);

  const closeVideo = document.getElementById('btn-close-video');
  const modalVideo = document.getElementById('modal-video');
  if (closeVideo && modalVideo) {
    closeVideo.addEventListener('click', closeVideoModal);
    modalVideo.addEventListener('click', (e) => {
      if (e.target === modalVideo) closeVideoModal();
    });
  }

  const closeImage = document.getElementById('btn-close-image');
  const modalImage = document.getElementById('modal-image');
  if (closeImage && modalImage) {
    closeImage.addEventListener('click', closeImageModal);
    modalImage.addEventListener('click', (e) => {
      if (e.target === modalImage) closeImageModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeImageModal();
    }
  });
}

function openVideoModal() {
  const modal = document.getElementById('modal-video');
  const video = document.getElementById('player-video-modal');
  if (modal && video) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    video.play().catch(() => {});
  }
}

function closeVideoModal() {
  const modal = document.getElementById('modal-video');
  const video = document.getElementById('player-video-modal');
  if (modal && video) {
    video.pause();
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function openImageModal(src, title) {
  const modal = document.getElementById('modal-image');
  const img = document.getElementById('modal-image-src');
  const titleEl = document.getElementById('modal-image-title');
  if (modal && img) {
    img.src = src;
    if (titleEl) titleEl.textContent = title || 'Visualizador de Imagen';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeImageModal() {
  const modal = document.getElementById('modal-image');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
