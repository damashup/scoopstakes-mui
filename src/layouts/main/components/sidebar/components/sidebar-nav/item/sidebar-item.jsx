import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOutStart} from '../../../../../../../redux/user/actions/sign-out/start/sign-out-start.action';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import {SidebarListItem, SidebarTextDiv, SidebarSubList} from './styles'
import SidebarSubItem from './sub-item/sub-item.component';

const CustomRouterLink = forwardRef((props, ref) => (

  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>

));

const SidebarItem = ({page, signOut}) => {
  const subsections = page.subsections ? page.subsections : null;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

    return (
    <>

      {subsections 
      ?
      <>
      <SidebarListItem 
        key={page.title}
        to={page.href}
        onClick={handleClick}
      >

          <SidebarTextDiv>{page.title}</SidebarTextDiv>
          <SidebarTextDiv>{open ? <ExpandLess /> : <ExpandMore />}</SidebarTextDiv>

      </SidebarListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>

        <SidebarSubList component="div" disablePadding>
          {subsections.map(subsection => <SidebarSubItem 
                                            subitem={subsection} 
                                            key={subsection.title}
                                            base={page.href}
                                          />)}
        </SidebarSubList>
      </Collapse>
      </>
      :
      <SidebarListItem
        key={page.title}
        component={CustomRouterLink} 
        to={`${page.href}`}
        onClick={(page.linkUrl === 'sign-out')  ? signOut
                                                :handleClick}
      >
        {page.title}
      </SidebarListItem>   
      }
    </>
  )
};
      

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart())
})

export default connect(null,mapDispatchToProps)(SidebarItem);
