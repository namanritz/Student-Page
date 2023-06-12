import './App.css';

function App() {
  return (
    <div className="App">
      <div className="detailsform">
        <div className="input">        
          <input type="text" placeholder="Name" id="fname"/>
        </div>  
        <div className="input">        
          <input type="number" placeholder="Student ID" id="id"/>
        </div>  
        <div className="input">
          <input type="text" placeholder="Enter Branch" id="branch"/>
        </div>  
        <div className="input">
          <input type="text" placeholder="Enter E-mail" id="mail"/>
        </div>  
        <div className="input">
          <input type="number" placeholder="Enter Class 12th Percentage" id="12marks"/>
        </div>  
        <div className="input">
          <input type="number" placeholder="Enter Class 10th Percentage" id="10marks"/>
        </div>  
      </div>
    </div>
  );
}

export default App;
