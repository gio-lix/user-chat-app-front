import React from 'react';
import {Routes, Route} from "react-router-dom"
import AuthProvider from "./layout/AuthProvider";
import Account from "./pages/Account";
import Chat from "./pages/Chat";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<AuthProvider />}>
                    <Route index element={<Account />} />
                    <Route path="/chat" element={<Chat />} />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
