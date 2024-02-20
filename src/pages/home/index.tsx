import React, { useState } from "react";
import Board from "../../components/board";
import { BoardType, CardType } from "./types";
import Input from "../../components/input";

const Home: React.FC = () => {
  const [boards, setBoards] = useState<BoardType[]>([
    {
      title: 'Board 1',
      cards: []
    },
    {
      title: 'Board 2',
      cards: [
        {
          title: 'Card 1',
          description: 'This is a sample description'
        },
        {
          title: 'Card 2'
        },
        {
          title: 'Card 3',
          description: 'This is a sample description 3'
        },
        {
          title: 'Card 4',
          description: 'This is a sample description 4'
        },
      ]
    },
    {
      title: 'Board 3',
      cards: []
    },
    {
      title: 'Board 4',
      cards: [
        {
          title: 'Card 1'
        },
        {
          title: 'Card 2'
        }
      ]
    },

  ]);

  const [newBoard, setNewBoard] = useState<string>('');

  const onAddBoard = () => {
    if (newBoard.length < 1) return;
    setBoards([
      ...boards,
      {
        title: newBoard,
        cards: []
      }
    ]);
    setNewBoard('');
  };

  const onAddCardInBoard = (cardName: string, boardIndex: number) => {
    const cardObj: CardType = {
      title: cardName
    };
    const newCardArray = [...boards[boardIndex].cards, cardObj];
    const newBoardArray = boards.map((item, index) => {
      if (index === boardIndex) {
        return {
          title: item.title,
          cards: newCardArray
        }
      } else {
        return item;
      }
    });
    setBoards([...newBoardArray]);
  };

  const onDeleteBoard = (index: number) => {
    const newBoardsArray = [...boards].filter((_item, idx) => idx !== index);
    setBoards([...newBoardsArray]);
  };

  const onRearrangeCards = (newCardsArray: CardType[], boardIndex: number) => {
    const newBoardArray = boards.map((item, index) => {
      if (index === boardIndex) {
        return {
          title: item.title,
          cards: newCardsArray
        }
      } else {
        return item;
      }
    });
    setBoards([...newBoardArray]);
  };

  return (
    <div className="p-4 flex items-start justify-start h-screen w-auto overflow-x-auto pr-20">
      {boards.map((item, index) => (
        <Board
          key={index}
          boardIndex={index}
          title={item.title}
          cards={item.cards}
          onAddCardPress={onAddCardInBoard}
          onDeletePress={() => onDeleteBoard(index)}
          // onDragEnd={handleDragEnd}
          rearrangeCards={onRearrangeCards}
        />
      ))}
      <div className="flex ml-2 w-3/12">
        <Input value={newBoard} onChange={(e) => setNewBoard(e.target.value)} />
        <button className="ml-2 bg-slate-700 hover:bg-slate-500 active:bg-slate-900 w-10 h-10 text-white rounded-md" onClick={onAddBoard}>+</button>
      </div>
    </div>
  );
};

export default Home;
