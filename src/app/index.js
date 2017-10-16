var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery'); 


//Components 
var UserItem = require('./userItem');
var AddUser = require('./addUser');

var UsersComponent = React.createClass({
	getInitialState() {
		return {
			users : [
				{
					id: 1,
					fullname: 'Ace Ramos', 
					nick: 'ace',
					gender: 'Male',
					bday: 'October 16, 1996',
					email: 'aceramos@email.com',
					mobile: '09123456789',
					hobbies: ['walk','run','walk'],
					work:'Web Developer'
				},
				{	
					id: 2,
					fullname: 'Nene Znsp', 
					nick: 'nene',
					gender: 'Female',
					bday: 'January 1, 1996',
					email: 'nenenznp@email.com',
					mobile: '09123456789',
					hobbies: ['walk','run','walk'],
					work:'Model'
				}
			]
		};
	},
	render(){ 
		 
		let userItems;
		if(this.state.users){ 	
			userItems = this.state.users.map(user => {
				return(
					<UserItem key={user.id} user={user} onDelete={this.onDelete} />
				);
			});		
		}
		return(
			<div className="Users">
				<AddUser onAdd={this.onAdd} autoId={this.state.users.length + 1} />
				<br/>
				<a href="#" data-toggle="modal" data-target="#mNewUser" className="btn btn-default"> <i className="glyphicon glyphicon-plus sm-text sym-plus"></i></a>
				<div className="row">
					{userItems}
				</div>
			</div>
		);
	},
	onDelete(item){
		var updatedUsers = this.state.users;
		updatedUsers = this.state.users.filter(function(val, index){
			return item !== val.id;
		});
		this.setState({
			users: updatedUsers 
		});
	},
	onAdd(item){
		var updatedUsers = this.state.users;
		updatedUsers.push(item);
		this.setState({
			users:updatedUsers
		});

	}
});
  
ReactDOM.render(<UsersComponent />, document.getElementById('users-wrapper'));