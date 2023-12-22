import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';
 


class BadgeNew extends React.Component{
    state = {
        loading: false,
        error: null,
        form: {
            firstName:'',
            lastName:'',
            jobTitle:'',
            email:'',
            twitter:'',
    } };    

    handleChange = e => {        
        this.setState({
            form: {
                //Dejar caer todos los valores que tenia el form anteriormente
                ...this.state.form,
                //Se añade uno nuevo
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        
        try{            
            await api.badges.create(this.state.form);
            this.setState({loading: false})

            this.props.history.push('/badges');

        }catch(error){
            this.setState({loading: false, error: error})
        }
    }
   
    render(){       
        if(this.state.loading){            
            return <PageLoading />;
        }
        return(
            <div>                
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" 
                    src={header} 
                    alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                urlAvatar="https://s.gravatar.com/avatar/49c401b8c20d11caa2246b058cef0467?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit = {this.handleSubmit}
                                formValues = {this.state.form}
                             />
                        </div>
                    </div>
                </div>
            </div>            
        );       
    }
}

export default BadgeNew;