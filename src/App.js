import React from 'react';

function App(){

  // This is the function that multiplies the numbers given by the user.
  function multiplyBy(){

    // Initializing Variable for below usage otherwise you will get the famous "variable not defined".
    var i = 1;
    var list = "";
    var table = +document.getElementById("firstNumber").value;
   var result = document.getElementById("result");

    // If no number is entered then the default value for the first field will be 1 and then the second field as 5 would be entered.
    if(table == "0")
    {
      table = document.getElementById("firstNumber").defaultValue = 2;      
    }

        
    for(i=1; i <= 10; i++)
    {
      list += ("<br>"+table+" x "+i+" = " +"<b>"+(table * i)+"</b>");  
    }

       list += "";
    result.innerHTML = list;
    
  }

  return (
    
    <div class="container">
      <br></br>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Multiplication Table</h3>
          <h5 >Get the Multiplication Table You Want!</h5> 
        

          <form id = "final">
                <div class="form-group">
                    <label>Enter the Number</label>
                    <input type="text" class="form-control" id="firstNumber" placeholder="Multiplication Table Number" 
                      onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}/>
                    <small class="form-text text-muted">Example - To View Multiplication table of 2, enter 2</small>
                </div>
              <button type="button" class="btn btn-primary" onClick={multiplyBy} id = "submit">Submit</button>
                <button class = "btn btn-primary" id = "clear">Clear</button>
              
                <p id = "result">
                
                </p>
              
            </form>  

        </div>
      </div>
  </div>
  );
}

export default App;