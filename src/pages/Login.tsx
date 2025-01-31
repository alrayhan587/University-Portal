import { Button } from 'antd';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../redux/feature/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/feature/auth/authSlice';
import { verifyToken } from '../util/verifyToken';

/*
type TuserInfo = {
  id: string,
  password: string,
}
  

const [login, { data, error }] = useLoginMutation();
console.log("data =>", data);
console.log("error=>", error);

*/
const Login = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: '0001',
      password: 'admin12345'
    }
  });

  const [login, { error }] = useLoginMutation();

  // console.log('data=>', data);
  // console.log('error=>', error);



  const checkValue = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    }
    // console.log(data);
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    console.log(res);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  }


  return (
    <form onSubmit={handleSubmit(checkValue)}>
      <div>
        <label htmlFor='id'>Id:</label>.
        <input type='text' id='id' {...register('id')} />

      </div>

      <div>
        <label htmlFor='password'>Password:</label>.
        <input type='text' id='password' {...register('password')} />
      </div>

      <Button htmlType='submit'>Login</Button>
    </form>
  )
}

export default Login