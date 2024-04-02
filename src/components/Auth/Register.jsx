import React, { useEffect, useState } from 'react';
import HomeImg from '../../img/rent2.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

const ErrorMessage = styled.div`
    font-family: 'Playfair Display', serif;
    text-align:right;
    color: red;
    font-size: 0.8rem;
    // margin-top: 0.5rem;
    float:right;
`;

export const Register = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "Gender": "",
        "Email": "",
        "contact_number": "",
        "Password": "",
        "Role": "",
        "Address": "",
        "valid_key": "",
    });
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        Gender: '',
        Email: '',
        contact_number: '',
        Password: '',
        Role: '',
        Address: '',
        valid_key: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

        validateField(name, value);
    }

    function login() {
        navigate("/auth/login")
    }

    const validateField = (fieldName, value) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'first_name':
                if (!value.match(/^[a-zA-Z ]{3,}$/)) {
                    errorMessage = 'character only and greater than 2 char.';
                }
                break;
            case 'last_name':
                if (!value.match(/^[a-zA-Z ]{3,}$/)) {
                    errorMessage = 'character only and greater than 2 char.';
                }
                break;
            case 'Email':
                if (!value.match(/^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/)) {
                    errorMessage = 'Invalid email address';
                }
                break;
            case 'contact_number':
                if (!value.match(/^[0-9]{10}$/)) {
                    errorMessage = 'Invalid contact number';
                }
                break;
            case 'Password':
                if (value.length < 6) {
                    errorMessage = 'At least 6 characters';
                }
                break;
            case 'Gender':
                if (value !== 'male' && value !== 'femele' && value !== 'other') {
                    errorMessage = 'character only and greater than 2 char.';
                }
                break;
            case 'Role':
                if (value !== 'owner' && value !== 'admin' && value !== 'customer') {
                    errorMessage = 'Invalid role';
                }
                break;
            default:
                break;
        }

        setErrors({ ...errors, [fieldName]: errorMessage });
        console.log("heeeeelloooo", errors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.first_name === '' && user.last_name === '' && user.email === '' && user.contact_number === '' && user.password === '' && user.gender === '' && user.address === '' && user.role === '') {
            window.alert('Please fill the details..')
        } else {
            try {

                Object.keys(user).forEach((fieldName) => {
                    validateField(fieldName, user[fieldName]);
                });
                // If no errors, submit the form
                if (Object.values(errors).every((error) => error === '')) {
                    console.log("+++___===", user)
                    const res = await axios.post(
                        'http://localhost:8080/auth/register', user,
                        {
                            headers: {
                                'Content-Type': 'application/json'

                            }
                        }
                    );
                    localStorage.setItem('token', res.data.token);
                    console.log('res', res.data);
                    navigate('/auth/login');
                    setUser({
                        first_name: '',
                        last_name: '',
                        Gender: '',
                        Email: '',
                        contact_number: '',
                        Password: '',
                        Role: '',
                        Address: '',
                        valid_key: '',
                    });

                }
            } catch (err) {
                window.alert('Error: ' + err.response.data.error);
                console.error('Error:', err);
            }
        }
    };


    useEffect((e) => {
        console.log(user);
        setUser(user)
    }, [user])


    return (
        <div className="bg-gradient-to-b from-white to-red-200 py-12">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="lg:w-1/2">
                        <img src={HomeImg} alt="shipping-box" className="w-3/4" />
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <div className="w-auto mx-auto rounded-lg shadow-md p-8">
                            <h1 className='text-center'>Register</h1>
                            <hr className="bg-gray-400 mb-6" />

                            <form method='post' id="regForm" className="transform translate-x-0 transition-transform duration-1000 text-black">
                                <div className='grid grid-cols-2 gap-4'>
                                    <input type="text" name="first_name" placeholder="First Name" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" value={user.first_name} onChange={(e) => handleChange(e)} />
                                    {/* <ErrorMessage>
                                        {errors.first_name}
                                    </ErrorMessage> */}
                                    <input type="text" name="last_name" placeholder="Last Name" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" value={user.last_name} onChange={(e) => handleChange(e)} />
                                    {/* <ErrorMessage>
                                        {errors.last_name}
                                    </ErrorMessage> */}
                                    <input type="email" name="Email" placeholder="Email" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" value={user.Email} onChange={(e) => handleChange(e)} />
                                    {/* <ErrorMessage>
                                        {errors.email}
                                    </ErrorMessage> */}
                                    <input type="number" name="contact_number" placeholder="Contact Number" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" maxLength={10} value={user.contact_number} onChange={(e) => handleChange(e)} />
                                    {/* <ErrorMessage>
                                        {errors.contact_number}
                                    </ErrorMessage> */}
                                    <input type="password" name="Password" placeholder="Password" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" value={user.Password} onChange={(e) => handleChange(e)} />
                                    {/* <ErrorMessage>
                                        {errors.password}
                                    </ErrorMessage> */}
                                    {/* <input type="text" name="gender" placeholder="Gender" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" value={user.gender} onChange={(e) => handleChange(e)} /> */}
                                    <select type="text" name="Gender" value={user.Gender} onChange={(e) => handleChange(e)} id="underline_select" class="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4 peer">
                                        <option value="">Select your Gender</option>
                                        <option value="male" className='text-black'>male</option>
                                        <option value="femele">femele</option>
                                        <option value="other">other</option>
                                    </select>
                                    <input type="text" name="Address" placeholder="Address" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" value={user.Address} onChange={(e) => handleChange(e)} />
                                    <select name="Role" id="role" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4 tex-gray-100" value={user.Role} onChange={(e) => handleChange(e)} required >
                                        <option value="">Select your Role</option>
                                        <option value="owner">Owner</option>
                                        <option value="admin">Admin</option>
                                        <option value="customer">Customer</option>
                                    </select>
                                    {/* <input type="text" placeholder="Role" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" /> */}
                                    {user.Role === "owner" || user.Role === "admin" ?
                                        <>
                                            <input type="text" name="valid_key" placeholder="Valid key" value={user.valid_key} onChange={(e) => setUser({ ...user, valid_key: e.target.value })} required />
                                        </>
                                        :
                                        <></>
                                    }
                                    {/* <span>
                                        <input type="text" placeholder="Valid Key" className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4" value={user.valid_key} onChange={(e) => handleChange(e)} />
                                    </span> */}
                                </div>
                                <button type="submit" onClick={handleSubmit} className="w-full h-10 bg-[#FF9933] text-white font-bold py-2 rounded-lg hover:bg-[#FF7722]">Register</button>
                                <div className="flex justify-center mb-8">
                                    <span className="mr-4 font-bold text-gray-400">Existing customer? <button className='text-gray-600' onClick={() => login()}>Login</button></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}