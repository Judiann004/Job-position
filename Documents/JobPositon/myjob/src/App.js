import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faEye, faEraser, faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className='container'>
      <h1>Job Position</h1>

<div className='options'>
<ul>
  <li>Application's Name</li>
  <li className='select-container'>
     <span className='select-box'>Type <strong>Select</strong></span>
     <span>
     <FontAwesomeIcon icon={faCaretDown} />
     </span>
     </li>
     <li className='select-container'>
     <span className='select-box'>Category <strong>Select</strong></span>
     <span>
     <FontAwesomeIcon icon={faCaretDown} />
     </span>
     </li>
  <li>Min Salary</li>
  <li>Max Salary</li>
  <li className='Search-box'>Search</li>
</ul>
</div>
    </div>

    <div className='entry'>
    Show <span className='Num-container'>
      18 
      <span className='IconUp'>
      <FontAwesomeIcon icon={faCaretUp} /> 
      </span>
      <span className='IconDown'>
      <FontAwesomeIcon icon={faCaretDown} /> 
      </span>
      </span> entries
    </div>

    <div className='Section-container'>
      <div className='sub-head'>
        <span>#</span>
        <span>Position</span>
        <span>Category</span>
        <span>Applicants</span>
        <span>Created at</span>
        <span>Status</span>
        <span>Action</span>
        </div>
        <hr></hr>
        
        <div className='row'>
      <div className='col-2'>
        <div className='first'>
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        </div>
      </div>
      <div className='col-2'>
        <div className='second'>
        <span>Developer</span>
        <span>Designer</span>
        <span>Developer</span>
        <span>Developer</span>
        </div>
      </div>
      <div className='col-2'>
        <div className='third'>
        <span>Andriod</span>
        <span>UI/UX</span>
        <span>Wordpress</span>
        <span>icons</span>
        </div>
      </div>
      <div className='col-2'>
        <div className='fourth'>
        <span>240</span>
        <span>128</span>
        <span>378</span>
        <span>129</span>
        </div>
      </div>
      <div className='col-2'>
        <div className='fifth'>
        <span className='date'>10-10-2020</span>
        <span className='date'>10-10-2020</span>
        <span className='date'>10-10-2020</span>
        <span className='date'>10-10-2020</span>

        </div>
      </div>
      <div className='col-2'>
        <div className='row'>
          <div className='col-2'>
        <div className='sixth'>
        <span className='active'>Active</span>
        <span className='inactive'>Inactive</span>
        <span className='active'>Active</span>
        <span className='inactive'>Inactive</span>
        
        </div>
        </div>
    
      <div className='col-2'>
        <div className='seventh'>
        <span className='icon'>
          <span className='icon-eye'><FontAwesomeIcon icon={faEye} /></span>  
          <span className='icon-eraser'><FontAwesomeIcon icon={faEraser} /></span>  
          <span className='icon-trash'><FontAwesomeIcon icon={faTrash} /></span>  
           </span>
        <span className='icon'>
          <span className='icon-eye'><FontAwesomeIcon icon={faEye} /></span>  
          <span className='icon-eraser'><FontAwesomeIcon icon={faEraser} /></span>  
          <span className='icon-trash'><FontAwesomeIcon icon={faTrash} /></span>  
           </span>
        <span className='icon'>
          <span className='icon-eye'><FontAwesomeIcon icon={faEye} /></span>  
          <span className='icon-eraser'><FontAwesomeIcon icon={faEraser} /></span>  
          <span className='icon-trash'><FontAwesomeIcon icon={faTrash} /></span>  
           </span>
        <span className='icon'>
          <span className='icon-eye'><FontAwesomeIcon icon={faEye} /></span>  
          <span className='icon-eraser'><FontAwesomeIcon icon={faEraser} /></span>  
          <span className='icon-trash'><FontAwesomeIcon icon={faTrash} /></span>  
           </span>
       
        </div>
      </div>
      </div>
      </div>
    </div>
    
    </div>

    </div>
  );
}

export default App;
