import { date, name, lorem, internet, datatype } from 'faker'
import { v4 as uuid } from 'uuid'

export function fakeEmail(): RawEmailRecord {
  const content = lorem.text()
  const isRead = datatype.boolean()
  return {
    id: uuid(),
    content,
    contentPreview: content.slice(0, 120),
    date: date.recent().toISOString(),
    from: internet.email(),
    isRead,
    isDeleted: isRead && datatype.boolean(),
    subject: name.title(),
  }
}
