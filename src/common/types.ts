export type Property = Master | Side | Type | Family | Height | PointOrientation | FootPosition

export type Group = keyof typeof groups
export type Master = keyof typeof masters
export type Type = keyof typeof types
export type FootPosition = keyof typeof footPositions
export type PointOrientation = keyof typeof pointOrientations
export type Side = keyof typeof sides
export type Height = keyof typeof heights
export type Family = keyof typeof families

export const families = {
  cl: "Coda Lunga",
  pdf: "Porta di Ferro"
}

export const masters = {
  marozzo: "Achille Marozzo",
  manciolino: "Antonio Manciolino",
  dallAgocchie: "Giovanni dall'Agocchie",
  anonimo: "Anonimo Bolognese"
}

export const heights = {
  high: "High",
  low: "Low"
}

export const sides = {
  left: "Left",
  right: "Right",
  center: "Center"
}

export const footPositions = {
  left: "Left",
  right: "Right",
  paired: "Paired"
}

export const pointOrientations = {
  forwards: "Forwards",
  backwards: "Backwards",
  ground: "Ground",
  sideways: "Sideways",
  up: "Up"
}

export const types = {
  alta: "Alta",
  stretta: "Stretta",
  larga: "Larga"
}

export interface Guard {
  id: string
  names: Array<string>
  masters: Array<Master>
  height: Height
  side: Side
  feet: Array<FootPosition>
  point?: PointOrientation
  type?: Type
  family?: Family
  notes?: string
}

export const groups = {
  masters: {
    name: "Masters",
    members: masters
  },
  height: {
    name: "Heights",
    members: heights
  },
  side: {
    name: "Sides",
    members: sides
  },
  family: {
    name: "Families",
    members: families
  },
  point: {
    name: "Point orintations",
    members: pointOrientations
  },
  feet: {
    name: "Foot positions",
    members: footPositions
  },
  type: {
    name: "Types",
    members: types
  }
}
