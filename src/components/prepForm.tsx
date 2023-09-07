import { useAppDispatch } from "../app/hooks";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import getPrep from "../features/prep/getPrep";

interface IFormInput {
    calories: string;
    allergies: string;
    diet: string;
    meals: string;
    snacks: string;
    location: string;
}

export default function PrepForm() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormInput> = () =>
        //data: IFormInput
        dispatch(getPrep("How are you today?"));

    return (
        <Grid container spacing={2}>
            <Grid xs={3} md={3} lg={4}></Grid>
            <Grid xs={6} md={6} lg={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p>How many calories per day?</p>
                        <TextField
                            {...register("calories", {
                                required: true,
                            })}
                            fullWidth
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
                            fullWidth
                            id="standard-required"
                            defaultValue="1000"
                            variant="standard"
                        />
                    </div>
                    <div>
                        <p>Are you on a specific diet?</p>
                        <TextField
                            {...register("diet", { required: true })}
                            fullWidth
                            id="standard-required"
                            defaultValue="1000"
                            variant="standard"
                        />
                    </div>
                    <div>
                        <p>How many meals per day would you like?</p>
                        <TextField
                            {...register("meals", { required: true })}
                            fullWidth
                            id="standard-required"
                            defaultValue="1000"
                            variant="standard"
                        />
                    </div>
                    <div>
                        <p>Would you like to have snacks?</p>
                        <TextField
                            {...register("snacks", { required: true })}
                            fullWidth
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
                            fullWidth
                            id="standard-required"
                            defaultValue="1000"
                            variant="standard"
                        />
                    </div>
                    <Button
                        type="submit"
                        color="primary"
                        size="large"
                        fullWidth
                        sx={{ mt: 2 }}>
                        Generate
                    </Button>
                </form>
            </Grid>
            <Grid xs={3} md={3} lg={4}></Grid>
        </Grid>
    );
}
