import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { useAppDispatch } from '../../store';
import { verificationUser2 } from './userSlice';
import { UserGoogle } from './types/types';

export const Mycontext = createContext({});

export default function Context(props: any) {
  const [userObj, setuserObj] = useState<any>();
  console.log(userObj);

  useEffect(() => {
    Axios.get('http://localhost:4000/getUser', { withCredentials: true }).then(
      (res) => {
        if (res.data) {
          setuserObj(res.data);
        }
      },
    );
  }, []);
  return (
    <Mycontext.Provider value={userObj}>{props.children}</Mycontext.Provider>
  );
}
