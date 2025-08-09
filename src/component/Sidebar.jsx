import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
  CNavGroup,
  CNavItem,
  CNavTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cilClipboard,
  cilCloudDownload,
  cilColumns,
  cilEducation,
  cilGroup,
  cilHome,
  cilLayers,
  cilObjectGroup,
  cilPuzzle,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'

export const Sidebar = () => {
  return (
    <CSidebar className="border-end bg-light" unfoldable>
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand></CSidebarBrand>
      </CSidebarHeader>

      <CSidebarNav>
        <CNavTitle>ADMIN PANEL</CNavTitle>
<Link to={"/"} style={{textDecoration:"none"}}>
      <CNavItem component = {NavLink} to='/' style={{ cursor: 'pointer' }}>
          <CIcon customClassName="nav-icon" icon={cilHome} />
          Home
        </CNavItem>
</Link>
  
<Link to={"/users"} style={{textDecoration:"none"}}>
       <CNavItem component = {NavLink} to='/users' style={{cursor: 'pointer'}}>
          <CIcon customClassName="nav-icon" icon={cilUser} />
          Users
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
</Link>
 
       <Link to={"/product"} style={{textDecoration:"none"}}>
        <CNavItem component = {NavLink} to='/product' style={{cursor: 'pointer'}}>
            <CIcon customClassName="nav-icon" icon={cilObjectGroup} />
            Products
        </CNavItem>
</Link>
        <CNavItem href="https://coreui.io">
          <CIcon customClassName="nav-icon" icon={cilObjectGroup} />
          Product List
        </CNavItem>

        <CNavItem href="https://coreui.io/pro/">
          <CIcon customClassName="nav-icon" icon={cilLayers} />
          Category
        </CNavItem>

        <CNavItem href="https://coreui.io/pro/">
          <CIcon customClassName="nav-icon" icon={cilLayers} />
          Category List
        </CNavItem>

<CNavItem href="https://coreui.io/pro/">
          <CIcon customClassName="nav-icon" icon={cilLayers} />
          Payment
        </CNavItem>
        
      </CSidebarNav>

      <CSidebarHeader className="border-top">
        <CSidebarToggler />
      </CSidebarHeader>
    </CSidebar>
  )
}

export default Sidebar