import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/UserService.jsx"
import "./Customers.css"
import { User } from "../users/User.jsx"
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