import type { Product, Extra, Occasion, Testimonio, ProcesoStep } from '@/types';

// Fotos reales de Florería Gala
const I = {
  rosas100_gala:    '/images/662872452_17981415266995202_2669003504604791796_n.jpg',
  bicolor_negro:    '/images/669781870_17981522066995202_4472840197285360312_n.jpg',
  rosas100_negro:   '/images/669923079_17981882234995202_7799553255999231878_n.jpg',
  caja_love:        '/images/670351153_17981881394995202_7455018446917836925_n.jpg',
  rosas50_beige:    '/images/670613228_17981415257995202_7429640500218553386_n.jpg',
  canasta_colorida: '/images/671048036_17982792863995202_7493209784365886072_n.jpg',
  lirios_rosas:     '/images/672417450_17982405233995202_7555244441105032905_n.jpg',
  mixto_rosa:       '/images/681248499_17983885097995202_5662421569464399245_n.jpg',
  luxe_rosa:        '/images/684103577_17984316971995202_135631457840954226_n.jpg',
  florero_blanco:   '/images/684256631_17984836115995202_8583419744314774621_n.jpg',
  canasta_rosa:     '/images/686972626_17985130556995202_4395829511905954264_n.jpg',
  docena_acostada:  '/images/688058476_17985130580995202_3531716007266072300_n.jpg',
  docena_vertical:  '/images/694695958_17985130565995202_364756103210853036_n.jpg',
} as const;

export const HERO_IMG = I.rosas100_gala;

export const PRODUCTS: Product[] = [
  {
    id: 'aithana',
    name: 'Amor Aithana',
    tagline: 'Rosas rojas, clásico eterno',
    img: I.rosas100_negro,
    img2: I.rosas50_beige,
    category: 'rosas',
    occasions: ['san-valentin', 'aniversario', 'cumpleanos'],
    variants: [
      { label: '24 rosas', price: 900 },
      { label: '50 rosas', price: 1950 },
      { label: '100 rosas', price: 3700 },
    ],
    colors: ['rojo', 'rosa', 'blanco'],
    description:
      'Rosas frescas envueltas en papel artesanal. El gesto más romántico de la florería.',
  },
  {
    id: 'gala',
    name: 'Amor Gala',
    tagline: 'Docena íntima',
    img: I.docena_vertical,
    img2: I.docena_acostada,
    category: 'rosas',
    occasions: ['san-valentin', 'cumpleanos'],
    variants: [
      { label: '12 rosas — Estilo A', price: 690 },
      { label: '24 rosas — Estilo A', price: 1000 },
      { label: '12 rosas — Estilo B', price: 730 },
      { label: '24 rosas — Estilo B', price: 1050 },
    ],
    colors: ['rojo', 'rosa', 'blanco', 'amarillo'],
    description:
      'La docena clásica, perfecta para una primera cita o un detalle inesperado.',
  },
  {
    id: 'vianey',
    name: 'Amor Vianey',
    tagline: 'Premium con foliage',
    img: I.rosas50_beige,
    img2: I.bicolor_negro,
    category: 'rosas',
    occasions: ['aniversario', 'san-valentin'],
    variants: [
      { label: '12 rosas — Estilo A', price: 730 },
      { label: '24 rosas — Estilo A', price: 1100 },
      { label: '12 rosas — Estilo B', price: 790 },
      { label: '24 rosas — Estilo B', price: 1200 },
    ],
    colors: ['rojo', 'rosa', 'blanco'],
    description:
      'Acompañado de hojas selectas y papel premium. Un escalón arriba.',
  },
  {
    id: 'nydia',
    name: 'Amor Nydia',
    tagline: 'Rosas con flores premium',
    img: I.lirios_rosas,
    img2: I.luxe_rosa,
    category: 'mixto',
    occasions: ['san-valentin', 'madres', 'aniversario'],
    variants: [
      { label: '24 rosas + 5 tulipanes', price: 1370 },
      { label: '50 rosas + 10 tulipanes', price: 2870 },
    ],
    colors: ['rosa', 'blanco', 'rojo'],
    description:
      'La combinación más solicitada: rosas y flores de temporada en perfecta armonía. La variedad dependerá de disponibilidad.',
  },
  {
    id: 'andrea',
    name: 'Amor Andrea',
    tagline: 'Rosas en caja',
    img: I.caja_love,
    img2: I.florero_blanco,
    category: 'caja',
    occasions: ['san-valentin', 'aniversario'],
    variants: [
      { label: '24 rosas en caja', price: 1400 },
      { label: '30 rosas en caja', price: 1700 },
    ],
    colors: ['rojo', 'rosa', 'blanco'],
    description:
      'Rosas presentadas en caja artesanal con dedicatoria. El color de la caja se elige al momento.',
  },
  {
    id: 'sofia',
    name: 'Amor Sofía',
    tagline: 'Bouquet mixto de temporada',
    img: I.luxe_rosa,
    img2: I.mixto_rosa,
    category: 'mixto',
    occasions: ['madres', 'cumpleanos', 'graduacion'],
    variants: [
      { label: 'Chico', price: 580 },
      { label: 'Mediano', price: 850 },
      { label: 'Grande', price: 1200 },
    ],
    colors: ['mixto'],
    description:
      'Un bouquet de autor con la flor más fresca del día. Composición sorpresa según temporada.',
  },
  {
    id: 'pedestal',
    name: 'Pedestal Pastel',
    tagline: 'Arreglo de centro',
    img: I.canasta_rosa,
    img2: I.canasta_colorida,
    category: 'arreglo',
    occasions: ['madres', 'graduacion', 'cumpleanos'],
    variants: [
      { label: 'Mediano', price: 1450 },
      { label: 'Grande', price: 2200 },
    ],
    colors: ['mixto', 'pastel'],
    description:
      'Arreglo en canasta o base decorativa, ideal para regalar listo para colocarse en mesa o entrada.',
  },
  {
    id: 'cream-vase',
    name: 'Florero Crema',
    tagline: 'Composición en florero',
    img: I.florero_blanco,
    img2: I.bicolor_negro,
    category: 'arreglo',
    occasions: ['madres', 'cumpleanos', 'aniversario'],
    variants: [
      { label: 'Mediano', price: 1280 },
      { label: 'Grande', price: 1850 },
    ],
    colors: ['rosa', 'blanco', 'crema'],
    description:
      'Arreglo en florero con rosas, claveles, flores de temporada y verdes selectos.',
  },
];

