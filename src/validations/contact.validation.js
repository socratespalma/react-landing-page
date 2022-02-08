import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters at least')
    .max(10, 'Must be 10 characters or less')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Must be 2 characters at least')
    .max(10, 'Must be 10 characters or less')
    .required('Last name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  message: Yup.string()
    .min(10, 'Must be 10 characters at least')
    .max(250, 'Must be 250 characters or less')
    .required('Message is required')
});

export default contactSchema;
