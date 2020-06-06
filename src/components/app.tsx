import React, {useReducer} from "react"
import {GuardListing} from "./guard-listing"
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch,
  Radio,
  RadioGroup,
  Button,
  Paper,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Link
} from "@material-ui/core"
import {reducer} from "../state/reducer"
import {initialState} from "../state/state"
import {groups, Property, Group, Master} from "../common/types"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    canvas: {
      margin: "2rem"
    },
    paper: {
      padding: theme.spacing(1),
      margin: "1rem",
      textAlign: "center",
      color: theme.palette.text.secondary,
      "& > *": {
        margin: theme.spacing(0.5)
      }
    },
    about: {
      padding: "2rem",
      "& > p": {
        marginTop: theme.spacing(0.5)
      }
    }
  })
)

export const App = () => {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggle = (group: Group, property: string, value: boolean) => {
    dispatch({
      type: "toggle",
      payload: {group, property: property as Property, value}
    })
  }

  const select = (group: Group, property: string) => {
    dispatch({
      type: "select",
      payload: {group, property: property as Property}
    })
  }

  const ControlGroup = ({group, type = "switch"}: {group: Group; type?: "switch" | "radio"}) => (
    <FormControl component="fieldset">
      <FormLabel component="legend">Filter {group}</FormLabel>
      {type === "switch" ? (
        <FormGroup>
          {Object.entries(groups[group].members).map(([key, value]: [Property, string]) => {
            return (
              <FormControlLabel
                key={key}
                control={
                  <Switch
                    checked={(state[group] as Array<Property>).includes(key)}
                    onChange={(event) => toggle(group, key, event.target.checked)}
                    name={key}
                  />
                }
                label={value}
              />
            )
          })}
        </FormGroup>
      ) : (
        <RadioGroup value={state[group][0]} onChange={(event) => select(group, event.target.value)}>
          {Object.entries(groups[group].members).map(([key, value]: [Property, string]) => {
            return <FormControlLabel key={key} value={key} control={<Radio />} label={value} />
          })}
        </RadioGroup>
      )}
      <Button onClick={() => dispatch({type: "clear", payload: {group}})}>Remove filter</Button>
    </FormControl>
  )

  const Controls = () => {
    return (
      <>
        <ControlGroup group="masters" />
        <ControlGroup group="side" type="radio" />
        <ControlGroup group="height" type="radio" />
        <ControlGroup group="type" type="radio" />
        <ControlGroup group="point" type="radio" />
        <ControlGroup group="feet" />
      </>
    )
  }

  return (
    <div className={classes.canvas}>
      <Typography variant="h3" component="h1">
        Bolognese guard inspector
      </Typography>
      <GuardListing state={state} />

      <Paper className={classes.paper}>
        <Controls />
      </Paper>
      <Paper className={classes.paper}>
        <Button onClick={() => dispatch({type: "reset"})}>Reset all filters</Button>
      </Paper>
      <div className={classes.about}>
        <Typography variant="h4" component="h2">
          Notes
        </Typography>
        <Typography>
          This tool is intended to help you learn and analyze the guard positions.
        </Typography>
        <Typography>
          I decided to separate dall'Agocchie's Guardia d'Entrare as a different guard but only
          added one variant of Guardia di Testa, even though dall'Agocchie has the point oriented
          differently.
        </Typography>
        <Typography>
          If you find errors in the data, please contact{" "}
          <Link href="mailto:ilkka@marozzo.com">Ilkka Hartikainen</Link>.
        </Typography>
        <Typography>&copy; {new Date().getFullYear()} marozzo.com</Typography>
      </div>
    </div>
  )
}
