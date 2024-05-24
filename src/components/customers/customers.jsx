import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import "./customers.css"
import { User } from "../users/user.jsx"
import { Link } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map(customerObj => {
                return (
                    // user is key and customerObj is value
                    <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
                        <User user={customerObj} />
                    </Link>                
                )
            })}
        </div>
    )
}