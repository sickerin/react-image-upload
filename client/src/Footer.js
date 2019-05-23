import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRedo, faSlidersH} from '@fortawesome/free-solid-svg-icons'
import Fab from '@material-ui/core/Fab'

// https://medium.com/@BogdanSoare/how-to-use-reacts-new-context-api-to-easily-manage-modals-2ae45c7def81

class Footer extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <footer>
        <Fab color="primary">
          <FontAwesomeIcon icon={faSlidersH} size='2x' color='#fff'/>
        </Fab>
        <Fab color="primary">
          <FontAwesomeIcon icon={faRedo} size='2x' color='#fff'/>
        </Fab>
      </footer>
  )
  }
}

export default Footer
