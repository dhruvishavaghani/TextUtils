import React from 'react'

export default function Alert(props) {
  return (
    <div>
    props.Alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
     <strong> {props.Alert}</strong> :{props.Alert}
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    </div>
  )
}
