import { useState } from 'react'
import { handleAuthentication } from '../../General/helpers'
import history from '../../history'

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const handleLogin = (user) => {
        const userName = user.user
        const password = user.password
        const result = handleAuthentication({ userName, password })
        setAuthenticated(result.authenticated)
        history.push(result.route)
    }

    const handleLogaut = () => {
        setAuthenticated(false)
        history.push('/follow')
    }

    return { authenticated, handleLogin, handleLogaut }
}

export default useAuth
