import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { User } from "types/user";

type Props = {
    users: User[];
};

export const Users: FC<Props> = ({ users }) => {
    return (
        <>
            {users.map(({ email, number }, index) => (
                <Card key={index}>
                    <CardContent>
                        <Typography color="text.secondary">{email}</Typography>
                        <Typography color="text.secondary">{number}</Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};
