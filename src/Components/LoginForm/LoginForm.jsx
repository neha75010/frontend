import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignupWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background: #fce3fe;
  padding-top: 100px;
  display: flex;
`;

const Container = styled.div`
  width: 580px;
  height: 600px;
  background: white;
  margin: auto;
  padding: 40px 60px;
`;

const Title = styled.h1`
  margin: 20px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

const Input = styled.input`
  height: 72px;
  width: 100%;
  padding-left: 20px;
  border: 1px solid #c9c9c9;
  outline: none;
  color: #5c5c5c;
  font-size: 18px;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  height: 72px;
  color: white;
  background: #ff4141;
  margin-top: 30px;
  border: none;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`;

const LoginSignup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3001/login',
      data: inputs
    }).then((response) => {
      console.log(response.headers['authorization']);
      localStorage.setItem('token', response.headers['authorization']);
      navigate('/');
    }).catch((error) => {
      console.error(error);
      alert('Une erreur est survenue lors de la connexion');
    });
  };

  return (
    <LoginSignupWrapper>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={inputs.email}
            onChange={(e) => setInputs({...inputs, email: e.target.value})}
          />
          <Input
            type="password"
            placeholder="Password"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
          />
          <Button type="submit">Continue</Button>
        </Form>
      </Container>
    </LoginSignupWrapper>
  );
};

export default LoginSignup;
