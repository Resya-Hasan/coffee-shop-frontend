import AppRoutes from './routes';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from './features/auth/AuthSlice';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [])

  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  )
}

export default App
