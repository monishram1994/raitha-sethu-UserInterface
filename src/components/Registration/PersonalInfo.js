import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class PersonalInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            message:"",
            errors:{},
           userregistrationdata:[]
        };    
    }
    
    validateForm() {
      let fields= this.props;
      let errors={};
      let formIsValid=true;
      if(!fields["Name"]){
          console.log(fields["Name"]);
          formIsValid=false;
          errors["Name"]="*Please enter your Name.";
         
      }

      if(!fields["FatherName"]){
          formIsValid=false;
          errors["FatherName"]="*Please enter your FatherName.";
          
      }
      if(!fields["Address"]){
          formIsValid=false;
          errors["Address"]="*Please enter your Address.";
          
      }
      if(!fields["State"]){
          formIsValid=false;
          errors["State"]="*Please enter your State.";
          
      }
      if(!fields["District"]){
          formIsValid=false;
          errors["District"]="*Please enter your District.";
          
      }
      if(!fields["Taluk"]){
          formIsValid=false;
          errors["Taluk"]="*Please enter your Taluk.";
          
      }
      if(!fields["City"]){
          formIsValid=false;
          errors["City"]="*Please enter your Village/City.";
          
      }

      if(!fields["Pincode"]){
        formIsValid=false;
        errors["Pincode"]="*Please your area pin code.";
        
    }
      if(!fields["PasswordPIN"]){
          formIsValid=false;
          errors["PasswordPIN"]="*Please enter a 4 digit Pin.";
          
      }
      
      if(!fields["MobileNo"]){
          formIsValid=false;
          errors["MobileNo"]="*Please enter your MobileNumber.";
          
      }
      
      // if(typeof fields["MobileNumber1"]!=="undefined"){
      //     if(!fields["MobileNumber1".match(/^+?[0-9 -]* $/)]){
      //         formIsValid=false;
      //         errors["MobileNumber1"]="* Please enter a valid MobileNumber1.";
      //     }
      // }
     

      if(fields["Name"] && fields["FatherName"] && fields["Address"] && fields["State"] && fields["District"] && fields["Taluk"] && fields["City"] && fields["Pincode"] && fields["MobileNo"] && fields["AlternateNo"] && fields["PasswordPIN"] ){
        console.log('All validations are passed');
        formIsValid=true;
      }
      
     
      this.setState({
       errors:errors
      });

      return formIsValid;
  }
    
  
      continue = e => {
        this.setState({userregistrationdata:this.state})
        e.preventDefault();
        console.log(this.props);
        console.log(this.validateForm.formIsValid);
        const isValid = this.validateForm();
       
        if(this.validateForm()){
          this.props.nextStep();
        }
            
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render(){
        const { Name, FatherName, Address ,State , District, Taluk, City, Pincode, MobileNo, AlternateNo, PasswordPIN, handleChange } = this.props;
       
        return(
            <div className="container-m">
            {this.state.message !=="" &&<div className="info">{this.state.message}</div>}
           
                <h2>Enter your personal information:</h2>

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactname"
                         >
                         Name:*
                        </label> 
                        <input
                          id="Name"
                          type="text"
                          name="Name"
                          value={Name}
                          onChange={handleChange('Name')}
                          className="form-control"
                         ></input>
                         <div className="errorMsg">{this.state.errors.Name}</div> 
                </div> 

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactnumber"
                         >
                         Father Name:*
                        </label> 
                        <input
                          id="fathername"
                          className="form-control"
                          type="text"
                          name="FatherName"
                          value={FatherName}
                          onChange={handleChange('FatherName')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.FatherName}</div> 
                </div>

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="companyname"
                         >
                         Address:*
                           </label> 
                        <input
                          id="address"
                          className="form-control"
                          type="text"
                          name="address"
                          value={Address}
                          onChange={handleChange('Address')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.Address}</div> 
                </div>

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="shellnumber"
                         >
                         State:*
                           </label> 
                        <input
                          id="State"
                          className="form-control"
                          type="text"
                          name="State"
                          value={State}
                          onChange={handleChange('State')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.State}</div> 
                </div>  

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactemail"
                         >
                         District:*
                           </label> 
                        <input
                          id="District"
                          className="form-control"
                          type="text"
                          name="District"
                          value={District}
                          onChange={handleChange('District')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.District}</div> 
                </div>    

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="taluk"
                         >
                         Taluk:*
                           </label> 
                        <input
                          id="Taluk"
                          className="form-control"
                          type="text"
                          name="Taluk"
                          value={Taluk}
                          onChange={handleChange('Taluk')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.Taluk}</div> 
                </div>   

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="Village"
                         >
                         City/Village:*
                           </label> 
                        <input
                          id="village"
                          className="form-control"
                          type="text"
                          name="Village"
                          value={City}  
                          onChange={handleChange('City')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.City}</div> 
                </div> 

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="preflc"
                         >
                         Pincode:*
                           </label> 
                        <input
                          id="preflc"
                          className="form-control"
                          type="text"
                          name="Pincode"
                          value={Pincode}
                          onChange={handleChange('Pincode')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.Pincode}</div> 
                </div>   

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="preflc"
                         >
                         Mobile Number:*
                           </label> 
                        <input
                          id="preflc"
                          className="form-control"
                          type="text"
                          name="MobileNo"
                          value={MobileNo}
                          onChange={handleChange('MobileNo')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.MobileNo}</div> 
                </div>    

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="preflc"
                         >
                         Alternate Number:
                           </label> 
                        <input
                          id="preflc"
                          className="form-control"
                          type="text"
                          name="AlternateNo"
                          value={AlternateNo}
                          onChange={handleChange('AlternateNo')}
                         ></input>
                         
                </div>   

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="preflc"
                         >
                         Password PIN:*
                           </label> 
                           
                        <input
                          id="preflc"
                          className="form-control"
                          type="text"
                          name="PasswordPIN"
                          value={PasswordPIN}
                          onChange={handleChange('PasswordPIN')}
                         ></input>
                         <div className="errorMsg">{this.state.errors.PasswordPIN}</div> 
                </div> 

                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            
            </div>
        );
    }
}

export default PersonalInfo;