import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  // static displayName = Home.name;
  const { t } = useTranslation(['translation', 'home']);
  // const getStarted = () => {
  //   props.history.push('/preform');
  //   // console.log("clicked");
  // }

  return (
    <div className="card">
      <img src="https://greenroom-dev.cbre.com/static/media/Start.41ec62c8.svg" height="300px" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h1 className="text-center mb-5">{t('home:title', 'Hello there')}</h1>
        <p className="lead text-center mb-5">{t('home:desc')}</p>
        <div className="m-5">
          <button type="button"
            className="btn btn-success btn-block btn-lg"
            onClick={() => props.history.push('/preform')}>
            {t('home:btnStart')}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
