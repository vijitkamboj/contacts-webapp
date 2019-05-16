import React , {Component} from 'react';
import './app.css';
import Search from './Search/search';
import Result from './Result/result';
import Contacts from './details';


class app extends Component {

    constructor(){
        super();
        this.state = {
            contactState:Contacts,
            searchFeild:''
        };
    }

    onSearchChange = (event) => {
        this.setState({searchFeild : event.target.value})

    }

    render(){
        const filteredContacts = this.state.contactState.filter( contact => {
            return(
                `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(this.state.searchFeild.toLowerCase())
            )
            });
        return(
            <div id="app">
                <Search searchChange = {this.onSearchChange}/>
                <Result contactArray = {filteredContacts}/>
            </div>
        );
    }
}

export default app;