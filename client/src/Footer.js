import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRedo, faSlidersH} from '@fortawesome/free-solid-svg-icons'
import Fab from '@material-ui/core/Fab'
import FormDialog from './FormDialog'

// https://medium.com/@BogdanSoare/how-to-use-reacts-new-context-api-to-easily-manage-modals-2ae45c7def81

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <FormDialog />
        <Fab color="primary">
          <FontAwesomeIcon icon={faRedo} size='2x' color='#fff'/>
        </Fab>
      </footer>
  )
  }
}

export default Footer
