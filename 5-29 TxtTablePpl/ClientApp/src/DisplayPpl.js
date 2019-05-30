import React from 'react';

export default class DisplayPpl extends React.Component {
    render() {
        return (<div className="col-md-6">
            <table className="table table-bordered table-striped  ">
                <tbody>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th>Delete</th>
                </tr>
                            {this.props.people.map((i, idx) => <tr key={idx}>
                                <td>{i.firstname}</td>
                                <td>{i.lastname}</td>
                        <td>{i.age}</td>
                        <td><button onClick={this.props.onDelete} id={idx} className="btn btn-danger">Delete</button></td>
                            </tr>)}
                </tbody>
            </table>
        </div>)
        
            }
        }
//<li key={idx}>{i.firstname} {i.lastname} {i.age}</li>