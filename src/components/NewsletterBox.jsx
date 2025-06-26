import React from 'react'


const onSubmitHandler=(event)=>{
  event.preventDefault();
}



const NewsletterBox = () => {
  return (
    <div className='  text-center'>

    <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
    <p className='text-gray-400 mt-3  mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa, aperiam voluptatum optio molestiae earum fugit repellat, laborum quam ut, sequi reiciendis ipsa veniam amet sapiente.
    </p>
    
    <form onSubmit={onSubmitHandler} className= 'rounded-4xl w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
<input className='outline-none w-full sm:flex-1  mb-3 mt-3 ml-5' type="email" placeholder='Enter your email' required/>
<button type='submit' className='bg-black text-white text-xs px-10 py-5  md:text-base rounded-4xl' >SUBSCRIBE</button>
    </form>

    </div>
  )
}

export default NewsletterBox