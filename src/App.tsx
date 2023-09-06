import { useAppDispatch, useAppSelector } from "./app/hooks";
// import { incremented, amountAdded } from "./features/counter/counter-slice"
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Container, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { ResponsiveAppBar } from "./components/navBar";
import getPrep from "./features/prep/getPrep";

// From a tutorial using react-hook-form:: The input fields on the registration pages are connected to
// React Hook Form, which cleanly grabs the input values and returns them in a handleSubmit function:

interface IFormInput {
    calories: string;
    allergies: string;
    diet: string;
    meals: string;
    snacks: string;
    location: string;
}

export default function App() {
    const message = useAppSelector((state) => state.prep.message);

    const { register, handleSubmit } = useForm<IFormInput>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormInput> = () =>
        //data: IFormInput
        dispatch(getPrep("How are you today?"));

    return (
        <div>
            <ResponsiveAppBar />

            <Grid container spacing={2}>
                <Grid xs md lg>
                    <p></p>
                </Grid>
                <Grid xs={4} md={8} lg={4}>
                    <Container>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <p>How many calories per day?</p>
                                <TextField
                                    {...register("calories", {
                                        required: true,
                                    })}
                                    id="standard-required"
                                    defaultValue="1000"
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <p>What are you Allergic to?</p>
                                <TextField
                                    {...register("allergies", {
                                        required: true,
                                    })}
                                    id="standard-required"
                                    defaultValue="1000"
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <p>Are you on a specific diet?</p>
                                <TextField
                                    {...register("diet", { required: true })}
                                    id="standard-required"
                                    defaultValue="1000"
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <p>How many meals per day would you like?</p>
                                <TextField
                                    {...register("meals", { required: true })}
                                    id="standard-required"
                                    defaultValue="1000"
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <p>Would you like to have snacks?</p>
                                <TextField
                                    {...register("snacks", { required: true })}
                                    id="standard-required"
                                    defaultValue="1000"
                                    variant="standard"
                                />
                            </div>
                            <div>
                                <p>Where are you from?</p>
                                <TextField
                                    {...register("location", {
                                        required: true,
                                    })}
                                    id="standard-required"
                                    defaultValue="1000"
                                    variant="standard"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary">
                                Submit
                            </Button>
                        </form>
                    </Container>
                </Grid>
                <Grid xs md lg>
                    <p></p>
                </Grid>
            </Grid>
            <p>{message}</p>
        </div>
    );
}
