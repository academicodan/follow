interface loginUser {
    userName: string;
    password: string | number
}


enum users {
    PHARMACO = 'pharmaco',
    LABORATORY = 'laboratory',
    FACTORY = 'factory',
    PACKGING_SYSTEM = 'packgingsystem',
    WEIGHT_CONTROLLER = 'weightcontroller',
    TESTS = 'tests',
    DISTRIBUTOR = 'distributor',
}

enum passwords {
    PHARMACO = 'passpharmaco',
    LABORATORY = 'passlaboratory',
    FACTORY = 'passfactory',
    PACKGING_SYSTEM = 'passpackgingsystem',
    WEIGHT_CONTROLLER = 'passweightcontroller',
    TESTS = 'passtests',
    DISTRIBUTOR = 'passdistributor',
}

enum routes {
    PHARMACO = '/pharmaco',
    LABORATORY = '/laboratory',
    FACTORY = '/factory',
    PACKGING_SYSTEM = '/packgingsystem',
    WEIGHT_CONTROLLER = '/weightcontroller',
    TESTS = '/tests',
    DISTRIBUTOR = '/distributor',
}

export const handleAuthentication = ({ userName, password }: loginUser) => {
    switch (userName) {
        case users.PHARMACO :
            if (password === passwords.PHARMACO) {
                return { authenticated: true, route: routes.PHARMACO }
            }  else {
                alert("Senha inválida")
                return false
            } 
        case users.LABORATORY:
            if (password === passwords.LABORATORY) {
                return { authenticated: true, route: routes.LABORATORY }
            } else {
                alert("Senha inválida")
                return false
            } 
        case users.FACTORY:
            if (password === passwords.FACTORY) {
                return { authenticated: true, route: routes.FACTORY }
            } else {
                alert("Senha inválida")
                return false
            } 
        case users.PACKGING_SYSTEM:
            if (password === passwords.PACKGING_SYSTEM) {
                return { authenticated: true, route: routes.PACKGING_SYSTEM }
            } else {
                alert("Senha inválida")
                return false
            } 
        case users.WEIGHT_CONTROLLER:
            if (password === passwords.WEIGHT_CONTROLLER) {
                return { authenticated: true, route: routes.WEIGHT_CONTROLLER }
            } 
            else {
                alert("Senha inválida")
                return false
            } 
        case users.TESTS:
            if (password === passwords.TESTS) {
                return { authenticated: true, route: routes.TESTS }
            } 
            else {
                alert("Senha inválida")
                return false
            } 
        case users.DISTRIBUTOR:
            if (password === passwords.DISTRIBUTOR) {
                return { authenticated: true, route: routes.DISTRIBUTOR }
            } else {
                alert("Senha inválida")
                return false
            } 
        default:
            return alert("Usuário inválido!")
    }


}