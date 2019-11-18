import React from 'react';
import {withRouter} from 'react-router-dom';
import SubNavMenu from './sub-nav-menu';

const RightSideBar = ({match}) => {
    return (
        <div>
            <SubNavMenu />
        </div>
    )
}

export default withRouter(RightSideBar);
