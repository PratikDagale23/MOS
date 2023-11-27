import {useState} from 'react';
import axios from 'axios';
import './App.css';
function App()
{
  const [name1,setname]=useState('');
  const[cnmidsem,setcnmidsem]=useState('');
  const[wtmidsem,setwtmidsem]=useState('');  
  const[daamidsem,setdaamidsem]=useState(''); 
  const[sdmmidsem,setsdmmidsem]=useState('');  
  const[edimidsem,setedimidsem]=useState('');  
  
  const[cnendsem,setcnendsem]=useState('');  
  const[wtendsem,setwtendsem]=useState('');  
  const[daaendsem,setdaaendsem]=useState('');  
  const[sdmendsem,setsdmendsem]=useState('');  
  const[ediendsem,setediendsem]=useState('');  

  const handleSubmit=()=>{
    if(name1.length===0)
    {
      alert("Name has left blank");
    }
    else if((cnmidsem<0 || cnmidsem>100)&&(wtmidsem<0 || wtmidsem>100)&&(daamidsem<0 || daamidsem>100)&&(sdmmidsem<0 || sdmmidsem>100)&&(edimidsem<0 || edimidsem>100))
    {
      alert("Marks cannot be negative or greater than 100");
    }
    else if((cnendsem<0 || cnendsem>100)&&(wtendsem<0 || wtendsem>100)&&(daaendsem<0 || daaendsem>100)&&(sdmendsem<0 || sdmendsem>100)&&(ediendsem<0 || ediendsem>100))
    {
      alert("Marks cannot be negative or greater than 100");
    }
    else
    {
        const url="http://localhost/test/formresult.php";
        let fData=new FormData();
        fData.append('name1',name1);
        fData.append('cnmidsem',cnmidsem);
        fData.append('wtmidsem',wtmidsem);
        fData.append('daamidsem',daamidsem);
        fData.append('sdmmidsem',sdmmidsem);
        fData.append('edimidsem',edimidsem);

        fData.append('cnendsem',cnendsem);
        fData.append('wtendsem',wtendsem);
        fData.append('daaendsem',daaendsem);
        fData.append('sdmendsem',sdmendsem);
        fData.append('ediendsem',ediendsem);
        axios.post(url,fData).then(response=>alert(response.data)).catch(error=>alert(error));
    }
  }


  return(
    <div className="App">
      
    <div className="container">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <div className="form-control">
        <label for="name1">Enter Name</label>
        <input type="text" className="form-label" name="name1" id="name1" value={name1} onChange={(e)=>setname(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="cnmidsem">Enter CN Midsem Marks</label>
        <input type="number" className="form-label" name="cnmidsem" id="cnmidsem" value={cnmidsem} onChange={(e)=>setcnmidsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="wtmidsem">Enter WT Midsem Marks</label>
        <input type="number" className="form-label" name="wtmidsem" id="wtmidsem" value={wtmidsem} onChange={(e)=>setwtmidsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="daamidsem">Enter DAA Midsem Marks</label>
        <input type="number" className="form-label" name="daamidsem" id="daamidsem" value={daamidsem} onChange={(e)=>setdaamidsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="sdmmidsem">Enter SDM Midsem Marks</label>
        <input type="number" className="form-label" name="sdmmidsem" id="sdmmidsem" value={sdmmidsem} onChange={(e)=>setsdmmidsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="edimidsem">Enter EDI Midsem Marks</label>
        <input type="number" className="form-label" name="edimidsem" id="edimidsem" value={edimidsem} onChange={(e)=>setedimidsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="cnendsem">Enter CN Endsem Marks</label>
        <input type="number" className="form-label" name="cnendsem" id="cnendsem" value={cnendsem} onChange={(e)=>setcnendsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="wtendsem">Enter  WT Endsem Marks</label>
        <input type="number" className="form-label" name="wtendsem" id="wtendsem" value={wtendsem} onChange={(e)=>setwtendsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="daaendsem">Enter DAA  Endsem Marks</label>
        <input type="number" className="form-label" name="daaendsem" id="daaendsem" value={daaendsem} onChange={(e)=>setdaaendsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="sdmendsem">Enter SDM Endsem Marks</label>
        <input type="number" className="form-label" name="sdmendsem" id="sdmendsem" value={sdmendsem} onChange={(e)=>setsdmendsem(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="ediendsem">Enter EDI Endsem Marks</label>
        <input type="number" className="form-label" name="ediendsem" id="ediendsem" value={ediendsem} onChange={(e)=>setediendsem(e.target.value)} />
      </div>
      <div className="form-control">
      <input type="submit" className="submit" name="submit" id="submit" value="Calculate" onClick={handleSubmit}/>
      </div>
      
    </div>
    </div>
  );
}
  
export default App;  
