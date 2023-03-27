export const getUsers = async () => {
    const response = await fetch('http://localhost:3005/api/users');
    const res = await response.json()
    return res.users
}
export const getOne = async (id) => {
    const response = await fetch('http://localhost:3005/api/users/' + id);
    const res = await response.json()
    return res
}

export const addUser = async (
    firstName,
    lastName,
    email,
    phoneNumber,
    imageUrl,
    country,
    city,
    street,
    streetNumber) => {
    const address = {
        country,
        city,
        street,
        streetNumber
    }
    const response = await fetch('http://localhost:3005/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, imageUrl, address })
    });
    const res = await response.json()
    return res.user
}

export const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:3005/api/users/${id}`, {
        method: 'DELETE'
    });
    const res = await response.json()
    return res
}

export const editUser = async (
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    imageUrl,
    country,
    city,
    street,
    streetNumber) => {
    const address = {
        country,
        city,
        street,
        streetNumber
    }
    const response = await fetch(`http://localhost:3005/api/users/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, imageUrl, address })
    });
    const res = await response.json()
    return res.user
}
