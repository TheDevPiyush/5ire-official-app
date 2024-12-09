// Input.js
import React from 'react';

const Input = ({ label, type, placeholder, value, onChange, className }) => {
    return (
        <div className={`bg-[#F7F7F8] py-2 border-transparent rounded-lg ${className}`}>
            <label className="text-[#7F8291] ml-4">{label}</label>
            <input
                type={type}
                style={{ fontSize: '1rem' }}
                className="w-full bg-transparent border-transparent outline-transparent text-black font-medium px-4 transition-all duration-300 focus:outline-none focus:border-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
