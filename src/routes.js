import HomePage from './pages/HomePage'
import UsersListPage, { loadData } from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
  },
  {
    ...NotFoundPage
  }
]