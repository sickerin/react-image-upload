import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faSlidersH } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <footer>
    <a
      href='https://google.com'
      title='Sliders'
      className={'small-button sliders'}
    >
      <FontAwesomeIcon icon={faSlidersH} size='3x' color='#fff' />
    </a>
    <a
      href='https://google.com'
      title='Redo'
      className={'small-button redo'}
    >
      <FontAwesomeIcon icon={faRedo} size='3x' color='#fff' />
    </a>
  </footer>
)
