import { Outlet } from 'react-router-dom';

import { ThemeProvider } from './components/theme-provider';

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="container flex flex-col max-w-6xl min-h-screen py-4 mx-auto">
                Enrollment List
                <Outlet />
            </div>
        </ThemeProvider>
    );
}

export default App;
