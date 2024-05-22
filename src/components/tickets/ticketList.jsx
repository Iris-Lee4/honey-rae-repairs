import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./tickets.css"
import { Ticket } from "./ticket.jsx"
import { TicketFilterBar } from "./ticketFilterBar.jsx"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    // for tickets set
    useEffect(() => {
        getAllTickets().then((ticketsArray) => {
        setAllTickets(ticketsArray)
        console.log("tickets set!")
        })
    }, []) // ONLY runs on initial render of component

    // for show emergency only change and default all
    useEffect(() => {
        if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(
            (ticket) => ticket.emergency === true
        )
        setFilteredTickets(emergencyTickets)
        } else {
        setFilteredTickets(allTickets)
        }
    }, [showEmergencyOnly, allTickets])

    //for when search term input changes
    useEffect(() => {
        const foundTickets = allTickets.filter(ticket =>
            ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])

    return (
        <div className="tickets-container">
            <h2>Tickets</h2>
            <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm} />
            <article className="tickets">
                {filteredTickets.map(ticketObj => {
                    return <Ticket ticket={ticketObj} key={ticketObj.id} />
                })}
            </article>
        </div>
    )
 }   