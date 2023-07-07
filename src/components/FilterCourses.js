import React from 'react'
import { Form } from 'react-bootstrap'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='I want to learn...'
            value={filter}
            onChange={handleFilterChange}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default Filter