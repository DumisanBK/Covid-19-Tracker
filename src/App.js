import React from 'react';
import { Cards, Charts, CountryPicker, Footer } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png'
import background from './images/background.jpg';


class App extends React.Component{
  state ={
    data: {},
    country:'',

  }

  async componentDidMount (){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });

    console.log(fetchedData);
  }

  handleCountryChange = async (country) =>
  {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country});
    console.log(fetchedData);
    console.log(country);
  }
render() {
  const { data, country } = this.state;
  return(
   
    <div className={styles.container} img src={background} alt="Covid-19">
      <br />
      <img className="styles.image" src={coronaImage} alt="Covid-19" height="130" width="500"/>
      <br />
        <text>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </text>
        <br />
        <text>
          <i>(For a Particlar select a Country from below)</i>
        </text>
        <br />
        <br />
      <Cards data={data} />
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Charts data={data} country={country} />
      <Footer />
    </div>
  )
}
}

export default App;