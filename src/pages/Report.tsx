import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportForm from '../components/ReportForm';

const Report: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Оформити ДТП по Євро-протоколу</h2>
        <ReportForm />
      </main>
      <Footer />
    </div>
  );
};

export default Report;
