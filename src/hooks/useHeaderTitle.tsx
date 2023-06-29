import { useContext } from "react";
import { HeaderTitleContext } from "../contexts/HeaderTitleContext";

export const useHeaderTitle = () => {
    return useContext(HeaderTitleContext);
};