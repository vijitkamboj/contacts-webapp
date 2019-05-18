import React , {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';
import Search from './Search/search';
import Result from './Result/result';
import Error from '../ErrorBoundary/errorboundary';
import {setSearchBar, requestContacts} from '../actions';

const mapStateToProps = (state) =>{
    return {
            searchField: state.searchContacts.searchField,
            contactState: state.requestContactsAPI.contactState,
            isPending: state.requestContactsAPI.isPending,
            error: state.requestContactsAPI.error
        }
    
}

const mapDispatchToProps = (dispatch) => {
    return{
            onSearchChange : (event) => {
                return dispatch(setSearchBar(event.target.value))},
            onRequestContacts : () => dispatch(requestContacts())
        }
    
}

class app extends Component {
    componentDidMount(){
        this.props.onRequestContacts()
    }

    render(){
            const {searchField , onSearchChange , contactState} = this.props;
            const filteredContacts = contactState.filter( contact => {
            return(contact.name.toLowerCase().includes(searchField.toLowerCase())||contact.phone.includes(searchField.toLowerCase()))
            });
            
            return(
            <div id="app">
                <Search searchChange = {onSearchChange}/>
                <Error>
                    <Result contactArray = {filteredContacts}/>
                </Error>
                
            </div>
            );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(app);