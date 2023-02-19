import { Link } from "react-router-dom"
import Loading from "./Loading"
import { useState,useEffect } from 'react'
import axios from 'axios'

const Menu = () => {

  const [menuItems,setMenuItems] = useState([]);
  const [loading,setLoading] = useState(true)
  const menu = async()=>{
    const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    setMenuItems(data.meals);
    setLoading(false)
  }

  useEffect(()=>{
    menu();
  },[])
   
  return (
    <>
    {
      loading ? <Loading/>:(
        <div className=" flex justify-center" >
        <div className=" mt-10 flex justify-center sm:justify-start flex-wrap gap-7 w-[96%]" >
            {menuItems.map(items=>(
                <div key={items.idMeal} className=" flex flex-col transition text-center shadow-xl hover:shadow-4xl justify-center items-center  gap-5" style={{height : '440px',width:'300px'}}>
                    <div height={'220px'} className=" rounded-t-2xl hover:overflow-hidden">
                    <img src={items.strMealThumb } className=' hover:scale-105 hover:p-0 object-cover rounded-t-2xl' alt="" />
                    </div>
                    <p className=" font-medium text-gray-500 tracking-wider">{items.strMeal}</p>
                    <Link to={`/detail/${items.idMeal}`} className="  mt-auto">
                      <button className=" block bottom-0 py-2 w-48 bg-rose-600 mb-3 rounded-md text-red-200">Detail</button>
                    </Link>
                </div>
            )         
            )}
        </div>
    </div> 
      )
    }
    </>
       
  )
}
export default Menu