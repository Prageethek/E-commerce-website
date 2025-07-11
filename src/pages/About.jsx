import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox.jsx'

export const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8  border-t'>
<Title text1={'ABOUT'} text2={'US'}/>
      </div>


<div className='my-10 flex flex-col md:flex-row gap-16'>

<img  className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, optio fugiat! Ad quaerat delectus velit perspiciatis molestias aut, quis quod.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, minima. Aut neque error adipisci officiis iste similique pariatur reiciendis nihil!</p>
<b className='text-gray-800'>Our Mission</b>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum aperiam quidem provident totam. Quae quia iusto cum ab unde quod, saepe animi autem mollitia expedita pariatur in, dolor dolorem recusandae tempore nisi dicta quo? Dolores consectetur natus dicta nobis? Consectetur ut aut exercitationem doloremque illum quisquam dignissimos, nesciunt quidem.</p>
</div>

</div>

<div className='text-xl py-4'>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>

<div className='flex flex-col md:flex-row text-sm mb-20'>
 
  <div className='border  border-gray-400  px-10  md:px-16 py-8 sm:py-20 flex flex-col  gap-5'>
<b>Quality Assurance:</b>
<p className='text-gray-600'>We meticulously select and vet each
product to ensure it meets our stringent
quality standards.</p>
  </div>

 <div className='border  border-gray-400  px-10  md:px-16 py-8 sm:py-20 flex flex-col  gap-5'>
<b>Convenience:</b>
<p className='text-gray-600'>With our user-friendly interface and hassle-
free ordering process, shopping has never
been easier.</p>
  </div>

  <div className='border  border-gray-400 px-10  md:px-16 py-8 sm:py-20 flex flex-col  gap-5'>
<b>Exeptional Customer Service:</b>
<p className='text-gray-600'>Our team of dedicated professionals is here to
assist you the way, ensuring your satisfaction is our
top priority.</p>
  </div>

</div>

<NewsLetterBox/>

    </div>
  )
}
export default About
