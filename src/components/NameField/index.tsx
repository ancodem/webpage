import React, { useState } from 'react'
import { useAppSelector, useActions } from 'hooks'
import { FormControl } from '@mui/material'
import { CheckIcon } from 'style/icons'
import { Name, NameInput } from './styles'

const NameField: React.FC = () => {
  // STATE ------------------------------------------------------------------>
  const { userName } = useAppSelector(state => state.main)
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const [input, updateInput] = useState('')
  const { changeName } = useActions()

  // LOGIC ------------------------------------------------------------------>
  const handleConfirmation: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode === 13) {
      changeName(input)
      updateInput('')
      toggleEditingMode(false)
    }
  }

  // JSX -------------------------------------------------------------------->
  return (
    <article>

      {isInEditingMode
        ? <FormControl>
          <NameInput
            autoFocus
            required
            onChange={(e) => updateInput(e.target.value)}
            onKeyDown={handleConfirmation}
            value={input}
            placeholder={userName}
          />
          <CheckIcon />
        </FormControl>
        : <Name onClick={() => toggleEditingMode(true)}>{userName}</Name>
      }

    </article>
  )
}
export default NameField
