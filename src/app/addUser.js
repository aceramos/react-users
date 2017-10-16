var React = require('react');
var $ = require('jquery');

var AddUser = React.createClass({
	render(){
		return(
			<div id="mNewUser" className="modal fade" role="dialog">
			    <div className="modal-dialog">
			      <div className="modal-content new-user-content">
			        <div id="modal-body">
			            <button type="button" className="close" data-dismiss="modal">&times;</button>
			            <h3 className="modal-title">New User</h3>
			            <hr/>
			            <form onSubmit={this.handleAdd} id="userForm">
			            	 <label>Full Name* </label>
			                 <input type="text" ref="fullname" className="form-control" placeholder="Full Name" required />

							 <label>Nick Name* </label>	
			                 <input type="text" ref="nickname" className="form-control" placeholder="Nick Name" required />

			                 <label>Gender * </label>	
			                 <select className="form-control" ref="gender">
			                 	<option value="Male">Male</option>
			                 	<option value="Female">Female</option>
			                 </select>

			                 <label>Birthday* </label>	
			                 <input type="text" ref="bday" className="form-control" placeholder="Birthday" required />
			                 
			                 <label>Email* </label>	
			                 <input type="email" ref="email" className="form-control" placeholder="Email Address" required />

			                 <label>Mobile No:* </label>	
			                 <input type="number" ref="mobile" className="form-control" placeholder="Mobile Number" required />

			                 <label>Work:* </label>	
			                 <input type="text" ref="work" className="form-control" placeholder="Work" required />


			                 <label>Hobbies:* </label>	
			                 <input type="text" ref="hobbies" className="form-control" placeholder="Hobbies. (Will be split by `,`)"/>

			                 <hr/>
			                 <input type="submit" value="Add User" className="btn btn-success form-control"/>
			            </form> 
			        </div>
			      </div>
			    </div>
			</div>
		);
	},

	handleAdd(e){
		e.preventDefault();   
 
		var hobbies = this.refs.hobbies.value.split(",");
		alert(hobbies.length);
		this.props.onAdd({
			id: this.props.autoId,
			fullname: this.refs.fullname.value,
			nick: this.refs.nickname.value,
			gender: this.refs.gender.value,
			bday: this.refs.bday.value,
			email: this.refs.email.value,
			mobile: this.refs.mobile.value,
			hobbies: hobbies,
			work: this.refs.work.value
		});

		$('#userForm input').val('');
	}
});


module.exports = AddUser;