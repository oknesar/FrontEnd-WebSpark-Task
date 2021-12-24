import range from 'helpers/range'
import { fakeEmail } from 'helpers/fakes/email'
import request from 'helpers/fakes/request'
import { fakeFolder } from 'helpers/fakes/folder'

const data = range(5, fakeFolder).map((folder) => ({
  ...folder,
  list: range(folder.items, fakeEmail),
}))

export const getFoldersList = () => request('/folders', () => data.map(({ list, ...folder }) => folder))

export const getEmailsList = (folderId: string) =>
  request(
    `/folder/${folderId}`,
    () => data.find((folder) => folder.id === folderId)?.list?.map(({ content, ...email }) => email) ?? []
  )

export const getEmailContent = (emailId: string) =>
  request(
    `/email/${emailId}`,
    () =>
      data
        .map((folder) => folder.list)
        .flat()
        .find((email) => email.id === emailId)?.content ?? ''
  )
