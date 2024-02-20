import React, { useState } from "react";
import Card from "../card";
import { CardType } from "../../pages/home/types";
import Input from "../input";

interface BoardProps {
    title: string;
    boardIndex: number;
    cards: CardType[];
    onAddCardPress: (cardName: string, boardIndex: number) => void;
    onDeletePress: () => void;
    rearrangeCards: (newCardArray: CardType[], boardIndex: number) => void;
}

const Board: React.FC<BoardProps> = ({ title, boardIndex, cards, onAddCardPress, onDeletePress, rearrangeCards }) => {

    const [newCard, setNewCard] = useState<string>('');

    const [draggingItem, setDraggingItem] = useState<CardType | null>(null);
    // const [targetIndexState, setTargetIndexState] = useState<number>(-1);


    const onAddCard = () => {
        if (newCard.length < 1) return;
        onAddCardPress(newCard, boardIndex);
        setNewCard('');
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: CardType) => {
        e;

        setDraggingItem(item);
    };

    const handleDragEnd = () => {
        setDraggingItem(null);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetItem: CardType) => {
        e;
        if (!draggingItem) return;

        const currentIndex = cards.indexOf(draggingItem);
        const targetIndex = cards.indexOf(targetItem);
        // setTargetIndexState(targetIndex);

        if (currentIndex !== -1 && targetIndex !== -1) {
            const remainingArray = [...cards];
            remainingArray.splice(currentIndex, 1);
            remainingArray.splice(targetIndex, 0, draggingItem);
            rearrangeCards(remainingArray, boardIndex);
        }
    };

    return (
        <div className="flex flex-col justify-start p-2 mx-2 min-w-72 border border-slate-300 rounded-md">
            <p className="text-xl font-semibold py-2 mb-4">{title}</p>
            {cards.map((item, index) => (
                <div
                    key={index}
                    className=
                    {`item ${item === draggingItem ?
                        'dragging' : ''
                        }`}
                    draggable="true"
                    onDragStart={(e) =>
                        handleDragStart(e, item)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, item)}
                >
                    {/* {targetIndexState === index ? (
                        <div className="h-1 bg-slate-500 w-full rounded-md" />
                    ) : null} */}

                    <Card title={item.title} description={item.description} />
                </div>
            ))}
            <Input value={newCard} onChange={(e) => setNewCard(e.target.value)} />
            <button className="mt-2 py-1 bg-slate-700 hover:bg-slate-500 active:bg-slate-900 w-full text-white rounded-md" onClick={onAddCard}>+</button>
            <button className="mt-2 py-2 bg-red-700 hover:bg-red-500 active:bg-red-900 w-full text-white rounded-md" onClick={onDeletePress}>Delete</button>
        </div>
    );
};

export default Board;