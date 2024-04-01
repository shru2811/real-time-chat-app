const GenderCheckBox = ({onCheckboxchange, selectedGender}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}`}><span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === "male"} onChange={()=>onCheckboxchange("male")}></input>
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}`}><span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender === "female"} onChange={()=>onCheckboxchange("female")}></input>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox

//STARTER CODE FOR GENDERCHECKBOX
/* <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}><span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900"></input>
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}><span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-slate-900"></input>
            </label>
        </div>
    </div> */