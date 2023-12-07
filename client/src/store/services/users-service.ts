import { apiSlice } from "store/api";
import { UserRequestBody, User } from "types/user";

const userService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.mutation<User[], UserRequestBody>({
            query: (data) => ({
                url: "/users",
                data,
                method: "POST",
            }),
        }),
    }),
});

export const { useGetUsersMutation } = userService;
