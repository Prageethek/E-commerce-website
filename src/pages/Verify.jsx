import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {
  
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext) 
  const [searchParams, setSearchParams] = useSearchParams()

  //get the success and userId from the url
  
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  console.log('success:', success, 'orderId:', orderId);

  const verifyPayment = async () => {
try {
  
if(!token){
  return null
}

const response = await axios.post(backendUrl + '/api/order/verifyStripe',{ success,orderId },{ headers:{token} })

console.log('verifyStripe response:', response.data);

if(response.data.success){
  setCartItems({})
  navigate('/orders')
} else {
  navigate('/cart')
}

} catch (error) {
  console.log(error);
  toast.error(error.message)
}

  }

  useEffect(() => {
verifyPayment()
  },[token])

  return (
    <div>Verify hello</div>
  )
}

export default Verify