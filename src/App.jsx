import "./App.css"
import { EmployeeList } from "./components/employees/employees.jsx"
import { CustomerList } from "./components/customers/customers.jsx"
import { TicketList } from "./components/tickets/ticketList.jsx"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/navBar.jsx"
import { Welcome } from "./components/welcome/welcome.jsx"
import { CustomerDetails } from "./components/customers/customerDetails.jsx"
import { EmployeeDetails } from "./components/employees/employeeDetails.jsx"

export const App = () => {
  return (
    <Routes>
      {/* make home route the parent with closing element. will always render parent */}
      <Route path="/" element={
            <>
              <NavBar />
              {/* outlet is used to give the child element a space to render when at url/clicked */}
              <Outlet />
            </>
          }
        >
          {/* render index when at home */}
          <Route index element={<Welcome />} />
      {/* when url at /tickets, render ticketlist, self closing child */}
          <Route path="tickets" element={<TicketList />} />
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} /> 
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            {/* ':' is a route finder
            path below is for whenever we are at /customers/:customerId */}
            <Route path=":customerId" element={<CustomerDetails />} /> 
          </Route>
      </Route>
    </Routes>
  )
}