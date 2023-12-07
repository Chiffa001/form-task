import { Container, CssBaseline } from "@mui/material";
import { Form } from "components/form";

import styles from "./app.module.scss";

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" className={styles.app}>
                <Form />
            </Container>
        </>
    );
};
