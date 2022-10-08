import { useState } from 'react'
import { handleAuthentication } from '../../General/helpers'
import history from '../../history'

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false)

    // const handleAuthentication = ({ userName, password }) => {
    //     console.log(userName)
    //     switch (userName) {
    //         case 'pharmaco':
    //             if (password === 'passpharmaco') {
    //                 setAuthenticated(true)
    //                 history.push('/pharmaco')
    //             } else {
    //                 alert('Usuário ou senha incorretos')
    //             }
    //             break
    //         case 'laboratory':
    //             if (password === 'passlaboratory') {
    //                 setAuthenticated(true)
    //                 history.push('/laboratory')
    //             } else {
    //                 alert('Usuário ou senha incorretos')
    //             }
    //             break
    //         default:
    //             alert('Usuário não encontrado')
    //             break
    //     }
    // }

    const handleLogin = (user) => {
        const userName = user.user
        const password = user.password
        // Validaçao de usuario
        // setAuthenticated(true)
        // history.push('/laboratory')
        const result = handleAuthentication({ userName, password })
        setAuthenticated(result.authenticated)
        history.push(result.route)
    }

    const handleLogaut = () => {
        setAuthenticated(false)
        history.push('/')
    }

    return { authenticated, handleLogin, handleLogaut }
}

export default useAuth
