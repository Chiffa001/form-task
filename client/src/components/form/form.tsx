import { Box, Button, TextField, Typography } from "@mui/material";
import { InputMask } from "constants/masks";
import { SyntheticEvent, useState } from "react";
import ReactInputMask from "react-input-mask";

import styles from "./form.module.scss";

export const Form = () => {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const inputHandlerCreator =
        (handler: (value: string) => void) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            handler(e.target.value);
        };

    return (
        <Box className={styles.form} component="form" onSubmit={submitHandler}>
            <Box className={styles.wrapper}>
                <Typography variant="h4" component="h1">
                    Некая форма
                </Typography>
                <ReactInputMask
                    value={phone}
                    onChange={inputHandlerCreator(setPhone)}
                    mask={InputMask.phone}
                >
                    <TextField className={styles.input} />
                </ReactInputMask>
                <TextField
                    className={styles.input}
                    value={email}
                    onChange={inputHandlerCreator(setEmail)}
                />
                <Button
                    className={styles.button}
                    type="submit"
                    variant="contained"
                >
                    Отправить
                </Button>
            </Box>
        </Box>
    );
};
