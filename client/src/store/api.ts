import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

type BaseQueryParams = {
    baseUrl: string;
};

let controller: AbortController;

const axiosBaseQuery =
    (
        { baseUrl }: BaseQueryParams = { baseUrl: "" }
    ): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
            headers?: AxiosRequestConfig["headers"];
        },
        unknown,
        unknown
    > =>
    async ({ url, method, data, params, headers }) => {
        if (controller) {
            controller.abort();
        }

        controller = new AbortController();
        const signal = controller.signal;

        try {
            const result = await axios({
                url: baseUrl + url,
                method,
                data,
                params,
                headers,
                signal,
            });
            return { data: result.data };
        } catch (axiosError) {
            const err = axiosError as AxiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    endpoints: () => ({}),
});

export const { reducer, reducerPath, middleware: apiMiddleware } = apiSlice;
