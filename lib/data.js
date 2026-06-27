// Verified, aggregated from news + official sources, Jun 26 2026.
// Each entry links only to recognized organizations / official tools.

export const GENERAL = [
  { n: "UN Crisis Relief", t: "ONU", es: "Fondo humanitario de la ONU. Donación de $2 a $600.000.", en: "UN humanitarian fund. Donate $2–$600,000.", u: "https://crisisrelief.un.org/en/donate-venezuela-crisis" },
  { n: "GlobalGiving", t: "ONG", es: "Financia ONG locales en las zonas más afectadas.", en: "Funds local NGOs in the hardest-hit areas.", u: "https://www.globalgiving.org/projects/venezuela-earthquake-relief-fund/" },
  { n: "Médicos Sin Fronteras", t: "ONG", es: "Servicios médicos esenciales y kits de trauma.", en: "Essential medical services and trauma kits.", u: "https://give.doctorswithoutborders.org/campaign/805425/donate" },
  { n: "International Rescue Committee", t: "ONG", es: "Salud, nutrición, agua, protección y alimentos.", en: "Health, nutrition, water, protection and food.", u: "https://www.rescue.org/article/how-help-survivors-earthquakes-venezuela" },
  { n: "Direct Relief", t: "ONG", es: "Medicamentos de emergencia y equipo de rescate.", en: "Emergency medicine and rescue equipment.", u: "https://www.directrelief.org/emergency/venezuela-earthquakes-2026/" },
  { n: "World Central Kitchen", t: "ONG", es: "Comida y agua para evacuados y rescatistas.", en: "Food and water for evacuees and rescuers.", u: "https://donate.wck.org/campaign/815521/donate" }
];

export const CHILD = [
  { n: "UNICEF USA", t: "🇺🇸", kid: 1, es: "Atención médica, agua, protección y apoyo psicológico para niños.", en: "Medical care, water, protection and psychosocial support for children.", u: "https://www.unicefusa.org/stories/venezuela-earthquakes-children-need-help-now" },
  { n: "UNICEF UK", t: "🇬🇧", kid: 1, es: "Llamamiento de emergencia para los niños afectados.", en: "Emergency appeal for affected children.", u: "https://www.unicef.org.uk/donate/donate-to-our-venezuela-earthquake-appeal/" },
  { n: "UNICEF España", t: "🇪🇸 €", kid: 1, es: "Asistencia de emergencia. Web o transferencia.", en: "Emergency assistance. Web or transfer.", u: "https://www.unicef.es/colabora/dona/emergencia-terremoto-en-venezuela" },
  { n: "Save the Children US", t: "🇺🇸", kid: 1, es: "Salud, protección infantil, refugio y comida.", en: "Health, child protection, shelter and food.", u: "https://www.savethechildren.org/us/where-we-work/venezuela" },
  { n: "Save the Children ES", t: "🇪🇸 €", kid: 1, es: "Ayuda enfocada en menores. €30 / €60 / €100.", en: "Aid focused on children. €30 / €60 / €100.", u: "https://www.savethechildren.es/donacion-ong/terremoto-en-venezuela-2026" },
  { n: "Plan International UK", t: "🇬🇧", kid: 1, es: "Esenciales con foco en las necesidades de las niñas.", en: "Essentials focused on the needs of girls.", u: "https://plan-uk.org/donate/venezuela-earthquake-appeal" },
  { n: "World Vision", t: "🇺🇸", kid: 1, es: "Agua, refugio y espacios seguros para niños.", en: "Water, shelter and child-friendly safe spaces.", u: "https://donate.worldvision.org/give/venezuela-relief-fund" },
  { n: "Catholic Relief Services", t: "🇺🇸", kid: 1, es: "Con Cáritas Venezuela: refugio, comida, agua y salud.", en: "With Caritas Venezuela: shelter, food, water and health.", u: "https://www.crs.org/donate/venezuela-earthquake" }
];

