import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import {BsYoutube} from 'react-icons/bs';
import Loading from './Loading';

const Detail = ({menu}) => {
  const [detail,setDetail] = useState([]);
  const [isloading,setLoading] =useState(true)
  const {id} = useParams()
  const dataDetail = async()=>{
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setDetail(data.meals[0]);
    console.log(data.meals[0])
    setLoading(false)
  }
  
  useEffect(()=>{
    dataDetail()
  },[])

  return (
    <>
    { 
      isloading ? <Loading/>:(
        <div className=' w-11/12 mx-auto'>
            <div className=' flex-col sm:flex-row justify-center mt-6 gap-10 '>
              <img src={detail.strMealThumb} className=" w-2/6 h-2/6 rounded-2xl" alt="" />
              <div className=' w-2/3'>
                <p className=' mt-3 text-red-500'>{detail.strCategory}</p>
                <p className=' mt-3 font-semibold text-xl'>{detail.strMeal}</p>
                <p className=' text-gray-500 font-semibold my-5'>Ingredients</p>
                <div className=' flex gap-20'>
                <ul>
                <li>{detail.strIngredient1} - {detail.strMeasure1}</li>
                <li>{detail.strIngredient2} - {detail.strMeasure2}</li>
                <li>{detail.strIngredient3} - {detail.strMeasure3}</li>
                <li>{detail.strIngredient4} - {detail.strMeasure4}</li>
                <li>{detail.strIngredient5} - {detail.strMeasure5}</li>
                <li>{detail.strIngredient6} - {detail.strMeasure6}</li>
                <li>{detail.strIngredient7} - {detail.strMeasure7}</li>
                <li>{detail.strIngredient8} - {detail.strMeasure8}</li>
                <li>{detail.strIngredient9} - {detail.strMeasure9}</li>
                <li>{detail.strIngredient10} - {detail.strMeasure10}</li>
                </ul>
                <ul>
                <li>{detail.strIngredient11} - {detail.strMeasure11}</li>
                <li>{detail.strIngredient12} - {detail.strMeasure12}</li>
                <li>{detail.strIngredient13} - {detail.strMeasure13}</li>
                <li>{detail.strIngredient14} - {detail.strMeasure14}</li>
                <li>{detail.strIngredient15} - {detail.strMeasure15}</li>
                <li>{detail.strIngredient16} - {detail.strMeasure16}</li>
                <li>{detail.strIngredient17} - {detail.strMeasure17}</li>
                <li>{detail.strIngredient18} - {detail.strMeasure18}</li>
                <li>{detail.strIngredient19} - {detail.strMeasure19}</li>
                <li>{detail.strIngredient20} - {detail.strMeasure20}</li>
                </ul>
                </div>
              </div>           
            </div>      
            <div className=' my-14'>
              <p className=' mt-3 text-lg font-medium text-gray-600'>Instruction</p>
              <p className=' mt-3  text-gray-500 tracking-wider'>{detail.strInstructions}</p>
              <div className=' mt-7'>
                <span className=' text-xl mr-6'>Watch on youTube</span>
                <button className=' cursor-pointer align-middle'>
                <a href={detail.strYoutube}>
                <BsYoutube className=' text-red-700 text-3xl'/>
                </a>
                </button>
              </div>
            </div>
        </div>
      )
    }
    </>
  )
}
export default Detail