import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "store";

export const MainProvider: FC<PropsWithChildren> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
