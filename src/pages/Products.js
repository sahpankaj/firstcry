import React, { useContext, useEffect, useState } from 'react'
import {  experimentalStyled as styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ContextState } from '../context/Context'
import { Link } from 'react-router-dom';
import ".././styles/Products.css"

function Products() {

  const {data, cart, setCart} =  ContextState()

console.log(data)

// const [cart, setCart] = useState([]);
function addToCart(item){
  console.log(item)
  setCart(cart => [...cart, item])
}
console.log(cart)

  return (
    <Box sx={{display:"flex",backgroundColor:"#F6F1F1", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingTop:"15px"}}>
      <Typography variant='h6' fontWeight={600}>BUY NOW</Typography>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",paddingTop:"10px", }}>
    {data &&(
     <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 12, sm: 12, md: 12 }} sx ={{display:"flex", flexDirection:"row",  justifyContent:"center", alignItems:"center", paddingLeft:"25px"}}  >
        {data.map((item, index)=>{
          const {id} = item;
          return (
            <Grid Item xs={10} sm = {5} md={4} key={item.id} padding={1}>
            
            <Card sx={{ maxWidth: 345 }} className={'hoverCart'}>
            <Link to ={`/products/${id}`}>
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
      </Link>
      <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
      <Button size='small' variant='contained' sx={{width:"100%",backgroundColor:"deeppink"}} onClick={()=>addToCart(item)}>Add To Cart</Button>
      </CardActions>
       </Card>
            </Grid>
          )
        })}
      </Grid>)}
    </Box>
    </Box>
   
  )
}

export default Products
