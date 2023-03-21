import { useEffect, useState } from 'react'
import * as userService from './services/userService'
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import './App.css'
import { UserList } from "./components/UserList";
function App() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: ''

    })
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: ''

    })
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
        setUsers(state => state.map(x => x._id == updatedUser._id ? updatedUser : x))

        // setUsers(state => state.map(x => {
        //     if (x._id == updatedUser._id) {
        //         return updatedUser
        //     }
        //     return x
        // }))



    }
    const formChangeHandler = (e) => {
       
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    const validateForm = (e) => {
        const value = e.target.value;
        const errors = {}
        if (e.target.name == 'firstName' && (value.length < 3 || value.length > 20)) {
            errors.firstName = 'First name should be between 3 and 20 characters!'
        }
        if (e.target.name == 'lastName' && (value.length < 3 || value.length > 20)) {
            errors.lastName = 'Last name should be between 3 and 20 characters!'
        }
        if (e.target.name == 'email' && !value.match(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/)) {
            errors.email = 'Email is not valid!'
        }
        if (e.target.name == 'phoneNumber' && (value.length < 10 || !value.match(/^[0-9]+$/))) {
            errors.phoneNumber = 'Phone number is not valid!'
        }
        if (e.target.name == 'imageUrl' && !value.match(/^https?:\/\//)) {
            errors.imageUrl = 'Image url is not valid!'
        }
        if (e.target.name == 'country' && value.length < 2) {
            errors.country = 'Country should be at least 2 characters long!'
        }
        if (e.target.name == 'city' && value.length < 2) {
            errors.city = 'City should be at least 2 characters long!'
        }
        if (e.target.name == 'street' && value.length < 2) {
            errors.street = 'Street should be at least 2 characters long!'
        }
        if (e.target.name == 'streetNumber' && !value.match(/^[0-9]+$/)) {
            errors.streetNumber = 'Street should be a positive number!'
        }


        setFormErrors(errors)
    }
    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList
                        users={users}
                        onCreate={onCreate}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        formValues={formValues}
                        formChangeHandler={formChangeHandler}
                        formErrors={formErrors}
                        validateForm={validateForm}
                        setFormValues={setFormValues}
                    />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App;
