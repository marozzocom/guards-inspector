import {Guard} from "./common/types"

export const guards: Array<Guard> = [
  {
    id: "gda",
    names: ["Guardia Alta"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "high",
    side: "right",
    feet: ["paired", "left", "right"],
    point: "up",
    type: "alta"
  },
  {
    id: "gdt",
    names: ["Guardia di Testa"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "high",
    side: "center",
    feet: ["paired", "left", "right"],
    point: "sideways",
    type: "alta",
    notes: "Point slopes upwards except in dall'Agocchie's description, where it slopes downwards."
  },
  {
    id: "gdf",
    names: ["Guardia di Faccia"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "high",
    side: "center",
    feet: ["paired", "left", "right"],
    point: "forwards",
    type: "alta"
  },
  {
    id: "sprb",
    names: ["Sopra Braccio"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "high",
    side: "left",
    feet: ["paired", "left", "right"],
    point: "backwards",
    type: "alta"
  },
  {
    id: "sttb",
    names: ["Sotto braccio"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "left",
    feet: ["paired", "left", "right"],
    point: "backwards",
    type: "larga"
  },
  {
    id: "gde",
    names: ["Guardia d'Entrare"],
    masters: ["marozzo", "anonimo"],
    height: "high",
    side: "left",
    feet: ["paired", "left", "right"],
    point: "forwards",
    type: "alta",
    notes:
      "When left foot forward (slightly diagonally), Marozzo calls this guard Guardia d'Entrare in Largo Passo."
  },
  {
    id: "gde-da",
    names: ["Guardia d'Entrare (dall'Agocchie)"],
    masters: ["dallAgocchie"],
    height: "high",
    side: "right",
    feet: ["paired", "left", "right"],
    point: "forwards",
    type: "alta"
  },
  {
    id: "bc",
    names: ["Becca Cesa"],
    masters: ["marozzo"],
    height: "high",
    side: "right",
    feet: ["right"],
    point: "forwards",
    type: "alta"
  },
  {
    id: "bp",
    names: ["Becca Possa"],
    masters: ["marozzo"],
    height: "high",
    side: "right",
    feet: ["left"],
    point: "forwards",
    type: "alta"
  },
  {
    id: "gl",
    names: ["Guardia Lioncorno", "Guardia Alicorno"],
    masters: ["manciolino", "dallAgocchie", "anonimo"],
    height: "high",
    side: "right",
    feet: ["paired", "left", "right"],
    point: "forwards",
    type: "alta"
  },
  {
    id: "pdfa",
    names: ["Porta di Ferro Alta"],
    masters: ["marozzo", "dallAgocchie", "anonimo"],
    height: "high",
    side: "left",
    feet: ["paired", "right"],
    point: "forwards",
    type: "alta",
    family: "pdf"
  },
  {
    id: "pdfs",
    names: ["Porta di Ferro Stretta"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "left",
    feet: ["right"],
    point: "forwards",
    type: "stretta",
    family: "pdf"
  },
  {
    id: "pdfl",
    names: ["Porta di Ferro Larga"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "left",
    feet: ["right"],
    point: "ground",
    type: "larga",
    family: "pdf"
  },
  {
    id: "cpdfa",
    names: ["Cinghiara Porta di Ferro Alta"],
    masters: ["marozzo", "dallAgocchie", "anonimo"],
    height: "high",
    side: "left",
    feet: ["left"],
    point: "forwards",
    type: "alta",
    family: "pdf"
  },
  {
    id: "cpdfs",
    names: ["Cinghiara Porta di Ferro Stretta"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "left",
    feet: ["left"],
    point: "forwards",
    type: "stretta",
    family: "pdf",
    notes: "Manciolino only lists cinghiara porta di ferro, I'm assuming here that it is stretta."
  },
  {
    id: "cpdfl",
    names: ["Cinghiara Porta di Ferro Larga"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "left",
    feet: ["left"],
    point: "ground",
    type: "larga",
    family: "pdf"
  },
  {
    id: "cla",
    names: ["Coda Lunga Alta"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "high",
    side: "right",
    feet: ["paired", "left", "right"],
    point: "forwards",
    type: "alta",
    family: "cl"
  },
  {
    id: "cls",
    names: ["Coda Lunga Stretta"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "right",
    feet: ["left", "right"],
    point: "forwards",
    type: "stretta",
    family: "cl"
  },
  {
    id: "cll",
    names: ["Coda Lunga Larga"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "right",
    feet: ["left", "right"],
    point: "ground",
    type: "larga",
    family: "cl"
  },
  {
    id: "cld",
    names: ["Coda Lunga Distesa", "Coda Lunga Lunga"],
    masters: ["marozzo", "manciolino", "dallAgocchie", "anonimo"],
    height: "low",
    side: "right",
    feet: ["left", "right"],
    point: "backwards",
    type: "larga",
    family: "cl",
    notes: "Manciolino uses the guard, but does not list it explicitly."
  },
  {
    id: "gdfnc",
    names: ["Guardia di Fianco"],
    masters: ["marozzo"],
    height: "low",
    side: "right",
    feet: ["left", "right"]
  }
]
