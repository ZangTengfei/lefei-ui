import React, { useState } from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import Button from './components/Button/button'

library.add(fas)

const App:React.FC = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App" style={{margin: '20px'}}>
      <Menu
        // mode='vertical'
        defaultIndex={'2-1'} 
        className="custom-menu" 
        onSelect={(index) => {console.log(index)}}
        defaultOpenSubMenus={['2']}
      >
        <MenuItem>menulink 1</MenuItem>
        <MenuItem disabled>menulink 2</MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>menulink 4</MenuItem>
        <MenuItem>menulink 5</MenuItem>
      </Menu>
      <Icon icon='arrow-down' theme='primary' size='2x' />
      <Button size='lg' onClick={() => {setShow(!show)}}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-top"
      >
        <div>
          <p>lksajgklajkglajklgjkla</p>
          <p>lksajgklajkglajklgjkla</p>
          <p>lksajgklajkglajklgjkla</p>
          <p>lksajgklajkglajklgjkla</p>
          <p>lksajgklajkglajklgjkla</p>
          <Button size='lg'>A Large Button</Button>
        </div>
      </Transition>
    </div>
  );
}

export default App;
