import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';
import { AsideBar } from '@/components/AsideBar';
import { Header } from '@/components';
import { Toaster } from '@/components/ui/toaster';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <QueryClientProvider client={queryClient}>
                <div className="container flex flex-col min-h-screen mx-auto overflow-x-hidden font-signature">
                    <Header />
                    <div className="flex pt-20">
                        <AsideBar />
                        <main className="w-full pt-4 md:px-4">
                            <Outlet />
                        </main>
                        <Toaster />
                    </div>
                </div>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
