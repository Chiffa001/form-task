import { Form } from "components/form";
import { Users } from "components/users";
import {
    Alert,
    AlertTitle,
    Box,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";

import { useGetUsersMutation } from "store/services/users-service";
import { User } from "types/user";

import styles from "./main-content.module.scss";
import { ServerError } from "types/error";

export const MainContent = () => {
    const [getUsers, { data, isSuccess, isLoading, isError, error }] =
        useGetUsersMutation();

    return (
        <Box className={styles.mainContent}>
            <Box className={styles.wrapper}>
                <Form onSubmit={getUsers} />
                {isLoading && (
                    <Box className={styles.loader}>
                        <CircularProgress />
                    </Box>
                )}
                {isError && (
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {Array.isArray((error as ServerError).data.message) ? (
                            <List>
                                {(
                                    (error as ServerError).data
                                        .message as string[]
                                ).map((str) => (
                                    <ListItem key={str}>
                                        <ListItemText primary={str} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <Typography>
                                {(error as ServerError).data.message}
                            </Typography>
                        )}
                    </Alert>
                )}
                {isSuccess && <Users users={data as User[]} />}
            </Box>
        </Box>
    );
};
