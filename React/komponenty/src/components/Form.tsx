import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Pole imię jest wymagane';
      valid = false;
    }

    if (formData.email.trim() === '') {
        newErrors.email = 'Pole email jest wymagane';
        valid = false;
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Pole wiadomość jest wymagane';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Dane formularza:', formData);
    }
  };

  return (
    <div>
      <h2>Formularz kontaktowy</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>Wiadomość:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default ContactForm;
