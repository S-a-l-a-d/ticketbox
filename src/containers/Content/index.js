// @flow

import React from 'react'

import SeatContext from '../../store/SeatContext'

import SeatRow from '../SeatRow'

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

export default () => (
  <SeatContext.Consumer>
    {
      ({ seats, setSeats }) => (
        seats.map((seatRow, index) =>
          <SeatRow
            key={rows[index]}
            row={index}
            rowName={rows[index]}
            seatRow={seatRow}
            setSeats={setSeats}
          />)
      )
    }
  </SeatContext.Consumer>
)
