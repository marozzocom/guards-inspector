import {Master, Height, FootPosition, Type, Side, Family, PointOrientation} from "../common/types"

export interface State {
  masters: Array<Master>
  height: Array<Height>
  type: Array<Type>
  side: Array<Side>
  family: Array<Family>
  point: Array<PointOrientation>
  feet: Array<FootPosition>
}

export const initialState: State = {
  masters: ["marozzo"],
  height: [],
  type: [],
  side: [],
  family: [],
  point: [],
  feet: []
}
