const mockUser = {
    id: 1,
    name: 'John Doe',
    email: '',
    password: ''
}

const getUserByID = (id:number) => {
    return {
        ...mockUser,
        id
    }
}

const fetchAllUsers = () => {
    return [mockUser,mockUser]
}

export { getUserByID, fetchAllUsers }
