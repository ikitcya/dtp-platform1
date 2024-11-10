import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Ласкаво просимо на нашу платформу!</h2>
        <p>Тут ви можете оформити ДТП по Євро-протоколу.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
