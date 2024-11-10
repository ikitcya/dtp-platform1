import React, { useState } from 'react';
import styled from 'styled-components';
import { saveReport } from '../services/storageService';

const FormContainer = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ReportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    driverName: '',
    vehicleNumber: '',
    date: '',
    time: '',
    location: '',
    description: '',
    witness: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveReport(formData);
    console.log('Form Data Saved:', formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" name="driverName" value={formData.driverName} onChange={handleChange} placeholder="Ім'я водія" />
      <Input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} placeholder="Номер транспортного засобу" />
      <Input type="date" name="date" value={formData.date} onChange={handleChange} />
      <Input type="time" name="time" value={formData.time} onChange={handleChange} />
      <Input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Місце події" />
      <TextArea name="description" value={formData.description} onChange={handleChange} placeholder="Опис події" />
      <TextArea name="witness" value={formData.witness} onChange={handleChange} placeholder="Свідки (якщо є)" />
      <Button type="submit">Відправити</Button>
    </FormContainer>
  );
};

export default ReportForm;
