import client, { setAuthorizationHeader } from "../../api/Client"

export const login = credentials => {
    return client
    .post('/api/auth/login', credentials)
    .then(response =>setAuthorizationHeader(response.accessToken))
};