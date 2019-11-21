// @flow

import React from 'react'
import styles from './index.module.css'

import SeatContext from '../../store/SeatContext'

type Props = {
  row: number,
  column: number,
  selected: boolean
}

const handleClick = (seats, setSeats, selectedSeats, setSelectedSeats, row, column) => {
  if (!seats[row][column] && selectedSeats.length === 6) return

  seats[row][column] = !seats[row][column]
  setSeats([...seats])
  setSelectedSeats(seats.reduce((previous, current, row) =>
    [...previous, ...current.filter(seat => seat).map(seat => {
      if (row === 11) return 110000

      if (row > 4) return 90000

      return 60000
    })],
  []))
}

export default ({ row, column, selected }: Props) => (
  <SeatContext.Consumer>
    {({ seats, setSeats, selectedSeats, setSelectedSeats }) => {
      if (row === 11) {
        return (
          <div
            className={selected ? styles.selected : styles.deluxe}
            onClick={() => handleClick(seats, setSeats, selectedSeats, setSelectedSeats, row, column)}
          />
        )
      }

      if (row > 4) {
        return (
          <div
            className={selected ? styles.selected : styles.vip}
            onClick={() => handleClick(seats, setSeats, selectedSeats, setSelectedSeats, row, column)}
          />
        )
      }

      return (
        <div
          className={selected ? styles.selected : styles.standard}
          onClick={() => handleClick(seats, setSeats, selectedSeats, setSelectedSeats, row, column)}
        />
      )
    }}
  </SeatContext.Consumer>
)
