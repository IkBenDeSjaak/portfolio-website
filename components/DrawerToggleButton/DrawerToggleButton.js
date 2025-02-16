import React from 'react'
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon';

import styles from './DrawerToggleButton.module.scss'

const DrawerToggleButton = (props) => (
  <div className={styles.drawerbutton}>
    <IconButton
      className={styles.button}
      aria-label='sidedrawer toggle button'
      onClick={props.onHandleToggleDrawer}
    >
      <Icon className='fas fa-bars' />
    </IconButton>
  </div>
)

export default DrawerToggleButton
