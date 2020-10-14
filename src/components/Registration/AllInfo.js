import React, { Component } from 'react';
import axios from 'axios'

class AllInfo extends Component {            
         onSubmit = (e) => {
            e.preventDefault();
            
            var newUser = {
                Name: this.props.Name, 
                FatherName: this.props.FatherName,
                Address:this.props.Address ,
                State:this.props.State , 
                District:this.props.District, 
                Taluk:this.props.Taluk, 
                City:this.props.City, 
                Pincode:this.props.Pincode, 
                MobileNo: this.props.MobileNo, 
                AlternateNo: this.props.AlternateNo, 
                PasswordPIN:this.props.PasswordPIN,
                LandSurveyNO:this.props.LandSurveyNO, 
                PlotArea:this.props.PlotArea, 
                TypeofCrop:this.props.TypeofCrop, 
                GeographicalLocation:this.props.GeographicalLocation, 
                CropLandAddress:this.props.CropLandAddress

            }
    
            console.log(`Form Submitted`);
            console.log(`Added User data : ${this.props}`)
            
            //For server use below url
            //https://stoic-ritchie-1a1905.netlify.app/.netlify/functions/server
            axios.post('https://stoic-ritchie-1a1905.netlify.app/.netlify/functions/server/add', newUser)
            .then(function(response) {
                const status = response.status;
                //redirect page
                if (status == 200) {
                        window.location = "/" 
                }
            }

            );                       
                
        }

    back = e => {
        e.preventDefault();
        this.props.prevStep();

    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
  
        
    render(){
        const { Name, FatherName, Address ,State , District, Taluk, City, Pincode, MobileNo, AlternateNo, PasswordPIN, LandSurveyNO, PlotArea, TypeofCrop, GeographicalLocation, CropLandAddress} = this.props;
        //const { firstName, lastName, jobTitle, jobCompany, jobLocation } = this.props;
        
        return(
            <div style={{paddingLeft:"10px"}}>
                <h2>Please verify the details and submit. </h2><br />
                <h5>Personal Details</h5><br />
                Name: <b>{Name}</b><br />
                Father Name: <b>{FatherName}</b><br />
                Address: <b>{Address}</b><br />
                State: <b>{State}</b><br />
                District: <b>{District}</b><br />
                Taluk: <b>{Taluk}</b><br />
                District: <b>{District}</b><br />
                City: <b>{City}</b><br />
                Pincode: <b>{Pincode}</b><br />
                Mobile Number: <b>{MobileNo}</b><br />
                Alternate Number: <b>{AlternateNo}</b><br />
                Password PIN: <b>{PasswordPIN}</b>
                <br />
                <br />

                <h5>Land Details</h5><br />
                
                Land Survey Number: <b>{LandSurveyNO}</b><br />
                Plot Area: <b>{PlotArea}</b><br />
                Type of Crop: <b>{TypeofCrop}</b><br />
                Geographical Location: <b>{GeographicalLocation}</b><br />
                CropLand Address: <b>{CropLandAddress}</b><br />

                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Back" onClick={this.onSubmit}>
                    Submit 
                </button>
            </div>
        );
    }
}

export default AllInfo;