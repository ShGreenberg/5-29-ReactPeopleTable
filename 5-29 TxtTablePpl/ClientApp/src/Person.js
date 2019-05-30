import React from 'react';

export default class Person extends React.Component {

    render() {
        return (<div className="row">
            <div className="col-md-2">
                <input type="text" onChange={this.props.addFirstname} value={this.props.firstname} />
            </div>
            <div className="col-md-2">
                <input type="text" onChange={this.props.addLastname} value={this.props.lastname} />
            </div>
            <div className="col-md-2">
                <input type="text" onChange={this.props.addAge} value={this.props.age} />
            </div>
            <br />
            <br/>
            <div className="col-md-2">
                <button onClick={this.props.addPerson} className="btn btn-success">Add Person</button>
            </div>
            <div className="col-md-2">
                <button onClick={this.props.clear} className="btn btn-info">Clear people</button>
            </div>
        </div>);
    }
}