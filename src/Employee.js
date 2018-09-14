import React, { Component } from 'react';

class Employee extends Component {

	render () {
		return (
			<div>
			<h3>Employees Data</h3><br/>
				Name:<input type="text" value={this.props.newName} onChange={this.props.onNameChangeHandler}></input><br/><br/>
				Address:<input type="text" value={this.props.newAddress} onChange={this.props.onAddChangeHandler}></input><br/><br/>
				Salary: ₹<input type="text" value={this.props.newSalary} onChange={this.props.onSalaryChangeHandler}></input><br/><br/>
				<button onClick={this.props.onClickButton}>Add New Employee</button><br/>

				{
				this.props.Emp.map((Emp, index) =>(
					<p>{index+1} {Emp.name} {Emp.address} {Emp.salary}</p> )
				)
			}

			</div>
		);
	}
}
export default Employee;