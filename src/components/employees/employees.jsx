import "./employees.css"
import { User } from "../../users/user.jsx"
import { getStaffUsers } from "../../services/userService.js"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeeArray => {
            setEmployees(employeeArray)
        })
    }, [])

    return (
        <div className="employees">
            {employees.map(employeeObj => {
                return (
                    <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
                    {/* // user is key and employeeObj is value */}
                    <User user={employeeObj} />
                    </Link>
                )
            })}
        </div>
    )
}

