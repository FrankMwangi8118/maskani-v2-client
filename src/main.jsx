import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Dashboard from './Pages/ClientDashboard/Components/Dashboard.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

const queryParams = new URLSearchParams(window.location.search);
const view = queryParams.get('view');  // Get the `view` query parameter

if (view === 'dashboard') {
    root.render(
        <StrictMode>
            <Dashboard />
        </StrictMode>
    );
} else {
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
