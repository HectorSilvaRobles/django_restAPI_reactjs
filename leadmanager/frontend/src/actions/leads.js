// What to perform when certain action is called

import axios from 'axios';
import {createMessage, returnErrors } from './messages'

import {GET_LEADS, DELETE_LEAD, ADD_LEAD} from './types'


// GET Action 
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
    .then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE Action 
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
    .then(res => {
        dispatch(createMessage({deleteLead: "Lead deleted" }))
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// POST Action
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead)
    .then(res => {
        dispatch(createMessage({addedLead: "Lead added"}))
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}