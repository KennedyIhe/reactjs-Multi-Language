import React, { Component } from 'react';

export class Translate extends Component {
  static displayName = Translate.name;

  constructor(props) {
    super(props);
    this.state = { text: '', translations: [] };
    this.translateText = this.translateText.bind(this);
  }

  translateText() {
    var data = new FormData();
    data.append("model", JSON.stringify({ Text: this.state.text, Lang: 'en' }));
    if (this.state.text) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Text: this.state.text, Lang: 'en' })
    };
    fetch('https://localhost:44330/api/SampleData/translate', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({ translations: data || [] });
        });
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
    this.setState({ translations: [] });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2>Translate API</h2>
          <div className="form-group">
            <label htmlFor="translateText">Enter English Text to Translate</label>
            <input type="text" className="form-control" id="translateText" onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary" onClick={this.translateText}>Translate</button>
          {this.state.translations.map(t =>
            <p><strong>{t.to}</strong> : {t.text}</p>
          )}
        </div>

      </div>
    );
  }
}
