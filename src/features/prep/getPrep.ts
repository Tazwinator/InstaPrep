import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IFormInput from "../../app/models/IFormInput";

function CreateMessage(formData: IFormInput) {
    return `I need a meal plan for the week, in as muhc detail as possible. 
    It has to be around ${formData.calories} calories. 
    I'm allergic to ${formData.allergy}. 
    I'm currently on a ${formData.diet} diet. 
    I would like ${formData.meals} meals per day and (system:post:5) to snacks. 
    And I live in ${formData.location}.`;
}

const getPrep = createAsyncThunk("getPrep", async (formData: IFormInput, { rejectWithValue }) => {
    try {
        const messages = [{ role: "user", content: CreateMessage(formData) }];

        // GPT Options
        const options: any = {
            temperature: 0.8,
            max_tokens: Number(import.meta.env.VITE_GPT_MAX_TOKENS),
        };
        console.log(Number(import.meta.env.VITE_GPT_MAX_TOKENS));
        const openai = axios.create({
            baseURL: "https://api.openai.com/v1",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
            },
        });

        console.log(messages);

        // Request
        const response = await openai.post("/chat/completions", {
            model: options.model || "gpt-3.5-turbo",
            messages,
            ...options,
        });

        // Response
        const responseMessage = response.data.choices[0].message.content;

        console.log(responseMessage);

        return responseMessage;
    } catch (error: any) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export default getPrep;
