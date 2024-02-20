export type BoardType = {
    title: string;
    cards: CardType[];
}

export type CardType = {
    title: string;
    description?: string;
};