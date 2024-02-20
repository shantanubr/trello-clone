import React from "react";

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <input type="text" className="border border-slate-300 py-2 px-3 rounded-md" value={value} onChange={onChange} />
    );
};

export default Input;