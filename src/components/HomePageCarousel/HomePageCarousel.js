import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import babyhug from "../.././images/baby-hug.webp"
import babyhugSummer from "../.././images/babyhug-summer_cc_hp1t1684738870998.webp"
import desktopHpMerch from "../.././images/desktop_hp_merch_p10_seg_books_read&learn_atiba_default_23rdmay1684764653479.webp"
import desktopHpBanner from "../.././images/desktop_hpbanner1684581277147.webp"
import hp from "../.././images/hp1684764036242 (1).webp"
import mktng from "../.././images/mktng_scs_hp_23may231684740560516.webp"
import uniquepetname from "../.././images/uniquepetname_desktop166737843787816703993736931677569436022.webp"

import "../.././styles/CarouselItem.css"

function HomePageCarousel() {
    
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items:1 
        },
        1024: {
            items: 1, 
            itemsFit: 'contain'
        },
    };
    
    const items = [
        <div className="carouselItem" data-value="1" >
          <img src = {babyhug}alt={'baby hug'} />
        </div>,
        <div className="carouselItem" data-value="2" style={{backgroundColor:'gold'}}>
          <img src = {babyhugSummer}alt={'baby hug'} />
        </div>,
         <div className="carouselItem" data-value="3">
         <img src = {desktopHpBanner} alt={'baby hug'} />
       </div>,
       <div className="carouselItem" data-value="4" >
       <img src = {hp} alt={'baby hug'} />
     </div>,
        <div className="carouselItem" data-value="5" style={{backgroundColor:'pink'}}>
        <img src = {mktng} alt={'baby hug'} />
        </div>,
        <div className="carouselItem" data-value="5" style={{backgroundColor:'pink'}}>
        <img src = {uniquepetname} alt={'baby hug'} />
        </div>

    ];
  return (
    <div>
      {/* <div className={classes.carousel}> */}
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
         infinite
          autoPlay
          autoPlayInterval={1500}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls

    />
     </div>
  )
}

export default HomePageCarousel
