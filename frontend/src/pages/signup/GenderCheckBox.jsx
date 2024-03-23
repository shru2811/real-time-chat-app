const GenderCheckBox = () => {
  return (
    <div className="flex">
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