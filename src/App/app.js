import React , {Component} from 'react';
import './app.css';
import Search from './Search/search';
import Result from './Result/result';

class app extends Component {

    constructor(){
        super();
        this.state = {
            contactState:[],
            searchFeild:''
        };
    }

    onSearchChange = (event) => {
        this.setState({searchFeild : event.target.value})

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( users => this.setState({contactState : users}) );
    }

    render(){
        const filteredContacts = this.state.contactState.filter( contact => {
            return(
                contact.name.toLowerCase().includes(this.state.searchFeild.toLowerCase())||contact.phone.includes(this.state.searchFeild)
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