import type { Config } from "./tipos";

// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "Variante",
    descripcion: "ropa seleccionada y transformada",
    logo: undefined, // pon "/logo.png" cuando subas tu logo a la carpeta public
    primario: "#be185d",
    secundario: "#7c3aed",
    fondo: "oscuro",
    whatsappPrincipal: "59174463339",
    ciudad: "La Paz, Bolivia",
    enlace: "https://www.instagram.com/variante.variante/",
  },
  vendedores: [
    { slug: "rodrigo", nombre: "Rodrigo", whatsapp: "59165350982" },
    { slug: "galo", nombre: "Galo", whatsapp: "59172509297" },
  ],
  categorias: ["Para tu casa", "Talleres", "Servicios"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};