import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Card, Button, Menu } from 'semantic-ui-react';
// import UserRepos from './containers/UserRepos';
import factory from '../ethereum/factory';
import './style.css';

class CampaignsIndex extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	static async componentWillMount() {
		// const campaigns = await factory.methods.getDeployedCampaigns().call();

		this.setState({
			campaigns: campaigns
		});
	}

	renderCampaigns() {
		console.log(this.state.campaigns);
		const items = this.state.campaigns.map(address => {
			return {
				header: address,
				description: <a>View Campaign</a>,
				fluid: true
			};
		});

		// const items = [{
		// 	header: "itsa me a card!",
		// 	description: <a href=''>shiiit</a>,
		// 	fluid: true
		// }]

		return <Card.Group items={items} />;
	}

	render() {
		console.log(this.state.campaigns);


		return (
			<div id="Campaigns">
				<Container>
					<h2 className="text-center">Campaigns Index</h2>
					{/*{this.state.campaigns[0]}*/}
					{/*<UserRepos />*/}
					{this.renderCampaigns()}
					<Button
						floated="right"
						content="Create Campaign"
						icon="add circle"
						primary={true} // can just write `primary`
					/>
				</Container>
			</div>
		);
	}
}

export default CampaignsIndex;

