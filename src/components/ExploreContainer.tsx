import './ExploreContainer.css';

import React from 'react';
import { IonSlides, IonSlide, IonContent,IonButton,IonIcon } from '@ionic/react';

interface ContainerProps { }

const slideOpts = {
    initialSlide: 0,
    speed: 400
};

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
      <IonContent>
          <IonSlides pager={true} options={slideOpts}>
              <IonSlide>
                  <div className="slide">
                      <img src="./slides/slide-1.png"/>
                      <h2>Добре дошъл!</h2>
                      <p>Благодаря, че изтегли мобилното приложение за чат с Ванеса!</p>
                  </div>
              </IonSlide>
              <IonSlide>
                  <div className="slide">
                      <img src="./slides/slide-2.png"/>
                      <h2>Остават само няколко стъпки!</h2>
                      <p><b>Регистрация</b> ще ти помогне да се сближиш с Ванеса по от близо!</p>

                  </div>
              </IonSlide>
              <IonSlide>
                  <div className="slide">
                      <img src="./slides/slide-3.png"/>
                      <h2>Готов си за това?</h2>
                      <IonButton fill="clear">Регистрация <IonIcon slot="end" name="arrow-forward"></IonIcon></IonButton>
                  </div>
              </IonSlide>
          </IonSlides>
      </IonContent>
  );
};

export default ExploreContainer;