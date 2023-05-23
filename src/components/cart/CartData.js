
import React, { useContext, useEffect, useState } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Link } from 'react-router-dom';
import axios from 'axios';
import { ContextState } from '../../context/Context';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
function CartData() {
    // const {data, cart, setCart} =  ContextState()
   const {cart} = ContextState()
console.log(cart)
  return (
    <div>
      
        <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 12, sm: 12, md: 12 }} sx ={{display:"flex", flexDirection:"row",  justifyContent:"center", alignItems:"center"}}  >
        {cart && (cart.map((item, index)=>{
          const {id} = item;
          return (
            <Grid Item xs={10} sm = {5} md={4} key={item.id} padding={5}>
            
            <Card sx={{ maxWidth: 345 }}>
            
          <CardMedia
        sx={{ height: 280 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body" component="p" sx={{fontWeight:"500"}}>
          {item.brand} | {item.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.category}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
      <Typography variant='body2' sx={{color:"deeppink"}}>INR:{item.price}</Typography>
      <Typography variant='body2' sx={{color:"deeppink"}}>New Today</Typography>
      </CardActions>
     <Link to={'/'}>
      <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
      <Button size='small'>Go To Home</Button>
      </CardActions>
      </Link>
       </Card>
            </Grid>
          )
        }))}
      </Grid>
      
      
    </div>
  )
}

export default CartData
