import React from 'react'
import oneHalf from "../.././images/615_384_spring22_her_160222_01.jpg"
import secondHalf from "../.././images/615_384_spring22_him_160222_02.jpg"
import partyone from "../.././images/615_384_party_edit_160222_01.jpg"
import traditional from "../.././images/615_384_traditional_saga_160222_02.jpg"
import shorts from "../.././images/405_538_shorts_and_skirts_160222_01.jpg"
import rompers from "../.././images/405_538_onesies_160222_02.jpg"
import paijama from "../.././images/405_538_pajamas_160222_03.jpg"

import { Box, Grid, Typography } from '@mui/material'
function BringTheSprint() {
  return (
    <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px "}}>
      <Typography variant='h6' fontSize={20} textAlign={'center'} mb={1}>Bring The Spring</Typography>
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }} sx={{display:"flex",  justifyContent:"center",alignItems:"center", }}>
        <Grid item xs={10} sm = {5} md={5} sx={{display:"flex", justifyContent:"center",padding:"5px"}}>
        <img src={oneHalf} height={300}  width={'100%'} />
        </Grid>
        <Grid item xs={10} sm = {5} md={5} sx={{display:"flex", justifyContent:"center", padding:"5px"}}>
        <img src={secondHalf} height={300} width={'100%'}/>
        </Grid>
      </Grid>

      <Typography variant='h6' fontSize={20} textAlign={'center'} m={2}>Occasion Store!</Typography>
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }} sx={{display:"flex",  justifyContent:"center",alignItems:"center"}}>
        <Grid item xs={11} sm = {5} md={5.5} sx={{display:"flex", justifyContent:"center",padding:"5px"}}>
        <img src={partyone} height={450} width={'100%'} />
        </Grid>
        <Grid item xs={11} sm = {5} md={5.5} sx={{display:"flex", justifyContent:"center",padding:"5px"}}>
        <img src={traditional} height={450} width={'100%'}/>
        </Grid>
      </Grid>

      <Typography variant='h6' fontSize={20} textAlign={'center'} m={2}>Pick Your Styles</Typography>
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }} sx={{display:"flex",  justifyContent:"center",alignItems:"center"}}>
        <Grid item xs={11} sm = {5} md={3} sx={{padding:"10px"}} >
        <img src={shorts} height={500} width={'100%'}  />
        </Grid>
        <Grid item xs={11} sm = {5} md={3} sx={{padding:"10px"}}>
        <img src={rompers} height={500} width={'100%'}/>
        </Grid>
        <Grid item xs={11} sm = {5} md={3}>
        <img src={paijama} height={500} width={'100%'} sx={{padding:"10px"}}/>
        </Grid>
      </Grid>
      
    
    </Box>
  )
}

export default BringTheSprint
