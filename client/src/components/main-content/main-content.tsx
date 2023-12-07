import { Form } from "components/form";
import { Users } from "components/users";
import { Box, CircularProgress } from "@mui/material";

import { useGetUsersMutation } from "store/services/users-service";
import { User } from "types/user";

import styles from "./main-content.module.scss";

export const MainContent = () => {
    const [getUsers, { data, isSuccess, isLoading }] = useGetUsersMutation();

    return (
        <Box className={styles.mainContent}>
            <Box className={styles.wrapper}>
                <Form onSubmit={getUsers} />
                {isLoading && (
                    <Box className={styles.loader}>
                        <CircularProgress />
                    </Box>
                )}
                {isSuccess && <Users users={data as User[]} />}
            </Box>
        </Box>
    );
};
