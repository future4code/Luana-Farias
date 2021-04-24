export const auth = () => {
    const token = window.localStorage.getItem("token")
    return token
}