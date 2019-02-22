import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolBar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';

class App extends Component {

  state = {
    searchTerm: '',
    restaurantData: null,
    currentResults: null,
    currentIndex: 0
  }

  handleSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearch = () => {
    fetch('http://opentable.herokuapp.com/api/restaurants?city='+this.state.searchTerm)
    .then(response => response.json()).then(json => {
      if (json.restaurants.length === 0) {
        this.setState({
          restaurantData: null
        })
      } else {
        this.setState({
          currentIndex: 0,
          restaurantData: json.restaurants
        }, () => {
          this.handleNext();
        })
      }
    })
  }

  handleNext = () => {
    if (this.state.currentIndex + 5 >= this.state.restaurantData.length) {
      this.setState({
        currentResults: this.state.restaurantData.slice(this.state.currentIndex, this.state.restaurantData.length),
        currentIndex: this.state.restaurantData.length
      })
    } else {
      this.setState({
        currentResults: this.state.restaurantData.slice(this.state.currentIndex, this.state.currentIndex+5),
        currentIndex: this.state.currentIndex + 5
      })
    }
  }

  handlePrevious = () => {
    if (this.state.currentIndex - 5 <= 0) {
      this.setState({
        currentResults: this.state.restaurantData.slice(0, 5),
        currentIndex: 5
      })
    } else {
      if (this.state.currentIndex - 10 <= 0) {
        this.setState({
          currentResults: this.state.restaurantData.slice(0, 5),
          currentIndex: 5
        })
      } else {
        this.setState({
          currentResults: this.state.restaurantData.slice(this.state.currentIndex-10, this.state.currentIndex-5),
          currentIndex: this.state.currentIndex - 5,
        })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Container className="py-4 mx-auto">
          <InputGroup className="mb-5">
            <FormControl
              placeholder="City Name"
              aria-label="City Name"
              aria-describedby="basic-addon1"
              onChange={this.handleSearchChange}
            />
            <Button className="ml-3" onClick={this.handleSearch}>Search</Button>
          </InputGroup>
          {this.state.restaurantData !== null ? <CountriesList restaurants={this.state.currentResults}/> : <h3>Please search again</h3>}
          {this.state.restaurantData !== null ? <ButtonToolBar className="float-right">
            <h5 className="mx-3">Total Results: {this.state.restaurantData.length}</h5>
            <h5 className="mx-3">Currently Showing Results: {this.state.currentIndex-5} - {this.state.currentIndex}</h5>
            <Button disabled={this.state.currentIndex === 5} variant="outline-dark" className="mb-4 mx-1" onClick={this.handlePrevious}>Previous Page</Button>
            <Button disabled={this.state.currentIndex === this.state.restaurantData.length} variant="outline-info" className="mb-4 mx-1" onClick={this.handleNext}>Next Page</Button>
          </ButtonToolBar> : null}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
