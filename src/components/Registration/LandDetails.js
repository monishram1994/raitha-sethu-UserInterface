import React, { Component } from 'react';

class LandDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"",
            errors:{},
           userregistrationdata:[]
        };    
    }
    
    
            
    validateForm(){
        let fields= this.props;
        let errors={};
        let formIsValid = true;
        if(!fields["LandSurveyNO"]){
            formIsValid=false;
            errors["LandSurveyNO"]="*Please enter your Land Survey Number.";
        }
        if(!fields["PlotArea"]){
            formIsValid=false;
            errors["PlotArea"]="*Please enter your PlotArea.";
        }
        if(!fields["TypeofCrop"]){
            formIsValid=false;
            errors["TypeofCrop"]="*Please enter your Type of Crop.";
        }
        if(!fields["GeographicalLocation"]){
            formIsValid=false;
            errors["GeographicalLocation"]="*Please enter your GeographicalLocation.";
        }
        if(!fields["CropLandAddress"]){
            formIsValid=false;
            errors["CropLandAddress"]="*Please enter your Crop Land Address.";
        }
        if(fields["LandSurveyNO"] && fields["PlotArea"] && fields["TypeofCrop"] 
        && fields["GeographicalLocation"] && fields["CropLandAddress"]){
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

    back = e => {           
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        const { LandSurveyNO, PlotArea, TypeofCrop, GeographicalLocation, CropLandAddress, handleChange } = this.props;
        return(
            <div className="container-m">
            {this.state.message !=="" &&<div className="info">{this.state.message}</div>}
            {/* <form className="regform" > */}
            {/* onSubmit={this.continue} */}
                <h2>Enter your Land information:</h2>

                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactname"
                         >
                         Land Survey Number:
                        </label> 
                        <input
                          id="LandSurveyNO"
                          type="text"
                          name="LandSurveyNO"
                          value={LandSurveyNO}
                          onChange={handleChange('LandSurveyNO')}
                          className="form-control"
                         ></input>
                         <div className="errorMsg">{this.state.errors.LandSurveyNO}</div> 
                </div> 
                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactname"
                         >
                         Plot Area:
                        </label> 
                        <input
                          id="PlotArea"
                          type="text"
                          name="PlotArea"
                          value={PlotArea}
                          onChange={handleChange('PlotArea')}
                          className="form-control"
                         ></input>
                         <div className="errorMsg">{this.state.errors.PlotArea}</div> 
                </div>
                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactname"
                         >
                         Type of Crop:
                        </label> 
                        <input
                          id="TypeofCrop"
                          type="text"
                          name="TypeofCrop"
                          value={TypeofCrop}
                          onChange={handleChange('TypeofCrop')}
                          className="form-control"
                         ></input>
                         <div className="errorMsg">{this.state.errors.TypeofCrop}</div> 
                </div>
                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactname"
                         >
                         Geographical Location:
                        </label> 
                        <input
                          id="GeographicalLocation"
                          type="text"
                          name="GeographicalLocation"
                          value={GeographicalLocation}
                          onChange={handleChange('GeographicalLocation')}
                          className="form-control"
                         ></input>
                         <div className="errorMsg">{this.state.errors.GeographicalLocation}</div> 
                </div>
                <div className="form-group">
                        <label
                          className="control-label"
                          htmlFor="contactname"
                         >
                         CropLand Address:
                        </label> 
                        <input
                          id="CropLandAddress"
                          type="text"
                          name="CropLandAddress"
                          value={CropLandAddress}
                          onChange={handleChange('CropLandAddress')}
                          className="form-control"
                         ></input>
                         <div className="errorMsg">{this.state.errors.CropLandAddress}</div> 
                </div>
                
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div>
        );
    }
}

export default LandDetails;