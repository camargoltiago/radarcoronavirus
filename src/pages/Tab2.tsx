import React from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
  IonIcon
} from '@ionic/react';
import { bug } from 'ionicons/icons';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='danger'>
          <IonTitle>Informações</IonTitle>
          <IonIcon slot='end' size='large' />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={bug} size='small' />
              {''} Sintomas
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Febre, Espirros, Tosse, Coriza e Falta de ar.</p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={bug} size='small' />
              {''} Transmissão
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Contato com objetos ou superfícies contaminadas, seguido de
              contato com a boca, nariz ou olhos;
            </p>
            <br />
            <p>Contato pessoal próximo, como toque ou aperto de mão;</p>
            <br />
            <p>Tosse;</p>
            <br />
            <p>Espirro;</p>
            <br />
            <p>Contato com secreções respiratórias.</p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={bug} size='small' />
              {''} Prevenção
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Lavar as mãos com frequência;</p>
            <br />
            <p>Usar máscara de proteção adequadamente;</p>
            <br />
            <p>Verificar sua temperatura regularmente;</p>
            <br />
            <p>Evitar grandes multidões;</p>
            <br />
            <p>Nunca toque seu rosto com as mãos sujas.</p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={bug} size='small' />
              {''} Tem Cura?
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Mesmo sem haver tratamentos específicos para o vírus, a grande
              maioria das pessoas contaminadas evolui para a cura. Mas, apesar
              dessa informação, não se pode diminuir a gravidade das
              complicações que esse vírus pode trazer, já que os sintomas são
              muito agressivos para o corpo. O tratamento para as doenças
              causadas pelo vírus, por enquanto, ainda é o de suporte, ou seja,
              o foco é o tratamento dos sintomas da infecção, como a febre e a
              tosse.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
