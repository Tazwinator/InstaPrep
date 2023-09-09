import { useAppDispatch } from "../app/hooks";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import getPrep from "../features/prep/getPrep";
import IFormInput from "../app/models/IFormInput";

// Select Data
import allergies from "../assets/allergies";
import calories from "../assets/calories";
import countries from "../assets/countries";
import diets from "../assets/diets";
import meals from "../assets/meals";

export default function PrepForm() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) =>
        dispatch(getPrep(data));

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
                            select
                            defaultValue="1000"
                            SelectProps={{
                                native: true,
                            }}>
                            {calories.map((calorie) => (
                                <option
                                    key={calories.indexOf(calorie)}
                                    value={calorie}>
                                    {calorie}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <p>What are you Allergic to?</p>
                        <TextField
                            {...register("allergy", {
                                required: true,
                            })}
                            fullWidth
                            select
                            defaultValue="None"
                            SelectProps={{
                                native: true,
                            }}>
                            {allergies.map((allergy) => (
                                <option
                                    key={allergies.indexOf(allergy)}
                                    value={allergy}>
                                    {allergy}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <p>Are you on a specific diet?</p>
                        <TextField
                            {...register("diet", { required: true })}
                            fullWidth
                            select
                            defaultValue="No"
                            SelectProps={{
                                native: true,
                            }}>
                            {diets.map((diet) => (
                                <option key={diets.indexOf(diet)} value={diet}>
                                    {diet}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <p>How many meals per day would you like?</p>
                        <TextField
                            {...register("meals", { required: true })}
                            fullWidth
                            select
                            defaultValue="1"
                            SelectProps={{
                                native: true,
                            }}>
                            {meals.map((meal) => (
                                <option key={meals.indexOf(meal)} value={meal}>
                                    {meal}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <p>Would you like to have snacks?</p>
                        <TextField
                            {...register("snacks", { required: true })}
                            fullWidth
                            select
                            defaultValue="1"
                            SelectProps={{
                                native: true,
                            }}>
                            <option key={0} value={"Yes"}>
                                Yes
                            </option>
                            <option key={1} value={"No"}>
                                No
                            </option>
                        </TextField>
                    </div>
                    <div>
                        <p>Where are you from?</p>
                        <TextField
                            {...register("location", {
                                required: true,
                            })}
                            fullWidth
                            select
                            defaultValue="United Kingdom of Great Britain and Northern Ireland (the)"
                            SelectProps={{
                                native: true,
                            }}>
                            {countries.map((country) => (
                                <option
                                    key={countries.indexOf(country)}
                                    value={country}>
                                    {country}
                                </option>
                            ))}
                        </TextField>
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
