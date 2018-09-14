import React, { Component } from 'react';
import Employee from './Employee';

class Loopback extends Component {
	constructor (props) {
		super (props);
		this.state = {Emp: [{name: "", address: "", salary: ""}]
		};
	}

	componentDidMount () {
		fetch('http://localhost:9000/api/Employees')
		.then((response) => response.json())
		.then(responseJson=> this.setState({Emp: responseJson}))
		}

		onNameChangeHandler = (event) => {
			this.setState({name: event.target.value});
		}

		onAddChangeHandler = (event) => {
			this.setState({address: event.target.value});
		}

		onSalaryChangeHandler = (event) => {
			this.setState({salary: event.target.value});
		}

		onClickButton = () => {
			const name= this.state.name;
			const address= this.state.address;
			const salary= this.state.salary;
		}

		onClickButton = () => {
			fetch('http://localhost:9000/api/Employees', {
				method:'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: this.state.name,
					address: this.state.address,
					salary: this.state.salary,
				})
			});
		}
	render () {
		return (
			<div>
				<Employee Emp={this.state.Emp} onNameChangeHandler={this.onNameChangeHandler} 
				onAddChangeHandler={this.onAddChangeHandler} onSalaryChangeHandler={this.onSalaryChangeHandler} 
				onClickButton={this.onClickButton} newName={this.state.name} newAddress={this.state.address} 
				newSalary={this.state.salary}/>
			</div>
		);
	}
}
export default Loopback;