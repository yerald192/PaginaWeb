// ============================================
// MÓDULO PLANA DOCENTE - IESTP HUANTA
// Renderizado Dinámico con Iconografía Vectorial Profesional
// ============================================

let currentFilter = 'all';
let currentSearch = '';
let currentViewMode = 'table'; // 'table' | 'cards'

document.addEventListener('DOMContentLoaded', () => {
  renderPlanaDocenteHero();
  renderPlanaDocenteControls();
  renderPlanaDocenteContent();
});

// ============================================
// HERO SECTION
// ============================================
function renderPlanaDocenteHero() {
  const hero = document.getElementById('plana-docente-hero');
  if (!hero || !SITE_DATA || !SITE_DATA.planaDocente) return;

  const data = SITE_DATA.planaDocente;
  const I = window.APP_ICONS || {};
  const totalDocentes = data.programas.reduce((acc, p) => acc + p.docentes.length, 0);

  hero.innerHTML = `
    <div class="section-wrap relative z-10 py-16 lg:py-20 text-white">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-gold border border-gold/30">
          ${I.academicCap ? I.academicCap('size-3.5') : ''}
          <span>Cuerpo Docente Institucional</span>
        </div>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          ${data.titulo}
        </h1>
        <p class="mt-3 text-lg font-bold text-amber-200">
          ${data.subtitulo}
        </p>
        <p class="mt-4 text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
          ${data.descripcion}
        </p>
      </div>

      <!-- Métricas del Equipo Docente -->
      <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <span class="block text-3xl font-black text-gold">${totalDocentes}</span>
          <span class="mt-1 block text-xs font-semibold text-slate-300">Docentes en Ejercicio</span>
        </div>
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <span class="block text-3xl font-black text-white">${data.programas.length - 1}</span>
          <span class="mt-1 block text-xs font-semibold text-slate-300">Programas de Estudio</span>
        </div>
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <span class="block text-3xl font-black text-teal-300">${data.periodoActivo}</span>
          <span class="mt-1 block text-xs font-semibold text-slate-300">Periodo Lectivo Vigente</span>
        </div>
        <div class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
          <span class="block text-3xl font-black text-gold">100%</span>
          <span class="mt-1 block text-xs font-semibold text-slate-300">Titulados y Certificados</span>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// CONTROLES INTERACTIVOS (FILTROS, BÚSQUEDA, VISTA)
// ============================================
function renderPlanaDocenteControls() {
  const container = document.getElementById('plana-docente-controls');
  if (!container || !SITE_DATA || !SITE_DATA.planaDocente) return;

  const programas = SITE_DATA.planaDocente.programas;
  const totalDocentes = programas.reduce((acc, p) => acc + p.docentes.length, 0);
  const I = window.APP_ICONS || {};

  container.innerHTML = `
    <div class="header-wrap py-5">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <!-- Buscador en tiempo real -->
        <div class="relative w-full lg:max-w-md">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            ${I.search ? I.search('size-4') : '🔍'}
          </span>
          <input 
            type="text" 
            id="docente-search-input" 
            placeholder="Buscar docente o unidad didáctica..." 
            class="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-11 pr-10 text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-sm transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
          />
          <button 
            type="button" 
            id="btn-clear-search" 
            class="absolute right-3.5 top-1/2 -translate-y-1/2 hidden text-slate-400 hover:text-slate-600 font-bold text-sm"
            title="Limpiar búsqueda"
          >
            ${I.close ? I.close('size-3.5') : '✕'}
          </button>
        </div>

        <!-- Conmutador de Vistas (Tabla / Tarjetas) -->
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">Vista:</span>
          <div class="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button 
              type="button" 
              id="view-toggle-table" 
              class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition ${currentViewMode === 'table' ? 'bg-navy text-white shadow-sm' : 'text-slate-600 hover:text-navy'}"
            >
              ${I.table ? I.table('size-3.5') : ''}
              <span>Modo Tabla</span>
            </button>
            <button 
              type="button" 
              id="view-toggle-cards" 
              class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition ${currentViewMode === 'cards' ? 'bg-navy text-white shadow-sm' : 'text-slate-600 hover:text-navy'}"
            >
              ${I.cards ? I.cards('size-3.5') : ''}
              <span>Modo Tarjetas</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Pestañas de Filtro por Programa de Estudios -->
      <div class="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-1" id="filter-tabs-wrapper">
        <button 
          type="button" 
          class="btn-program-tab whitespace-nowrap rounded-full px-4 py-2 text-xs font-extrabold transition shadow-sm ${currentFilter === 'all' ? 'bg-navy text-white shadow-navy/20' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}"
          data-program="all"
        >
          <span>Todos (${totalDocentes})</span>
        </button>
        ${programas.map(p => `
          <button 
            type="button" 
            class="btn-program-tab whitespace-nowrap rounded-full px-4 py-2 text-xs font-extrabold transition shadow-sm ${currentFilter === p.id ? 'bg-navy text-white shadow-navy/20' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}"
            data-program="${p.id}"
          >
            <span>${p.nombre} (${p.docentes.length})</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  // Listeners de búsqueda y cambio de vista
  const searchInput = document.getElementById('docente-search-input');
  const btnClear = document.getElementById('btn-clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      if (btnClear) {
        btnClear.classList.toggle('hidden', currentSearch.length === 0);
      }
      renderPlanaDocenteContent();
    });
  }

  if (btnClear && searchInput) {
    btnClear.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      btnClear.classList.add('hidden');
      renderPlanaDocenteContent();
    });
  }

  const btnTable = document.getElementById('view-toggle-table');
  const btnCards = document.getElementById('view-toggle-cards');
  if (btnTable && btnCards) {
    btnTable.addEventListener('click', () => {
      if (currentViewMode !== 'table') {
        currentViewMode = 'table';
        btnTable.className = 'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition bg-navy text-white shadow-sm';
        btnCards.className = 'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition text-slate-600 hover:text-navy';
        renderPlanaDocenteContent();
      }
    });

    btnCards.addEventListener('click', () => {
      if (currentViewMode !== 'cards') {
        currentViewMode = 'cards';
        btnCards.className = 'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition bg-navy text-white shadow-sm';
        btnTable.className = 'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition text-slate-600 hover:text-navy';
        renderPlanaDocenteContent();
      }
    });
  }

  const tabs = document.querySelectorAll('.btn-program-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.className = 'btn-program-tab whitespace-nowrap rounded-full px-4 py-2 text-xs font-extrabold transition shadow-sm bg-white text-slate-700 border border-slate-200 hover:bg-slate-100';
      });
      tab.className = 'btn-program-tab whitespace-nowrap rounded-full px-4 py-2 text-xs font-extrabold transition shadow-sm bg-navy text-white shadow-navy/20';
      currentFilter = tab.dataset.program;
      renderPlanaDocenteContent();
    });
  });
}

// ============================================
// RENDERIZADO DEL CONTENIDO DE DOCENTES
// ============================================
function renderPlanaDocenteContent() {
  const container = document.getElementById('plana-docente-content');
  if (!container || !SITE_DATA || !SITE_DATA.planaDocente) return;

  const allPrograms = SITE_DATA.planaDocente.programas;
  const I = window.APP_ICONS || {};

  let filteredPrograms = allPrograms;
  if (currentFilter !== 'all') {
    filteredPrograms = allPrograms.filter(p => p.id === currentFilter);
  }

  let totalMatches = 0;
  const processedPrograms = filteredPrograms.map(prog => {
    let matchingDocentes = prog.docentes;
    if (currentSearch) {
      matchingDocentes = prog.docentes.filter(d => {
        const matchName = d.nombre.toLowerCase().includes(currentSearch);
        const matchUnits = d.unidades.some(u => u.toLowerCase().includes(currentSearch));
        const matchSpec = d.especialidad && d.especialidad.toLowerCase().includes(currentSearch);
        const matchProg = prog.nombre.toLowerCase().includes(currentSearch);
        return matchName || matchUnits || matchSpec || matchProg;
      });
    }
    totalMatches += matchingDocentes.length;
    return {
      ...prog,
      docentes: matchingDocentes
    };
  }).filter(prog => prog.docentes.length > 0);

  if (processedPrograms.length === 0) {
    container.innerHTML = `
      <div class="section-wrap py-20 text-center">
        <div class="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <span class="grid size-12 place-items-center rounded-2xl bg-slate-100 text-slate-500 mx-auto">
            ${I.search ? I.search('size-6 text-slate-400') : '🔍'}
          </span>
          <h3 class="mt-4 text-xl font-black text-navy">No se encontraron docentes</h3>
          <p class="mt-2 text-xs sm:text-sm text-slate-600">
            No hay resultados que coincidan con "<strong>${currentSearch}</strong>" en el filtro seleccionado.
          </p>
          <button 
            type="button" 
            onclick="resetDocenteFilters()" 
            class="mt-6 rounded-full bg-navy px-6 py-2.5 text-xs font-extrabold text-white transition hover:bg-teal"
          >
            Limpiar filtros y ver todos
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="section-wrap py-10 space-y-16">
      ${currentSearch ? `
        <div class="flex items-center justify-between rounded-2xl bg-slate-100 border border-slate-200 p-4 text-slate-800 text-xs sm:text-sm font-semibold">
          <span>Se encontraron <strong>${totalMatches}</strong> docente(s) para "<strong>${currentSearch}</strong>"</span>
          <button type="button" onclick="resetDocenteFilters()" class="text-xs font-extrabold text-teal underline hover:text-navy">Mostrar todos</button>
        </div>
      ` : ''}

      ${processedPrograms.map(prog => `
        <section class="career-block scroll-mt-28" id="sec-${prog.id}">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-200 pb-5 mb-8">
            <div class="flex items-center gap-3">
              <span class="grid size-11 place-items-center rounded-xl bg-navy text-gold shadow-sm font-black text-xs">
                ${prog.codigo}
              </span>
              <div>
                <span class="text-[11px] font-black uppercase tracking-wider text-teal">Programa Académico Oficial</span>
                <h2 class="text-2xl sm:text-3xl font-black text-navy tracking-tight">${prog.nombre}</h2>
              </div>
            </div>
            <span class="rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 text-xs font-extrabold text-slate-700">
              ${prog.docentes.length} Docente(s) Asignado(s)
            </span>
          </div>

          ${currentViewMode === 'table' ? renderTableView(prog) : renderCardsView(prog)}
        </section>
      `).join('')}
    </div>
  `;
}

// ============================================
// MODO TABLA INSTITUCIONAL
// ============================================
function renderTableView(prog) {
  const I = window.APP_ICONS || {};

  return `
    <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table class="w-full text-left text-sm" role="table">
        <thead class="bg-navy text-white text-[11px] font-black uppercase tracking-wider">
          <tr>
            <th class="p-4 sm:p-5 w-12 text-center">N°</th>
            <th class="p-4 sm:p-5 min-w-[250px]">Apellidos y Nombres Completos</th>
            <th class="p-4 sm:p-5 min-w-[340px]">Unidades Didácticas que Imparte</th>
            <th class="p-4 sm:p-5 min-w-[160px] text-center">Periodo Lectivo</th>
            <th class="p-4 sm:p-5 min-w-[170px] text-center">Hoja de Vida</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${prog.docentes.map((d, index) => `
            <tr class="transition hover:bg-slate-50/90 group">
              <td class="p-4 sm:p-5 text-center font-bold text-slate-400 text-xs">
                ${String(index + 1).padStart(2, '0')}
              </td>
              <td class="p-4 sm:p-5">
                <div class="flex items-center gap-3">
                  <div class="grid size-10 place-items-center rounded-xl bg-slate-100 border border-slate-200 font-black text-navy text-xs shrink-0 group-hover:bg-slate-200 transition">
                    ${getInitials(d.nombre)}
                  </div>
                  <div>
                    <strong class="block text-sm font-extrabold text-navy">${d.nombre}</strong>
                    <span class="text-xs text-slate-500 font-semibold">${d.especialidad || d.tipoDocente}</span>
                  </div>
                </div>
              </td>
              <td class="p-4 sm:p-5">
                <div class="flex flex-wrap gap-1.5">
                  ${d.unidades.length > 0 ? d.unidades.map(u => `
                    <span class="inline-block rounded-lg bg-slate-50 border border-slate-200/90 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      ${u}
                    </span>
                  `).join('') : '<span class="text-xs text-slate-400 italic">Unidades en asignación</span>'}
                </div>
              </td>
              <td class="p-4 sm:p-5 text-center">
                <span class="inline-block rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[11px] font-extrabold text-slate-700">
                  ${d.periodo || '2026-II'}
                </span>
              </td>
              <td class="p-4 sm:p-5 text-center">
                ${d.hojaDeVida ? `
                  <a 
                    href="${d.hojaDeVida}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-2 text-xs font-extrabold text-white shadow-sm transition hover:bg-teal/90"
                    title="Ver Hoja de Vida oficial en nueva pestaña"
                  >
                    ${I.document ? I.document('size-3.5') : ''}
                    <span>Ver Hoja de Vida</span>
                    ${I.externalLink ? I.externalLink('size-3 text-teal-200') : ''}
                  </a>
                ` : `
                  <span class="inline-flex items-center gap-1 text-xs font-bold text-slate-400" title="Documento en proceso de actualización">
                    <span>En trámite</span>
                  </span>
                `}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ============================================
// MODO TARJETAS INSTITUCIONAL
// ============================================
function renderCardsView(prog) {
  const I = window.APP_ICONS || {};

  return `
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${prog.docentes.map((d, index) => `
        <article class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div>
            <div class="flex items-start justify-between gap-3">
              <span class="rounded-full bg-slate-100 border border-slate-200 px-3 py-0.5 text-[10px] font-black text-slate-700 uppercase">
                ${d.periodo || '2026-II'}
              </span>
              <span class="text-xs font-bold text-slate-300">#${String(index + 1).padStart(2, '0')}</span>
            </div>

            <div class="mt-4 flex items-center gap-3">
              <div class="grid size-12 place-items-center rounded-2xl bg-navy text-sm font-black text-gold shrink-0 shadow-sm">
                ${getInitials(d.nombre)}
              </div>
              <div>
                <h3 class="text-sm sm:text-base font-black text-navy leading-snug">${d.nombre}</h3>
                <p class="text-xs font-semibold text-slate-500 mt-0.5">${d.especialidad || d.tipoDocente}</p>
              </div>
            </div>

            <div class="mt-5 border-t border-slate-100 pt-4">
              <small class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Unidades Didácticas:</small>
              <div class="flex flex-wrap gap-1.5">
                ${d.unidades.map(u => `
                  <span class="rounded-lg bg-slate-50 border border-slate-200/90 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    ${u}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100">
            ${d.hojaDeVida ? `
              <a 
                href="${d.hojaDeVida}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center justify-center gap-2 rounded-xl bg-teal p-3 text-xs font-black text-white transition hover:bg-teal/90"
              >
                ${I.document ? I.document('size-3.5') : ''}
                <span>Ver Hoja de Vida Oficial</span>
                ${I.externalLink ? I.externalLink('size-3 text-teal-200') : ''}
              </a>
            ` : `
              <div class="rounded-xl bg-slate-50 p-2.5 text-center text-xs font-bold text-slate-400 border border-slate-200">
                Hoja de vida en proceso
              </div>
            `}
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function getInitials(name) {
  if (!name || name.trim() === '.') return 'DOC';
  const parts = name.split(',')[0].trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0].substring(0, 2).toUpperCase();
}

function resetDocenteFilters() {
  currentFilter = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('docente-search-input');
  if (searchInput) searchInput.value = '';
  const btnClear = document.getElementById('btn-clear-search');
  if (btnClear) btnClear.classList.add('hidden');
  renderPlanaDocenteControls();
  renderPlanaDocenteContent();
}
