import { EffectCallback, useEffect } from 'react'

export default function useDidMount(effect: EffectCallback) {
  useEffect(effect, [])
}
