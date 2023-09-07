import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../app/hooks";
import { Typography } from "@mui/material";

export default function Prep() {
    const prepState = useAppSelector((state) => state.prep);
    let message: string | undefined;
    if (prepState.message != null && prepState.loading == false) {
        message = prepState.message.slice(1, -1);
        // .slice() Removes speech marks
    } else {
        message = prepState.message;
    }

    return (
        <Grid container spacing={2}>
            <Grid xs={8} lg={4} xsOffset={2} lgOffset={4}>
                <Typography variant="body1" align="center">
                    {message}
                </Typography>
            </Grid>
        </Grid>
    );
}
