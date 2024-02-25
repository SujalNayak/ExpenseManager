//get marks of 5 subjects

import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { Box, Rating, TextField } from "@mui/material";

export const RatingDemo = () => {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const labels = {
        0.5: "Useless",
        1: "Useless+",
        1.5: "Poor",
        2: "Poor+",
        2.5: "Ok",
        3: "Ok+",
        3.5: "Good",
        4: "Good+",
        4.5: "Excellent",
        5: "Excellent+",
    };
    const getLabelText = (value) => {
        return labels[value];
    }

    const [subject, setSubject] = React.useState({
        physics: 0,
        chemistry: 0,
        maths: 0,
        english: 0,
        computer: 0
    });



    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Physics"
                variant="outlined"
                subject={subject.physics}
            />
            <br />
            <br />
            <TextField
                id="outlined-basic"
                label="Chemistry"
                variant="outlined"
                subject={subject.chemistry}
            />
            <br />
            <br />
            <TextField
                id="outlined-basic"
                label="Maths"
                variant="outlined"
                subject={subject.maths}
            />
            <br />
            <br />
            <TextField
                id="outlined-basic"
                label="English"
                variant="outlined"
                subject={subject.english}
            />
            <br />
            <br />
            <TextField
                id="outlined-basic"
                label="Computer"
                variant="outlined"
                subject={subject.computer}
            />

            <br />
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
            />
            {value === (subject.physics + subject.chemistry + subject.maths + subject.english) && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ]}</Box>
            )}
        </div>
    );
};
