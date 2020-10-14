import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import LandDetails from './LandDetails';
import AllInfo from './AllInfo';

export class StepForm extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    state = {
        step: 1,

        // step 1
        Name: '',
        FatherName: '',
        Address: '',
        State: '',
        District: '',
        Taluk : '',
        City: '',
        Pincode:'',
        MobileNo:'',
        AlternateNo:'',
        PasswordPIN:'',

        // step 2
        LandSurveyNO: '',
        PlotArea: '',
        TypeofSoil: '',
        TypeofCrop: '',
        GeographicalLocation:'',
        CropLandAddress:''

    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, Name, FatherName, Address ,State , District, Taluk, City, Pincode, MobileNo, AlternateNo, PasswordPIN, LandSurveyNO, PlotArea,TypeofCrop, GeographicalLocation, CropLandAddress} = this.state;

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                Name={Name} 
                FatherName={FatherName}
                Address={Address}
                State={State}
                District={District}
                Taluk={Taluk}
                City={City}
                Pincode={Pincode}
                MobileNo={MobileNo}
                AlternateNo={AlternateNo}
                PasswordPIN={PasswordPIN}

            />);
        if(step === 2)
            return (<LandDetails 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                LandSurveyNO={LandSurveyNO} 
                PlotArea={PlotArea}
                TypeofCrop={TypeofCrop}
                GeographicalLocation={GeographicalLocation}
                CropLandAddress={CropLandAddress}

            />);
        if(step === 3)
            return (<AllInfo 
                Name={Name} 
                FatherName={FatherName}
                Address={Address}
                State={State}
                District={District}
                Taluk={Taluk}
                City={City}
                Pincode={Pincode}
                MobileNo={MobileNo}
                AlternateNo={AlternateNo}
                PasswordPIN={PasswordPIN}
                LandSurveyNO={LandSurveyNO} 
                PlotArea={PlotArea}
                TypeofCrop={TypeofCrop}
                GeographicalLocation={GeographicalLocation}
                CropLandAddress={CropLandAddress}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <div>
                <div style={{ color: '#ff7f00', fontSize: '30px', fontWeight: '400', padding: '0' }}>User Registration Step {step} of 3.</div>
                {this.showStep()}
            </div>
        );
    }
}

export default StepForm;