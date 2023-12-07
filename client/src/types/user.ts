export type User = {
    email: string;
    number: string;
};

export type UserRequestBody = Omit<User, "number"> & {
    number?: string;
};
