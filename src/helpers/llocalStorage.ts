export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    try {
        localStorage.setItem(key, stateAsString)
    } catch (e) {
        console.log(e)
    }
}

export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}
