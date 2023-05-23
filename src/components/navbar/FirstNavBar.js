import React from 'react'
import "../../styles/FirstNavBar.css"
import SearchIcon from '@mui/icons-material/Search';
import fc_logo from "../../images/fc_logo.png"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {BsCart} from "react-icons/bs";
import { Button, Divider ,Typography } from '@mui/material';
import {AiOutlineHeart} from "react-icons/ai"
import FirstNavBarDrawer from './FirstNavBarDrawer';
import { Link } from 'react-router-dom';
function FirstNavBar() {
  return (
    <Box style={{}} className="allcontainer">

    <Box className='leftsidecontnav' sx={{display:'flex', justifyContent:{xs:"space-evenly"}, margin:{xs:"0px"}, alignItems:"left"}}>
    <FirstNavBarDrawer />
        <Box sx={{display:{xs:"flex", md:"none"}}}>
        <Link to = {'/'}>
        <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" height={'25px'} width={"auto"}></img>
        </Link>
        <Box sx={{marginLeft:{xs:"5px",}, display:{xs:"flex", md:"none"} }}>  <input  variant='outline' placeholder='Search for a bran..' id='searchbarmobile' /> <SearchIcon sx={{position:"absolute", bottom:"4px", left:"28px", color:"orange" }}/> </Box>
        </Box>
        <Box  sx={{display:{xs:"none", md:"flex"}, paddingLeft:"30px"}}>
        <Link to = {'/'}>
        <img src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"></img>
        </Link>
        <Box sx={{marginLeft: "10px", display:{xs:"none", md:"flex"} }}>  <input  variant='outline' placeholder='Search for a Category, Brand or Product' id='searchbar' /> <SearchIcon sx={{position:"relative", bottom:"-13px", left:"-25px", color:"orange" }}/> </Box>
        </Box>
    </Box>

    
    <Box className='rightsidecontnav'sx={{display:{xs:"none", md:"flex"}}} >
          <Typography variant='p' component={'p'}  className='rightsidecontnavItem'>Select location </Typography>
          <Typography variant='p' component={'p'} className='rightsidecontnavItem' >Stores & Preschools
           </Typography>
           <Divider  orientation='vertical' flexItem/>
          <Typography variant='p' component={'p'} className='rightsidecontnavItem' >Support 
           </Typography><Divider orientation='vertical' flexItem/>
          <Typography variant='p' component={'p'} className='rightsidecontnavItem' >Track Order
        
           </Typography><Divider orientation='vertical' flexItem/>
          <Typography variant='p' component={'p'} className='rightsidecontnavItem' >FirstCry Parenting 
          
           </Typography><Divider orientation='vertical' flexItem/>
           <Link to={`/login`}>
           <Button variant='outlined' sx={{padding:"5px 2px", outlineColor:"gold", color:"black" }}>
          <Typography variant='p' component={'p'}  className='rightsidecontnavItem' sx={{textDecoration:"none", }} >login / Register
           </Typography>
           </Button>
           </Link>
           <Divider orientation='vertical' flexItem/>
           <Box>
           <AiOutlineHeart style={{heigh:"18px" , width:"18px", color:"gray"}}/>
           </Box>
          <Typography variant='p' component={'p'} className='rightsidecontnavItem'>  ShortLIst 
       
          </Typography>
          <Divider orientation='vertical' flexItem/>
          <Link to={'/cart'}>
          <Box sx={{display:{xs:"flex", md:"flex"}}}>
          <BsCart style={{height:"28px", width:"30px",color:"black"}}/>
          <Typography style={{cursor:"pointer" ,color:"black"}}> Cart</Typography>
          </Box>
        
          </Link>
</Box>
</Box>
           
        
  )
}

export default FirstNavBar
