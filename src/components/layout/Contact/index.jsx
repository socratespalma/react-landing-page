/* eslint-disable react/button-has-type */
import Textarea from '@components/common/Textarea';
import Textfield from '@components/common/Textfield';
import contactSchema from '@validations/contact.validation';
import { Form, Formik } from 'formik';
import Notiflix from 'notiflix';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <article id="contact" className="contact">
      <h2>
        C<span className="underline">ontact u</span>s
      </h2>
      <p className="subtext">
        By giving you a free audit we prove our potential to truly help your
        company scale and be more profitable by doing what the best in the
        industry are doing.
      </p>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
        validationSchema={contactSchema}
        onSubmit={() => {
          navigate('/success');
          Notiflix.Notify.success('Form submitted successfully');
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <div className="contact__form">
            <Form
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            >
              <Textfield
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <Textfield
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <Textfield
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Textarea
                label="Message"
                name="message"
                placeholder="Enter your message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <button className="reset" type="reset">
                Reset
              </button>
              <button className="submit" type="submit">
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </article>
  );
}
