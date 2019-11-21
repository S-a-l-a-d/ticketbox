// @flow

import React from 'react'

type SeatContext = {
  seats: boolean[][],
  setSeats: (newSeats: boolean[][]) => void,
  selectedSeats: number[],
  setSelectedSeats: (newSelectedSeats: number[]) => void
}

export default React.createContext<SeatContext>({
  seats: [],
  setSeats: () => {},
  selectedSeats: [],
  setSelectedSeats: () => {}
})
