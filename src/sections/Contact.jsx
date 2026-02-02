import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Section from '../components/Section';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
  font-size: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(0, 245, 255, 0.8);
  }
`;

function Contact({ id }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2lq6bch",
      "template_2cxvasz",
      e.target,
      "HaVMFW383yRF1vdjX"
    ).then((result) => {
        console.log(result.text);
        alert("Message sent successfully 🚀");
    }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
    });

    e.target.reset();
  };

  return (
    <Section id={id} title="Contact Me">
      <FormContainer onSubmit={sendEmail}>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormContainer>
    </Section>
  );
}

export default Contact;
