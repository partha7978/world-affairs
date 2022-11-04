import React from 'react'
import Spinner from '../../assets/loading/spinner.gif'
import './Loding.css'

export default function Loding() {
  return (
    // https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif - spinner gif
    <div className="loding">
        <img src={Spinner} alt="loading" />
    </div>
  )
}
