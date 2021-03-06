import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        const {error, alert, message} = this.props
        if(error !== prevProps.error){
            if(error.msg.name ){
                alert.error(`${error.msg.name.join()}`)
            }
            if(error.msg.email){
                alert.error(`${error.msg.email.join()}`)
            }
            if(error.msg.message){
                alert.error(`${error.msg.message.join()}`)
            }
        }

        if(message !== prevProps.message){
            if(message.deleteLead){
                alert.success(message.deleteLead)
            }
            if(message.addedLead){
                alert.success(message.addedLead)
            }
        }
    }

    render(){
        console.log(this.props.message)
        return <Fragment />
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
