import React from "react"
import {makeStyles, Theme, createStyles} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fill: "#e6c144",
      width: "200px"
    }
  })
)

export const Figure = () => {
  const classes = useStyles()
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289 466" className={classes.root}>
      <path d="M132,54l-20-3L97,36V11L115,0l25,8,19-5,7,12,15,1,5,18L175,48l-15,6,9,19V94l-5-2v10l-3,15,10,1,27,2,21-10,16-20,6-16,6,5V65l12-14v7l-3,9,25-6v5l-11,3h17l2,9-18,4,11,1-1,4H266l-5,4-17,44-22,20-33,11-10,8-17,33,31,7-26,2,13,8,7,30,14,25-6,49,5,22,12,24,4,69,9,12,9,7,2,4H209l-4-10-7-2,5-18-23-55s-11-49-12-49-25-37-25-37l1-22-6,1,2,22-19,28-18,34-2,35L83,423l1,28-6,3L65,466l-22-4v-7l19-7,7-10V377l20-53-7-32,11-34,14-14,1-22,13-7-1-5-14-1-3,6L91,201l18-10-1,8,13,1-15-32L63,150,41,123,32,92l-8-2V82L6,83V79l9-1L0,67l4-6,14,6L4,56l4-1L33,66,30,54l5-2,8,14,3,8,4-7,7,17,16,21,13,10,19,2,12-1,17,2-5-13-2-13-2-28Z" />
    </svg>
  )
}
