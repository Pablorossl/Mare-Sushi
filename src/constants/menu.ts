import type { MenuCategory } from '@/types'

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'nigiri',
    label: 'Nigiri',
    items: [
      {
        id: 'nigiri-01',
        num: '01',
        name: 'Sake Nigiri',
        price: '4,50€',
        description:
          'Salmón atlántico premium sobre arroz de grano corto japonés, vinagre de arroz artesanal.',
      },
      {
        id: 'nigiri-02',
        num: '02',
        name: 'Maguro Nigiri',
        price: '5,20€',
        description:
          'Atún rojo de almadraba, seleccionado por su color y textura inigualables.',
        tag: 'Temporada',
      },
      {
        id: 'nigiri-03',
        num: '03',
        name: 'Hamachi Nigiri',
        price: '4,80€',
        description: 'Pez limón japonés con piel de yuzu y sal marina de Cádiz.',
      },
      {
        id: 'nigiri-04',
        num: '04',
        name: 'Ebi Nigiri',
        price: '4,20€',
        description: 'Gamba roja de Málaga levemente cocinada, textura delicada y dulce.',
        tag: 'Local',
      },
      {
        id: 'nigiri-05',
        num: '05',
        name: 'Hotate Nigiri',
        price: '5,80€',
        description: 'Vieira fresca soflameada con salsa ponzu y cebollino.',
      },
      {
        id: 'nigiri-06',
        num: '06',
        name: 'Unagi Nigiri',
        price: '5,50€',
        description:
          'Anguila de agua dulce glaseada con tare, salsa dulce tradicional del Japón.',
      },
      {
        id: 'nigiri-07',
        num: '07',
        name: 'Toro Nigiri',
        price: '8,50€',
        description:
          'Ventresca de atún rojo, la pieza más noble y codiciada. Fundente en boca.',
        tag: 'Premium',
      },
      {
        id: 'nigiri-08',
        num: '08',
        name: 'Tai Nigiri',
        price: '4,50€',
        description:
          'Besugo al estilo clásico, delicado y aromático. Acompañado de jengibre rosa.',
      },
    ],
  },
  {
    id: 'sashimi',
    label: 'Sashimi',
    items: [
      {
        id: 'sashimi-01',
        num: '01',
        name: 'Sashimi de Salmón',
        price: '14,50€',
        description:
          '6 láminas de salmón salvaje noruego cortadas en tataki. Cítrico y fresco.',
      },
      {
        id: 'sashimi-02',
        num: '02',
        name: 'Sashimi de Atún',
        price: '17,00€',
        description:
          'Maguro de almadraba en láminas perfectas, rojo intenso, umami profundo.',
        tag: 'Temporada',
      },
      {
        id: 'sashimi-03',
        num: '03',
        name: 'Sashimi Mixto',
        price: '22,00€',
        description:
          'Selección del chef: 12 piezas variadas con lo mejor del día. Presentación artística.',
        tag: "Chef's Choice",
      },
      {
        id: 'sashimi-04',
        num: '04',
        name: 'Sashimi de Dorada',
        price: '13,50€',
        description:
          'Dorada salvaje de la Costa del Sol. Elaborada al estilo carpaccio con aceite de trufa.',
        tag: 'Local',
      },
      {
        id: 'sashimi-05',
        num: '05',
        name: 'Sashimi de Pulpo',
        price: '15,00€',
        description:
          'Pulpo malagueño en láminas finas, marinado en ponzu con aceite de sésamo.',
      },
      {
        id: 'sashimi-06',
        num: '06',
        name: 'Toro Sashimi',
        price: '28,00€',
        description:
          'Ventresca de atún premium, la experiencia definitiva. Edición muy limitada.',
        tag: 'Premium',
      },
    ],
  },
  {
    id: 'maki',
    label: 'Maki',
    items: [
      {
        id: 'maki-01',
        num: '01',
        name: 'Sake Maki',
        price: '8,50€',
        description:
          'Clásico rollo de salmón, aguacate y pepino. 6 piezas perfectamente cortadas.',
      },
      {
        id: 'maki-02',
        num: '02',
        name: 'Tuna Maki',
        price: '9,50€',
        description: 'Atún rojo, cebollino y tobiko. 6 piezas. El favorito de los puristas.',
      },
      {
        id: 'maki-03',
        num: '03',
        name: 'Spicy Tuna Maki',
        price: '10,00€',
        description:
          'Atún rojo picante con mayo sriracha, pepino y cebolleta. Kick perfecto.',
      },
      {
        id: 'maki-04',
        num: '04',
        name: 'Edamame Maki',
        price: '7,50€',
        description:
          'Opción vegana: edamame, pepino, aguacate y pimiento amarillo. Delicado.',
      },
      {
        id: 'maki-05',
        num: '05',
        name: 'Dragon Maki',
        price: '13,50€',
        description:
          'Anguila, aguacate y tobiko rojo. Cubierto de aguacate en escamas. Visual impresionante.',
      },
      {
        id: 'maki-06',
        num: '06',
        name: 'Rainbow Maki',
        price: '15,00€',
        description:
          'California roll cubierto con finas láminas de 5 pescados distintos. Arcoíris de sabor.',
        tag: 'Signature',
      },
    ],
  },
  {
    id: 'special',
    label: 'Special Rolls',
    items: [
      {
        id: 'special-01',
        num: '01',
        name: 'Mare Roll',
        price: '17,50€',
        description:
          'Nuestro roll insignia: gamba roja local, toro, ponzu trufado y huevas de erizo. Inimitable.',
        tag: 'Signature',
      },
      {
        id: 'special-02',
        num: '02',
        name: 'Fuengirola Roll',
        price: '16,00€',
        description:
          'Boquerón malagueño, aguacate, queso crema y aceite de oliva virgen extra Picual.',
        tag: 'Local',
      },
      {
        id: 'special-03',
        num: '03',
        name: 'Volcano Roll',
        price: '16,50€',
        description:
          'Cangrejo, aguacate, salmón spicy gratinado con mayo wasabi y tobiko naranja.',
      },
      {
        id: 'special-04',
        num: '04',
        name: 'Black Pearl Roll',
        price: '18,00€',
        description:
          'Arroz negro con tinta de sepia, atún rojo, aguacate y escamas de oro comestible.',
        tag: 'Premium',
      },
      {
        id: 'special-05',
        num: '05',
        name: 'Truffle Roll',
        price: '19,00€',
        description:
          'Salmón, queso de cabra, aceite de trufa negra y huevas de salmón. Lujoso.',
        tag: 'Premium',
      },
      {
        id: 'special-06',
        num: '06',
        name: 'Sol Roll',
        price: '15,50€',
        description:
          'Langostino tempura, mango, chili dulce y mayonesa de yuzu. Sabor soleado.',
      },
    ],
  },
  {
    id: 'entradas',
    label: 'Entrantes',
    items: [
      {
        id: 'entradas-01',
        num: '01',
        name: 'Edamame al Yuzu',
        price: '5,50€',
        description:
          'Habas de soja al vapor con mantequilla de yuzu y flor de sal. Inicio perfecto.',
      },
      {
        id: 'entradas-02',
        num: '02',
        name: 'Gyozas de Cerdo',
        price: '9,00€',
        description:
          '6 dumplings de cerdo ibérico y trufa, salteados y al vapor. Salsa ponzu.',
      },
      {
        id: 'entradas-03',
        num: '03',
        name: 'Tataki de Atún',
        price: '14,00€',
        description:
          'Lomo de atún marcado, cebolla crujiente, salsa de soja dulce y sésamo negro.',
        tag: "Chef's Fav",
      },
      {
        id: 'entradas-04',
        num: '04',
        name: 'Ostras Japonesas',
        price: '18,00€',
        description:
          '3 ostras finas con granita de ponzu, shichimi y cebollino. Maresía pura.',
        tag: 'Premium',
      },
      {
        id: 'entradas-05',
        num: '05',
        name: 'Gyozas Veganas',
        price: '8,00€',
        description:
          'Relleno de shiitake, espinaca y tofu ahumado. Salsa teriyaki de jengibre.',
      },
      {
        id: 'entradas-06',
        num: '06',
        name: 'Miso Soup Premium',
        price: '4,50€',
        description:
          'Caldo dashi con miso blanco, wakame, tofu de seda y cebolleta fresca.',
      },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    items: [
      {
        id: 'postres-01',
        num: '01',
        name: 'Mochi de Té Matcha',
        price: '6,50€',
        description:
          'Bola de mochi artesanal rellena de helado de matcha ceremonial. Delicado y fresco.',
      },
      {
        id: 'postres-02',
        num: '02',
        name: 'Mochi de Mango',
        price: '6,50€',
        description:
          'Mochi suave de arroz glutinoso con helado de mango Alfonso. Tropical y cremoso.',
      },
      {
        id: 'postres-03',
        num: '03',
        name: 'Cheesecake Japonés',
        price: '7,50€',
        description:
          'Bizcocho esponjoso de queso al estilo Hokkaido, coulis de frutos rojos y yuzu.',
        tag: 'Signature',
      },
      {
        id: 'postres-04',
        num: '04',
        name: 'Tempura de Helado',
        price: '8,00€',
        description:
          'Helado de vainilla bourbon en tempura crujiente dorada. Servido con salsa de caramelo.',
      },
      {
        id: 'postres-05',
        num: '05',
        name: 'Coulant de Matcha',
        price: '9,00€',
        description:
          'Coulant tibio de chocolate blanco y matcha con núcleo fundente. Impresionante.',
        tag: "Chef's Fav",
      },
      {
        id: 'postres-06',
        num: '06',
        name: 'Dorayaki con Trufa',
        price: '7,00€',
        description:
          'Pancake japonés relleno de anko y mantequilla de trufa blanca. Tradicional y lujoso.',
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    items: [
      {
        id: 'bebidas-01',
        num: '01',
        name: 'Sake Junmai',
        price: '9,50€',
        description:
          'Sake puro de arroz sin azúcar añadido. Servido frío en copa de cristal fino.',
      },
      {
        id: 'bebidas-02',
        num: '02',
        name: 'Sake Daiginjo',
        price: '14,00€',
        description:
          'El sake más refinado. Aromático, floral y suavísimo. Elaboración artesanal limitada.',
        tag: 'Premium',
      },
      {
        id: 'bebidas-03',
        num: '03',
        name: 'Whisky Nikka',
        price: '12,00€',
        description:
          'Whisky japonés Nikka From the Barrel. Complejo, ahumado y con notas dulces únicas.',
      },
      {
        id: 'bebidas-04',
        num: '04',
        name: 'Cóctel Yuzu Sour',
        price: '11,00€',
        description:
          'Gin premium, yuzu fresco, clara de huevo y shiso. Cítrico y sofisticado. Imprescindible.',
        tag: 'Signature',
      },
      {
        id: 'bebidas-05',
        num: '05',
        name: 'Matcha Latte',
        price: '5,50€',
        description:
          'Matcha ceremonial de Uji con leche oat atemperada. Espumoso y delicioso.',
      },
      {
        id: 'bebidas-06',
        num: '06',
        name: 'Selección de Vinos',
        price: 'Desde 6€',
        description:
          'Carta de vinos seleccionados por su maridaje perfecto con la cocina japonesa. Pregunta al sommelier.',
      },
    ],
  },
]
