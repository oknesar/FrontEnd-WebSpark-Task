interface RawEmailRecord {
  id: string
  date: string
  from: string
  subject: string
  contentPreview: string
  isRead: boolean
  isDeleted: boolean
}

interface EmailRecord extends RawEmailRecord {
  date: Date
}
