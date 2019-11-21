// @flow

import * as React from 'react'
import styles from './index.module.css'

import Seat from '../../components/Seat'

type Props = {
  row: number,
  rowName: string,
  seatRow: boolean[]
}

export default ({ row, rowName, seatRow }: Props) => (
  <div className={styles.row}>
    {seatRow.map((seat, index) => <Seat key={rowName + index} row={row} column={index} selected={seatRow[index]} />)}
  </div>
)
