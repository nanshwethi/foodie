import {MdOutlineRestaurant} from 'react-icons/md'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className=' flex justify-center items-center gap-3 py-4'>
            <div>
                <MdOutlineRestaurant className=' hover:rotate-45 transition text-5xl text-red-800 border rounded-full bg-gray-200  p-2'/>
            </div>
            <Link to={'/'}>
                <h1 className=' font-bold text-red-600 text-4xl '>Foodie</h1>
            </Link>
        </div>
    </div>
    
  )
}
export default Navbar