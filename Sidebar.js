import React from 'react';

export default function Sidebar (props) {
  return (
        <aside
          className={props.isOpen}
          ref={this.handleAsideRef}
        >
          <p>aside</p>
        </aside>
  )
}
