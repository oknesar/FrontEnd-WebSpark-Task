interface RawEmailRecord {
  id: string
  date: string
  from: string
  subject: string
  contentPreview: string
  content: string
  isRead: boolean
  isDeleted: boolean
}
