import React, {Children} from 'react';

export default function MenuList ({children}) {
  // если нужно добавить какие-то данные к потомкам
  const changedChildren = Children.map(children, (child, index) => {
    console.log(index);
    return React.cloneElement(child, {index});
  })


  return (
    <ul>
      {changedChildren}
    </ul>
  )
}
