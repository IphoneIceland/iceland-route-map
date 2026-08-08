// Baked-in translations. No network, no API — this file ships with the app so it works
// with no signal at Klaustur, on Heimaey, anywhere.
//
// RULES, so nothing drifts:
//   · Place names are NEVER translated. Seljalandsfoss is Seljalandsfoss in every language.
//   · Times, distances, coordinates and prices are copied character for character.
//   · Operational flags and notes stay in English — they are the guide's working out.
window.__I18N__ = {

es: {
  label: "Español",
  ui: {
    subtitle: "6–13 ago 2026",
    showAll: "Mostrar todos los días",
    hideAll: "Ocultar todo",
    fit: "Ver Islandia",
    clockBooked: "Reloj: horas reservadas",
    clockReal: "Reloj: realista (con tiempo de parada)",
    zoomHint: "Amplía más para ver los nombres de los lugares",
    foot: "Tiempos de conducción: estimaciones de OSRM, no tiempos de autocar.",
    openInMaps: "Abrir en Google Maps ↗",
    source: "Fuente",
    stop: "Parada",
    drive: "min de conducción",
    onGround: "min sobre el terreno",
    spare: "min de margen antes de la reserva",
    earliest: "llegada más temprana",
    zoomToSeparate: "Amplía para separar estas paradas",
    checkThis: "Comprueba esto:",
    stops: "paradas",
    ends: "termina ≈",
    depart: "salida",
    arrive: "llegada",
    clash: "conflicto de horario",
    clashes: "conflictos de horario",
    fixedFind: (t, m) => `${t} es fijo — busca ${m} min antes de aquí.`,
    fixedCut: "Recórtalo de las paradas de arriba, no de esta.",
    crossingUnknown: "duración de la travesía desconocida — el reloj se detiene aquí",
    lateBy: (m, e, s) => `${m} min tarde — llegada más temprana ${e} frente a ${s} reservado`,
    onFoot: "A pie",
    fromRoad: "m desde el punto de carretera más cercano",
    ferryTitle: "Ferry",
    ferryPopup: "Landeyjahöfn ⇄ Heimaey"
  },
  prov: {
    rj:  ["tu chincheta",   "Tu propia chincheta de Google Maps."],
    gm:  ["Google Maps",    "Lugar con nombre en Google Maps, coordenadas leídas de la URL."],
    osm: ["OpenStreetMap",  "Elemento con nombre en OpenStreetMap."],
    bad: ["SIN VERIFICAR",  "Sin coordenada confirmada — no te fíes de esta chincheta."]
  },
  dayTitles: {
    d1: "Llegada + Costa Sur → Umi Hotel (reordenado)",
    d2: "Islas Vestman (Vestmannaeyjar)",
    d3: "Umi → Fjallsárlón / Jökulsárlón → Hotel Jökulsárlón",
    d4: "Hotel Jökulsárlón → Vík → Hotel Geysir",
    d5: "Círculo Dorado desde el Hotel Geysir",
    d6: "Hotel Geysir → Reikiavik vía Úlfljótsvatn y Nesjavellir",
    d7: "Reykjanes — Seltún, Fagradalsfjall, Grindavík, Sky Lagoon"
  },
  dates: {
    d1: "Jue 6 ago", d2: "Vie 7 ago", d3: "Sáb 8 ago", d4: "Dom 9 ago",
    d5: "Lun 10 ago", d6: "Mar 11 ago", d7: "Jue 13 ago"
  },
  // Index-aligned with DAYS[i].stops — one string per stop, in order.
  stops: {
    d1: [
      "El vuelo de entrada aterriza a las 06:25. 75 min mínimo para inmigración, equipajes y embarcar al grupo — salida a las 07:40. Deliberadamente generoso: un avión de fuselaje ancho completo pasando el control de pasaportes, más el equipaje facturado de 32 pasajeros a un autocar de 14 m, no es cosa de 50 min, y cada minuto perdido aquí se pierde de la primera parada.",
      "Parada de descanso en Almar Bakari, Sunnumörk 2. Abierto de 07:00 a 18:00 todos los días, así que no hay riesgo de horario. 25 min.",
      "Hvolsvöllur — mantenido como paso sin parada, 0 min. Queda 58 min después de la panadería, así que una segunda parada de descanso tan pronto es una de más para un grupo que viene de un vuelo nocturno. Si paras, sale del margen del día.",
      "Seljalandsfoss. 35 min — suficiente para caminar por detrás de la cascada y volver.",
      "Reynisfjara. Se toma antes de Vík porque el desvío de la Ruta 215 llega primero yendo hacia el este. 35 min. Olas rompientes traicioneras — avísales antes de que bajen del autocar.",
      "Almuerzo en Vík. 50 min.",
      "Skógafoss. Se toma de camino, a 9,4 km del hotel en lugar de un retroceso de 42 km. 40 min — la base de la cascada, no los 527 escalones.",
      "Llegada prevista 15:40, frente al «alrededor de las 4 de la tarde» del correo. Noche aquí; conductor y guía en el mismo hotel."
    ],
    d2: [
      "Salida del Umi Hotel a las 08:50.",
      "Trayecto a Landeyjahöfn. 36,4 km / ~34 min desde la ubicación corregida del hotel. El check-in cierra a las 09:30 — 30 min antes de la salida de las 10:00 según el billete. Llegada más temprana 09:25, así que sólo 5 minutos de margen.",
      "FERRY — Landeyjahöfn 10:00 → Heimaey 10:40. CON BILLETE: reserva del ferry Herjólfur, Ferð 1, pagada. El grupo, más un autocar, así que el autocar va a bordo.",
      "Llegada a Heimaey 10:40. Atraque del Herjólfur en Básaskersbryggja.",
      "Herjólfsdalur — el valle del asentamiento y la granja reconstruida de Herjólfur (OSM: Herjólfstown). 1,9 km / ~4 min desde el atraque.",
      "Anfiteatro de Þjóðhátíð — el anfiteatro natural donde se celebra el festival, a 200 m de la granja. Coordenada de Google Maps; no figura en OpenStreetMap.",
      "Kaplagjóta — una grieta larga que corre hacia el este, al sur de Dalfjall y paralela a Herjólfsdalur (Heimaslóð). La posición es tu propia chincheta, 63.43989, -20.30516. Está a 285 m de Elephant Rock y a 466 m de la granja. El punto de carretera más cercano queda a 379 m, así que se llega andando. Se arrojaban caballos dentro para sacrificarlos: el Vilborgarstaðaþing de 1528 limitó Heimaey a 16 caballos, y los sobrantes o ya gastados se echaban por el borde. Encima, en la cara sureste del Dalfjall, están las repisas herbosas de Tíkartær, de las que se dice que las ronda el fantasma de un muchacho enviado contra su voluntad a los acantilados de frailecillos, que cayó y murió.",
      "Halldórsskora (Elephant Rock). Coordenada de Google Maps. NO se llega en vehículo — el punto de carretera más cercano es la cabecera de la pista de Herjólfsdalur, a 641 m en línea recta, y esa línea cruza la cresta de Dalfjall/Blátindur. Se muestra como un ramal discontinuo. A menudo se ve desde un barco; confirma el acceso con el operador.",
      "Frailecillos en el cabo de Stórhöfði.",
      "Monte Eldfell. La carretera llega a 357 m de la cima según OSM — el resto es a pie sobre la escoria volcánica.",
      "Almuerzo — næs, Strandvegur 79. Tu chincheta. El correo del itinerario sólo decía «parada para almorzar en Vestmannaeyjabær» sin local, así que este es tuyo, no del operador. 3,3 km / ~6 min bajando desde Eldfell, luego 1,6 km / ~3 min hasta Eldheimar.",
      "Museo Eldheimar — reservado a las 15:00 a nombre del grupo.",
      "De vuelta en el atraque. El billete es el de las 18:00, así que el check-in cierra a las 17:30.",
      "FERRY — 18:00 → Landeyjahöfn 18:40. CON BILLETE: reserva del ferry, Ferð 2, pagada. El mismo grupo + un autocar de 14 m. El correo del itinerario decía las 17:00; el billete dice las 18:00. Manda el billete.",
      "Llegada a Landeyjahöfn 18:40.",
      "Llegada al Umi Hotel sobre las 19:25 — unos 55 min más tarde que las ~18:30 del correo, porque el billete es el de las 18:00. Conductor y guía en el mismo hotel."
    ],
    d3: [
      "Salida a las 08:30, no a las 09:00 del correo. Del Umi a Frost directo son 225 km / 3h12 — saliendo a las 09:00 con una parada de aseos de 20 min llegas 3 minutos tarde al almuerzo de las 12:30. Las 08:30 te compran 27 minutos.",
      "Aseos y café, 30 min. 113 km / 1h38 desde el hotel, así que este es el primer descanso natural.",
      "Estiramiento de piernas, 15 min. No cuesta nada de conducción: Klaustur → Freysnes → Frost son 95 min, idéntico a Klaustur → Frost directo, porque Freysnes está en la ruta.",
      "Almuerzo 12:30–13:30 en Fjallsárlón Frost. Llegada prevista 12:40 — 10 min dentro de la reserva. Avisa por teléfono o recorta Freysnes a 5 min.",
      "Diamond Beach, 55 min. Se le da una asignación generosa a propósito: absorbe lo que si no sería una espera muerta en la laguna antes del barco.",
      "Barco anfibio — 15:10 (25 pax) y 15:20 (7 pax), reservado. Llegada 14:39, así que 31 min de margen para registrar dos salidas. 75 min previstos para el registro y la excursión.",
      "Llegada al Hotel Jökulsárlón después de la excursión en barco. Conductor y guía en el mismo hotel."
    ],
    d4: [
      "",
      "Estiramiento de piernas. Está en la ruta, así que no cuesta nada de conducción.",
      "Caminata por el cañón.",
      "Almuerzo y descanso.",
      "Parada de aseos.",
      "Noche del grupo.",
      "Paseo guiado — a 350 m de la puerta del hotel."
    ],
    d5: [
      "Recogida en el Hotel Geysir a las 10:15.",
      "Parque Nacional de Þingvellir, 11:15–11:50.",
      "Cráter de Kerið, 12:30–13:00.",
      "Friðheimar, 13:30–15:00. Restaurante completo; conductor y guía usan la sala de guías.",
      "Gullfoss, 15:30–16:15.",
      "Geysir, 16:30.",
      "Regreso al Hotel Geysir — a 500 m de Geysir. El grupo pernocta aquí y sale a las 09:00 del día 11."
    ],
    d6: [
      "Salida del Hotel Geysir a las 09:00.",
      "Iglesia de Úlfljótsvatnskirkja. 61 km / ~55 min.",
      "Mirador de Nesjavellir — tu chincheta, 64.10653, -21.26942. 14,9 km / ~17 min desde la iglesia. Está en la carretera de paso, a diferencia de la entrada a la central que tenía antes.",
      "Parada en la Parada de Autobús n.º 6 – Safnahúsið, Ingólfsstræti 1. Tu chincheta, 64.14741, -21.93293. El grupo se aloja en el Centerhotel Þingholt, a 4 min andando."
    ],
    d7: [
      "Salida de la Parada de Autobús 6 a las 09:30.",
      "Zona geotérmica de Seltún 10:15–10:40. 35 km / ~40 min desde la Parada 6.",
      "Caminata a Fagradalsfjall 11:00–13:00. Chincheta movida a la cabecera de pista de Suðurstrandarvegur, 63.86634, -22.31656, desde tu enlace de Google Maps. ADVERTENCIA: ese enlace resuelve al negocio Fagradalsfjall Volcano Tours, que está en la cabecera de pista — no es el aparcamiento en sí. Los dos aparcamientos oficiales son P1 Geldingadalir y P2 Stóri-Leirdalur, 1000 ISK en parka.is. Sigue dibujado sin conectar a la ruta: no se ha generado ningún tramo hasta este punto. Confirma el aparcamiento exacto y el acceso con el operador por la mañana.",
      "Almuerzo 13:15–14:10 en Papa's, Grindavík. Pescado, patatas y refresco reservados por el operador.",
      "Recorrido por Grindavík 14:15–15:00.",
      "Sky Lagoon — entrada Sér reservada a las 16:30.",
      "Salida a las 18:30 hacia la Parada de Autobús 6."
    ]
  }
}

};
