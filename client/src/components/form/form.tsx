import { Box, Button, TextField, Typography } from "@mui/material";
import { InputMask } from "constants/masks";
import { FC } from "react";
import ReactInputMask from "react-input-mask";
import { Formik } from "formik";
import { User, UserRequestBody } from "types/user";

import styles from "./form.module.scss";

type Props = {
    onSubmit: (
        user: UserRequestBody
    ) => Promise<{ data: User[] } | { error: unknown }>;
};

export const Form: FC<Props> = ({ onSubmit }) => {
    const submitHandler = ({ email, number }: UserRequestBody) => {
        onSubmit({
            email,
            number: number?.replace(/\D/g, "") || undefined,
        });
    };

    return (
        <Formik
            initialValues={{ number: "", email: "" }}
            validate={(values) => {
                const errors = {} as Record<
                    keyof typeof values,
                    string | undefined
                >;

                if (!values.email) {
                    errors.email = "Required";
                } else if (!InputMask.email.test(values.email)) {
                    errors.email = "Invalid email address";
                }

                const number = values.number?.replace(/\D/g, "") || null;

                if (number && number.length !== 6) {
                    errors.number =
                        "The phone number must consist of 6 numbers";
                }

                return errors;
            }}
            onSubmit={submitHandler}
        >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                <Box
                    className={styles.form}
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h4" component="h1">
                        Некая форма
                    </Typography>
                    <TextField
                        className={styles.input}
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Email"
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                    <ReactInputMask
                        value={values.number}
                        name="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        mask={InputMask.phone}
                    >
                        <TextField
                            className={styles.input}
                            error={Boolean(errors.number)}
                            label="Phone number"
                            helperText={errors.number}
                        />
                    </ReactInputMask>
                    <Button
                        className={styles.button}
                        type="submit"
                        variant="contained"
                    >
                        Отправить
                    </Button>
                </Box>
            )}
        </Formik>
    );
};
