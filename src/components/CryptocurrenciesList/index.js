// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrenciesData} = props
  return (
    <div className="card-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        className="crypto-img"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="cryptocurrency-container">
        <div className="headings-container">
          <p className="coin-type-heading">Coin Type</p>
          <div className="usd-euro-heading-container">
            <p className="usd-heading">USD</p>
            <p className="euro-heading">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrency-list-container">
          {cryptocurrenciesData.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} cryptoItem={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
