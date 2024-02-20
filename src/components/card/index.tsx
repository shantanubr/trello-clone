import React from "react";

interface CardProps {
    title: string;
    description?: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-start justify-start border border-slate-300 p-4 my-2 rounded-md w-full h-32 cursor-move bg-white">
            <div className="flex items-center justify-between w-full">
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center space-x-2">
                    {/* <p>⬆</p>
                    <p>⬇</p> */}
                </div>
            </div>

            <p className="text-sm font-light text-slate-600">{description}</p>
        </div>
    );
};

export default Card;