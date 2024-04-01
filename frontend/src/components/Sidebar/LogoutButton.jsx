import { CgLogOut } from "react-icons/cg";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {

  const {loading,logout} = useLogout();

  return (
    <div className='mt-2 mb-0 '>{!loading ? (
      <CgLogOut className="w-8 h-8 cursor-pointer hover:text-accent" onClick={logout}/>
    ):(
      <span className="loadig loading-spinner"></span>
    )}</div>
  )
}

export default LogoutButton

//starter code
// import { CgLogOut } from "react-icons/cg";

// const LogoutButton = () => {
//   return (
//     <div className='mt-auto '><CgLogOut className="w-8 h-8 cursor-pointer hover:text-accent"/></div>
//   )
// }

// export default LogoutButton