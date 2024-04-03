import {Link} from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const {loading,login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
    await login(username,password)
    }

  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">LOGIN
            <span className="text-orange-600"> SwiftTalk</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text text-gray-200">Username</span>
                </label>    
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text text-gray-200">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                ></input>
                <Link to="/signup" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">{"Don't"} have an account?</Link>
            </div>
            <div>
                <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
        </form>
    </div>
  </div> 
}
export default Login


//STARTER CODE FOR THIS FILE

// const Login = () => {
//     return <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">LOGIN
//               <span className="text-orange-600"> ChatApp</span>
//           </h1>
//           <form>
//               <div>
//                   <label className="label p-2">
//                       <span className="text-base label-text text-gray-200">Username</span>
//                   </label>    
//                   <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"></input>
//               </div>
//               <div>
//                   <label className="label">
//                       <span className="text-base label-text text-gray-200">Password</span>
//                   </label>
//                   <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"></input>
//                   <a href="#" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">{"Don't"} have an account?</a>
//               </div>
//               <div>
//                   <button className="btn btn-block btn-sm mt-2">Login</button>
//               </div>
//           </form>
//       </div>
//     </div> 
//   }