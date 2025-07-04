import React, { useContext } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink,Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'


export const Navbar = () => {

const[visible,setVisible] = React.useState(false)
const {setShowSearch, getCartCount, token, setToken, navigate, setCartItems} = useContext(ShopContext)

const logout = () => {
    navigate('/login')
  localStorage.removeItem('token')
  setToken('')
  setCartItems({})

}

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

<Link to='/'><img src={assets.logo} className='w-36 cursor-pointer' alt=""/></Link>

<ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

<NavLink to="/" className='flex flex-col items-center gap-1'>
<p>HOME</p>
<hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
</NavLink>
 
<NavLink to="/collection" className='flex flex-col items-center gap-1'>
<p>COLLECTION</p>
<hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
</NavLink>

<NavLink to="/about" className='flex flex-col items-center gap-1'>
<p>ABOUT</p>
<hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
</NavLink>

<NavLink to="/contact" className='flex flex-col items-center gap-1'>
<p>CONTACT</p>
<hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
</NavLink>

</ul>


<div className='flex items-center gap-6'>
  <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt=""/>

        <div className='group relative'>

<img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt=""/>
{/* Dropdown Menu */}
{
   token &&
<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
<div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'> 
<p className='cursor-pointer hover:text-black'>My Profile</p>
<p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
<p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>

      </div>
     </div>
}
    </div>


<Link to='/cart' className='relative'>
<img src={assets.cart_icon} className='w-5 min-w-5' alt=""/>
<p className='absolute right-[-5px] bottom-[-5px] w-3 text-center bg-red-600 text-white rounded-full  text-[8px]'  >{getCartCount()}</p>
</Link>

 <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=""/>
     </div>
     
{/* sidebar menu for small screen */}
<div className={`absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
<div className='flex flex-col text-gray-600'>
  <div  onClick={()=>setVisible(false)}className='flex item-center gap-4 p-3'>
    <img  className=' h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} alt=""/>
    <p className='cursor-pointer'>Back</p>
  </div>
<NavLink  onClick={()=>setVisible(false)} className='py-2 pl-4 border'  to='/'>Home</NavLink>
<NavLink  onClick={()=>setVisible(false)} className='py-2 pl-4 border'   to='/collection'>Collection</NavLink>
<NavLink  onClick={()=>setVisible(false)} className='py-2 pl-4 border'   to='/about'>About</NavLink>
<NavLink  onClick={()=>setVisible(false)} className='py-2 pl-4 border'   to='/contact'>Contact</NavLink>


</div>
</div>
</div>
  )
}

export default Navbar

