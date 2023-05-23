import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextState } from '../context/Context'


function ProductsDetails() {
 const {id} =  useParams()
 const {data} =  ContextState()
 const [singleD, setSingleD] = useState()
 console.log(id)



console.log(id);

  return (
    <div>
    </div>
  )
}

export default ProductsDetails
