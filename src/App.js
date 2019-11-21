// @flow

import React, { useState } from 'react'
import './App.css'

import MainContainer from './containers/MainContainer'
import Content from './containers/Content'

import SeatContext from './store/SeatContext'

const initialSeats: boolean[][] = []

for (let i = 0; i < 12; i++) {
  initialSeats[i] = []

  for (let j = 0; j < 12; j++) {
    initialSeats[i][j] = false
  }
}

export default () => {
  const [seats, setSeats] = useState(initialSeats)
  const [selectedSeats, setSelectedSeats] = useState([])

  return (
    <SeatContext.Provider value={{
      seats,
      setSeats: newSeats => setSeats(newSeats),
      selectedSeats,
      setSelectedSeats: newSelectedSeats => setSelectedSeats(newSelectedSeats)
    }}
    >
      <div className='App'>
        <MainContainer>
          <Content />
        </MainContainer>
      </div>
    </SeatContext.Provider>
  )
}
