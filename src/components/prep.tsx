import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../app/hooks";
import { Typography } from "@mui/material";

export default function Prep() {
    const prepState = useAppSelector((state) => state.prep);

    let message: string;
    let messageArray: string[] = [];
    if (prepState.message != null && prepState.loading == false) {
        message = prepState.message.slice(1, -1);
        messageArray = message.split("\\n");
    } else {
        message = prepState.message;
    }

    return (
        <Grid container spacing={2}>
            <Grid xs={8} lg={4} xsOffset={2} lgOffset={4}>
                {messageArray.map((subStr) => {
                    return (
                        <Typography key={1}>
                            {subStr}
                            <br />
                        </Typography>
                    );
                })}
            </Grid>
        </Grid>
    );
}
