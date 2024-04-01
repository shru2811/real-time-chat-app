import GenderCheckBox from "./GenderCheckBox"
import {Link} from 'react-router-dom'
import {useState} from 'react'
import useSignup from "../../hooks/useSignup"

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

  return (<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">SIGNUP
            <span className="text-orange-600"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Full Name</span>
            </label>    
            <input type="text" placeholder="Eg:- Shruti Srivastava" className="w-full input input-bordered h-10"
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            ></input>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Username</span>
            </label>    
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
            ></input>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Password</span>
            </label>    
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
            ></input>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Confirm Password</span>
            </label>    
            <input type="password" placeholder="Re-write your password" className="w-full input input-bordered h-10"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            ></input>
        </div>

        <GenderCheckBox onCheckboxchange = {handleCheckboxChange} selectedGender = {inputs.gender}/>

        <Link to="/login" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">Already have an account?</Link>

        <div>
                <button className="btn btn-block btn-sm mt-1" disabled={loading}>
                    {loading? <span className="laoding laoding-spinner"></span>:"SignUp"}
                </button>
        </div>
        </form>
        </div>
  </div>)
}

export default Signup

//STARTER CODE FOR SIGNUP
/* <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">SIGNUP
            <span className="text-orange-600"> ChatApp</span>
        </h1>
        <form>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Full Name</span>
            </label>    
            <input type="text" placeholder="Eg:- Shruti Srivastava" className="w-full input input-bordered h-10"></input>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Username</span>
            </label>    
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"></input>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Password</span>
            </label>    
            <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10"></input>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-gray-200">Confirm Password</span>
            </label>    
            <input type="text" placeholder="Re-write your password" className="w-full input input-bordered h-10"></input>
        </div>

        <GenderCheckBox />

        <a href="#" className="text-sm hover:underline hover:text-orange-600 mt-2 inline-block">{"Don't"} have an account?</a>

        <div>
                <button className="btn btn-block btn-sm mt-1">Sign Up</button>
        </div>
        </form>
        </div>
  </div> */