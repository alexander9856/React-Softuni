import { useState } from "react"

export const UserEdit = (
    props
) => {
    const user = props.user
    const [editUser, setEditUser] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        imageUrl: user.imageUrl,
        country: user.address.country,
        city: user.address.city,
        street: user.address.street,
        streetNumber: user.address.streetNumber
    });

    return (
        <div className="overlay">
            <div className="backdrop" onClick={() => props.onClose()}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Edit User/Add User</h2>
                        <button className="btn close" onClick={() => props.onClose()}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={(ev) => props.onEdit(user._id, ev)}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName"></label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={editUser.firstName}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />

                                </div>
                                {props.formErrors.firstName &&
                                    <p className="form-error">
                                        {props.formErrors.firstName}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName"></label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={editUser.lastName}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />
                                </div>
                                {props.formErrors.lastName &&
                                    <p className="form-error">
                                        {props.formErrors.lastName}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        value={editUser.email}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />
                                </div>
                                {props.formErrors.email &&
                                    <p className="form-error">
                                        {props.formErrors.email}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="text"
                                        value={editUser.phoneNumber}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />
                                </div>
                                {props.formErrors.phoneNumber &&
                                    <p className="form-error">
                                        {props.formErrors.phoneNumber}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="text"
                                    value={editUser.imageUrl}
                                    onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                    onBlur={props.validateForm}
                                />
                            </div>
                            {props.formErrors.imageUrl &&
                                <p className="form-error">
                                    {props.formErrors.imageUrl}
                                </p>
                            }
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={editUser.country}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />
                                </div>
                                {props.formErrors.country &&
                                    <p className="form-error">
                                        {props.formErrors.country}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={editUser.city}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />
                                </div>
                                {props.formErrors.city &&
                                    <p className="form-error">
                                        {props.formErrors.city}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input
                                        id="street"
                                        name="street"
                                        type="text"
                                        value={editUser.street}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />
                                </div>
                                {props.formErrors.street &&
                                    <p className="form-error">
                                        {props.formErrors.street}
                                    </p>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input
                                        id="streetNumber"
                                        name="streetNumber"
                                        type="text"
                                        value={editUser.streetNumber}
                                        onChange={(e) => setEditUser(state => ({ ...state, [e.target.name]: e.target.value }))}
                                        onBlur={props.validateForm}
                                    />
                                </div>
                                {props.formErrors.streetNumber &&
                                    <p className="form-error">
                                        {props.formErrors.streetNumber}
                                    </p>
                                }
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Save</button>
                            <button id="action-cancel" className="btn" type="button" onClick={() => props.onClose()}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}