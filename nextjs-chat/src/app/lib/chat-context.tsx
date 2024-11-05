import { useContext, createContext} from "react";
import { ChatObject } from "./types";


export const chatContext = createContext<ChatObject | null>(null);

const useGetChatObject = () => {
    const object = useContext(chatContext);
    if (!object) {
        throw new Error("useGetComplexObject must be used within a Provider");
    }
    return object;
};

export default useGetChatObject;
