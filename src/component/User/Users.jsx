import React, { useState } from 'react'
import {
  CAvatar,
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import img1 from '../../../public/images/avatars/7.jpg'
import img2 from '../../../public/images/avatars/8.jpg'
import img3 from '../../../public/images/avatars/9.jpg'

const usersDetail = [
  { id: 1, name: 'Shan Khan', number: '0343-3662425', email: 'john@example.com', avatar: img1, status: false },
  { id: 2, name: 'Mazin Khan', number: '—', email: 'jane@example.com', avatar: img2, status: false },
  { id: 3, name: 'Anabiya', number: '—', email: 'ali@example.com', avatar: img3, status: false },
]

const Users = () => {
  const [list, setList] = useState(usersDetail)

  const toggleUserStatus = (id) => {
    setList((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: !u.status } : u)),
    )
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Users List</h3>

      <CTable align="middle" responsive hover striped>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>Avatar</CTableHeaderCell>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Number</CTableHeaderCell>
            <CTableHeaderCell>Email</CTableHeaderCell>
            <CTableHeaderCell>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {list.map((u) => (
            <CTableRow key={u.id}>
              <CTableDataCell><CAvatar src={u.avatar} size="md" /></CTableDataCell>
              <CTableDataCell>{u.name}</CTableDataCell>
              <CTableDataCell>{u.number || '—'}</CTableDataCell>
              <CTableDataCell>{u.email}</CTableDataCell>
              <CTableDataCell>
                

                <CButton
                  size="sm"
                  color={u.status ? 'danger' : 'success'}
                  onClick={() => toggleUserStatus(u.id)}
                >
                  {u.status ? 'Block' : 'Unblock'}
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Users
