import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { userRoleMapping, Roles } from '../protectedRoutes/Utils/Constant'

const LOGGED_IN_USER = userRoleMapping.vikas;

export default function App() {
    console.log(userRoleMapping);
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/finance' element={<FinanceAuth > <Finance /> </FinanceAuth>} />
          <Route path='/logistics' element={<LogisticsAuth> <Logistics /> </LogisticsAuth>} />
          <Route path='/product' element={<ProductAuth> <Product /> </ProductAuth>} />
          <Route path='/admin' element={<AdminAuth> <Admin /> </AdminAuth>} />
          {/* <Route path='/subAdmin' element={<SubAdmin />} /> */}
          <Route path='/*' element={<div>Not Found</div>} />
        </Routes>
    </BrowserRouter>
  ) 
}

function FinanceAuth({children}){
  if(Roles.ADMIN === LOGGED_IN_USER || Roles.FINANCE === LOGGED_IN_USER){
    return <>{children}</>
  }
  else return <NotAuthorised />
}
function AdminAuth({children}){
  if(Roles.ADMIN === LOGGED_IN_USER){
    return <>{children}</>
  }
  else return <NotAuthorised />
}
function LogisticsAuth({children}){
  if(Roles.ADMIN === LOGGED_IN_USER || Roles.LOGISTICS === LOGGED_IN_USER){
    return <>{children}</>
  }
  else return <NotAuthorised />
}
function ProductAuth({children}){
  if(Roles.ADMIN === LOGGED_IN_USER || Roles.PRODUCT === LOGGED_IN_USER){
    return <>{children}</>
  }
  else return <NotAuthorised />
}


function Finance() {
  return (
    <>i am the finance Page</>
  )
}
function Logistics() {
  return (
    <>i am the logistics Page</>
  )
}
function Product() {
  return (
    <>i am the product Page</>
  )
}
function Admin() {
  return (
    <>i am the admin Page</>
  )
}
function SubAdmin() {
  return (
    <>i am the subAdmin Page</>
  )
}

function NotAuthorised(){
  return <div>you not in authorised route</div>
}
