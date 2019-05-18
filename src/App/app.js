import React , {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';
import Search from './Search/search';
import Result from './Result/result';
import Error from '../ErrorBoundary/errorboundary';
import {setSearchBar} from '../actions';

const mapStateToProps = (state) =>{
    return {
            searchField: state.searchField
        }
    
}

const mapDispatchToProps = (dispatch) => {
    return{
            onSearchChange : (event) => {
                return dispatch(setSearchBar(event.target.value))}
        }
    
}


class app extends Component {

    constructor(){
        super();
        this.state = {
            contactState:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( users => this.setState({contactState : users}) );
    }

    render(){
        const {searchField , onSearchChange} = this.props;
        const {contactState} = this.state;
        const filteredContacts = contactState.filter( contact => {
            return(
                contact.name.toLowerCase().includes(searchField.toLowerCase())||contact.phone.includes(searchField.toLowerCase())
            )
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