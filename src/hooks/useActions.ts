import { bindActionCreators } from 'redux'

import { allActions } from 'store/reducers/mainReducer'
import useAppDispatch from './useAppDispatch'

const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}
export default useActions
