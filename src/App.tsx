import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App:React.FC = () => {
  return (
    <div className="App">
      <Button onClick={(e) => {alert('123')}}> Hello </Button>
      <Button className="custom"> Hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Hello </Button>
      <Button disabled btnType={ButtonType.Link} href="https://baidu.com"> Baidu </Button>
      <Button btnType={ButtonType.Link} href="https://baidu.com"> Link </Button>
    </div>
  );
}

export default App;
