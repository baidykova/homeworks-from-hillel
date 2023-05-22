import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import './Form.css';

const validateName = (value) => {
  let error;
  if (!value) {
    error = 'Обов\'язкове поле';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Обов\'язкове поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = 'Некоректний формат електронної пошти';
  }
  return error;
};

const validatePhone = (value) => {
  let error;
  if (!value) {
    error = 'Обов\'язкове поле';
  } else if (!/^\d{12}$/.test(value)) {
    error = 'Некоректний формат номера телефону (потрібно 12 цифр)';
  }
  return error;
};

const App = () => {
  const handleSubmit = (values) => {
    alert('Форма відправлена!');
  };

  return (
    <div className="container">
      <h1>Форма</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ім'я:</label>
              <Field
                type="text"
                id="name"
                name="name"
                validate={validateName}
                className="form-control"
              />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Електронна пошта:</label>
              <Field
                type="email"
                id="email"
                name="email"
                validate={validateEmail}
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Телефон:</label>
              <Field
                type="text"
                id="phone"
                name="phone"
                validate={validatePhone}
                className="form-control"
              />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
            <button type="submit" className="btn btn-primary">Відправити</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
