import './index.css'

const CryptocurrencyItem = props => {
  const {currenctList} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currenctList

  return (
    <li className="listDeiv">
      <div className="subDiv">
        <img alt={currencyName} src={currencyLogo} className="imgSize" />
        <p className="CoinValue">{currencyName}</p>
      </div>

      <div className="sub-NavBar">
        <p className="usdValue">{usdValue}</p>
        <p className="EuroValue">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
