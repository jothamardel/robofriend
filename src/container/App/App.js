import React from 'react';
import { Header } from "../../component/Header/header";
import { CardList } from "../../component/CardList/card-list";
import { SearchBox } from "../../component/SearchBox/search-box";
import { Scroll } from "../../component/Scroll/scroll";
import './App.css';
import ErrorBounday from '../ErrorBoundary/error-boundary';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
      robots: []
    }
  }

  componentDidMount() {
    this.getRobots();
  }

  getRobots = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "get"
    })
    .then(data => data.json())
    .then(robots => this.setState({ robots }))
    .catch(console.log)
  }

  onSearchInput = (event) => {
    event.preventDefault();
    this.setState((prevState, prevProps) => ({ search: event.target.value }));
  }

  resetRobotsData = () => {
    document.querySelector('input').value = "";
    this.setState({ search: "" });
  }

  render() {

    const filteredRobots = this.state.robots.filter(item => item.name.toLowerCase().includes(this.state.search.toLowerCase()));

    return (
      <div className="App tc">
        <Header />
        <SearchBox onSearchInput={ this.onSearchInput } resetRobotsData={this.resetRobotsData}/>
        <Scroll>
          {
            !this.state.robots.length ? <h1 className="light-red">Loading...</h1> :
              <ErrorBounday>
                <CardList robots={ filteredRobots }/>
              </ErrorBounday>
          }
        </Scroll>
      </div>
    );
  }
}

export default App;
