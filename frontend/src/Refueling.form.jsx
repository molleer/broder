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

const RefuelingForm = ({ users, onSubmit }) => {
  const [user, setUser] = useState();
  const [cost, setCost] = useState("");
  const [liters, setLiters] = useState("");
  return (
    <Card
      style={{
        display: "flex",
        width: "17rem",
        marginTop: "2rem",
        paddingLeft: "1rem",
        paddingRight: "2rem",
        paddingBottom: "1rem"
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">Tankning</Typography>
        </CardContent>
        <FormControl
          fullWidth
          component="form"
          style={{ justifyContent: "center" }}
        >
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
            label="Hur mycket har du tankat för? [SEK]"
            onChange={event => setCost(event.target.value)}
            value={cost}
          />
          <TextField
            label="Hur många liter har du tankat?"
            onChange={event => setLiters(event.target.value)}
            value={liters}
          />
          <Button
            style={{ marginTop: "1rem" }}
            variant="contained"
            color="primary"
            onClick={() =>
              onSubmit({
                user: user,
                const_sek: Number(cost),
                amount_liters: Number(liters)
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

export default RefuelingForm;
