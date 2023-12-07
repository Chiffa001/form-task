import { Container, CssBaseline } from "@mui/material";
import { MainProvider } from "layers/main-provider";
import { MainContent } from "components/main-content";

import styles from "./app.module.scss";

export const App = () => {
    return (
        <MainProvider>
            <CssBaseline />
            <Container maxWidth="lg" className={styles.app}>
                <MainContent />
            </Container>
        </MainProvider>
    );
};
