import {initialState} from "./state"

type ActionType = {
  type: "toggle" | "select" | "clear" | "reset"
  payload?: Record<string, any>
}

export const reducer = (state: any, action: ActionType) => {
  const {type, payload = {}} = action
  const {group, property, value} = payload

  switch (type) {
    case "toggle":
      return {
        ...state,
        [group]: value
          ? [...state[group], property]
          : [...state[group]].filter((value) => value !== property)
      }
    case "select":
      return {
        ...state,
        [group]: [property]
      }
    case "clear":
      return {
        ...state,
        [group]: []
      }
    case "reset":
      return initialState
    default:
      return state
  }
}
