var React = require('react');

require('./css/userItem.css');

var UserItem = React.createClass({
	render(){ 
		return(
			<div className="col-md-3 user-box">
				<span className="xs-text pull-right">
					<ul className="user-box-options">
						<li>
							<section className="id-number">
								No: {this.props.user.id}
							</section>
						</li>
						<li>
							<section className="btn-edit">
								<a href="#">Edit</a>
							</section>
						</li>
						<li>
							<section className="btn-delete">
								<a onClick={this.handleDelete}>Delete</a>
							</section>
						</li>
					</ul>
				</span>
				<br/>
				<h1 className="user-fullname">{this.props.user.fullname}</h1> 
				<h5 className="user-info"><b>Nick: </b>{this.props.user.nick}</h5>
				<h5 className="user-info"><b>Gender: </b>{this.props.user.gender}</h5>
				<h5 className="user-info"><b>Birth Day: </b>{this.props.user.bday}</h5>
				<h5 className="user-info"><b>Email: </b>{this.props.user.email}</h5>
				<h5 className="user-info"><b>Mobile No: </b>{this.props.user.mobile}</h5>
				<h5 className="user-info"><b>Work: </b>{this.props.user.work}</h5>
				<h5 className="user-info"><b>Hobbies: </b>{
						this.props.user.hobbies.map(hob => {
							return hob + ', ';
						})
				}</h5>
			</div>
		);
	},

	handleDelete(){
		this.props.onDelete(this.props.user.id);
	}


});

module.exports = UserItem;