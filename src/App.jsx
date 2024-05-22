import "./App.css"
import { CustomerList } from "./components/customers/customers.jsx"
import { TicketList } from "./components/tickets/ticketList.jsx"

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      <CustomerList />
    </>
  )
}