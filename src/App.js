import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';

function App() {
  return (
    <div className='flex flex-col justify-center items-center mt-12'>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
