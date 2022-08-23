import React, { useState } from 'react'

const useEditingMode = () => {
  const [isInEditingMode, toggleEditing] = useState(false)

  const handleToggleEditing = (isEditing: boolean)
    : React.MouseEventHandler<HTMLElement> =>
    () => toggleEditing(isEditing)

  return [isInEditingMode, handleToggleEditing, toggleEditing]
}
export default useEditingMode
