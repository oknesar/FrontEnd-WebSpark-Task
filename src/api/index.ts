import range from 'helpers/range'
import { fakeEmail } from 'helpers/fakes/email'
import request from 'helpers/fakes/request'
import { fakeFolder } from 'helpers/fakes/folder'

export const apiTestData = range(5, fakeFolder).map((folder) => ({
  ...folder,
  list: range(folder.items, fakeEmail),
}))

export const getFoldersList = () =>
  request('/folders', () => apiTestData.map(({ list, ...folder }) => folder))

export const getEmailsList = (folderId: string) =>
  request(
    `/folder/${folderId}`,
    () =>
      apiTestData.find((folder) => folder.id === folderId)?.list?.map(({ content, ...email }) => email) ?? []
  )

export const getEmailContent = (emailId: string) =>
  request(
    `/email/${emailId}`,
    () =>
      apiTestData
        .map((folder) => folder.list)
        .flat()
        .find((email) => email.id === emailId)?.content ?? ''
  )

export const toggleRead = (emailId: string) =>
  request(`/email/${emailId}`, () => {
    const email = apiTestData
      .map((folder) => folder.list)
      .flat()
      .find((email) => email.id === emailId)

    if (!email) return
    email.isRead = !email.isRead
  })

export const deleteEmail = (emailId: string) =>
  request(`/email/${emailId}`, () => {
    const email = apiTestData
      .map((folder) => folder.list)
      .flat()
      .find((email) => email.id === emailId)

    if (!email) return
    email.isDeleted = true
  })
