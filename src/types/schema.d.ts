interface RawEmailRecord {
  id: string
  date: string
  from: string
  subject: string
  content: string
  contentPreview: string
  isRead: boolean
  isDeleted: boolean
}

interface EmailRecord extends Omit<RawEmailRecord, 'content'> {
  date: Date
}

interface Folder {
  id: string
  name: string
  items: number
}
