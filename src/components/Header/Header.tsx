import React, { lazy, Suspense } from 'react'
import Skeleton from '@mui/material/Skeleton'

import flag from 'assets/flag.png'
import { useAppSelector } from 'hooks'
import { NameField, Location } from 'components'
import {
  HeaderContainer,
  HeaderContent,
  UserInfo,
  Language,
} from './Header.styles'

const UserAvatar = lazy(() => import('./Header.styles').then(style => ({ default: style.UserAvatar })))
const Stack = lazy(() => import('components/Stack'))

export const Header: React.FC = () => {
  const { userAvatar } =
    useAppSelector(state => state.main)

  return (
    <HeaderContainer component="header">
      <HeaderContent>

        <Suspense fallback={
          <Skeleton variant="rounded" width={168} height={168} />
        }>
          <UserAvatar
            src={userAvatar}
            alt="avatar"
          />
        </Suspense>

        <UserInfo>
          <NameField />
          <Location />
          <Language>
            <img
              src={flag}
              alt='flag'
              width='24px'
              height='24px'
            />
            English
          </Language>
          <Suspense fallback={<div>skills</div>}>
            <Stack />
          </Suspense>
        </UserInfo>

      </HeaderContent>
    </HeaderContainer >
  )
}
