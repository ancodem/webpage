import React, { useCallback, useState } from 'react'
import { ListItem } from '@mui/material'

import { useActions } from 'hooks'
import { InputField } from 'components'
import { experienceSchema } from 'validationSchemas'
import {
  TechnologyName, YearsOfExperience, EpxerienceInput
} from './styles'

interface ExperienceProps {
  id: number
  name: string
  years: number
}

const ExpItem: React.FC<ExperienceProps> =
  ({ id, name, years }) => {

    // STATE ---------------------------------------------------------------->
    const [isInEditingMode, toggleEditingMode] = useState(false)
    const { updateExperience } = useActions()

    // LOGIC ---------------------------------------------------------------->
    const handleExperienceUpdate = useCallback(
      (input: number) => updateExperience({ expId: id, expInput: input }), []
    )

    const handleToggleEditing = useCallback(
      (input: boolean) => toggleEditingMode(input), []
    )
    // JSX ------------------------------------------------------------------>
    return (
      <ListItem>

        <TechnologyName>
          {name}
        </TechnologyName>

        {
          isInEditingMode
            ? <InputField
              validationSchema={experienceSchema}
              placeholder={years}
              handleToggleEditing={handleToggleEditing}
              action={handleExperienceUpdate}
            />
            : <YearsOfExperience
              onClick={() => handleToggleEditing(true)}
            >
              {years} years
            </YearsOfExperience>
        }
      </ListItem>
    )
  }

export default React.memo(ExpItem)
