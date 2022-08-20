export interface StackType {
  id: number
  technologyName: string
  yearsOfExperience: number
}

export interface StateType {
  userName: string
  userStack: Array<StackType>
  userAvatar: string
  input: string
}

