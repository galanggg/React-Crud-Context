import React, {useState, useEffect, useContext, Fragment} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const EditEmployee = (route) => {
  let history = useHistory()
  const {employees, editEmployee} = useContext(GlobalContext)
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    name: "",
    location: "",
    role: ""
  })
  const currentId = route.match.params.id

  useEffect(() => {
    const employeeId = currentId
    const selectEmployeeId = employees.find(employee => employee.id === parseInt(employeeId))
    setSelectedUser(selectEmployeeId)
    // eslint-disable-next-line
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    editEmployee(selectedUser)
    history.push("/")
  }

  const handleOnChange = (userKey, value) => {
    setSelectedUser({...selectedUser, [userKey]: value})
  }

  // if(!selectedUser || !selectedUser.id) {
  //   alert('id not match')
  // }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name || ""}
              onChange={e => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.location || ""}
              onChange={e => handleOnChange("location", e.target.value)}
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.role || ""}
              onChange={e => handleOnChange("role", e.target.value)}
              type="text"
              placeholder="Enter role"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default EditEmployee