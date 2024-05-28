import "./Employees.css"
import { User } from "../users/User.jsx"
import { getStaffUsers } from "../../services/UserService.jsx"
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
                         <User user={employeeObj} />
                    </Link>
                )
            })}
        </div>
    )
}

