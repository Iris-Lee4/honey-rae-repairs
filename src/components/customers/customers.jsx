import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.js"
import "./customers.css"
import { User } from "../../users/user.jsx"

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
                    <User user={customerObj} key={customerObj.id} />
                )
            })}
        </div>
    )
}