export interface ModalDataInterface {
  favorite?: boolean;
  title: string;
  price: number;
  priceText: string;
  subtitle: string;
  text1: string[];
  text2: string;
  preferentWords: {
    blue: string[];
    green: string[];
  };
  titleList1: string;
  list1: string[];
  titleList2: string;
  list2: string[];
  text3: string;
  unit: Unit;
  stripe_link: string;
}

export interface Unit {
  description: string;
  amount: {
    currency_code: string;
    value: string;
  };
}

export const units = [
  {
    description: "Iluminación Propia",
    amount: {
      currency_code: "USD",
      value: "597",
    },
  },
  {
    description: "Fotosíntesis Humana",
    amount: {
      currency_code: "USD",
      value: "897",
    },
  },
  {
    description: "Recursos Ilimitados",
    amount: {
      currency_code: "USD",
      value: "597",
    },
  },
];

export const ModalData = [
  {
    title: "Iluminación Propia",
    price: 597,
    priceText: "Programa de 6 Sesiones",
    subtitle: "Estas transformaciones se realizan y obtienes...",
    text1: [
      "• Es una videoconferencia en la plataforma Meet donde podrás elegir el horario que te quede más asequible, recuerda activar tu cámara y audio, Necesitamos un espacio seguro para ti, que te dé completa tranquilidad y seguridad para comunicarte.",
      "• 6 videollamadas privadas de entre 60 y 90 minutos con Jonathan Pérez. Las llamadas serán semanales o cada dos semanas.",
      "•  Acompañamiento personalizado. Seré tu Coach y Mentor Personal durante las semanas de tu transformación. Contarás con mi apoyo y podrás comunicarte conmigo cuanto desees vía e-mail y WhatsApp para atender tus consultas.",
    ],
    text2:
      "Este entrenamiento tiene como base nutrir tu autoestima y amor por ti mismo, experimentarás un mayor control interno, lo que desencadenará pensamientos más saludables, sentimientos más auténticos y acciones más significativas.",
    preferentWords: {
      blue: ["tu autoestima"],
      green: ["pensamientos", "sentimientos", "acciones"],
    },
    titleList1: "Si te sientes así...",
    list1: [
      "No conoces tus debilidades y fortalezas.",
      "Sientes que te falta amarte y aceptarte tal y como eres.",
      "Sientes que tu relación contigo mismo es autosaboteo y autocritica.",
      "No sabes que es lo que te bloquea o limita en las relaciones.",
      "Tienes pensamientos que te controlan",
      "Las ideas que tienes en tu mente no son saludables para ti.",
    ],
    titleList2: "Te acompañare a...",
    list2: [
      "Tendrías la capacidad de poner límites a tus relaciones",
      "Sabrías cuáles son tus No negociables.",
      "Tendrías la fuerza para mejorar tus pensamientos, tus sentimientos y tus acciones.",
      "Sentirías la confianza y la determinación de cambiar todo a tu alrededor.",
      "Sentirás la fuerza interior para superar cualquier reto en tu vida.",
    ],
    text3:
      "¡¡ Toma acción y responsabilidad, no es casualidad que hayas llegado hasta aquí !!",
    unit: units[0],
    stripe_link: "https://buy.stripe.com/fZe01B8hU19e8jSbIJ",
  },
  {
    favorite: true,
    title: "Fotosíntesis Humana",
    price: 897,
    priceText: "Programa de 10 Sesiones",
    subtitle: "Estas transformaciones se realizan y obtienes...",
    text1: [
      "• Es una videoconferencia en la plataforma Meet donde podrás elegir el horario que te quede más asequible, recuerda activar tu cámara y audio, Necesitamos un espacio seguro para ti, que te dé completa tranquilidad y seguridad para comunicarte.",
      "• 10 videollamadas privadas de entre 60 y 90 minutos con Jonathan Pérez. Las llamadas serán semanales o cada dos semanas.",
      "•  Acompañamiento personalizado. Seré tu Coach y Mentor Personal durante las semanas de tu transformación. Contarás con mi apoyo y podrás comunicarte conmigo cuanto desees vía e-mail y WhatsApp para atender tus consultas.",
    ],
    text2:
      "El método de transformación y acompañamiento que te guiara a encontrarte contigo mismo, a realizar esa transformación que tanto necesitas, explorando cuál es la verdad sobre ti mismo, Es hora de que despiertes a tu verdadero potencial, que te permitas florecer en la plenitud de tu ser.",
    preferentWords: {
      blue: ["acompañamiento", "plenitud de tu ser"],
      green: ["tu verdadero potencial"],
    },
    titleList1: "Si te sientes así...",
    list1: [
      "Te sientes con baja Autoestima y Amor Propio.",
      "Quieres cambiar tu vida, pero sientes miedo al fracaso y al cambio.",
      "Sientes que no encajas en ningún lugar y es mejor estar solo.",
      "Quieres tener la vida de tus sueños, pero no sabes por dónde empezar.",
      "Llevas tiempo haciendo mil cosas, pero sigues obteniendo los mismos resultados.",
      "Te sientes con muchos bloqueos y limitaciones en tu vida.",
      "Te encuentras en una zona de confort y no sabes cómo salir de ella.",
    ],
    titleList2: "Te acompañare a...",
    list2: [
      "Tener más autoestima y amor propio.",
      "Ser tu mejor versión y tener hábitos saludables.",
      "Vivir de acuerdo a tu esencia, disfrutando de cada paso.",
      "Tener más confianza en ti mismo para afrontar cualquier reto en tu vida.",
      "Pasar de una situación actual a una situación deseada.",
      "Facilitar tu crecimiento y la toma de conciencia.",
      "Hacerte responsable de tu vida y tomar acción.",
    ],
    text3:
      "¡¡ Toma acción y responsabilidad, no es casualidad que hayas llegado hasta aquí !!",
    unit: units[1],
    stripe_link: "https://buy.stripe.com/eVa8y7gOqdW0as0288",
  },
  {
    title: "Recursos Ilimitados",
    price: 597,
    priceText: "Programa de 6 Sesiones",
    subtitle: "Estas transformaciones se realizan y obtienes...",
    text1: [
      "• Es una videoconferencia en la plataforma Meet donde podrás elegir el horario que te quede más asequible, recuerda activar tu cámara y audio, Necesitamos un espacio seguro para ti, que te dé completa tranquilidad y seguridad para comunicarte.",
      "• 6 videollamadas privadas de entre 60 y 90 minutos con Jonathan Pérez. Las llamadas serán semanales o cada dos semanas.",
      "•  Acompañamiento personalizado. Seré tu Coach y Mentor Personal durante las semanas de tu transformación. Contarás con mi apoyo y podrás comunicarte conmigo cuanto desees vía e-mail y WhatsApp para atender tus consultas.",
    ],
    text2:
      "Bienvenido a nuestro excepcional Método de transformación, Un enfoque integral te brindará las herramientas necesarias para superar obstáculos y tomar medidas decisivas, allanando el camino hacia el éxito y la abundancia. ¡No te conformes con menos de lo que mereces!",
    preferentWords: {
      blue: ["las herramientas"],
      green: ["la abundancia"],
    },
    titleList1: "Si te sientes así...",
    list1: [
      "Sientes que gastas más de lo que ganas.",
      "Sientes bloqueos con respecto al dinero y no sabes cómo superarlos.",
      "Sientes que tu relación con el dinero no es buena.",
      "No tienes metas, ni objetivos financieros.",
      "No sabes cuales son los mecanismos y las herramientas para una vida más prospera y abundante.",
    ],
    titleList2: "Te acompañare a...",
    list2: [
      "Tendrías la capacidad de viajar a cualquier lugar en el planeta.",
      "Tendrías prosperidad y abundancia en todos los aspectos de tu vida.",
      "Podrías compartir y pasar tiempo con las personas que amas.",
      "Te comprarías la casa que siempre has soñado.",
    ],
    text3:
      "¡¡ Toma acción y responsabilidad, no es casualidad que hayas llegado hasta aquí !!",
    unit: units[2],
    stripe_link: "https://buy.stripe.com/aEUeWv55I7xCgQo146",
  },
];
