import { Observable, Subscription } from 'rxjs'
import { Dispatch, Reducer, useEffect, useMemo, useReducer, useRef } from 'react'

interface State<T> {
  pending: boolean
  value: T | undefined
  error?: any
}

export default function useObservable<T>(observable: Observable<T> | (() => Observable<T>)) {
  type Actions = Action<'value', any> | Action<'error', any>
  observable = useMemo(() => (observable instanceof Observable ? observable : observable()), [])

  const subscriptionRef = useRef<Subscription>()
  const initialState: State<T> = { pending: true, value: undefined }
  let state: State<T>
  let dispatch: Dispatch<Actions>

  const onceRef = useRef(true)
  if (onceRef.current) {
    onceRef.current = false

    // trick to avoid rerender when subscribe emits immediately
    observable.subscribe({
      next: (value) => {
        if (!dispatch) {
          initialState.value = value
          initialState.pending = false
        } else {
          dispatch({ type: 'value', payload: value })
        }
      },
      error: (err) => {
        if (!dispatch) {
          initialState.error = err
          initialState.pending = false
        } else {
          dispatch({ type: 'error', payload: err })
        }
      },
    })
  }

  useEffect(() => {
    return () => subscriptionRef.current?.unsubscribe()
  })
  ;[state, dispatch] = useReducer<Reducer<State<T>, Actions>>((state, action) => {
    switch (action.type) {
      case 'value':
        return {
          pending: false,
          value: action.payload,
        }
      case 'error':
        return {
          ...state,
          pending: false,
          error: action.payload,
        }
    }

    return state
  }, initialState)

  return [state.value, state.pending, state.error] as const
}
