import "./App.css";
import Butlink from "./Butlink";
function App() {
  return (
    <>
      <section className="main-title">
        <div className="hero">
          <h1>Food Weight</h1>
          <h2>Find out the weight of your food</h2> 
          <Butlink link="https://calculator.foodweight.online">Check our calculator</Butlink> 
        </div>
      </section>
      <div className="main-content"><img src="food.png" alt="food-prep" /></div>
    </>
  );
}

export default App;
