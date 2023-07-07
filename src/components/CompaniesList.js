import React from 'react'
import { Table } from 'react-bootstrap'
import Company from './Company'

const CompaniesList = ({ users }) => {

  return (
    <div>
      <Table striped>
        <tbody>
          {users.map(u =>
            <Company key={u.id} company={u}/>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default CompaniesList