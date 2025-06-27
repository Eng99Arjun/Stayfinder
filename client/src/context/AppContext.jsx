import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [isHost, setIsHost] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [searchQuery, setSearchQuery] = useState({});
    const [bookings, setBookings] = useState({});
    const [listings, setListings] = useState([]);

    // const fetchIsHost = () => {
    //     setIsHost(false);
    // }


    // function to getBookingCount
    const getBookingCount = () => {
        let totalCount = 0;
        for(const booking in bookings){
            totalCount += bookings[booking];
        }
        return totalCount;
    }

    const value = {currency, user, setUser, isHost, setIsHost, axios, location, navigate, showUserLogin, setShowUserLogin, searchQuery, setSearchQuery, bookings, listings, setBookings, getBookingCount};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

}

export const useAppContext = () => {
    return useContext(AppContext);
};