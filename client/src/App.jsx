import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.routes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="min-h-screen w-full overflow-hidden">
            <Provider store={store}>
                <RouterProvider router={router} />
                <ToastContainer />
            </Provider>
        </div>
    );
}

export default App;
