import {useEffect, useState} from 'react';
import decode from 'jwt-decode';
import { LoginUX } from "./LoginUX";
import { setSec, clearSec } from '../../store/slices/secSlice';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/store/services/secServices';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearSec);
        localStorage.removeItem('reduxState');
        localStorage.removeItem('token');
        navigate('/login');
    })
    return (
      <>
      <a>Login out...</a>
      </>
    )
  }
  export default Logout;