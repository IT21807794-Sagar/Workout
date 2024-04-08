import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';

const validationSchema = Yup.object().shape({
  distance: Yup.number().required("Distance is required"),
  pushups: Yup.number().required("Number of pushups is required"),
  weight: Yup.number().required("Weight lifted is required"),
  description: Yup.string().required("Description is required"),
});

const WorkoutUpdate = () => {
  const handleSubmit = (values) => {
    console.log("values", values);
    // Here you can implement logic to handle the submission of workout updates
  };

  const formik = useFormik({
    initialValues: {
      distance: "",
      pushups: "",
      weight: "",
      description: ""
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div>
      <h1>Workout Update</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Distance (in km):</label>
          <input
            type="number"
            name="distance"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.distance}
          />
          {formik.errors.distance && formik.touched.distance && (
            <span className='text-red-500'>{formik.errors.distance}</span>
          )}
        </div>
        <div>
          <label>Number of Pushups:</label>
          <input
            type="number"
            name="pushups"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pushups}
          />
          {formik.errors.pushups && formik.touched.pushups && (
            <span className='text-red-500'>{formik.errors.pushups}</span>
          )}
        </div>
        <div>
          <label>Weight Lifted (in kg):</label>
          <input
            type="number"
            name="weight"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.weight}
          />
          {formik.errors.weight && formik.touched.weight && (
            <span className='text-red-500'>{formik.errors.weight}</span>
          )}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description && (
            <span className='text-red-500'>{formik.errors.description}</span>
          )}
        </div>
        <Button
          sx={{
            width: "100%",
            borderRadius: "20px",
            paddingY: "8px",
            paddingX: "20px",
            bgcolor: '#1e88e5',
            marginTop: "10px"
          }}
          variant='contained'
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default WorkoutUpdate;
