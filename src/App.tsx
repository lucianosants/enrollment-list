import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';
import { AsideBar } from '@/components/AsideBar';
import { Header } from '@/components';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="container flex flex-col min-h-screen mx-auto font-signature">
                <Header />
                <div className="flex pt-20">
                    <AsideBar />
                    <main className="px-4 pt-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
