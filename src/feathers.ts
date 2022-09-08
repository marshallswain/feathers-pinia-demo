import { feathers } from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import { memory } from '@feathersjs/memory'
import auth from '@feathersjs/authentication-client'

const restClient = rest('http://localhost:3030').fetch(fetch)

export const api: any = feathers().configure(restClient).configure(auth())

const paginate = { default: 10, max: 100 }

// memory service for `users`
const usersById = {
  1: { id: 1, name: 'Myriah' },
  2: { id: 2, name: 'Marshall' },
}
api.use('users', memory({ paginate, store: usersById } as any))

// memory service for `messages`
const messages = {
  1: { id: 1, text: '🙂', userId: 1 },
  2: { id: 2, text: '😊', userId: 2 },
  3: { id: 3, text: 'Hey', userId: 1 },
  4: { id: 4, text: 'Hey', userId: 2 },
  5: { id: 5, text: 'Hey what?', userId: 1 },
  6: { id: 6, text: 'You said hey, first', userId: 2 },
  7: { id: 7, text: '🥐', userId: 1 },
}
api.use('messages', memory({ paginate, store: messages } as any))