// Ground tools — each points to its OWN real site, not a single hub.
export const GROUND = [
  { n: "Hazlo Hoy — Coordinación", t: "🇻🇪 plataforma", es: "Centro de coordinación: pedir ayuda, voluntarios, mapa de centros, marcarte a salvo.", en: "Coordination hub: request aid, volunteers, aid-center map, mark yourself safe.", u: "https://terremoto.hazlohoy.org/" },
  { n: "SismoAyuda VE", t: "ingeniería", es: "Sube fotos de tu casa: ingenieros voluntarios evalúan si es habitable (gratis).", en: "Upload photos of your home: volunteer engineers assess if it's habitable (free).", u: "https://www.sismoayudave.com/" },
  { n: "SismoVenezuela", t: "mapa", es: "Mapa colaborativo de edificios dañados en todo el país.", en: "Collaborative map of damaged buildings across the country.", u: "https://sismovenezuela.org/" },
  { n: "Ingeniería Solidaria", t: "RedesAyuda", es: "Red de ingenieros para inspección estructural de emergencia.", en: "Network of engineers for emergency structural inspection.", u: "https://redesayuda.org/ingenieriasolidaria/" },
  { n: "Yummy SOS", t: "app", es: "Reporta daños y solicita transporte/entregas de emergencia.", en: "Report damage and request emergency transport/deliveries.", u: "https://sos.yummyrides.com/" },
  { n: "CVC Emergencia 2026", t: "maquinaria", es: "Red de movilización de maquinaria pesada para rescate y remoción.", en: "Heavy-machinery mobilization network for rescue and debris removal.", u: "https://cvcemergencia2026.netlify.app/" }
];

export const FAMILY = [
  { n: "Hazlo Hoy — Buscar personas", t: "🔎", es: "Buscar desaparecidos, reportar, o marcarte como a salvo.", en: "Search missing persons, report, or mark yourself safe.", u: "https://terremoto.hazlohoy.org/" },
  { n: "Cruz Roja — Restablecer contacto", t: "📞", es: "WhatsApp +57 321 213 9525 · rcf@cruzrojacolombiana.org · línea 132.", en: "WhatsApp +57 321 213 9525 · rcf@cruzrojacolombiana.org · line 132.", u: "mailto:rcf@cruzrojacolombiana.org" }
];

