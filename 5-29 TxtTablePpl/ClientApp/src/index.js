import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import Person from './Person';
import DisplayPpl from './DisplayPpl';

class App extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        age: '',
        allPeople: []
    }

    onAddFirstname = (e) => {
        this.setState({ firstname: e.target.value })
    }
    onAddLastname = (e) => {
        this.setState({ lastname: e.target.value })
    }
    onAddAge = (e) => {
        this.setState({ age: e.target.value })
    }
    onSubmitAdd = () => {
        const copy = [...this.state.allPeople];
        const person = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age
        }
        copy.push(person);
        this.setState({ allPeople: copy, firstname: '', lastname: '', age: '' });
    }

    clearPpl = () => {
        this.setState({ allPeople: [] });
    }

    deletePerson = (e) => {
        const person = this.state.allPeople[e.target.id];
        this.setState(prevState => ({ allPeople: prevState.allPeople.filter(p => p !== person) }));
    }

    render() {
        return (<div className="container" style={{ marginTop: 40 }}>
            <Person addFirstname={this.onAddFirstname}  addLastname={this.onAddLastname}   addAge={this.onAddAge}   
                firstname={this.state.firstname} lastname={this.state.lastname} age={this.state.age}
                addPerson={this.onSubmitAdd} clear={this.clearPpl} />
            <br />
            <DisplayPpl people={this.state.allPeople} onDelete={this.deletePerson} />
        </div>)
    }
}

render(<App />, document.getElementById('root'));