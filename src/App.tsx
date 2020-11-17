import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

const App:React.FC = () => {
  return (
    <div className="App" style={{margin: '20px'}}>
      <Menu mode='vertical' defaultIndex={0} className="custom-menu" onSelect={(index) => {console.log(index+1)}}>
        <MenuItem>menulink 1</MenuItem>
        <MenuItem disabled>menulink 2</MenuItem>
        <MenuItem>menulink 3</MenuItem>
        <MenuItem>menulink 4</MenuItem>
        <MenuItem>menulink 5</MenuItem>
        <MenuItem>menulink 6</MenuItem>
        <MenuItem>menulink 7</MenuItem>
      </Menu>

      <Button onClick={(e) => {alert('123')}}> Hello alert </Button>
      <Button className="custom"> Hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Hello small </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello large </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Hello large danger </Button>
      <Button disabled btnType={ButtonType.Link} href="https://baidu.com"> Baidu disabled Link </Button>
      <Button btnType={ButtonType.Link} href="https://baidu.com"> Link </Button>

    </div>
  );
}

export default App;
