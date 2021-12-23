import { useCallback } from 'react'
import { $emitter } from 'data/emitter'

export default function useEmitter() {
  return useCallback($emitter.next.bind($emitter), [])
}
