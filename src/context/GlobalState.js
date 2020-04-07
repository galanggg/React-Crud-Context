import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initState = {
  employees: [
    {
      id: 1,
      name: 'galang',
      location: 'Bali',
      role: 'Frontend'
    }
  ]
}

export const GlobalContext = createContext(initState)

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initState)

  function deleteEmployee(id) {
    dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: id
    })
  }

  function addEmployee(employees) {
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: employees
    })
  }

  function editEmployee(employees) {
    dispatch({
      type: 'EDIT_EMPLOYEE',
      payload: employees
    })
  }

  const value = {employees: state.employees, deleteEmployee, addEmployee, editEmployee}
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}