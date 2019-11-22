import React from 'react'
import {connect} from 'react-redux';
import {selectTeamDetails} from '../../../../../../../redux/team/selectors/team.selectors';
import TeamLogoComponent from './component';

class TeamLogoContainer extends React.Component {
    render(){
        if(!this.props.teamDetails)return <TeamLogoComponent logoUrl='https://cdn.steemitimages.com/DQmdgWoGR52RPjLUvbjB4Q2BGFrBWzBgKTWjDCqwWx8zyih/footballer_placeholder.png' />
        return <TeamLogoComponent logoUrl={this.props.teamDetails.logo} />
    }
}

const mapStateToProps =(state, ownProps) => ({
    teamDetails: selectTeamDetails(ownProps.teamName)(state)
})

export default connect(mapStateToProps)(TeamLogoContainer);