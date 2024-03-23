import { TbPointerSearch } from "react-icons/tb";

function SearchInput() {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full "></input>
        <button type="submit" className="btn btn-circle  btn-outline btn-accent text-white">
          <TbPointerSearch className="w-6 h-6"/>
          </button>
    </form>
  )
}

export default SearchInput