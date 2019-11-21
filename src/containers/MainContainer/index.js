// @flow

import * as React from 'react'
import styles from './index.module.css'

type Props = {
  children?: React.Node
}

export default ({ children }: Props) => (
  <div className={styles.container}>
    {children}
  </div>
)
