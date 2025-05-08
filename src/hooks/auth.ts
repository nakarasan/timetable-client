import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequested, registerRequested } from 'store/auth/authSlice';

export function useLogin() {
  const dispatch = useDispatch();

  const onLogin = useCallback(
    async (values: any, actions: any) => {
      actions.setSubmitting(true);
      await dispatch(
        loginRequested({
          password: values.password,
          username: values.username,
        })
      );
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 500);
    },
    [dispatch]
  );

  return { onLogin };
}

export function useStoreRegister() {
  const dispatch = useDispatch();

  const onStoreRegister = useCallback(
    async (values: any) => {
      await dispatch(
        registerRequested({
          firstName: values?.firstName,
          lastName: values?.lastName,
          displayname: values?.displayname,
          phone: values?.phone,
          address: values?.address,
          email: values?.email,
          password: values?.password,
          userType: values?.userType,
          rollNumber: values?.rollNumber,
          registrationNumber: values?.registrationNumber,
          batchId: values?.batchId,
        })
      );
    },
    [dispatch]
  );

  return { onStoreRegister };
}

