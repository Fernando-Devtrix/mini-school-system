import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Divider, Skeleton } from "antd";
import * as actions from "../store/actions/assignments";
import Hoc from "../hoc/hoc";

class AssignmentsList extends Component {
	componentDidMount() {
		if (this.props.token !== undefined && this.props !== null) {
			this.props.getASNTS(this.props.token);
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.token !== this.props.token) {
			if (newProps.token !== undefined && newProps.token !== null) {
				this.props.getASNTS(newProps.token);
			}
		}
	}

	renderItem(item) {
		return (
			<Link to="/assignments/1">
				<List.Item>{item.title}</List.Item>
			</Link>
		);
	}

	render() {
		return (
			<Hoc>
				{this.props.loading ? (
					<Skeleton active />
				) : (
					<div>
						<Divider orientation="left">Assignment List</Divider>
						<List
							size="large"
							bordered
							dataSource={this.props.assignments}
							renderItem={(item) => this.renderItem(item)}
						/>
					</div>
				)}
			</Hoc>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
		assignments: state.assignments.assignments,
		loading: state.assignments.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getASNTS: (token) => dispatch(actions.getASNTS(token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentsList);
