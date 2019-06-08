import React, {Children} from 'react';

export default function MenuList ({children, list}) {

  return (
    <ul>
      {list.map(title => children(title))}
    </ul>
  )
}
