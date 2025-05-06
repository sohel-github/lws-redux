export const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    return response.json()
}