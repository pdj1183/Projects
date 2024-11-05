import { SetStateAction } from "react";

export type ChatObject = {
    selected: number;
    setSelected: React.Dispatch<SetStateAction<any>>;
    contacts: string[];
};
