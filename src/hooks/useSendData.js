//import mutations
import { mutationRegister } from '../container/RegisterMutation';
import { mutationLogIn } from '../container/LogInMutation';

export const useSendData = (register, email, password) => {

  const { 
    mutationRegisterFunction,
    data: data_register, 
    error: error_register, 
    loading: loading_register
  } = mutationRegister();

  const { 
    mutationLogInFunction,
    data: data_login,
    error: error_login,
    loading: loading_login,
  } = mutationLogIn();
  
  const handleRegisterClick = (e) => {

    e.preventDefault();
    const input = { 
      email,
      password
    };
    mutationRegisterFunction({ variables: { input } })
  }

  const handleLoginClick = (e) =>{
    e.preventDefault();
    const input = {
      email,
      password
    };
    mutationLogInFunction({ variables: { input } })
  };

  if(register){
    return [
      data_register,
      error_register,
      loading_register, 
      handleRegisterClick,
    ]
  }else{
    return [
      data_login,
      error_login,
      loading_login, 
      handleLoginClick,
    ]
  }

};
