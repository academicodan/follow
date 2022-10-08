interface loginUser {
    userName: string;
    password: string | number
}


export const handleAuthentication = ({ userName, password }: loginUser) => {

    console.log(userName)
    switch (userName) {
        case 'pharmaco':
            if (password === 'passpharmaco') {

                return { authenticated: true, route: '/pharmaco' }
                // setAuthenticated(true)
                // history.push('/pharmaco')
            } else {
                return false
            }
        case 'laboratory':
            if (password === 'passlaboratory') {
                // setAuthenticated(true)
                // history.push('/laboratory')
                return { authenticated: true, route: '/laboratory' }
            } else {
               return false
            }
        default:
            return alert("Usuario nao encontrado")
    }


}