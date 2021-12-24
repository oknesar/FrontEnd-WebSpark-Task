import { datatype, lorem } from 'faker'
import { v4 as uuid } from 'uuid'

export function fakeFolder(): Folder {
  return {
    id: uuid(),
    name: lorem.word(),
    items: datatype.number({ min: 3, max: 10 }),
  }
}
