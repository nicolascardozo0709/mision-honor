/**
 * MISIÓN HONOR — Base de Datos Oficial de Productos y Contenidos
 * Formato UTF-8 garantizado para correcta acentuación en español
 */

const BRAND_DATA = {
  name: "MISIÓN HONOR",
  badge: "Misión Honor · Colombia",
  tagline: "Amor que acompaña, fuerza que inspira.",
  concept: "Regalos con espíritu de guerrero",
  subconcept: "Detalles que hablan por ti. Regalos que se convierten en recuerdos.",
  phone: "+57 310 881 9663",
  phoneRaw: "573108819663",
  phoneDisplay: "310 881 9663",
  email: "eudaliah@gmail.com",
  instagram: "@misionhonor.co",
  coverage: "Envíos asegurados a toda Colombia (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y municipios)",
  caseSpecs: {
    dimensions: "25 cm alto × 20 cm ancho × 12 cm fondo",
    material: "Lona Oxford 600D impermeable de grado táctico militar",
    interior: "Acolchado modular con separadores configurables",
    color: "Verde oliva militar con cierres reforzados"
  }
};

function getWhatsAppLink(message) {
  const defaultMsg = "Hola MISIÓN HONOR, quiero conocer las misiones disponibles y recibir asesoría personalizada.";
  const text = message ? encodeURIComponent(message) : encodeURIComponent(defaultMsg);
  return `https://wa.me/${BRAND_DATA.phoneRaw}?text=${text}`;
}

const COMMON_ITEMS = {
  legadoHonor: {
    name: "Estuche Táctico Oficial «Legado de Honor»",
    detail: "Confeccionado en lona Oxford 600D impermeable con compartimentos acolchados y asa reforzada.",
    tag: "Estuche Oxford 600D"
  },
  guardianCorazon: {
    name: "Peluche Uniformado «Guardián del Corazón»",
    detail: "Oso de peluche con uniforme táctico de combate, boina y detalles confeccionados a mano.",
    tag: "Peluche Uniformado"
  },
  guardianCorazonEspecial: {
    name: "Peluche Uniformado «Guardián del Corazón» (Edición Especial)",
    detail: "Edición exclusiva con corbatín camuflado e insignias de honor bordadas.",
    tag: "Peluche Edición Especial"
  },
  ordenMision: {
    name: "Tarjeta «Orden de Misión Especial»",
    detail: "Documento temático de honor con tu dedicatoria impresa en tipografía militar y sello oficial.",
    tag: "Orden de Misión Personalizada"
  },
  huevoKinder: {
    name: "Sorpresa de Campaña",
    detail: "Huevo de chocolate Kinder Sorpresa con detalle coleccionable.",
    tag: "Kinder Sorpresa"
  },
  panyoleta: {
    name: "Pañoleta Táctica «Bandera de Lealtad»",
    detail: "Bandana militar estampada multiuso de alta resistencia.",
    tag: "Pañoleta Táctica"
  },
  almendras: {
    name: "Almendras «Reserva Fortaleza Premium»",
    detail: "Selección especial de almendras confitadas de primera calidad.",
    tag: "Almendras Confitadas"
  },
  chocolates: {
    name: "Chocolates «Ración Especial de Dulzura»",
    detail: "Caja de bombones y chocolates artesanales gourmet.",
    tag: "Chocolates Gourmet"
  }
};

