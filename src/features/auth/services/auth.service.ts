import { IResponse } from 'src/shared/shared.interface';
import { api } from 'src/store/api';

import { ISignInPayload, ISignUpPayload } from '../interfaces/auth.interface';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<IResponse, ISignUpPayload>({
      query(body: ISignUpPayload) {
        return {
          url: '/auth/signup',
          method: 'POST',
          body
        };
      }
    }),
    signIn: build.mutation<IResponse, ISignInPayload>({
      query(body: ISignInPayload) {
        return {
          url: '/auth/signin',
          method: 'POST',
          body
        };
      }
    }),
    logout: build.mutation<IResponse, void>({
      query() {
        return {
          url: 'auth/signout',
          method: 'POST',
          body: {}
        };
      }
    }),
    resendEmail: build.mutation<IResponse, { userId: number; email: string }>({
      query(data) {
        return {
          url: 'auth/resend-email',
          method: 'POST',
          body: data
        };
      }
    }),
    verifyEmail: build.mutation<IResponse, string>({
      query(token: string) {
        return {
          url: 'auth/verify-email',
          method: 'PUT',
          body: { token }
        };
      }
    }),
    verifyOTP: build.mutation<IResponse, { otp: string; browserName: string; deviceType: string }>({
      query(data) {
        return {
          url: `auth/verify-otp/${data.otp}`,
          method: 'PUT',
          body: {
            browserName: data.browserName,
            deviceType: data.deviceType
          }
        };
      }
    }),
    forgotPassword: build.mutation<IResponse, string>({
      query(email: string) {
        return {
          url: 'auth/forgot-password',
          method: 'PUT',
          body: { email }
        };
      }
    }),
    resetPassword: build.mutation<IResponse, { password: string; confirmPassword: string; token: string }>({
      query(data) {
        return {
          url: `auth/reset-password/${data.token}`,
          method: 'PUT',
          body: data
        };
      }
    }),
    checkCurrentUser: build.query<IResponse, void>({
      query: () => 'auth/currentuser'
    }),
    getLoggedInUser: build.query<IResponse, void>({
      query: () => 'auth/logged-in-user'
    }),
    removeLoggedInUser: build.mutation<IResponse, string>({
      query(username: string) {
        return {
          url: `auth/logged-in-user/${username}`,
          method: 'DELETE'
        };
      }
    })
  })
});

export const {
  useCheckCurrentUserQuery,
  useGetLoggedInUserQuery,
  useSignUpMutation,
  useSignInMutation,
  useRemoveLoggedInUserMutation,
  useLogoutMutation,
  useResendEmailMutation,
  useVerifyEmailMutation,
  useVerifyOTPMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = authApi;
