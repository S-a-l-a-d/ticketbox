// @flow

import React from 'react'
import styles from './index.module.css'

import SeatContext from '../../store/SeatContext'

export default () => (
  <SeatContext.Consumer>
    {
      ({ selectedSeats }) => (
        <div className={styles.priceSection}>
          {`${selectedSeats.reduce((previous, current) => previous + current, 0).toLocaleString('vi-VN')}đ`}
        </div>
      )
    }
  </SeatContext.Consumer>
)
