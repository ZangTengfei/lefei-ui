import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
const App:React.FC = () => {
  return (
    <div className="App" style={{margin: '20px'}}>
      <Menu
        mode='vertical'
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
    </div>
  );
}

export default App;