// Physical drop-offs. `src` = official source we re-check automatically.
// Addresses confirmed via City of Doral + Global Empowerment Mission (organizer).
export const DROP = [
  { n: "GEM Headquarters — Doral, FL", t: "🇺🇸 24/7 info", es: "1850 NW 84th Ave, Ste. 100, FL 33126 · Lun–Vie 9–4. Tel. (800) 995-7604.", en: "1850 NW 84th Ave, Ste. 100, FL 33126 · Mon–Fri 9–4. Tel (800) 995-7604.", u: "https://maps.google.com/?q=1850+NW+84th+Ave+Doral+FL+33126", src: "https://www.globalempowermentmission.org/mission/venezuela-earthquake/" },
  { n: "El Arepazo — Doral, FL", t: "🇺🇸", es: "10191 NW 58th St, FL 33178 · abierto 24 h, 7 días.", en: "10191 NW 58th St, FL 33178 · open 24h, 7 days.", u: "https://maps.google.com/?q=10191+NW+58th+St+Doral+FL", src: "https://www.local10.com/news/local/2026/06/25/helping-venezuela-aid-for-earthquake-victims-starts-to-flow-into-el-arepazo-in-doral/" },
  { n: "Doral Legacy Park", t: "🇺🇸", es: "11400 NW 82nd St, FL 33178 · Lun–Vie 5–9pm · Sáb–Dom 8–5.", en: "11400 NW 82nd St, FL 33178 · Mon–Fri 5–9pm · Sat–Sun 8–5.", u: "https://maps.google.com/?q=11400+NW+82nd+St+Doral+FL", src: "https://wsvn.com/news/local/miami-dade/drop-off-locations-across-miami-dade-for-venezuela-earthquake-relief-drive/" },
  { n: "Supervisor of Elections — Doral, FL", t: "🇺🇸", es: "2700 NW 87th Ave, FL 33172 · Lun–Vie 8–5.", en: "2700 NW 87th Ave, FL 33172 · Mon–Fri 8–5.", u: "https://maps.google.com/?q=2700+NW+87th+Ave+Doral+FL", src: "https://wsvn.com/news/local/miami-dade/drop-off-locations-across-miami-dade-for-venezuela-earthquake-relief-drive/" },
  { n: "Carlow Park — Sweetwater, FL", t: "🇺🇸 Sweetwater", es: "10601 SW 5th St, FL 33174 · Lun–Dom 8–6. Agua, comida no perecedera, higiene.", en: "10601 SW 5th St, FL 33174 · Mon–Sun 8–6. Water, non-perishable food, hygiene.", u: "https://maps.google.com/?q=10601+SW+5th+St+Sweetwater+FL", src: "https://wsvn.com/news/local/miami-dade/drop-off-locations-across-miami-dade-for-venezuela-earthquake-relief-drive/" },
  { n: "Food For The Poor — Coconut Creek, FL", t: "🇺🇸 Broward", es: "6401 Lyons Rd · Lun–Vie 8–5, Sáb 8–12. Enlatados, higiene, lonas, mantas, pañales.", en: "6401 Lyons Rd · Mon–Fri 8–5, Sat 8–12. Canned goods, hygiene, tarps, blankets, diapers.", u: "https://maps.google.com/?q=6401+Lyons+Rd+Coconut+Creek+FL", src: "https://www.local10.com/news/local/2026/06/26/how-to-help-south-florida-donation-drop-off-locations-to-help-venezuelans-after-earthquakes/" },
  { n: "All Star Training Center — Miramar, FL", t: "🇺🇸 Broward", es: "11820 Miramar Pkwy, Ste 2 · 8:30–20:00 (hasta 3 jul). Agua, comida, primeros auxilios, pañales.", en: "11820 Miramar Pkwy, Ste 2 · 8:30am–8pm (through Jul 3). Water, food, first aid, diapers.", u: "https://maps.google.com/?q=11820+Miramar+Pkwy+Miramar+FL", src: "https://www.nbcmiami.com/news/local/how-to-help-venezuela-in-the-wake-of-deadly-earthquakes/3825677/" },
  { n: "Work Color Signs — Orlando, FL", t: "🇺🇸 Orlando", es: "4854 Distribution Ct · Acopio comunitario. Agua, comida, medicinas, comida de mascotas.", en: "4854 Distribution Ct · Community drop-off. Water, food, medicine, pet food.", u: "https://maps.google.com/?q=4854+Distribution+Ct+Orlando+FL", src: "https://www.fox35orlando.com/news/twin-earthquakes-devastate-venezuela-orlando-families-desperately-await-news-missing-loved-ones" },
  { n: "Caracas Bakery — Doral, FL", t: "🇺🇸 Doral", es: "7884 NW 52nd St, FL 33166 · Agua, comida no perecedera y esenciales.", en: "7884 NW 52nd St, FL 33166 · Water, non-perishables and essentials.", u: "https://maps.google.com/?q=7884+NW+52nd+St+Doral+FL", src: "https://www.axios.com/local/miami/2026/06/25/how-to-help-venezuelan-earthquake-relief-efforts-in-miami" },
  { n: "Caracas Bakery — Biscayne, Miami", t: "🇺🇸 MiMo", es: "7283 Biscayne Blvd, FL 33138 · Agua, comida no perecedera y esenciales.", en: "7283 Biscayne Blvd, FL 33138 · Water, non-perishables and essentials.", u: "https://maps.google.com/?q=7283+Biscayne+Blvd+Miami+FL", src: "https://www.axios.com/local/miami/2026/06/25/how-to-help-venezuelan-earthquake-relief-efforts-in-miami" },
  { n: "Fundación Juntos se Puede — Bogotá", t: "🇨🇴", es: "Calle 104 #54-31, Suba · Lun–Dom 7–6. Víveres, agua, medicinas.", en: "Calle 104 #54-31, Suba · Mon–Sun 7–6. Food, water, medicine.", u: "https://maps.google.com/?q=Calle+104+54-31+Suba+Bogota", src: "https://www.rtvcnoticias.com/actualidad/donaciones-para-ayudar-los-damnificados-del-doble-terremoto-en-venezuela" }
];

// Authoritative situation sources (humanitarian + scientific first, news second).
export const OFFICIAL = [
  { n: "ReliefWeb — Venezuela Earthquakes", t: "ONU OCHA", es: "Centro oficial de la ONU: todos los reportes de la emergencia.", en: "Official UN hub: every report on the emergency.", u: "https://reliefweb.int/disaster/eq-2026-000093-ven" },
  { n: "PAHO / OMS — Respuesta sanitaria", t: "salud oficial", es: "Respuesta de salud de la OPS/OMS y equipos médicos internacionales.", en: "PAHO/WHO health response and international medical teams.", u: "https://www.paho.org/en/venezuela-earthquake-response" },
  { n: "UNICEF — Situation Report N.º 1", t: "oficial", es: "Reporte oficial sobre la niñez afectada (25 jun).", en: "Official report on affected children (Jun 25).", u: "https://reliefweb.int/report/venezuela-bolivarian-republic/unicef-venezuela-humanitarian-situation-report-no1-earthquake-25-june-2026" },
  { n: "US Dept. of State — Response", t: "oficial", es: "Respuesta y socios oficiales de EE. UU.", en: "Official U.S. response and partners.", u: "https://www.state.gov/responding-to-venezuela-earthquakes" },
  { n: "CNN — Cobertura en vivo", t: "noticias", es: "Últimas noticias verificadas de la emergencia.", en: "Latest verified breaking coverage.", u: "https://www.cnn.com/2026/06/26/world/live-news/venezuela-earthquake-hnk" }
];

