import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import IconMenu from '@material-ui/icons/Menu'

import HeaderDemo from './AppHeaderDemo'

import HeaderSearch from './AppHeaderSearch'
import HeaderNotifications from './AppHeaderNotifications'
import HeaderProfile from './AppHeaderProfile'

/**
 * The `Avatar` component is where all your avatars come to play.
 */
const Header = ({ onToggle }) => {
  const classes = useStyles()

  return (
    <AppBar position="absolute" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Toggle sidebar"
          onClick={onToggle}
          className={clsx(classes.menuButton)}
        >
          <IconMenu />
        </IconButton>
        <HeaderDemo />
        <div className={classes.actions}>
          <HeaderSearch />
          <HeaderNotifications />
          <HeaderProfile />
        </div>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  onToggle: PropTypes.func,
}

const useStyles = makeStyles(theme => ({
  header: {
    background: '#fff',
    color: '#7b7b7b',
    boxShadow: 'none',
  },
  toolbar: {},
  menuButton: {},
  actions: {
    marginLeft: 'auto',
    alignItems: 'center',
    display: 'flex',
  },
  notificationsButton: {
    marginRight: 23,
  },
  title: {
    flexGrow: 1,
  },
}))

export default Header
