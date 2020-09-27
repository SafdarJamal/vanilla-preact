import { Component } from 'https://unpkg.com/preact@10.4.8/dist/preact.module.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.doSearch(this.state.input).then(hits => this.setState({ list: hits }));
  }

  async doSearch(query) {
    const url = `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=30`;

    const response = await fetch(url);
    const result = await response.json();
    return result.hits;
  }

  render() {
    const { input, list } = this.state;

    return html`
      <div class="app">
        <h1>Hacker News</h1>
        <form type="submit" onSubmit=${this.handleSubmit}>
          <input
            type="text"
            value=${input}
            onChange=${this.handleChange}
            placeholder="Enter your search term"
          />
          <button type="submit">Search</button>
        </form>
        ${list.map(
          item =>
            html`
              <div class="item">
                <a href=${item.url} target="_blank" rel="noopener noreferrer">
                  ${item.title}
                </a>
              </div>
            `
        )}
      </div>
    `;
  }
}

export default App;
