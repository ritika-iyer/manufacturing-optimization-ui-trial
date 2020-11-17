import React from 'react';

const ApprovalCard = (props) =>{

 

      return (
        
          <div className="content-stuff">
          <div class="ui equal width center aligned padded grid" style={{ height:'300px'}}>
  
  <div class="row">
    <div class="column" style={{backgroundColor:'#c5cbe4' }}>
      <p style={{textAlign:'center', paddingBottom:'5%' }}>
        <img src={require('./Photo.png')} style={{height:"290px", weight:"400px"}} />
      </p>
    </div>
    <div class=" column" style={{backgroundColor:'#ebebf7' }}>

          <h3 className="ques" style={{paddingTop:'10%', fontFamily: 'Bahnschrift',color:'darkblue'}}>Would you like to create your freelancing profile at MG?</h3>
            <div className="ui basic segment">
            
            <button class="ui button" style={{ backgroundColor:'#00a34f', margin:'7%', paddingLeft:'7%', paddingRight:'7%', color:'white'}}>Yes</button>
            <button class="ui button" style={{ backgroundColor:'#eb0c0e', paddingLeft:'7%', paddingRight:'7%', color:'white'}}>No</button> 
            <h4 className="ques" style={{ fontFamily:'Bahnschrift', color:'#87879f'}}>We are the only organization that doesn't charge any commissions for freelancing.</h4>
            <button class="ui button" style={{backgroundColor:'#1e4a72', color:'white'}}>Finish</button> 
            </div>
          
    </div>
  </div>
</div>
          </div>
          
        
      );

    
    

};

export default ApprovalCard;