import range from 'helpers/range'
import { fakeRawEmail } from 'helpers/fakes/email'
import request from 'helpers/fakes/request'

export const getEmailsList = () => request('emails', () => range(10, fakeRawEmail))
