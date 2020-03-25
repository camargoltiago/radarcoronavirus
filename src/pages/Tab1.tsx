import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='danger'>
          <IonTitle>Coronavírus</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2 className='align'>Coronavírus no Mundo</h2>
        <div className='align'>
          <Stats url='https://covid19.mathdro.id/api' />
          <CountrySelector />
        </div>
        <p className='align'>Desenvolvido por tiagolc@live.com</p>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
