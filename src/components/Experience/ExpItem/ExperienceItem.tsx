import React, { useCallback, useState } from 'react'

import { useActions } from 'hooks'
import { InputField } from 'components'
import { experienceSchema } from 'validationSchemas'
import { ExperienceItemProps } from './ExperienceItem.types'
import {
  TechnologyName, Item, YearsOfExperience
} from './ExperienceItem.styles'

export const ExpItem: React.FC<ExperienceItemProps> =
  ({ id, name, years }) => {

    const [isInEditingMode, toggleEditingMode] = useState(false)
    const { updateExperience } = useActions()

    const handleExperienceUpdate = useCallback(
      (input: number) => updateExperience(
        { expId: id, expInput: input }
      ), [])

    const handleToggleEditing = useCallback(
      (input: boolean) =>
        toggleEditingMode(input), [])

    return (
      <Item>

        <TechnologyName >
          {name}
        </TechnologyName>

        {
          isInEditingMode
            ? <InputField
              handleToggleEditing={handleToggleEditing}
              validationSchema={experienceSchema}
              action={handleExperienceUpdate}
              placeholder={years}
              sx={{
                marginLeft: '8px',
                width: '50px'
              }}
            />
            : <YearsOfExperience
              onClick={() => handleToggleEditing(true)}>
              {years} years
            </YearsOfExperience>
        }

      </Item>
    )
  }
