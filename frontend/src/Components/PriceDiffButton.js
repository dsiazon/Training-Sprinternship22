
function CurrencyButton ({showData,priceDiff}) {
    // ToDo 10.1
    return (
      <div>
        <div>
        <h1 div className= {styles.headers}> Date   Time   Price</h1>
          {
      
            <button onClick={()=>changeCurrency("USD")}
              className={currency === 'USD' ? styles.currencyButtonActive : styles.currencyButtonActive}>
              USD
           </button>  
            }
      </div>
      </div>
      
    );
  
  }
  
  export default PriceDiffButton;
  