export const EXTRAS: Extra[] = [
  {
    id: 'liston',
    name: 'Listón con dedicatoria',
    description:
      "te quiero · te amo · happy valentine's · para la más bonita · ¿quieres ser mi novia?",
    price: 80,
    icon: '✿',
  },
  {
    id: 'ferrero-16',
    name: 'Ferrero Rocher',
    description: '16 piezas en caja decorada',
    price: 320,
    icon: '◆',
  },
  {
    id: 'ferrero-24',
    name: 'Ferrero Rocher',
    description: '24 piezas en caja decorada',
    price: 460,
    icon: '◆',
  },
  {
    id: 'globo',
    name: 'Globo metálico corazón',
    description: 'Helio · varios diseños',
    price: 130,
    icon: '♡',
  },
  {
    id: 'oso',
    name: 'Oso de peluche',
    description: 'Tamaño mediano',
    price: 350,
    icon: '✿',
  },
];

export const OCCASIONS: Occasion[] = [
  { id: 'all', label: 'Todo' },
  { id: 'san-valentin', label: 'San Valentín' },
  { id: 'madres', label: 'Día de las Madres' },
  { id: 'cumpleanos', label: 'Cumpleaños' },
  { id: 'aniversario', label: 'Aniversario' },
  { id: 'graduacion', label: 'Graduación' },
];

export const TESTIMONIOS: Testimonio[] = [
  {
    text: 'Mandé un bouquet a mi mamá para su cumple y llegó intacto, fresquísimo. Hasta la nota llegó en perfecta caligrafía.',
    name: 'Mariana R.',
    place: 'Puerto Peñasco',
  },
  {
    text: 'Pedí por WhatsApp un viernes en la tarde y al sábado a primera hora ya estaba en casa de mi novia. Servicio impecable.',
    name: 'Diego H.',
    place: 'Cholla Bay',
  },
  {
    text: 'Las rosas son enormes y duran semanas. Es la única florería a la que le pido en Puerto Peñasco.',
    name: 'Andrea V.',
    place: 'Las Conchas',
  },
  {
    text: 'Pedí el Amor Sofía mediano para mi suegra y se enamoró. La sorpresa total: la combinación de colores estuvo preciosa.',
    name: 'Luis O.',
    place: 'Sandy Beach',
  },
];

export const PROCESO: ProcesoStep[] = [
  {
    n: '01',
    title: 'Elige tu bouquet',
    text: 'Explora el catálogo y personaliza tamaño, color y dedicatoria.',
  },
  {
    n: '02',
    title: 'Manda tu pedido',
    text: 'Lo enviamos por WhatsApp con todos los detalles y dirección de entrega.',
  },
  {
    n: '03',
    title: 'Confirma con anticipo',
    text: 'Apartas con 30% por transferencia, depósito o efectivo.',
  },
  {
    n: '04',
    title: 'Te lo entregamos',
    text: 'Entrega en domicilio dentro de Puerto Peñasco o pasa a recoger.',
  },
];

export const WA_NUMBER = '5216381234567';
export const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export const COLOR_MAP: Record<string, string> = {
  rojo: '#b8253c',
  rosa: '#e6a3bd',
  blanco: '#f5efe6',
  amarillo: '#e8c878',
  crema: '#f0e1c8',
  pastel: 'linear-gradient(135deg, #f6c1cf, #f4d8b6, #e6d4f0)',
  mixto: 'conic-gradient(#e6a3bd, #f5efe6, #b8253c, #e8c878, #e6a3bd)',
};
