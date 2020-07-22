import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button
} from "@material-ui/core";

const DrivingForm = ({ users, onSubmit }) => {
  const [user, setUser] = useState();
  const [distance, setDistance] = useState("");
  return (
    <Card
      style={{
        display: "flex",
        width: "15rem",
        marginTop: "2rem",
        marginRight: "2rem",
        paddingLeft: "1rem",
        paddingBottom: "1rem"
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">Körning</Typography>
        </CardContent>
        <FormControl component="form" style={{ justifyContent: "center" }}>
          <FormLabel component="legend">Vem?</FormLabel>
          <RadioGroup
            arial-label="Vem?"
            name="vem"
            value={user}
            onChange={event => setUser(event.target.value)}
          >
            {users.map(e => (
              <FormControlLabel
                value={e}
                key={e}
                control={<Radio />}
                label={e}
              />
            ))}
          </RadioGroup>
          <TextField
            label="Hur långt har du åkt? [Nm]"
            onChange={event => setDistance(event.target.value)}
            value={distance}
          />
          <Button
            style={{ marginTop: "1rem" }}
            variant="contained"
            color="primary"
            onClick={() =>
              onSubmit({
                user: user,
                distance_nm: Number(distance)
              })
            }
          >
            Skicka!
          </Button>
        </FormControl>
      </CardActionArea>
    </Card>
  );
};

export default DrivingForm;
