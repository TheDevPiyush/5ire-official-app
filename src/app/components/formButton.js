// Button.js
import React from 'react';

const Button = ({ text, className, onClick }) => {
    return (
        <button
            type="submit"
            className={`w-full bg-[#2653CF] font-bold text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-300 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
