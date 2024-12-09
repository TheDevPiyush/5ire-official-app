"use client"
import React, { useState } from "react";
import './login.scss'
import Image from "next/image";
import Input from "../components/formInput";
import Button from "../components/formButton";
import Link from "next/link";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleWalletIDChange = (e) => {
        setWalletID(e.target.value)
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Section - Only visible on larger screens */}
            <div className="hidden lg:flex lg:w-[65%] text-white justify-end p-6 login-page-background-image">
            </div>
            <div className="hidden lg:flex flex-col w-[30%]" style={{ position: 'absolute', right: '40%', top: "4%" }}>
                <h1 className="text-4xl font-bold text-white">
                    Third-party risk and attack surface management software
                </h1>
                <p className="mt-4 text-gray-300 text-base">
                    Protect your organization with cutting-edge tools to identify, mitigate, and monitor vulnerabilities across your extended digital ecosystem.
                </p>
            </div>

            {/* Right Section - Always visible */}
            <div className="flex-1 transition-all bg-[#E9EFF6] flex items-center justify-center py-5 px-4 flex-col">
                <div className="w-full max-w-md mb-4">

                    <Link href={'/login'} className="text-[#5C5D6D] font-bold md:text-base">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i> Back to Login
                    </Link>
                </div>
                <div className="w-full max-w-md bg-white rounded-lg shadow-md px-10 py-6">

                    <div className="email-login-section">


                        <div className="text-black text-center text-2xl font-bold my-3">Create a New Account</div>

                        <form onSubmit={handleSubmit} className="bg-red-0">
                            <div className="bg-[#F7F7F8] border-transparent rounded-lg login-email-input">
                                <Input
                                    label="EMAIL"
                                    type="email"
                                    placeholder="johndoe@email.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>

                            <div className="my-5 bg-[#F7F7F8] border-transparent rounded-lg  login-password-input">
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="••••••••••"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="bg-[#F7F7F8] border-transparent rounded-lg  login-password-input">
                                <Input
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="••••••••••"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                            </div>

                            <Button
                                className={"mt-4"}
                                text="Create Account"
                                onClick={handleSubmit}
                            />
                        </form>

                        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">

                            <button className="flex items-center transition-all duration-150 hover:opacity-75 font-semibold justify-center space-x-2 text-gray-600 bg-gray-100 py-4 border-transparent px-4 rounded-3xl">
                                <Image alt="googlelogo" src={'/images/google.png'} width={25} height={15} />
                                <span className="text-sm">Log in with Google</span>
                            </button>

                            <button className="flex items-center transition-all duration-150 hover:opacity-75 justify-center space-x-2 font-semibold  text-gray-600 bg-gray-100 py-4 border-spacing-0 px-4 rounded-3xl">
                                <Image alt="gitlogo" src={'/images/github.png'} width={25} height={15} />
                                <span className="text-sm">Log in with GitHub</span>
                            </button>
                        </div>

                        <p className="mt-6 text-center text-gray-600 font-medium">
                            Already have an Account? <Link href="/login" className="text-blue-500 font-bold">Login Here!</Link>
                        </p>
                    </div>
                </div>
                <div className="copyright-text text-[#5C5D6D] float-start w-full max-w-md mt-1 text-sm">
                    © 2024 All Rights Reserved.
                </div>
            </div>
        </div >
    );
};

export default Login;
