import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'store/store'
import { bindActionCreators } from 'redux'
import { allActions } from 'store/reducers/mainReducer'

// MAIN STATE HOOKS --------------------------------------------------------->
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

//  CUSTOM HOOKS ------------------------------------------------------------>
export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}

