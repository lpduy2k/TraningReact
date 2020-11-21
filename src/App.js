import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      <DataBinding />
    </div>
  );
}

export default App;
