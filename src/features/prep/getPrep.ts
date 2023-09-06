import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//const backendURL = "https://api.openai.com/v1/chat/completions";
//   process.env.NODE_ENV !== 'production'
//     ? 'http://127.0.0.1:5000'
//     : import.meta.env.VITE_SERVER_URL

const getPrep = createAsyncThunk(
    "getPrep",
    async (message: string, { rejectWithValue }) => {
        try {
            const messages = [{ role: "user", content: message }];

            const options: any = {
                temperature: 0.8,
                max_tokens: 100,
            };

            const openai = axios.create({
                baseURL: "https://api.openai.com/v1",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
                },
            });

            const response = await openai.post("/chat/completions", {
                model: options.model || "gpt-3.5-turbo",
                messages,
                ...options,
            });

            const responseMessage: object =
                response.data.choices[0].message.content;

            return responseMessage;
        } catch (error: any) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export default getPrep;
