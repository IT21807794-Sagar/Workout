import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import ImageIcon from '@mui/icons-material/Image';
import * as Yup from 'yup';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WorkoutUpdate from '../WorkoutUpdate/WorkoutUpdate';

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [open, setOpen] = useState(false); // State for dialog open/close

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: ""
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div className='space-y-5'>
      <section>
        <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
      </section>
      <section className={'pb-10'}>
        <div className='flex space-x-5'>
          <Avatar
            alt="username"
            altname="username"
            src='/logo512.png'
            style={{ marginRight: '1rem' }}
          />
          <div className="w-full">
            <p>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name='content'
                  placeholder="What is happening"
                  className='border-none outline-none text-xl bg-transparent px-3 py-2 rounded'
                  style={{ width: '100%', maxWidth: '400px' }}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className='text-red-500'>{formik.errors.content}</span>
                )}
              </div>
              <div className='flex justify-between items-center mt-5'>
                <div className='flex space-x-5 items-center'>
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className='text-[#1d9bf0]' />
                    <input
                      type='file'
                      name="imageFile"
                      className='hidden'
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className='text-[#1d9bf0]' />
                  <TagFacesIcon className='text-[#1d9bf0]' />
                  {/* Button to open dialog */}
                  <Button
                    variant="contained"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#1e88e5',
                      minWidth: 'unset',
                      minHeight: 'unset',
                    }}
                    onClick={handleOpenDialog}
                  >
                    <span style={{ fontSize: '12px' }}>+</span>
                  </Button>
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      bgcolor: '#1e88e5',
                    }}
                    variant='contained'
                    type="submit"
                  >
                    Post Workout
                  </Button>
                </div>
              </div>
            </form>
            </p>
          </div>
        </div>
      </section>
      <section className={'pb-10'}>

      </section>
      {/* Dialog for WorkoutUpdate */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Current Workout Update</DialogTitle>
        <DialogContent>
          <WorkoutUpdate />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default HomeSection;
