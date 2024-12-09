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
    const [walletID, setWalletID] = useState('');

    const [selectedTab, setSelectedTab] = useState('email');

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
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold text-black mb-2">
                        Get Started
                    </h2>
                    <p className="text-[#5C5D6D] mb-5 text-sm md:text-base">
                        Choose your account type to Login 👋
                    </p>
                </div>
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-10">

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <button onClick={() => { setSelectedTab("email") }} className={`flex-1 py-2 px-4 transition-all duration-300 hover:opacity-75 
                            ${selectedTab === "email" ? "bg-[#2653CF] text-white font-bold" : 'bg-[#F0F6FE] text-gray-800 '}  rounded-lg `}>
                            Email Login
                        </button>
                        <button onClick={() => { setSelectedTab("wallet") }} className={`flex-1 py-2 px-4 transition-all duration-300 hover:opacity-75
                            ${selectedTab === "wallet" ? "bg-[#2653CF] text-white font-bold" : 'bg-[#F0F6FE] text-gray-800'}  rounded-lg`}>
                            Connect Wallet
                        </button>
                    </div>

                    {selectedTab === "email" ? <div className="email-login-section">


                        <div className="text-black text-2xl font-bold my-3">Login your Account</div>

                        <form onSubmit={handleSubmit} className="bg-red-0">
                            <div className="mb-4 bg-[#F7F7F8] border-transparent rounded-lg login-email-input">
                                <Input
                                    label="EMAIL"
                                    type="email"
                                    placeholder="johndoe@email.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>

                            <div className="bg-[#F7F7F8] border-transparent rounded-lg  login-password-input">
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="••••••••••"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <a href="#" className="text-red-500 float-end font-bold text-sm my-2 block">
                                    Forget Password?
                                </a>
                            </div>

                            <Button
                                text="Get Started"
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
                            Don’t have an account? <Link href="/register" className="text-blue-500 font-bold">Create New</Link>
                        </p>
                    </div>
                        :
                        <div className="wallet flex-1">
                            <Input
                                label={"Wallet ID"}
                                value={walletID}
                                onChange={handleWalletIDChange}
                                placeholder={"••••••••••••••••••••"}
                                type={"text"}
                                className={"my-7"}
                            />

                            <Button
                                className={"my-6"}
                                text="Get Started"
                                onClick={handleSubmit}
                            />
                        </div>
                    }
                </div>
                <div className="copyright-text text-[#5C5D6D] float-start w-full max-w-md mt-1 text-sm">
                    © 2024 All Rights Reserved.
                </div>
            </div>
        </div >
    );
};

export default Login;