export const VERIFY = [
  { n: "Charity Navigator", u: "https://www.charitynavigator.org" },
  { n: "GuideStar", u: "https://www.guidestar.org" },
  { n: "BBB give.org", u: "https://www.give.org" },
  { n: "FTC — Donaciones seguras", u: "https://consumer.ftc.gov/articles/before-giving-charity" }
];

export const T = {
  es: {
    h1: "Venezuela: ayuda verificada",
    lead: "Una sola página confiable tras el terremoto del 24 de junio de 2026. Reunimos las fuentes reales y te guiamos según dónde estés.",
    pills: ["✓ Fuentes verificadas", "🔴 Sismos en vivo · USGS", "🤝 Sin fines de lucro"],
    updated: "Datos en vivo de USGS · actualizado cada hora",
    verified: "Enlaces de fuentes revisados cada hora",
    broken: "No respondió en la última verificación:",
    ago: "hace",
    justNow: "hace instantes",
    minutes: "min",
    hours: "h",
    router: [
      ["🌎", "Donar desde fuera", "#donar"],
      ["🧒", "Donar a los niños", "#ninos"],
      ["🆘", "Estoy en Venezuela", "#terreno"],
      ["🔎", "Buscar familiares", "#familia"],
      ["📦", "Entregar en persona", "#entregar"],
      ["📰", "Info oficial", "#oficial"]
    ],
    quakeTitle: "🔴 Actividad sísmica reciente",
    quakeSub: "Fuente: USGS (Servicio Geológico de EE. UU.). Magnitudes y réplicas reales, actualizadas cada hora.",
    quakeAfter: "réplicas en las últimas 24 h",
    quakeMain: "sismo principal",
    quakeNone: "No se pudo cargar el feed sísmico ahora mismo. Intenta recargar.",
    trustTitle: "🛡️ Dona solo a fuentes confiables",
    trustLead: "Tras un desastre, las estafas se disparan. La regla más importante: dona únicamente a organizaciones reconocidas — como las de esta página — y nunca a enlaces o personas que no puedas verificar.",
    trustRules: [
      "Dona directo en el sitio oficial de la organización — escribe tú mismo la dirección.",
      "Desconfía de nombres parecidos (ej. «unicef-venezuela»): los estafadores imitan marcas reales.",
      "Nunca pagues con gift cards, Zelle/CashApp/Venmo a personas, ni cripto a billeteras desconocidas.",
      "Desconfía de la presión y la urgencia extrema («dona ya o mueren»). Las ONG reales no presionan así.",
      "¿Dudas de una campaña? Verifícala tú mismo antes de dar:"
    ],
    inside: ["🆘 Estoy en Venezuela y necesito ayuda", "Plataformas de coordinación en el terreno. Cada una es su propio servicio — toca para abrirla."],
    family: ["🔎 Buscar familiares", "Servicios gratuitos para localizar personas o avisar que estás a salvo."],
    donar: ["🌎 Donar desde fuera del país", "Organizaciones internacionales reconocidas. Toca para ir a su página oficial de donación."],
    ninos: ["🧒 Donar a los niños", "Unos 3,9 millones de niños viven en las zonas afectadas (estimación UNICEF, jun 2026). Organizaciones especializadas en la niñez:"],
    entregar: ["📦 Entregar donaciones en persona", "Puntos reales de acopio en Florida (Doral, Miami, Sweetwater, Broward, Orlando) y Bogotá, confirmados con fuentes el 26 jun. Toca «Mapa» para ir; «fuente» abre el anuncio oficial. Algunos son temporales — confirma horarios. Enlaces revisados cada hora."],
    entregarMore: "Ver más puntos en el sur de Florida →",
    entregarMoreUrl: "https://www.local10.com/news/local/2026/06/26/how-to-help-south-florida-donation-drop-off-locations-to-help-venezuelans-after-earthquakes/",
    source: "fuente",
    oficial: ["📰 Información oficial y noticias", "Fuentes humanitarias y científicas, primero; noticias verificadas, después."],
    foot: "Fuentes verificadas: USGS, ReliefWeb (ONU OCHA), PAHO/OMS, UNICEF, Save the Children, Plan International, World Vision, CRS, ONU, GlobalGiving, MSF, IRC, Hazlo Hoy, SismoAyuda VE, Cruz Roja, City of Doral, GEM, State Dept, CNN, FTC. · Esta página solo enlaza a fuentes reconocidas: no recauda ni recibe dinero.",
    credit: "Construido de forma independiente por Celestino Salim · información verificada para ayudar a evitar estafas. Sin afiliación a ningún gobierno ni institución."
  },
  en: {
    h1: "Venezuela: verified help",
    lead: "One trusted page after the June 24, 2026 earthquakes. We gather the real sources and guide you by where you are.",
    pills: ["✓ Verified sources", "🔴 Live seismic · USGS", "🤝 Non-profit"],
    updated: "Live USGS data · updated hourly",
    verified: "Source links re-checked hourly",
    broken: "Did not respond in the last check:",
    ago: "",
    justNow: "just now",
    minutes: "min ago",
    hours: "h ago",
    router: [
      ["🌎", "Donate from abroad", "#donar"],
      ["🧒", "Donate for children", "#ninos"],
      ["🆘", "I'm in Venezuela", "#terreno"],
      ["🔎", "Find family", "#familia"],
      ["📦", "Drop off in person", "#entregar"],
      ["📰", "Official info", "#oficial"]
    ],
    quakeTitle: "🔴 Recent seismic activity",
    quakeSub: "Source: USGS (U.S. Geological Survey). Real magnitudes and aftershocks, refreshed hourly.",
    quakeAfter: "aftershocks in the last 24 h",
    quakeMain: "main shock",
    quakeNone: "Couldn't load the seismic feed right now. Try reloading.",
    trustTitle: "🛡️ Donate only to reliable sources",
    trustLead: "After a disaster, scams spike. The most important rule: donate only to recognized organizations — like the ones on this page — and never to links or people you can't verify.",
    trustRules: [
      "Donate directly on the organization's official site — type the address yourself.",
      "Watch for look-alike names (e.g. \"unicef-venezuela\"): scammers imitate real brands.",
      "Never pay with gift cards, Zelle/CashApp/Venmo to people, or crypto to unknown wallets.",
      "Distrust pressure and extreme urgency (\"donate now or they'll die\"). Real NGOs don't pressure like that.",
      "Unsure about a campaign? Verify it yourself before giving:"
    ],
    inside: ["🆘 I'm in Venezuela and need help", "On-the-ground coordination platforms. Each is its own service — tap to open it."],
    family: ["🔎 Find family", "Free services to locate people or let family know you're safe."],
    donar: ["🌎 Donate from abroad", "Recognized international organizations. Tap to go to their official donation page."],
    ninos: ["🧒 Donate for children", "About 3.9 million children live in the affected areas (UNICEF estimate, Jun 2026). Organizations specialized in children:"],
    entregar: ["📦 Drop off donations in person", "Real collection points in Florida (Doral, Miami, Sweetwater, Broward, Orlando) and Bogotá, confirmed against sources on Jun 26. Tap \"Map\" to go; \"source\" opens the official announcement. Some are temporary — check hours. Links re-checked hourly."],
    entregarMore: "See more points across South Florida →",
    entregarMoreUrl: "https://www.local10.com/news/local/2026/06/26/how-to-help-south-florida-donation-drop-off-locations-to-help-venezuelans-after-earthquakes/",
    source: "source",
    oficial: ["📰 Official info & news", "Humanitarian and scientific sources first; verified news second."],
    foot: "Verified sources: USGS, ReliefWeb (UN OCHA), PAHO/WHO, UNICEF, Save the Children, Plan International, World Vision, CRS, UN, GlobalGiving, MSF, IRC, Hazlo Hoy, SismoAyuda VE, Red Cross, City of Doral, GEM, State Dept, CNN, FTC. · This page only links to recognized sources: it does not collect or receive money.",
    credit: "Independently built by Celestino Salim · verified information to help avoid scams. Not affiliated with any government or institution."
  }
};
