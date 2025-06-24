import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [isHost, setIsHost] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);

    // const fetchIsHost = () => {
    //     setIsHost(false);
    // }




    const value = {user, setUser, isHost, setIsHost, axios, location, navigate, showUserLogin, setShowUserLogin};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

}

export const useAppContext = () => {
    return useContext(AppContext);
};