import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../redux/auth/auth';

const useInput = data => {
  const [text, setText] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setText(data.text);
    if (data.type === 'ID') {
      dispatch(
        login({
          loginId: text,
        }),
      );
    } else if (data.type === 'Password') {
      dispatch(
        login({
          loginPassword: text,
        }),
      );
    }
  }, [dispatch]);
};

export default useInput;
