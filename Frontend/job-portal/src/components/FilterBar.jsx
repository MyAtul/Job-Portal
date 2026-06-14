const FilterBar = ({
  location,
  setLocation,
  skill,
  setSkill,
  company,
  setCompany,
  salary,
  setSalary,
  sortBy,
  setSortBy,
  locations,
  companies,
  skills
}) => {
  return (
    <div className="w-72 bg-gray-800 rounded-xl p-4 mb-6 shadow-2xl border">
      <h2 className="text-lg font-semibold mb-4">
        Filters
      </h2>

      <div className="flex flex-col gap-3">

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-gray-700 p-2 rounded outline-none"
        >
          <option value="">All Locations</option>
          {
            locations.map((loc)=>(
              <option 
                key={loc}
                value={loc}
              >
                {loc}
              </option>
            ))
          }
        </select>

        <select
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="bg-gray-700 p-2 rounded outline-none"
        >
          <option value="">All Skills</option>
          {
            skills.map((skill)=>(
              <option 
                key={skill}
                value={skill}
              >
                {skill}
              </option>
            ))
          }
        </select>

        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-gray-700 p-2 rounded outline-none"
        >
          <option value="">All Companies</option>
          {
            companies.map((comp)=>(
              <option 
                key={comp}
                value={comp}
              >
                {comp}
              </option>
            ))
          }
        </select>

        <select
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="bg-gray-700 p-2 rounded outline-none"
        >
          <option value="">All Salaries</option>
          <option value="5">5 LPA</option>
          <option value="10">10 LPA</option>
          <option value="15">12 LPA</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-700 p-2 rounded outline-none"
        >
          <option value="id">Newest</option>
          <option value="title">Title</option>
          <option value="company">Company</option>
          <option value="location">Location</option>
        </select>

        <button 
        onClick={()=>{
          setLocation('')
          setCompany('')
          setSkill('')
          setSalary('')
          sortBy('id')
        }}
        className="bg-amber-400 p-1 font-semibold rounded hover:bg-amber-300">Reset Filter</button>
      </div>
       
    </div>
  )
}

export default FilterBar