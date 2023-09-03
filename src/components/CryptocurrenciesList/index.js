import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoad: true}

  componentDidMount() {
    this.getDate()
  }

  getDate = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachOne => ({
      currencyLogo: eachOne.currency_logo,
      currencyName: eachOne.currency_name,
      euroValue: eachOne.euro_value,
      id: eachOne.id,
      usdValue: eachOne.usd_value,
    }))
    this.setState({currencyList: updatedData, isLoad: false})
  }

  getresult = () => {
    const {currencyList} = this.state
    return (
      <>
        <h1 className="Crypto-heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />

        <div className="Crypto-box">
          <div className="NavBar">
            <h1 className="CoinHea">Coin Type</h1>
            <div className="sub-NavBar">
              <h1 className="usdHed">USD</h1>
              <h1 className="EuroHed">EURO</h1>
            </div>
          </div>
          <div>
            {currencyList.map(eachOne => (
              <CryptocurrencyItem key={eachOne.id} currenctList={eachOne} />
            ))}
          </div>
        </div>
      </>
    )
  }

  render() {
    const {isLoad} = this.state
    return (
      <>
        {isLoad ? (
          <Loader
            type="Rings"
            color="#ffffff"
            height={80}
            width={80}
            data-testid="loader"
          />
        ) : (
          this.getresult()
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
