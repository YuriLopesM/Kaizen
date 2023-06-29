import { ReactNode, createContext, useState } from "react";
import { useAuth } from "../hooks";

interface HeaderTitleContextData {
    title: string;
    handleChangeTitle: (title: string) => void;
}

interface HeaderTitleProviderProps {
    children: ReactNode;
}

export const HeaderTitleContext = createContext({} as HeaderTitleContextData);

export const HeaderTitleProvider = ({ children }: HeaderTitleProviderProps) => {
    const { user } = useAuth();
    const [title, setTitle] = useState(`Bem vindo, ${user?.name}!`)

    const handleChangeTitle = (title: string) => {
        setTitle(title)
    };

    return <HeaderTitleContext.Provider value={{ title, handleChangeTitle }}>{children}</HeaderTitleContext.Provider>;
};