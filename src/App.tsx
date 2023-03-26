import { Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material';
import CustomerDetail from './components/customerDetail/CustomerDetail';
import Destination from './components/destination/Destination';
import GeneralInfo from './components/generalTripInfo/GeneralInfo';
import Login from './components/login/Login';
import NavbarWrapper from './components/navBar/NavBarWrapper';
import SignUp from './components/signup/Signup';
import Stack from '@mui/material/Stack';
import TripDetail from './components/tripDetail/TripDetail';

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Stack direction="column" spacing={5}>
          <div style={{ marginBottom: '50px' }}>
            <NavbarWrapper />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/:destination/general-trip-details" element={<GeneralInfo />} />
            </Routes>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default App;
