import React from 'react';
import { useTranslation } from 'react-i18next';

const Preform = (props) => {
    const displayName = Preform.name;
    const { t } = useTranslation(['translation', 'preform']);
  
    return (
        <div className="card">
            <div className="card-body">
                <div class="row">
                    <div class="col-md-6 offset-md-3 col-sm-12">
                        <h2 className="text-center mb-5">{t('preform:title')}</h2>
                        <div className="mb-3">
                            <div className="custom-control custom-radio">
                                <input type="radio" id="describe1" name="describe" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="describe1">{t('preform:radioLabels:interested')}</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="describe2" name="describe" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="describe2">{t('preform:radioLabels:accepted')}</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="describe3" name="describe" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="describe3">{t('preform:radioLabels:already')}</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstname">{t('preform:inputs:firstname:label')}</label>
                            <input type="test" className="form-control" id="firstname" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">{t('preform:inputs:lastname:label')}</label>
                            <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">{t('preform:inputs:lastname:helpText')}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="regcode">{t('preform:inputs:email:label')}</label>
                            <input type="email" className="form-control" id="regcode" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">{t('preform:inputs:email:helpText')}</small>
                        </div>
                        <div className="m-5">
                            <button type="button" className="btn btn-success btn-block btn-lg">{t('preform:btn')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  export default Preform;
