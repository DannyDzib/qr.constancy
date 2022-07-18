import login from './login'
import home from './home'
import paths from './paths'
import sidebar from './sidebar'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...login,
    ...home,
    ...paths,
    ...sidebar,
}