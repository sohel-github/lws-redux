export const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

    return response.json()
}