import { date, name, lorem, internet, datatype } from 'faker'
import { v4 as uuid } from 'uuid'

export function fakeRawEmail(): RawEmailRecord {
  const content = lorem.text()
  return {
    id: uuid(),
    content,
    contentPreview: content.slice(0, 120),
    date: date.recent().toISOString(),
    from: internet.email(),
    isDeleted: datatype.boolean(),
    isRead: datatype.boolean(),
    subject: name.title(),
  }
}
