import React, { Component } from 'react';

export class Preform extends Component {
    static displayName = Preform.name;

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div class="row">
                        <div class="col-md-6 offset-md-3 col-sm-12">
                            <h2 className="text-center mb-5">Hello! Which best describes you?</h2>
                            <div className="mb-3">
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="describe1" name="describe" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="describe1">Interested in CBRE</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="describe2" name="describe" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="describe2">Accepted CBRE job offer</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="describe3" name="describe" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="describe3">Already working for CBRE</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input type="test" className="form-control" id="firstname" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="regcode">Registration Code</label>
                                <input type="email" className="form-control" id="regcode" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">This is a help text</small>
                            </div>
                            <div className="m-5">
                                <button type="button" className="btn btn-success btn-block btn-lg">CONTINUE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getStarted() {

    }
}
