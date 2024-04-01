import { useState } from "react";
import { TbPointerSearch } from "react-icons/tb";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations.js"
import toast from "react-hot-toast";
import { set } from "mongoose";
function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation()
  const { conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error("search term must be at least 3 characters long")
    }
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("No such user found");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-circle  btn-outline btn-accent text-white">
          <TbPointerSearch className="w-6 h-6"/>
          </button>
    </form>
  )
}

export default SearchInput

//starter code
{/* <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full "></input>
        <button type="submit" className="btn btn-circle  btn-outline btn-accent text-white">
          <TbPointerSearch className="w-6 h-6"/>
          </button>
    </form> */}