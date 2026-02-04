import { GoSearch } from "react-icons/go";
import UserProfile from "./user-profile";

// nav bar
const NavBar = ({userInfo}) => {
  return (
    <main className=" w-full flex justify-between items-center border-b border-gray-200 px-2 py-3">
        {/* logo */}
        <div>
            <p className="font-bold italic tracking-widest text-xl text-blue-500">Task App</p>
        </div>

        {/* serach */}
        <div className="bg-gray-100 flex items-center w-80 border border-gray-300 px-2 py-3 rounded-md">
            <input
                className="w-full h-full outline-none text-sm text-gray-600"
                placeholder="Search task"
            />
            {/* seach icon:react-icons */}
            <button className="h-full aspect-square cursor-pointer">
             <GoSearch/>
            </button>
        </div>
        
        {/*user profile */}
        <UserProfile userInfo={userInfo}/>
    </main>
  )
}

export default NavBar