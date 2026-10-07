// ============================================
// DATOS DEL SITIO WEB - IESTP HUANTA
// ============================================

const SITE_DATA = {
  // Información general
  info: {
    nombre: "IESTP Huanta",
    nombreCompleto: "Instituto de Educación Superior Público \"Huanta\"",
    telefono: "(066) 322296",
    telefonoLink: "+5166322296",
    direccion: "Jr. Córdova N° 650",
    distrito: "Huanta",
    provincia: "Huamanga",
    departamento: "Ayacucho",
    pais: "Perú",
    email: "contactos@iestphuanta.edu.pe",
    emailInformes: "informes@iestphuanta.edu.pe",
    horario: "Lun - Vie: 7:30 am - 1:15 pm",
    facebook: "https://www.facebook.com/profile.php?id=61557665334329",
    aniosExperiencia: 39,
    institutoLicenciado: true
  },

  // Navegación principal
  navegacion: [
    {
      titulo: "Nosotros",
      url: "pages/nosotros.html",
      submenu: [
        { titulo: "Presentación", url: "pages/nosotros.html#presentacion" },
        { titulo: "Visión, Misión y Valores", url: "pages/nosotros.html#valores" },
        { titulo: "Organización Institucional", url: "pages/nosotros.html#organizacion" },
        { titulo: "Plana Jerárquica", url: "pages/nosotros.html#plana-jerarquica" },
        { titulo: "Plana Docente", url: "pages/plana-docente.html" },
        { titulo: "Local", url: "pages/nosotros.html#local" }
      ]
    },
    {
      titulo: "Programas de Estudio",
      url: "#carreras",
      submenu: [
        { titulo: "Diseño y Programación Web", url: "pages/carreras.html#web" },
        { titulo: "Enfermería Técnica", url: "pages/carreras.html#enfermeria" },
        { titulo: "Mecatrónica Automotriz", url: "pages/carreras.html#mecatronica" },
        { titulo: "Industrias de Alimentos y Bebidas", url: "pages/carreras.html#alimentos" },
        { titulo: "Producción Agropecuaria", url: "pages/carreras.html#agropecuaria" }
      ]
    },
    {
      titulo: "Admisión y Matrícula",
      url: "pages/admision.html",
      submenu: [
        { titulo: "Admisión 2026", url: "pages/admision.html" },
        { titulo: "Matrícula", url: "pages/matricula.html" },
        { titulo: "Becas y Créditos", url: "pages/becas.html" }
      ]
    },
    {
      titulo: "Transparencia",
      url: "pages/transparencia.html",
      submenu: [
        { titulo: "Documentos de Gestión", url: "pages/transparencia.html#documentos" },
        { titulo: "Estadísticas", url: "pages/transparencia.html#estadisticas" },
        { titulo: "Inversiones y Recursos", url: "pages/transparencia.html#inversiones" },
        { titulo: "Libro de Reclamaciones", url: "pages/transparencia.html#reclamaciones" },
        { titulo: "Licenciamiento", url: "pages/transparencia.html#licenciamiento" }
      ]
    },
    {
      titulo: "Trámite",
      url: "pages/tramites.html",
      submenu: [
        { titulo: "TUPA", url: "pages/tramites.html#tupa" }
      ]
    },
    {
      titulo: "Contáctanos",
      url: "#contacto"
    },
    {
      titulo: "Servicios",
      url: "#servicios",
      submenu: [
        { titulo: "Biblioteca", url: "pages/servicios.html#biblioteca" },
        { titulo: "Servicios Complementarios", url: "pages/servicios.html#complementarios" },
        { titulo: "Bolsa Laboral", url: "pages/servicios.html#bolsa" }
      ]
    }
  ],

  // Hero
  hero: {
    titulo: "Construye tu futuro con formación de calidad",
    descripcion: "El Instituto de Educación Superior Público Huanta se enorgullece de ser un instituto licenciado, lo que garantiza que nuestros programas académicos cumplen con los más altos estándares de calidad establecidos por las autoridades educativas.",
    imagenFondo: "assets/hero-graduado.jpg",
    imagenSecundaria: "assets/presentacion-instituto.jpg"
  },

  // Estadísticas
  estadisticas: [
    { numero: "1000", sufijo: "+", etiqueta: "Egresados" },
    { numero: "50", sufijo: "+", etiqueta: "Docentes Especializados" },
    { numero: "5", sufijo: "", etiqueta: "Programas de Estudio" },
    { numero: "3", sufijo: " años", etiqueta: "Formación Técnica" }
  ],

  // Carreras / Programas de estudio
  carreras: [
    {
      id: "web",
      nombre: "Diseño y Programación Web",
      descripcion: "Desarrollo de aplicaciones web modernas con tecnologías actuales. Aprende a crear sitios web dinámicos, responsivos y optimizados para el usuario.",
      icono: "💻",
      imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Diseño y Programación Web"
    },
    {
      id: "enfermeria",
      nombre: "Enfermería Técnica",
      descripcion: "Formación integral para el sector salud con prácticas clínicas. Cuidado del paciente, promoción de la salud y prevención de enfermedades.",
      icono: "🏥",
      imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Enfermería Técnica"
    },
    {
      id: "mecatronica",
      nombre: "Mecatrónica Automotriz",
      descripcion: "Especialización en sistemas automotrices y mecatrónica. Diagnóstico, mantenimiento y reparación de vehículos con tecnología avanzada.",
      icono: "🔧",
      imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Mecatrónica Automotriz"
    },
    {
      id: "alimentos",
      nombre: "Industrias de Alimentos y Bebidas",
      descripcion: "Procesamiento, control de calidad y gestión de alimentos. Tecnología de alimentos, inocuidad y desarrollo de nuevos productos.",
      icono: "🍎",
      imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Industrias de Alimentos y Bebidas"
    },
    {
      id: "agropecuaria",
      nombre: "Producción Agropecuaria",
      descripcion: "Gestión de producción agrícola y pecuaria sostenible. Técnicas modernas de cultivo, crianza y manejo de recursos naturales.",
      icono: "🌾",
      imagen: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      duracion: "3 años",
      modalidad: "Presencial",
      titulo: "Profesional Técnico en Producción Agropecuaria"
    }
  ],

  // Servicios
  servicios: [
    {
      id: "laboratorios",
      titulo: "Laboratorios",
      descripcion: "Debidamente equipados y de última generación donde los estudiantes realizan trabajos de experimentación en los diferentes programas de estudios.",
      icono: "🔬",
      imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      detalles: [
        "Laboratorio Diseño y Programación",
        "Laboratorio de Enfermería Técnica",
        "Laboratorio de Mecánica Automotriz",
        "Laboratorio de Industrias Alimentarias",
        "Laboratorio de Producción Agropecuaria"
      ]
    },
    {
      id: "biblioteca",
      titulo: "Biblioteca",
      descripcion: "Se encuentra remodelada ofreciendo un ambiente apropiado, de tal manera que el estudiante se sienta en un ambiente cómodo y confortable.",
      icono: "📚",
      imagen: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      detalles: [
        "Diseño y Programación Web",
        "Enfermería Técnica",
        "Mecatrónica Automotriz",
        "Industrias Alimentarias",
        "Producción Agropecuaria"
      ]
    },
    {
      id: "red-telematica",
      titulo: "Red Telemática",
      descripcion: "Debidamente equipados de última generación, con servicios de internet, video y teleconferencias, retroproyector interconectados.",
      icono: "💻",
      imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      detalles: [
        "Uso amplio e intensivo de las TIC",
        "Equipos de última generación",
        "Actividades centrado en el alumno",
        "Aprendizaje guiado por un especialista",
        "Aprendizaje Dinámico"
      ]
    }
  ],

  // Misión, Visión y Valores
  misionVision: [
    {
      tipo: "Misión",
      titulo: "Formar para transformar",
      descripcion: "Formar profesionales técnicos con competencias de calidad, innovación, emprendimiento y compromiso con el desarrollo de la sociedad.",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      tipo: "Visión",
      titulo: "Excelencia que inspira",
      descripcion: "Al 2030, somos un IES que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, con sentido de cuidado del medio ambiente y que aportan al desarrollo económico de la región.",
      imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      tipo: "Valores",
      titulo: "Crecer con integridad",
      descripcion: "Promovemos respeto, responsabilidad, innovación, colaboración y servicio a nuestra comunidad.",
      imagen: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      lista: ["Innovación", "Excelencia", "Compromiso Institucional", "Puntualidad"]
    }
  ],

  // Eventos / Acontecimientos
  eventos: [
    {
      titulo: "Aniversario Institucional",
      descripcion: "Actividades conmemorativas del instituto. Celebración de nuestros años formando profesionales técnicos.",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      fecha: "Por anunciar",
      categoria: "Celebración"
    },
    {
      titulo: "Feria Tecnológica",
      descripcion: "Participación de estudiantes con proyectos innovadores. Demostración de competencias tecnológicas.",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      fecha: "Por anunciar",
      categoria: "Innovación"
    },
    {
      titulo: "Concurso de Innovación",
      descripcion: "Presentación de proyectos tecnológicos desarrollados por nuestros estudiantes.",
      imagen: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=80",
      fecha: "Por anunciar",
      categoria: "Creatividad"
    }
  ],

  // Testimonios
  testimonios: [
    {
      nombre: "Efrael Villanueva",
      cargo: "Egresado - Diseño y Programación Web",
      texto: "El Instituto Huanta me brindó una formación práctica y sólida. Gracias a los laboratorios bien equipados, obtuve un excelente empleo en una empresa de tecnología.",
      imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      nombre: "Ever Sanchez",
      cargo: "Egresado - Mecatrónica Automotriz",
      texto: "Estudiar en el Instituto Huanta me preparó para el mundo laboral. La formación integral y el apoyo de los profesores fueron clave para conseguir mi trabajo en una multinacional.",
      imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      nombre: "Zaida Perez",
      cargo: "Estudiante - Enfermería Técnica",
      texto: "Las prácticas en campo y los proyectos de investigación en el Instituto Huanta me están preparando muy bien para los desafíos del sector informático.",
      imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      nombre: "Bruno Perez",
      cargo: "Estudiante - Producción Agropecuaria",
      texto: "Estudiar en el Instituto Huanta ha sido una experiencia increíble. Los laboratorios están muy bien equipados, y los profesores siempre están dispuestos a ayudarnos a entender los temas más complejos.",
      imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // Noticias
  noticias: [
    {
      titulo: "Inicio de Matrículas 2026",
      descripcion: "Matrículas abiertas para el nuevo periodo académico. Conoce los requisitos y fechas límite para asegurar tu vacante.",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      fecha: "15 Sep 2026",
      categoria: "Admisión"
    },
    {
      titulo: "Feria Tecnológica Anual",
      descripcion: "Participación de estudiantes con proyectos innovadores en la feria tecnológica anual del instituto.",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      fecha: "10 Sep 2026",
      categoria: "Innovación"
    },
    {
      titulo: "Nuevo Laboratorio de Mecatrónica",
      descripcion: "Inauguración del nuevo laboratorio de mecatrónica automotriz con equipos de última generación.",
      imagen: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
      fecha: "5 Sep 2026",
      categoria: "Infraestructura"
    }
  ],

  // Enlaces de interés
  enlacesInteres: [
    {
      titulo: "MINEDU",
      url: "https://www.gob.pe/minedu",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    },
    {
      titulo: "TITULA",
      url: "https://titula.minedu.gob.pe/",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    },
    {
      titulo: "REGISTA",
      url: "https://registra.minedu.gob.pe/",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    },
    {
      titulo: "AVANZA",
      url: "https://avanza.minedu.gob.pe/",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // Galería
  galeria: [
    {
      titulo: "Aprendizaje práctico",
      descripcion: "Estudiantes trabajando en laboratorio",
      imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Comunidad que inspira",
      descripcion: "Vida estudiantil en el campus",
      imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Talento en acción",
      descripcion: "Proyectos y actividades académicas",
      imagen: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // ============================================
  // INFORMACIÓN COMPLETA - SECCIÓN NOSOTROS
  // ============================================
  nosotros: {
    // Presentación y Reseña Histórica
    presentacion: {
      eyebrow: "Reseña histórica",
      titulo: "Breve Presentación de la Institución",
      subtitulo: "Instituto de Educación Superior Público \"Huanta\"",
      descripcionCorta: "El Instituto de Educación Superior Público \"Huanta\" forma profesionales técnicos para responder a las necesidades de Huanta, Ayacucho y el país.",
      historia: [
        "El Instituto de Educación Superior Público \"Huanta\", fue creado por RM Nro.265-86-ED, del 05 de junio de 1986. Inicialmente, fue creado con las especialidades de Agropecuaria y Electricidad, con RM Nro.265-86; al año siguiente se creó la especialidad de Enfermería Técnica, con RD Nro.3983-87-ED.",
        "Posteriormente, las necesidades formativas de la educación técnica, así como la demanda en el mercado laboral de la zona permitieron la sustitución y ampliación de nuevos programas de estudios, tal como Computación e Informática que se creó por RD Nro.109-96-ED, y luego el programa de Industrias Alimentarias creado por el RD Nro.0257-97-ED el 19 de abril del año 1997.",
        "Y luego el programa de Mecánica Automotriz creado por RD Nro.2001-2009-ED el 24 de agosto del año 2009."
      ],
      videoUrl: "https://iestphuanta.edu.pe/wp-content/uploads/2024/08/FBDownloader.to_An9si1NBjNlVmW4a0ukUzfTs7jNedomWGKflND3xGdd4ROdJt2df-kX8B_3FKbR3T7s5m-VECAKoFQwBAiBDmUz8_720p_HD-1.mp4",
      imagenPrincipal: "../assets/presentacion-instituto.jpg",
      imagenRemota: "https://iestphuanta.edu.pe/wp-content/uploads/2024/08/ENTRA-PRICIAPL.jpg",
      hitos: [
        { anio: "1986", resolucion: "RM N° 265-86-ED", fecha: "05 de junio de 1986", detalle: "Creación institucional con las especialidades de Agropecuaria y Electricidad." },
        { anio: "1987", resolucion: "RD N° 3983-87-ED", fecha: "1987", detalle: "Creación de la especialidad de Enfermería Técnica." },
        { anio: "1996", resolucion: "RD N° 109-96-ED", fecha: "1996", detalle: "Sustitución y creación del programa de Computación e Informática." },
        { anio: "1997", resolucion: "RD N° 0257-97-ED", fecha: "19 de abril de 1997", detalle: "Creación y consolidación del programa de Industrias Alimentarias." },
        { anio: "2009", resolucion: "RD N° 2001-2009-ED", fecha: "24 de agosto de 2009", detalle: "Creación del programa de Mecánica Automotriz (actual Mecatrónica)." }
      ],
      estadisticasClave: [
        { valor: "39+", etiqueta: "Años al servicio de la educación" },
        { valor: "5", etiqueta: "Programas de estudios vigentes" },
        { valor: "LIC", etiqueta: "Instituto Licenciado por MINEDU" },
        { valor: "1000+", etiqueta: "Profesionales técnicos egresados" }
      ]
    },

    // Instituto Licenciado
    licenciamiento: {
      eyebrow: "Garantía de calidad educativa",
      titulo: "INSTITUTO LICENCIADO",
      lema: "Estamos consolidado como un referente en la formación de calidad.",
      descripcion: [
        "El Instituto de Educación Superior Público Huanta está comprometido en mejorar la calidad de la educación que ofrecemos. Como parte de este compromiso, nos encontramos actualmente inmersos en el proceso de adecuación necesario para el proceso de licenciamiento.",
        "El licenciamiento es un paso fundamental que garantiza que nuestros programas académicos y servicios cumplen con los estándares y requisitos establecidos por las autoridades educativas competentes. Gracias a este proceso, hemos asegurado que nuestros estudiantes reciban una formación de calidad y que nuestras instalaciones estén a la altura de las expectativas.",
        "Contar con el licenciamiento refleja nuestro compromiso con la excelencia académica y el desarrollo de nuestra comunidad educativa. Seguimos trabajando continuamente para mantener y superar estos estándares, consolidando así una educación sólida y de calidad para todos nuestros estudiantes."
      ],
      programas: [
        { id: "web", nombre: "Diseño y Programación Web", icono: "💻", duracion: "3 años" },
        { id: "enfermeria", nombre: "Enfermería Técnica", icono: "🏥", duracion: "3 años" },
        { id: "mecatronica", nombre: "Mecatrónica Automotriz", icono: "🔧", duracion: "3 años" },
        { id: "alimentos", nombre: "Industrias de alimentos y bebidas", icono: "🍎", duracion: "3 años" },
        { id: "agropecuaria", nombre: "Producción Agropecuaria", icono: "🌾", duracion: "3 años" }
      ]
    },

    // Misión, Visión y Valores
    misionVisionValores: {
      mision: {
        titulo: "Nuestra Misión",
        horizonte: "Al 2031",
        texto: "Al 2031, somos un IES de excelencia, licenciada, que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, reconocidos a nivel regional y nacional por la formación de profesionales comprometidos con la calidad y cuidado del medio ambiente.",
        imagen: "https://iestphuanta.edu.pe/wp-content/uploads/2021/11/mision-600x473.jpg"
      },
      vision: {
        titulo: "Nuestra Visión",
        horizonte: "Al 2030",
        texto: "Al 2030, somos un IES que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, con sentido de cuidado del medio ambiente y que aportan al desarrollo económico de la región.",
        imagen: "https://iestphuanta.edu.pe/wp-content/uploads/2024/08/Mesa-de-trabajo-1-1-600x473.png"
      },
      valores: [
        {
          nombre: "Innovación",
          descripcion: "Fomentamos la iniciativa, el pensamiento disruptivo y la adaptación a las tecnologías modernas en cada aprendizaje.",
          icono: "💡"
        },
        {
          nombre: "Excelencia",
          descripcion: "Buscamos continuamente la más alta calidad en la enseñanza técnica, procesos pedagógicos y resultados estudiantiles.",
          icono: "🏆"
        },
        {
          nombre: "Compromiso Institucional",
          descripcion: "Dedicación firme con el desarrollo ético, socioeconómico y tecnológico de Huanta y la región Ayacucho.",
          icono: "🤝"
        },
        {
          nombre: "Puntualidad",
          descripcion: "Disciplina, respeto y rigurosidad en el cumplimiento de horarios, responsabilidades y deberes institucionales.",
          icono: "⏱️"
        }
      ],
      imagenValores: "https://iestphuanta.edu.pe/wp-content/uploads/2021/11/valores-600x473.jpg"
    },

    // Organización Institucional
    organizacion: {
      eyebrow: "Estructura organizativa",
      titulo: "Organización Institucional",
      descripcion: "En el Instituto de Educación Superior Tecnológico Público Huanta, trabajamos en equipo para garantizar una gestión eficaz y una experiencia educativa de calidad para nuestros estudiantes. Nuestro organigrama refleja la estructura organizativa de nuestra institución, así como las funciones y responsabilidades de cada área.",
      organigramaImg: "https://iestphuanta.edu.pe/wp-content/uploads/2026/05/NUEVO-ORGANIGRAMA-1024x721.png",
      niveles: [
        { nivel: "Órgano de Dirección", detalle: "Dirección General lidera y conduce los destinos estratégicos del instituto." },
        { nivel: "Órganos de Línea y Académicos", detalle: "Unidad Académica, Coordinaciones de Programas de Estudios y Secretaría Académica." },
        { nivel: "Órganos de Apoyo y Asesoramiento", detalle: "Área de Calidad, Unidad Administrativa, Bienestar y Empleabilidad, Investigación e Innovación." }
      ]
    },

    // Plana Jerárquica
    planaJerarquica: {
      eyebrow: "Directorio directivo",
      titulo: "Plana Jerárquica",
      descripcion: "En el Instituto de Educación Superior Público Huanta, contamos con un equipo comprometido y dedicado que trabaja arduamente para garantizar una educación de calidad. A continuación, presentamos el directorio de la plana jerárquica de nuestra institución, junto con la información básica del personal:",
      director: {
        nombre: "Ing. Esaú VILLANTOY PALOMINO",
        cargo: "Director General",
        area: "DIRECCIÓN GENERAL",
        descripcion: "Lidera la gestión estratégica e institucional del IESTP Huanta, promoviendo la excelencia educativa, el licenciamiento institucional y el desarrollo integral de la comunidad educativa.",
        foto: "https://iestphuanta.edu.pe/wp-content/uploads/2024/08/image-10.png",
        telefono: "(066) 322296",
        email: "contactos@iestphuanta.edu.pe",
        direccion: "Jr. Córdova 650",
        horario: "Lun - Vie: 7:30 am - 1:15 pm"
      },
      directorio: [
        {
          id: 1,
          area: "JEFE DE UNIDAD ACADÉMICA",
          nombre: "Lic. Ismael LIRA HUAMAN",
          cargo: "Jefe de Unidad Académica",
          categoria: "Académica",
          email: "lirahuamismael@gmail.com",
          celular: "986162715"
        },
        {
          id: 2,
          area: "SECRETARÍA ACADÉMICA",
          nombre: "Tec. Kevin Vlaes BANDO GOMEZ",
          cargo: "Jefe de Secretario Académico",
          categoria: "Académica",
          email: "Kev_vls@hotmail.com",
          celular: "995497720"
        },
        {
          id: 3,
          area: "COORDINADOR DE ÁREA DE CALIDAD",
          nombre: "Ing. Gerson Uriel TAYPE MUCHA",
          cargo: "Coordinador de Área de Calidad",
          categoria: "Calidad",
          email: "gersontaypemucha@gmail.com",
          celular: "999171627"
        },
        {
          id: 4,
          area: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE DISEÑO Y PROGRAMACIÓN WEB",
          nombre: "Juan Carlos TORRES LOZANO",
          cargo: "Coordinador del Área Académica de Diseño y Programación Web",
          categoria: "Coordinación",
          email: "jctorreslozano@gmail.com",
          celular: "935627200"
        },
        {
          id: 5,
          area: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE INDUSTRIAS DE ALIMENTOS Y BEBIDAS",
          nombre: "Ing. Ernesto ANDÍA OVALLE",
          cargo: "Coordinador del Área Académica de Industrias de Alimentos y Bebidas",
          categoria: "Coordinación",
          email: "andiaernesto@gmail.com",
          celular: "955956533"
        },
        {
          id: 6,
          area: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE PRODUCCIÓN AGROPECUARIA",
          nombre: "Ing. René Ángel ALEJANDRO SALAZAR",
          cargo: "Coordinador del Área Académica de Producción Agropecuaria",
          categoria: "Coordinación",
          email: "isthreal@hotmail.com",
          celular: "966127390"
        },
        {
          id: 7,
          area: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE ENFERMERÍA TÉCNICA",
          nombre: "Lic. Jimmy ARANDA ESCALANTE",
          cargo: "Coordinador del Área de Enfermería Técnica",
          categoria: "Coordinación",
          email: "28295518@iestphuanta.edu.pe",
          celular: "979106040"
        },
        {
          id: 8,
          area: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE MECATRÓNICA AUTOMOTRIZ",
          nombre: "Lic. Renan LUDEÑA ARANDA",
          cargo: "Coordinador del Área Académica de Mecatrónica Automotriz",
          categoria: "Coordinación",
          email: "contactos@iestphuanta.edu.pe",
          celular: "(066) 322296"
        },
        {
          id: 9,
          area: "JEFE DE UNIDAD ADMINISTRATIVA",
          nombre: "CPC Maricela Silvia GUERRA LÓPEZ",
          cargo: "Jefe de Área Administrativa",
          categoria: "Administración",
          email: "maricelaguerra@iestphuanta.edu.pe",
          celular: "980099744"
        },
        {
          id: 10,
          area: "JEFE DE UNIDAD DE BIENESTAR Y EMPLEABILIDAD",
          nombre: "Lic. Alfonso Álvaro MORENO MÁRQUEZ",
          cargo: "Jefe de Bienestar y Empleabilidad",
          categoria: "Bienestar",
          email: "alfonsoamoreno@hotmail.com",
          celular: "966903518"
        },
        {
          id: 11,
          area: "JEFE DE INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA",
          nombre: "Ing. Abraham David CRUZ CAPCHA",
          cargo: "Jefe de Unidad de Investigación e Innovación Tecnológica",
          categoria: "Investigación",
          email: "david.cruz@iestphuanta.edu.pe",
          celular: "990909525"
        },
        {
          id: 12,
          area: "JEFE DE LA UNIDAD DE FORMACIÓN CONTINUA",
          nombre: "Ing. Nancy Beatriz RODRÍGUEZ LAOS",
          cargo: "Jefe de la Unidad de Formación Continua",
          categoria: "Formación",
          email: "nayito.rodriguez@gmail.com",
          celular: "955956599"
        }
      ]
    }
  },

  // ============================================
  // PLANA DOCENTE COMPLETA - TODOS LOS PROGRAMAS
  // ============================================
  planaDocente: {
    titulo: "Plana Docente",
    subtitulo: "Equipo docente altamente calificado y con vocación de servicio",
    descripcion: "Nuestra plana docente está conformada por profesionales con sólida experiencia técnica y pedagógica, dedicados a la formación integral de los futuros técnicos del país en el periodo académico vigente.",
    periodoActivo: "2026-II",
    programas: [
      {
        id: "web",
        codigo: "DPW",
        nombre: "Diseño y Programación Web",
        icono: "💻",
        color: "teal",
        docentes: [
          {
            nombre: "MORENO MÁRQUEZ, Alfonso Álvaro",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Comunicación Oral",
              "Solución de Problemas"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1I_gwXck8319NNl5ffXT5QN5Z5kV2DFQt/view",
            tipoDocente: "Contratado / Nombrado",
            especialidad: "Habilidades Comunicativas y Empleabilidad"
          },
          {
            nombre: "TORRES LOZANO, Juan Carlos",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Fundamentos de Programación",
              "Programación Orientada a Objetos"
            ],
            hojaDeVida: "https://drive.google.com/open?id=1t4BfPvBK-Vby01TOQRRiUwLUJlVFreQT",
            tipoDocente: "Coordinador & Docente",
            especialidad: "Arquitectura de Software & Backend"
          },
          {
            nombre: "BANDO GÓMEZ, Kevin Vlaes",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Gestión y Administración de Sitios Web",
              "Diagramación Digital",
              "Redes e Internet",
              "Marketing Digital"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/05/ficha-del-postulante-kvbg-user-bot.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Administración Web & Infraestructura"
          },
          {
            nombre: "YUCRA CURO, Aníbal",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Administración de Base de Datos",
              "Programación de Aplicaciones Web",
              "Diseño de Soluciones Web"
            ],
            hojaDeVida: "https://drive.google.com/open?id=16PAZj0sWXq57pleAYKp4UrMt1PRL7bCC",
            tipoDocente: "Docente Especialista",
            especialidad: "Bases de Datos & Fullstack Web"
          },
          {
            nombre: "ALEGRIA ÑACCHA, Cristhian",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Introducción de Base de Datos",
              "Diseño de Interfaces Web (UI/UX)",
              "Programación de Aplicaciones Móviles"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/05/FICHA_DE_POSTULANTE_ALEGRIA_CRISTHIAN.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Mobile Apps & Interfaces Web"
          },
          {
            nombre: "PARIONA AROTINCO, Jenry E.",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Taller de Desarrollo de Soluciones Digitales",
              "Mantenimiento y Soporte de Aplicaciones"
            ],
            hojaDeVida: null,
            tipoDocente: "Docente Especialista",
            especialidad: "Desarrollo Digital"
          }
        ]
      },
      {
        id: "enfermeria",
        codigo: "ET",
        nombre: "Enfermería Técnica",
        icono: "🏥",
        color: "coral",
        docentes: [
          {
            nombre: "LIRA HUAMÁN, Ismael",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Educación para la Salud",
              "Atención del Adulto y Adulto Mayor"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1nYKeoXZ17-dQjQKIiPJr7vGGWczoWln7/view",
            tipoDocente: "Jefe de Unidad Académica & Docente",
            especialidad: "Salud Pública & Geriatría"
          },
          {
            nombre: "QUIQUIN CONGA, Constancia",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Administración de Medicamentos",
              "Asistencia Básica Hospitalaria",
              "Salud Materno Neonatal"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1fTEfrAavmQVZYJJA26ILEWYyiKtkkF28/view",
            tipoDocente: "Docente Especialista",
            especialidad: "Farmacología & Atención Materna"
          },
          {
            nombre: "CÁRDENAS PÉREZ, Ketty Shirly",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Seguridad y Salud en el Trabajo",
              "Documentación en Salud",
              "Atención del Niño y Adolescente",
              "Atención al Usuario Quirúrgico"
            ],
            hojaDeVida: "https://drive.google.com/open?id=1BWTgAQ03yT7IcizXI7w6EuXnXWskGapH",
            tipoDocente: "Docente Especialista",
            especialidad: "Pediatría & Quirófano"
          },
          {
            nombre: "HUAMÁN BARZOLA, Ida René",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Salud Comunitaria",
              "Promoción de la Salud",
              "Asistencia en Inmunizaciones"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/05/Ida-Rene-Huaman-Barzola-ficha-Ida-Rene-Huaman-Barzola.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Epidemiología & Salud Comunitaria"
          }
        ]
      },
      {
        id: "mecatronica",
        codigo: "MA",
        nombre: "Mecatrónica Automotriz",
        icono: "🔧",
        color: "navy",
        docentes: [
          {
            nombre: "LUDEÑA ARANDA, Juan Renan",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Motores Otto",
              "Sistema de Implementos y Confort"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1ytYAtBRvBJ9lxZRwhGkltm7orilrkANm/view",
            tipoDocente: "Coordinador & Docente",
            especialidad: "Termodinámica & Motores Otto"
          },
          {
            nombre: "PALOMINO GONZALES, Daniel",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Mantenimiento Automotriz",
              "Sistema de Encendido Automotriz",
              "Inyección Electrónica Otto"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1FYO_J0UXymcZVT-Qu8WQZNX4ZOavO02N/view",
            tipoDocente: "Docente Especialista",
            especialidad: "Inyección Electrónica & Diagnóstico OBD"
          },
          {
            nombre: "VÍLCHEZ MOLINA, José Luis",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Mecánica de Taller Automotriz",
              "Seguridad Laboral",
              "Sistema de Carga y Arranque",
              "Cálculos Aplicados al Motor de Combustión Interno"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1Ow5Y7z06hOspDVj-BmB10HFUZ3nJiXzi/view",
            tipoDocente: "Docente Especialista",
            especialidad: "Electricidad Automotriz & Taller"
          },
          {
            nombre: "RONDINEL OCHANTE, Remigio",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Sistema de Luces",
              "Comunicación Oral Automotriz"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/04/ficha-del-postulante-docente-Remigio-remigio-rondinel-ochante.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Sistemas Eléctricos & Alumbrado"
          },
          {
            nombre: "ANDÍA OCHOA, Joel",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Mantenimiento Preventivo de la Suspensión, Dirección y Frenos",
              "Seguridad Laboral",
              "Mantenimiento Preventivo del Sistema Eléctrico"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/05/Joel-ficha-Jo-ello-lkn.-jj-Andia-1-4.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Chasis, Frenos & Suspensión"
          }
        ]
      },
      {
        id: "alimentos",
        codigo: "IAB",
        nombre: "Industrias de Alimentos y Bebidas",
        icono: "🍎",
        color: "gold",
        docentes: [
          {
            nombre: "ANDÍA OVALLE, Ernesto",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Procesamiento de Granos y Tubérculos",
              "Fundamentos de Innovación Tecnológica"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1g3SH2oylbp8l7WEyA51v6lJ89PUBEvMK/view",
            tipoDocente: "Coordinador & Docente",
            especialidad: "Cereales, Tubérculos & Agroindustria"
          },
          {
            nombre: "PAUCARHUANCA YARIHUAMÁN, Yude Katia",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Química Aplicada",
              "Procesamiento de Productos Lácteos",
              "Fundamentos del Envasado y Embalado de Alimentos",
              "Comprensión y Redacción en Inglés"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/05/Ficha-de-inscripcion-YUDE-KATIA-PAUCARHUANCA-YARIHUAMAN-Yude-Katia-Paucarhuanca-Yarihuaman.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Lácteos, Bioquímica & Packaging"
          },
          {
            nombre: "MATOS LOPE, Bret Olivier",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Buenas Prácticas de Manufactura (BPM)",
              "Recepción de Materia Primas e Insumos",
              "Conservación y Almacenamiento de Alimentos",
              "Empaque y Embalaje de Productos Alimenticios"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/05/Ficha-de-postulante-bret-Bret-Matos.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Inocuidad, BPM & HACCP"
          },
          {
            nombre: "TAYPE MUCHA, Gerson Uriel",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Almacenamiento de Materia Primas e Insumos",
              "Análisis de Alimentos",
              "Bioquímica de Alimentos",
              "Logística de Productos Terminados"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1jQFYqHro9h5VyQKXPrQ_iOBn-YW9sNuU/view",
            tipoDocente: "Coordinador de Calidad & Docente",
            especialidad: "Control de Calidad & Análisis Bromatológico"
          },
          {
            nombre: "RODRÍGUEZ LAOS, Nancy Beatriz",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Procesamiento de Productos Cárnicos e Hidrobiológicos"
            ],
            hojaDeVida: "https://drive.google.com/open?id=1lkvS-yxm8c47sEyRE-mzJR1VH4YMclMp",
            tipoDocente: "Jefa de Formación Continua & Docente",
            especialidad: "Tecnología de Carnes & Pesca"
          },
          {
            nombre: "PARIONA PALOMINO, Kike Saduth",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Gestión del Envasado y Embalado de Alimentos",
              "Equipos de Envasado, Embalado y Etiquetado",
              "Maquinarias y Equipos en Recepción y Clasificación",
              "Comunicación Oral",
              "Instalaciones para la Crianza Animal"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/04/CV-HOJA-DE-VIDA-DE-POSTULANTE-Kike-Saduth-P.P.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Maquinaria Agroindustrial & Envasado"
          }
        ]
      },
      {
        id: "agropecuaria",
        codigo: "PA",
        nombre: "Producción Agropecuaria",
        icono: "🌾",
        color: "teal",
        docentes: [
          {
            nombre: "ALEJANDRO SALAZAR, René Ángel",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Topografía Agrícola y Operación de Sistemas de Riego"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1NoK-VMEnxkL_cFovNhEie7xylVmH2Ces/view",
            tipoDocente: "Coordinador & Docente",
            especialidad: "Riego Tecnificado & Topografía"
          },
          {
            nombre: "ANTEZANA CÉSAR, Mérida Luz",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Instalaciones Agropecuarias",
              "Anatomía y Fisiología Animal",
              "Control de Enfermedades Metabólicas e Infecciosas",
              "Manejo y Control de Enfermedades Agrícolas"
            ],
            hojaDeVida: "https://iestphuanta.edu.pe/wp-content/uploads/2025/05/Ficha-25-MERIDA-LUZ-ANTEZANA-CESAR.pdf",
            tipoDocente: "Docente Especialista",
            especialidad: "Sanidad Animal & Fisiología"
          },
          {
            nombre: "Ing. Especialista en Producción Animal y Zootecnia",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Técnicas de Mejoramiento Animal",
              "Producción de Cuyes y Conejos",
              "Control de Enfermedades Parasitarias"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1NoK-VMEnxkL_cFovNhEie7xylVmH2Ces/view",
            tipoDocente: "Docente Especialista",
            especialidad: "Zootecnia & Animales Menores"
          },
          {
            nombre: "Ing. Especialista en Agronomía, Suelos y Sanidad",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Manejo y Conservación de Suelos",
              "Mecanización Agrícola",
              "Nutrición y Alimentación Animal",
              "Manejo Integrado de Plagas Agrícolas"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1NoK-VMEnxkL_cFovNhEie7xylVmH2Ces/view",
            tipoDocente: "Docente Especialista",
            especialidad: "Edafología & Sanidad Vegetal"
          }
        ]
      },
      {
        id: "empleabilidad",
        codigo: "EMP",
        nombre: "Docentes de Empleabilidad",
        color: "navy",
        docentes: [
          {
            nombre: "Lic. Docente de Empleabilidad y Formación Laboral",
            periodo: "PERIODO LECTIVO 2026-II",
            unidades: [
              "Oportunidad de Negocios (PA / IA / MA)",
              "Comportamiento Ético (PA)",
              "Aplicaciones en Internet (IA)",
              "Comunicación Oral (ET)"
            ],
            hojaDeVida: "https://drive.google.com/file/d/1V2OU1zZghuwDPnGSMOAQ08KDK8Z5Ld7c/view",
            tipoDocente: "Docente Transversal",
            especialidad: "Emprendimiento, Ética & Habilidades Blandas"
          }
        ]
      }
    ]
  }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
