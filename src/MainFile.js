import React from 'react'
import { AppBar, Grid } from '@mui/material'
import SignUp from './components/SignUp'

export const MainFile = () => {
  return (
    <>
    <AppBar>
      
    </AppBar>
    <Grid container spacing={1}>
        <Grid item xs={5 }>
         
          <h1> hello guys </h1>

        </Grid>
        <Grid item xs={5}>
            
           <SignUp />
            </Grid>

    </Grid>
    </>
  )
}
