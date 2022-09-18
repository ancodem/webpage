import mainReducer, { initialState, allActions } from './mainReducer'

describe('Testing return of initial state', () => {
  it('User name should be John Smith', () => {
    expect(mainReducer(undefined, { type: undefined }).userName)
      .toBe('John Smith')
  })

  it('User stack should have 3 items', () => {
    expect(mainReducer(undefined, { type: undefined }).userStack.length)
      .toBe(3)
  })

  it('User stack should have PHP, Java Script and Ruby', () => {
    expect(mainReducer(undefined, { type: undefined }).userStack)
      .toEqual([
        { id: 1, technologyName: 'PHP', yearsOfExperience: 6 },
        { id: 2, technologyName: 'Java Script', yearsOfExperience: 4.5 },
        { id: 0, technologyName: 'Ruby', yearsOfExperience: 2 },
      ])
  })

  it('User avatar address shoudl match', () => {
    expect(mainReducer(undefined, { type: undefined }).userAvatar)
      .toBe('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96LXw5kEw5KkdaXE5m-CbOopopUdVYD-9fA&usqp=CAU')
  })

  it('User location should be "Portland, Oregon"', () => {
    expect(mainReducer(undefined, { type: undefined }).location)
      .toBe('Portland, Oregon')
  })
})

it('User name should be changed', () => {
  const { changeName } = allActions
  expect(mainReducer(initialState, changeName('TestName')).userName)
    .toBe('TestName')
})

describe('Testing user stack interractions', () => {
  it('After adding a technology user stack length should be 4', () => {
    const { addTechnology } = allActions
    expect(
      mainReducer(
        initialState,
        addTechnology(
          { id: 3, technologyName: 'Python', yearsOfExperience: 3 }
        )).userStack.length)
      .toBe(4)
  })

  it('Added technology should be correct', () => {
    const { addTechnology } = allActions
    expect(
      mainReducer(
        initialState,
        addTechnology(
          { id: 3, technologyName: 'Python', yearsOfExperience: 3 }
        )).userStack[3])
      .toEqual(
        { id: 3, technologyName: 'Python', yearsOfExperience: 3 }
      )

  })

  it('Last technology in stack should be deleted', () => {
    const { deleteTechnology } = allActions
    expect(
      mainReducer(
        initialState,
        deleteTechnology(2)
      ).userStack.length)
      .toBe(2)

  })

  it('Experience with JavaScript should be changed to 5', () => {
    const { updateExperience } = allActions
    expect(
      mainReducer(
        initialState,
        updateExperience({ expId: 2, expInput: 5 })
      ).userStack[1].yearsOfExperience
    ).toBe(5)
  })
})


it('Location should be London', () => {
  const { updateLocation } = allActions
  expect(mainReducer(initialState, updateLocation('London')).location)
    .toBe('London')
})
