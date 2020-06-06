import React, {FC} from "react"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import {guards} from "../guards"
import {Chip} from "@material-ui/core"
import {Figure} from "./figure"
import {Guard, heights, sides, groups, Property} from "../common/types"
import {State} from "../state/state"
import fp from "lodash/fp"
import clsx from "clsx"

type GuardWithSelection = Guard & {selected: boolean}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    figureContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      "& > *": {
        margin: theme.spacing(0.5)
      }
    },
    chip: {
      transition: "opacity 0.3s",
      opacity: 1,
      fontWeight: 700,
      "& > div": {
        fontSize: "1.1rem"
      }
    },
    selected: {},
    unSelected: {
      opacity: 0.25
    }
  })
)

const isSelected = (state: State) => (guard: Guard): GuardWithSelection => {
  const selections = Object.keys(groups).reduce(
    (acc, group: Exclude<keyof Guard, "id" | "names" | "notes">) => {
      const stateGroup = state[group] as Array<Property>

      return stateGroup.length
        ? [
            ...acc,
            ...stateGroup.reduce(
              (stateValues, stateGroupValue) => [...stateValues, [group, stateGroupValue]],
              []
            )
          ]
        : acc
    },
    [] as [keyof Guard, string][]
  )

  return {
    ...guard,
    selected: selections.every((selection) => {
      const guardPropertyValue = guard[selection[0] as keyof Guard]

      return Array.isArray(guardPropertyValue)
        ? guardPropertyValue.find((value: string) => value === selection[1])
        : guardPropertyValue === selection[1]
    })
  }
}
export const GuardListing = ({state}: {state: State}) => {
  const classes = useStyles()
  const filteredGuards: Array<GuardWithSelection> = guards.map(isSelected(state))

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <GuardItems
                items={filteredGuards.filter(
                  ({height, side}) => height === "high" && side === "left"
                )}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <GuardItems
                items={filteredGuards.filter(
                  ({height, side}) => height === "high" && side === "center"
                )}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <GuardItems
                items={filteredGuards.filter(
                  ({height, side}) => height === "high" && side === "right"
                )}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <GuardItems
                items={filteredGuards.filter(
                  ({height, side}) => height === "low" && side === "left"
                )}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.figureContainer}>
              <Figure />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <GuardItems
                items={filteredGuards.filter(
                  ({height, side}) => height === "low" && side === "right"
                )}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

const GuardItems: FC<{items: Array<GuardWithSelection>}> = ({items}) => {
  const classes = useStyles()
  return (
    <>
      {fp
        .sortBy<GuardWithSelection>([(item) => item.names[0]])(items)
        .map(({id, names, selected}: GuardWithSelection) => (
          <div
            key={id}
            className={clsx(classes.chip, selected ? classes.selected : classes.unSelected)}
          >
            <Chip label={names[0]} color={"primary"} />
          </div>
        ))}
    </>
  )
}
