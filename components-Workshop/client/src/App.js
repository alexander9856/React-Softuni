import { useEffect, useState } from 'react'
import * as userService from './services/userService'
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import './App.css'
import { UserList } from "./components/UserList";
function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getUsers()
            .then(users => {
                setUsers(users)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    async function onCreate(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target);
        const { firstName,
            lastName,
            email,
            phoneNumber,
            imageUrl,
            country,
            city,
            street,
            streetNumber
        } = Object.fromEntries(formData);
        const createdUser = await userService.addUser(firstName,
            lastName,
            email,
            phoneNumber,
            imageUrl,
            country,
            city,
            street,
            streetNumber);
        setUsers(state => [...state, createdUser])

    }
    async function onDelete(userId) {
        await userService.deleteUser(userId)
        setUsers(state => state.filter(x => x._id !== userId))

    }
    async function onEdit(id, ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target);
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            imageUrl,
            country,
            city,
            street,
            streetNumber
        } = Object.fromEntries(formData);
        const updatedUser = await userService.editUser(
            id,
            firstName,
            lastName,
            email,
            phoneNumber,
            imageUrl,
            country,
            city,
            street,
            streetNumber
        );
        setUsers(state => state.map(x=> x._id == updatedUser._id ? updatedUser : x))

        // setUsers(state => state.map(x => {
        //     if (x._id == updatedUser._id) {
        //         return updatedUser
        //     }
        //     return x
        // }))



    }
    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList users={users} onCreate={onCreate} onDelete={onDelete} onEdit={onEdit} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App;
