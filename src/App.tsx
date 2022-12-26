import React from 'react';
import {Routes, Route} from "react-router-dom"
import AuthProvider from "./layout/AuthProvider";
import Account from "./pages/Account";
import Chat from "./pages/Chat";
import NotFound from "./components/pages/NotFound";

function App() {

    return (
        <main>
            <Routes>
                <Route path="/" element={<AuthProvider />}>
                    <Route index element={<Account />} />
                    <Route path="/chat" element={<Chat />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
