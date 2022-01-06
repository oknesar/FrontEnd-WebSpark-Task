import { ActionButton } from 'components/ui/Button/styled'
import { useState, MouseEvent, useMemo, useEffect } from 'react'
import {
  delay,
  expand,
  mapTo,
  of,
  Subject,
  switchMap,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
  merge,
} from 'rxjs'

const typeMap = {
  action: ActionButton,
}

interface ButtonProps extends Omit<JSX.IntrinsicElements['button'], 'ref' | 'type'> {
  type: keyof typeof typeMap
  htmlType?: JSX.IntrinsicElements['button']['type']
  cancelWindowTime?: number
}

enum Statuses {
  INITIAL = 1,
  CANCELLABLE,
}

export default function Button({ type, htmlType, onClick, cancelWindowTime, ...buttonProps }: ButtonProps) {
  const ButtonComponent = typeMap[type]

  const [state, setState] = useState({
    time: 0,
    status: Statuses.INITIAL,
  })

  const $click = useMemo(() => new Subject<MouseEvent<HTMLButtonElement>>(), [])
  const $cancel = useMemo(() => new Subject<null>(), [])

  useEffect(() => {
    if (!cancelWindowTime) return
    const tick = 500
    const $cancellableClick = $click.pipe(
      tap(() => setState((state) => ({ ...state, status: Statuses.CANCELLABLE }))),
      switchMap((e) =>
        of(0).pipe(
          expand((time) => of(time + tick).pipe(delay(tick))),
          takeWhile((n) => n < cancelWindowTime),
          tap((time) => setState((state) => ({ ...state, time }))),
          takeLast(1),
          mapTo(e),
          takeUntil($cancel)
        )
      ),
      tap(onClick)
    )

    const subscription = merge($cancellableClick, $cancel).subscribe(() => {
      setState((state) => ({
        ...state,
        status: Statuses.INITIAL,
        time: 0,
      }))
    })

    return () => subscription.unsubscribe()
  }, [onClick, cancelWindowTime])

  if (state.status === Statuses.CANCELLABLE) {
    return (
      <ButtonComponent type={htmlType} onClick={() => $cancel.next(null)} {...buttonProps}>
        {Math.round((cancelWindowTime! - state.time) / 1000)}
      </ButtonComponent>
    )
  }

  return (
    <ButtonComponent
      type={htmlType}
      onClick={cancelWindowTime ? $click.next.bind($click) : onClick}
      {...buttonProps}
    />
  )
}
