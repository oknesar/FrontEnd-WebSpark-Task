import { Subject } from 'rxjs'
import { State } from 'data/init'

const $state = new Subject<State>()
export default $state
