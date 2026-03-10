import pieza1 from "../assets/images/featured/pieza-1.jpeg";
import pieza2 from "../assets/images/featured/pieza-2.jpeg";
import pieza3 from "../assets/images/featured/pieza-3.jpeg";
import pieza4 from "../assets/images/featured/pieza-4.jpeg";

import manillasImg from "../assets/images/collections/manillas.jpeg";
import anillosImg from "../assets/images/collections/anillos.jpeg";
import dijesImg from "../assets/images/collections/dijes.jpeg";
import otrosImg from "../assets/images/collections/otros.jpeg";

const products = [
  {
    id: 1,
    slug: "manilla-prestige",
    name: "Manilla Prestige",
    category: "manillas",
    image: pieza1,
    description: "Diseño tejido con presencia elegante y acabado premium.",
    featured: true,
  },
  {
    id: 2,
    slug: "anillo-tejido",
    name: "Anillo Tejido",
    category: "anillos",
    image: pieza2,
    description: "Pieza sobria con identidad artesanal y carácter visual.",
    featured: true,
  },
  {
    id: 3,
    slug: "dije-corona",
    name: "Dije Corona",
    category: "dijes",
    image: pieza3,
    description: "Un detalle simbólico con estética refinada.",
    featured: true,
  },
  {
    id: 4,
    slug: "pieza-onix",
    name: "Manilla Onix",
    category: "otros",
    image: pieza4,
    description: "Contraste oscuro y dorado para una pieza de fuerte presencia.",
    featured: true,
  },
  {
    id: 5,
    slug: "manilla-classic",
    name: "Manilla Classic",
    category: "manillas",
    image: manillasImg,
    description: "Tejido limpio y elegante para uso diario.",
    featured: false,
  },
  {
    id: 6,
    slug: "anillo-signature",
    name: "Anillo Signature",
    category: "anillos",
    image: anillosImg,
    description: "Anillo de lectura sofisticada y estética premium.",
    featured: false,
  },
  {
    id: 7,
    slug: "dije-oro",
    name: "Dije Oro",
    category: "dijes",
    image: dijesImg,
    description: "Un detalle pensado para destacar con sobriedad.",
    featured: false,
  },
  {
    id: 8,
    slug: "pieza-exclusive",
    name: "Pieza Exclusive",
    category: "otros",
    image: otrosImg,
    description: "Pieza especial con lenguaje visual de lujo.",
    featured: false,
  },
];

export default products;