import React, { useState } from 'react'
import { useAppSelector, useActions } from 'hooks'
import { FormControl } from '@mui/material'
import { CheckIcon } from 'style/icons'
import { Name, NameInput } from './styles'

const NameField: React.FC = () => {
  const [isInEditingMode, toggleEditingMode] = useState(false)
  const [input, updateInput] = useState('')

  const { userName } = useAppSelector(
    state => ({
      userName: state.main.userName,
    }))
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) { alert('works') }

  }

  return (
    <article>
      {isInEditingMode
        ?
        <FormControl
          onSubmit={() => alert('hi')}
        >
          <NameInput
            onChange={(e) => updateInput(e.target.value)}
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
