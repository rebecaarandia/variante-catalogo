import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PRODUCTOS O SERVICIOS.
 *  Cada ficha sigue la "anatomía del que vende" (ver CLAUDE.md):
 *   paraQuien  → el trabajo que resuelve (Christensen, HBR 2005)
 *   beneficio  → resultado, no característica (StoryBrand)
 *   caracteristicas → SOLO 3 que importan (Iyengar, las mermeladas)
 *   precioAntes → ancla (Ariely) · facilidades → quita el miedo al gasto
 *   bono       → la oferta apilada (Hormozi)
 *   escasez    → honesta, por tiempo o unidades (Cialdini)
 *   prueba     → prueba social (Cialdini)
 *  Borra los de ejemplo y pon los tuyos. Deja máximo 3-6 por categoría.
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  {
    slug: "vela-cafe",
    nombre: "Vela de soya, aroma café",
    categoria: "Para tu casa",
    imagen: "/productos/vela.jpg",
    paraQuien: "Para quien quiere que su casa huela rico y se sienta acogedora al llegar.",
    beneficio: "Llena tu sala de olor a café recién hecho por más de 40 horas.",
    caracteristicas: ["Cera de soya natural", "40+ horas de aroma", "Hecha a mano en Guadalajara"],
    precio: "$260",
    precioAntes: "$320",
    facilidades: "Llévate 3 por $690",
    bono: "Incluye caja de regalo y tarjeta escrita a mano.",
    garantia: "Si no te encanta el aroma, te devolvemos tu dinero.",
    escasez: { tipo: "unidades", valor: "12 piezas de esta tanda" },
    prueba: "Más de 400 vendidas este año.",
    destacado: true,
  },
  {
    slug: "bolsa-tejida",
    nombre: "Bolsa tejida a mano",
    categoria: "Para tu casa",
    imagen: "/productos/bolsa.jpg",
    paraQuien: "Para la que quiere una bolsa distinta, que nadie más va a traer igual.",
    beneficio: "Una bolsa firme para el diario que se ve artesanal, no corriente.",
    caracteristicas: ["Tejido de algodón grueso", "Aguanta hasta 6 kg", "3 colores a elegir"],
    precio: "$540",
    facilidades: "o 2 pagos de $270",
    bono: "Te la personalizamos con tus iniciales sin costo.",
    prueba: "\"La uso todos los días y sigue como nueva\" — Ana, clienta.",
  },
  {
    slug: "tazas-barro",
    nombre: "Set de 4 tazas de barro",
    categoria: "Para tu casa",
    imagen: "/productos/tazas.jpg",
    paraQuien: "Para el que disfruta su café de la mañana y quiere que hasta la taza se sienta especial.",
    beneficio: "Tu café sabe mejor y tu mesa se ve de revista.",
    caracteristicas: ["Barro de Tonalá", "Aptas para microondas", "Cada una es única"],
    precio: "$480",
    precioAntes: "$600",
    escasez: { tipo: "tiempo", valor: "a este precio hasta el domingo" },
    prueba: "El regalo más pedido en diciembre.",
  },
  {
    slug: "taller-macrame",
    nombre: "Taller de macramé (sábado)",
    categoria: "Talleres",
    imagen: "/productos/taller.jpg",
    paraQuien: "Para quien quiere desconectarse un rato y salir con algo hecho por sus propias manos.",
    beneficio: "En 3 horas te llevas tu propio tapiz colgado y listo para tu pared.",
    caracteristicas: ["Grupos de 8 personas", "Todo el material incluido", "Sábados 11 am"],
    precio: "$650",
    facilidades: "Aparta con $200",
    bono: "Café e infusiones toda la sesión + tu kit para seguir en casa.",
    escasez: { tipo: "unidades", valor: "6 lugares por grupo" },
    prueba: "4.9 de 5 en las reseñas de los talleres.",
    destacado: true,
  },
  {
    slug: "asesoria-decoracion",
    nombre: "Asesoría de decoración a domicilio",
    categoria: "Servicios",
    imagen: "/productos/asesoria.jpg",
    paraQuien: "Para quien no sabe por dónde empezar a acomodar su espacio y no quiere gastar en lo que no va.",
    beneficio: "Salimos con un plan claro de qué cambiar para que tu espacio se sienta tuyo.",
    caracteristicas: ["Visita de 90 minutos", "Plan por escrito con fotos", "Lista de compras con precios"],
    precio: "$900",
    precioAntes: "$1,200",
    facilidades: "Se descuenta si nos compras los muebles",
    bono: "Segunda llamada de seguimiento a las 2 semanas, sin costo.",
    garantia: "Si el plan no te sirvió, esa visita no te la cobro.",
    prueba: "\"Con una tarde cambió toda mi sala\" — Marisol, clienta.",
  },
  {
    slug: "cuadro-personalizado",
    nombre: "Cuadro personalizado en madera",
    categoria: "Para tu casa",
    imagen: "/productos/cuadro.jpg",
    paraQuien: "Para el que busca un regalo que se vea caro y que la persona no va a tirar nunca.",
    beneficio: "Un regalo con nombre y fecha que se queda en la pared por años.",
    caracteristicas: ["Grabado en madera real", "3 tamaños", "Listo en 5 días"],
    precio: "$720",
    facilidades: "o 3 pagos de $240",
    bono: "Envolvemos para regalo y te lo mandamos a domicilio en la ciudad.",
    escasez: { tipo: "tiempo", valor: "pide antes del miércoles para regalo del fin" },
    prueba: "Más de 150 cuadros entregados.",
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
