import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

export class Home extends Component {
  
  static displayName = Home.name;

  render () {
    // const { t } = useTranslation(['translation', 'home']);
    const { t } = this.props;
    return (
      <div className="card">
        <img src="https://greenroom-dev.cbre.com/static/media/Start.41ec62c8.svg" height="300px" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h1 className="text-center mb-5">{t('home:title')}</h1>
          <p className="lead text-center mb-5">{t('home:desc')}</p>
          <div className="m-5">
              <button type="button" className="btn btn-success btn-block btn-lg" to="/preform" onClick={this.getStarted}>{t('home:btnStart')}</button>
          </div>
        </div>
      </div>
    );
  }

  getStarted = () => {
    this.props.history.push('/preform');
    // console.log("clicked");
  }
}
