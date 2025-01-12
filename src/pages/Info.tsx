import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Info: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Подача електронного європротоколу</h2>
        <p>Оформлення документів про дорожньо-транспортну пригоду без участі уповноважених на те працівників Державтоінспекції МВС України</p>
        
        <h3>Опис послуги</h3>
        <p>Європротокол – це форма повідомлення страховика про дорожньо-транспортну пригоду, яка дозволяє оформити ДТП без виклику поліції.</p>
        
        <h4>Європротоколом можна скористатися за таких умов:</h4>
        <ul>
          <li>відсутні травмовані (загиблі) люди,</li>
          <li>водії-учасники ДТП мають поліси автоцивільної відповідальності,</li>
          <li>наявна згода водіїв транспортних засобів - учасників ДТП щодо її обставин,</li>
          <li>у водіїв відсутні ознаки алкогольного, наркотичного чи іншого сп'яніння або перебування під впливом лікарських препаратів.</li>
        </ul>
        <p>У разі невиконання хоча б однієї з зазначених умов, виклик відповідного підрозділу Національної поліції для оформлення ДТП є обов’язковим.</p>
        
        <h4>Додаткові умови для застосування системи «Електронний європротокол»:</h4>
        <ul>
          <li>транспортні засоби обох учасників ДТП повинні мати чинні поліси внутрішнього страхування. Якщо будь-який ТЗ забезпечений полісом іноземного страховика, необхідно використовувати паперовий бланк Європротоколу або викликати поліцію.</li>
          <li>Водії повинні мати при собі справні мобільні телефони з фотокамерою та доступом в Інтернет.</li>
          <li>Ідентифікаційні дані про страхувальника (коди ІНПП або ЄДРПОУ) та про забезпечений транспортний засіб (номерний знак, марку та модель) мають бути зазначені в полісі та коректно внесені в єдину централізовану базу даних МТСБУ.</li>
        </ul>
        <p>Якщо водії скористались Європротоколом, то вони:</p>
        <ul>
          <li>мають право залишити місце ДТП,</li>
          <li>звільняються від обов'язку інформувати відповідний підрозділ Національної поліції України про настання ДТП,</li>
          <li>звільняються від адміністративної відповідальності, передбаченої за спричинення ДТП.</li>
        </ul>
        <p>Важливо пам’ятати, що при оформленні Європротоколу страхове відшкодування є додатково лімітованим. Наразі відповідно до Розпорядження Нацкомфінпослуг від 29.12.2016 №3471, такий ліміт становить 50 000 грн.</p>
        
        <h4>Спосіб електронної ідентифікації: Відсутній</h4>
        <h4>Як отримати послугу?</h4>
        <p>Заповнити електронну форму</p>
        
        <h4>Вартість послуг</h4>
        <p>Безоплатно</p>
        
        <h4>Результат послуги</h4>
        <p>Отримання інформації з Єдиної централізованої бази даних МТСБУ</p>
        
        <h4>Відповідальний орган</h4>
        <p>Моторне (транспортне) страхове бюро України</p>
        
        <h4>Нормативна база</h4>
        <p>Закон України “Про обов’язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів”</p>
      </main>
      <Footer />
    </div>
  );
};

export default Info;