const PRODUCTS = [
  // ==========================================
  // COLECCIÓN: AMOR INQUEBRANTABLE (PARA ELLA)
  // ==========================================
  {
    id: "amor-inquebrantable-sensation",
    name: "SENSATION",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "Bienestar & Cuidado",
    price: "$ 159.000 COP",
    priceNum: 159000,
    image: "assets/images/sensation.png",
    tagline: "Una experiencia de cuidado, dulzura y bienestar.",
    description: "Una misión creada para consentir y homenajear a una mujer extraordinaria. Combina el cuidado corporal diario con la dulzura y ternura de nuestros símbolos de lealtad, protegidos dentro del estuche táctico oficial.",
    highlightItems: ["Estuche Oxford 600D", "Guardián del Corazón", "Exfoliante + Splash", "Orden de Misión"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      {
        name: "Ritual de Cuidado Corporal",
        detail: "Crema exfoliante revitalizante para la piel y Splash con fragancia fresca y duradera.",
        tag: "Exfoliante + Splash"
      },
      {
        name: "Dulce Misión",
        detail: "Masmelo artesanal bañado en chocolate oscuro de primera calidad.",
        tag: "Masmelo con Chocolate"
      },
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "amor-inquebrantable-glamour",
    name: "GLAMOUR",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "Belleza & Encanto",
    price: "$ 169.000 COP",
    priceNum: 169000,
    image: "assets/images/glamour.png",
    tagline: "Belleza, ternura y una sorpresa creada para consentir.",
    description: "GLAMOUR es un homenaje pensado para resaltar la belleza y gracia de quien amas. Cada elemento ha sido seleccionado para convertir tu regalo en un instante de admiración pura, sellado con una Orden de Misión personalizada.",
    highlightItems: ["Estuche Oxford 600D", "Guardián del Corazón", "Kit de Maquillaje", "Kinder Sorpresa"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      {
        name: "Ritual de Belleza Glamour",
        detail: "Kit cosmético de maquillaje con paleta de tonos luminosos para resaltar su belleza natural.",
        tag: "Kit de Maquillaje"
      },
      COMMON_ITEMS.huevoKinder,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "amor-inquebrantable-elegance",
    name: "ELEGANCE",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "Perfumería Selecta",
    price: "$ 169.000 COP",
    priceNum: 169000,
    image: "assets/images/elegance.png",
    tagline: "Para quien merece un regalo tan especial como ella.",
    description: "ELEGANCE es el equilibrio ideal entre sofisticación aromática y afecto incondicional. Integra una fragancia femenina seductora, una fina selección de almendras confitadas y el adorable Guardián del Corazón en su edición especial.",
    highlightItems: ["Estuche Oxford 600D", "Peluche Edición Especial", "Perfume Femenino", "Almendras"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazonEspecial,
      {
        name: "Perfume Femenino «Esencia de mi Guerrera»",
        detail: "Fragancia de autor con acordes florales de alta fijación, inspirada en mujeres valientes.",
        tag: "Perfume Femenino"
      },
      COMMON_ITEMS.almendras,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "amor-inquebrantable-esencial",
    name: "ESENCIAL",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "El Favorito Femenino",
    price: "$ 179.000 COP",
    priceNum: 179000,
    image: "assets/images/esencial_ella.png",
    tagline: "Pequeños detalles que dejan grandes recuerdos.",
    description: "ESENCIAL reúne los detalles más queridos de nuestra línea femenina: una fragancia envolvente, una prenda de diseño especial y chocolates finos para crear un recuerdo emotivo que perdurará por siempre.",
    highlightItems: ["Estuche Oxford 600D", "Guardián del Corazón", "Splash Corporal", "Prenda Exclusiva"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      {
        name: "Splash Corporal «Esencia de Amor Inquebrantable»",
        detail: "Bruma hidratante perfumada con notas frescas y destellos sutiles.",
        tag: "Splash Corporal"
      },
      {
        name: "Prenda de Edición Especial «Operación Encanto»",
        detail: "Prenda femenina confeccionada en algodón suave de alta calidad con detalle de la marca.",
        tag: "Prenda Femenina"
      },
      COMMON_ITEMS.chocolates,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "amor-inquebrantable-prestige",
    name: "PRESTIGE",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "Spa Facial & Chocolates",
    price: "$ 199.000 COP",
    priceNum: 199000,
    image: "assets/images/prestige_ella.png",
    tagline: "Una experiencia creada para consentir, sorprender y enamorar.",
    description: "PRESTIGE eleva el homenaje con un completo ritual de cuidado facial botánico y una reserva de chocolates gourmet, presentados con el riguroso protocolo de honor de nuestra marca.",
    highlightItems: ["Estuche Oxford 600D", "Peluche Edición Especial", "Kit Facial Botánico", "Chocolates Gourmet"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazonEspecial,
      {
        name: "Kit de Cuidado Facial «Ritual de Belleza y Honor»",
        detail: "Tratamiento facial hidratante y regenerador con extractos botánicos para consentir su piel.",
        tag: "Tratamiento Facial"
      },
      COMMON_ITEMS.chocolates,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "amor-inquebrantable-bloom",
    name: "BLOOM",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "Cuidado Capilar & Estilo",
    price: "$ 229.000 COP",
    priceNum: 229000,
    image: "assets/images/bloom.png",
    tagline: "Una misión de belleza, cuidado y dulzura.",
    description: "BLOOM rinde tributo al esplendor y vitalidad de quien amas. Incorpora un tratamiento capilar nutritivo de salón, la hermosa pañoleta Bandera de Lealtad y frutos secos selectos en el estuche oficial.",
    highlightItems: ["Estuche Oxford 600D", "Guardián del Corazón", "Tratamiento Capilar", "Pañoleta Táctica"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      {
        name: "Tratamiento Capilar «Ritual de Honor»",
        detail: "Kit capilar intensivo para nutrición, brillo y sedosidad profunda.",
        tag: "Tratamiento Capilar"
      },
      COMMON_ITEMS.panyoleta,
      COMMON_ITEMS.almendras,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "amor-inquebrantable-diamond",
    name: "DIAMOND",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "Alta Joyería & Lujo",
    price: "$ 249.000 COP",
    priceNum: 249000,
    image: "assets/images/diamond.png",
    tagline: "Una misión especial para una mujer extraordinaria.",
    description: "DIAMOND es nuestra cumbre de elegancia y pasión. Una experiencia multisensorial con perfumería fina, lencería de diseño sutil, joyería en pulsera de amor eterno y el dulce acompañamiento de campaña.",
    highlightItems: ["Estuche Oxford 600D", "Perfume de Autor", "Conjunto de Lencería", "Pulsera Amor Eterno"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      {
        name: "Perfume Femenino «Esencia de mi Guerrera»",
        detail: "Fragancia de alta concentración con notas florales y amaderadas seductoras.",
        tag: "Perfume de Autor"
      },
      {
        name: "Conjunto Íntimo «Guerrera de mi Corazón»",
        detail: "Conjunto confeccionado para combinar comodidad, seguridad y delicadeza femenina.",
        tag: "Lencería Exclusiva"
      },
      {
        name: "Pulsera de Honor «Pulso de Amor Eterno»",
        detail: "Joya hipoalergénica con acabados dorados y dije de unión inquebrantable.",
        tag: "Pulsera de Joyería"
      },
      COMMON_ITEMS.huevoKinder,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "amor-inquebrantable-royal",
    name: "ROYAL",
    collectionId: "amor-inquebrantable",
    collectionName: "Amor Inquebrantable",
    gender: "ella",
    badge: "Edición Limitada de Gala",
    price: "$ 299.000 COP",
    priceNum: 299000,
    image: "assets/images/royal.png",
    tagline: "La máxima experiencia para honrar el amor y la fuerza de su unión.",
    description: "ROYAL es la joya de la corona de MISIÓN HONOR. Un despliegue majestuoso que incluye el maletín táctico oficial de gran capacidad, camiseta exclusiva en algodón 100%, lencería con detalles de encaje, set triple de joyería y almendras finas.",
    highlightItems: ["Maletín Táctico Oficial", "Camiseta Temática 100% Algodón", "Set Triple Joyería", "Conjunto Íntimo"],
    includes: [
      {
        name: "Maletín Táctico Oficial «Legado de Honor»",
        detail: "Maletín de viaje táctico de gran capacidad en lona Oxford 600D con compartimentos modulares.",
        tag: "Maletín Táctico Gran Capacidad"
      },
      {
        name: "Camiseta Temática «Corazón de Combatientes»",
        detail: "Camiseta de algodón peinado 100% colombiano con serigrafía exclusiva de la marca.",
        tag: "Camiseta 100% Algodón"
      },
      {
        name: "Peluche Guardián Royal Edición Especial",
        detail: "Oso de peluche con gorro de campaña y corbatín camuflado con insignias bordadas.",
        tag: "Peluche Royal"
      },
      {
        name: "Conjunto Íntimo «Fuerza & Feminidad»",
        detail: "Conjunto exclusivo con estampado camuflado suave y detalles de encaje negro.",
        tag: "Lencería con Encaje"
      },
      {
        name: "Set Triple de Joyería «Latido Eterno»",
        detail: "Juego completo de collar, aretes y pulsera con dije de corazón blindado.",
        tag: "Set Triple de Joyería"
      },
      {
        name: "Almendras Ítalo «Dulce Recompensa»",
        detail: "Almendras confitadas tradicionales de la casa chocolatera Ítalo (50 g).",
        tag: "Almendras Ítalo"
      },
      COMMON_ITEMS.ordenMision
    ]
  },

  // ==========================================
  // COLECCIÓN: MISIÓN ALFA (PARA ÉL)
  // ==========================================
  {
    id: "mision-alfa-esencial",
    name: "MISIÓN ALFA ESENCIAL",
    collectionId: "mision-alfa",
    collectionName: "Misión Alfa",
    gender: "el",
    badge: "Esencial Masculino",
    price: "$ 199.000 COP",
    priceNum: 199000,
    image: "assets/images/esencial_el.png",
    tagline: "Para el hombre que ocupa un lugar de honor en tu corazón.",
    description: "Una misión pensada para expresar respeto, orgullo y admiración por ese hombre que protege, cuida y lucha día a día. Integra loción masculina amaderada, pañoleta de combate, dulce de campaña y el peluche militar.",
    highlightItems: ["Estuche Oxford 600D", "Guardián del Corazón", "Loción Masculina", "Pañoleta Táctica"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      COMMON_ITEMS.panyoleta,
      {
        name: "Loción Masculina «Esencia del Guerrero»",
        detail: "Loción masculina con notas amaderadas y cuero, sobria, varonil y duradera.",
        tag: "Loción Masculina"
      },
      COMMON_ITEMS.huevoKinder,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "mision-alfa-legado",
    name: "LEGADO",
    collectionId: "mision-alfa",
    collectionName: "Misión Alfa",
    gender: "el",
    badge: "Espíritu de Aventura",
    price: "$ 229.000 COP",
    priceNum: 229000,
    image: "assets/images/legado.png",
    tagline: "Inspirado en hombres decididos, firmes y con espíritu de aventura.",
    description: "LEGADO honra su temple, su gallardía y la historia que construye con cada paso. Incluye gorra táctica de campaña con visera de alta densidad, pañoleta de combate, chocolates finos y el estuche oficial.",
    highlightItems: ["Estuche Oxford 600D", "Guardián del Corazón", "Gorra Táctica", "Pañoleta Táctica"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      COMMON_ITEMS.panyoleta,
      {
        name: "Gorra Táctica «Accesorio de Campaña»",
        detail: "Gorra ajustable con velcro frontal para parches militares, visera curva y costuras reforzadas.",
        tag: "Gorra Táctica Militar"
      },
      COMMON_ITEMS.chocolates,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "mision-alfa-prestige",
    name: "MISIÓN ALFA PRESTIGE",
    collectionId: "mision-alfa",
    collectionName: "Misión Alfa",
    gender: "el",
    badge: "Porte & Cuidado Personal",
    price: "$ 249.000 COP",
    priceNum: 249000,
    image: "assets/images/prestige_el.webp",
    tagline: "La máxima expresión de reconocimiento para un verdadero guerrero.",
    description: "MISIÓN ALFA PRESTIGE es el homenaje perfecto para un hombre que destaca por su porte, pulcritud y liderazgo. Incorpora un kit completo de cuidado personal en estuche de viaje y loción masculina de autor.",
    highlightItems: ["Estuche Oxford 600D", "Peluche Uniformado", "Kit de Aseo Personal", "Loción de Autor"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      {
        name: "Kit de Arreglo Personal «Presentación Impecable»",
        detail: "Set de tijeras, cortauñas de precisión y accesorios de cuidado en estuche metálico de viaje.",
        tag: "Kit de Aseo en Estuche"
      },
      {
        name: "Loción Masculina «Esencia del Guerrero Premium»",
        detail: "Fragancia de alta concentración con fondo de cedro, ámbar y especias cálidas.",
        tag: "Loción de Autor"
      },
      COMMON_ITEMS.huevoKinder,
      COMMON_ITEMS.ordenMision
    ]
  },
  {
    id: "mision-alfa-commander",
    name: "COMMANDER",
    collectionId: "mision-alfa",
    collectionName: "Misión Alfa",
    gender: "el",
    badge: "Liderazgo Supremo",
    price: "$ 299.000 COP",
    priceNum: 299000,
    image: "assets/images/commander.png",
    tagline: "Diseñado para hombres de carácter inquebrantable y liderazgo ejemplar.",
    description: "COMMANDER es el kit de honor definitivo para el hombre que lidera, protege e inspira. Equipado con linterna táctica militar recargable, franela casual en algodón de alta densidad, pulsera de honor en cuero y acero, almendras y el estuche oficial.",
    highlightItems: ["Estuche Oxford 600D", "Linterna Militar Recargable", "Franela de Confort", "Pulsera Cuero & Acero"],
    includes: [
      COMMON_ITEMS.legadoHonor,
      COMMON_ITEMS.guardianCorazon,
      {
        name: "Linterna Táctica Militar «Luz de Avanzada»",
        detail: "Linterna de aluminio aeroespacial recargable por USB con zoom óptico y modo estroboscópico de emergencia.",
        tag: "Linterna Táctica Recargable"
      },
      {
        name: "Prenda de Descanso Estratégico",
        detail: "Franela casual de alto confort confeccionada en algodón transpirable.",
        tag: "Franela Casual Algodón"
      },
      {
        name: "Pulsera de Honor «Pulso de Guerrero»",
        detail: "Pulsera masculina de cuero trenzado con cierre magnético en acero inoxidable.",
        tag: "Pulsera en Cuero & Acero"
      },
      COMMON_ITEMS.almendras,
      COMMON_ITEMS.ordenMision
    ]
  }
];

const FAQS = [
  {
    question: "¿Qué incluye de forma estándar cada misión de regalo?",
    answer: "Cada kit de MISIÓN HONOR incluye de forma estándar el Estuche Táctico Oficial «Legado de Honor» (en lona Oxford 600D impermeable de grado militar), el entrañable Peluche Uniformado «Guardián del Corazón», y la Tarjeta temática tipo «Orden de Misión Especial» personalizada con el mensaje que nos indiques. Adicionalmente, cada kit incorpora los elementos propios de su edición (perfumería, tratamientos capilares o faciales, joyería, prendas de vestir, linternas tácticas, chocolates finos, etc.) tal como se detalla en su ficha técnica."
  },
  {
    question: "¿Cómo y cuándo se personaliza el mensaje de honor?",
    answer: "Es muy fácil y sin formularios largos. Una vez elijas tu misión favorita, nos escribes directamente por WhatsApp. Nuestro equipo te pedirá el nombre de la persona a honrar y las palabras o dedicatoria que deseas plasmar en su «Orden de Misión Especial». Nosotros diseñamos e imprimimos la tarjeta en cartulina rígida texturizada con tipografía militar solemne y sello oficial antes del despacho."
  },
  {
    question: "¿Realizan envíos a toda Colombia y cuáles son los tiempos de entrega?",
    answer: "Sí, despachamos misiones a todo el territorio nacional a través de transportadoras aliadas certificadas (Servientrega, Coordinadora, Interrapidísimo y Envía). Para entregas en Bogotá y alrededores, el tiempo habitual es de 24 a 48 horas hábiles (con opción de entrega prioritaria el mismo día coordinando previamente). Para ciudades principales (Medellín, Cali, Barranquilla, Bucaramanga, Pereira, Manizales) el tiempo es de 2 a 3 días hábiles. Te enviamos la guía de rastreo inmediatamente sea despachada."
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Para tu total comodidad y seguridad, recibimos pagos a través de Nequi, Daviplata, transferencias directas Bancolombia, y pagos electrónicos mediante PSE o tarjetas de crédito/débito. También manejamos planes de abono para fechas especiales como aniversarios, cumpleaños o ascensos militares."
  },
  {
    question: "¿Cómo garantizan que el regalo llegue en perfecto estado?",
    answer: "Cada misión viaja con triple blindaje: el estuche táctico exterior en lona Oxford 600D protege los componentes internos, los cuales van sujetos con separadores modulares acolchados. A su vez, todo el estuche se embala en una caja rígida sellada con precintos de seguridad para garantizar que la sorpresa sea impecable al abrirla."
  },
  {
    question: "¿Puedo cambiar o ajustar algún elemento dentro del kit?",
    answer: "¡Por supuesto! Como cada misión se ensambla de forma artesanal y personalizada en Colombia, podemos adaptar detalles (por ejemplo, cambiar fragancias, tallas de prendas o personalizar el tipo de dulce) según las preferencias de tu ser querido. Simplemente indícanoslo por WhatsApp al momento de hacer el pedido."
  },
  {
    question: "¿Cómo me comunico con el equipo de MISIÓN HONOR?",
    answer: "Puedes pulsar en cualquier botón de WhatsApp de esta página (+57 310 881 9663) para chatear en tiempo real con un asesor de misión, o escribirnos a nuestro correo oficial eudaliah@gmail.com. Atendemos de lunes a domingo de 7:00 a.m. a 10:00 p.m."
  }
];

const REVIEWS = [
  {
    name: "Valeria Mejía",
    city: "Bogotá, D.C.",
    stars: 5,
    kit: "Colección Royal — Amor Inquebrantable",
    date: "Hace 2 semanas",
    comment: "No tengo palabras para describir la emoción de mi novio al abrir el estuche. Cuando leyó la Orden de Misión con nuestras palabras se le salieron las lágrimas. El peluche uniformado y el maletín táctico son de una calidad tremenda. ¡Mil gracias Misión Honor!"
  },
  {
    name: "Capitán Andrés R.",
    city: "Medellín, Antioquia",
    stars: 5,
    kit: "Commander — Misión Alfa",
    date: "Hace 3 semanas",
    comment: "Mi esposa me sorprendió con el kit Commander el día de mi ascenso. El estuche de lona Oxford verde oliva es súper resistente y la linterna táctica es excelente para el servicio. Un regalo con verdadero respeto y sentido de honor."
  },
  {
    name: "Camila Restrepo",
    city: "Cali, Valle del Cauca",
    stars: 5,
    kit: "Diamond — Amor Inquebrantable",
    date: "Hace 1 mes",
    comment: "La atención por WhatsApp es impecable, me ayudaron a redactar la tarjeta y llegó puntual a Cali antes de nuestro aniversario. La pulsera y el perfume huelen delicioso. 100% recomendados en toda Colombia."
  },
  {
    name: "Sargento Fernando T.",
    city: "Bucaramanga, Santander",
    stars: 5,
    kit: "Legado — Misión Alfa",
    date: "Hace 1 mes",
    comment: "Mis hijos me enviaron el kit Legado en el día del padre. La gorra táctica y el peluche con uniforme son un detalle que llevo siempre con orgullo. La mejor experiencia de regalo que he recibido."
  }
];
