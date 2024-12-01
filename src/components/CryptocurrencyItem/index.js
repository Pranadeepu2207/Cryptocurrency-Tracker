// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoItem

  return (
    <li className="list-item">
      <div className="logo-name-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
