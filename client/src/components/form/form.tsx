import { Box, Button, TextField, Typography } from "@mui/material";
import { InputMask } from "constants/masks";
import { FC, SyntheticEvent, useState } from "react";
import ReactInputMask from "react-input-mask";

import styles from "./form.module.scss";
import { User, UserRequestBody } from "types/user";

type Props = {
    onSubmit: (
        user: UserRequestBody
    ) => Promise<{ data: User[] } | { error: unknown }>;
};

export const Form: FC<Props> = ({ onSubmit }) => {
    const [phone, setPhone] = useState<string | undefined>();
    const [email, setEmail] = useState("");

    const submitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit({
            number: phone?.replace(/\D/g, ""),
            email,
        });
    };

    const inputHandlerCreator =
        (handler: (value: string) => void) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            handler(e.target.value);
        };

    return (
        <Box className={styles.form} component="form" onSubmit={submitHandler}>
            <Typography variant="h4" component="h1">
                Некая форма
            </Typography>
            <TextField
                className={styles.input}
                value={email}
                onChange={inputHandlerCreator(setEmail)}
                required
                label="Email"
            />
            <ReactInputMask
                value={phone}
                onChange={inputHandlerCreator(setPhone)}
                mask={InputMask.phone}
            >
                <TextField className={styles.input} label="Phone number" />
            </ReactInputMask>
            <Button className={styles.button} type="submit" variant="contained">
                Отправить
            </Button>
        </Box>
    );
};
