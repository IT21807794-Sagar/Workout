import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const validationSchema = Yup.object().shape({
  distance: Yup.number()
    .min(0, 'Distance must be greater than or equal to 0')
    .required('Distance is required'),
  pushups: Yup.number()
    .integer('Number of pushups must be an integer')
    .min(0, 'Number of pushups must be greater than or equal to 0')
    .required('Number of pushups is required'),
  weight: Yup.number()
    .min(0, 'Weight must be greater than or equal to 0')
    .required('Weight is required'),
  workoutDescription: Yup.string().required("Workout description is required"),
});

const WorkoutUpdate = () => {
  const handleSubmit = (values) => {
    console.log("Workout update values", values);
  };

  const formik = useFormik({
    initialValues: {
      distance: "",
      distanceUnit: "km",
      pushups: "",
      weight: "",
      workoutDescription: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          id="distance"
          name="distance"
          label="Distance Ran"
          variant="outlined"
          fullWidth
          value={formik.values.distance}
          onChange={formik.handleChange}
          error={formik.touched.distance && Boolean(formik.errors.distance)}
          helperText={formik.touched.distance && formik.errors.distance}
          InputProps={{
            endAdornment: (
              <TextField
                id="distanceUnit"
                name="distanceUnit"
                select
                value={formik.values.distanceUnit}
                onChange={formik.handleChange}
                size="small"
                style={{ minWidth: '6rem', marginLeft: '0.5rem' }}
              >
                <MenuItem value="km">km</MenuItem>
                <MenuItem value="m">m</MenuItem>
              </TextField>
            ),
          }}
        />
      </div>
      <div>
        <TextField
          id="pushups"
          name="pushups"
          label="Number of Pushups Completed"
          variant="outlined"
          fullWidth
          value={formik.values.pushups}
          onChange={formik.handleChange}
          error={formik.touched.pushups && Boolean(formik.errors.pushups)}
          helperText={formik.touched.pushups && formik.errors.pushups}
          type="number"
          inputProps={{ min: "0" }}
        />
      </div>
      <div>
        <TextField
          id="weight"
          name="weight"
          label="Weight Lifted (kg)"
          variant="outlined"
          fullWidth
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
          type="number"
          inputProps={{ min: "0" }}
        />
      </div>
      <div>
        <TextField
          id="workoutDescription"
          name="workoutDescription"
          label="Workout Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={formik.values.workoutDescription}
          onChange={formik.handleChange}
          error={formik.touched.workoutDescription && Boolean(formik.errors.workoutDescription)}
          helperText={formik.touched.workoutDescription && formik.errors.workoutDescription}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginTop: '1rem' }}
      >
        Save
      </Button>
    </form>
  );
}

export default WorkoutUpdate;
