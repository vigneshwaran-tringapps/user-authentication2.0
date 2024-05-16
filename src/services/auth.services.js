const loginService = async (email, password, usertoken) => {
    // try {
    //   const userData = await getSingleUserData({ email }, { isLogin: true });
    //   if (!userData) {
    //     return {
    //       status: false,
    //       errorCode: 'ERR_001',
    //       message: 'We can’t find your email address. Please Sign Up.',
    //     };
    //   }
  
    //   const isValidPassword = await bcrypt.compare(password, userData?.password);
    //   if (!isValidPassword) {
    //     return addLoginAttempt({ email });
    //   }
  
    //   // if (!usertoken && !userData.is_email_verified)
    //   // throw { errorMsg: 'Please verify email' };
  
    //   const notificationCount = await getNotificationsCount({
    //     user: userData._id,
    //     is_read: false,
    //   });
  
    //   if (usertoken && !userData.is_email_verified) {
    //     const decodedToken = await jwt.verify(
    //       usertoken,
    //       process.env.JWT_PRIVATE_KEY,
    //     );
  
    //     if (!decodedToken) {
    //       return {
    //         status: false,
    //         errorCode: 'ERR_401',
    //         message: 'Invalid token',
    //       };
    //     }
    //     if (decodedToken && decodedToken.createdUser) {
    //       const userDetails = await getSingleUserData({
    //         _id: decodedToken.createdUser,
    //       });
    //       if (!userDetails) {
    //         return {
    //           status: false,
    //           errorCode: 'ERR_401',
    //           message: 'Invalid token',
    //         };
    //       }
    //       if (userDetails.is_email_verified) {
    //         return {
    //           status: false,
    //           errorCode: '201',
    //           message: 'User is already verified',
    //         };
    //       }
    //       if (userDetails.email !== email) {
    //         return {
    //           status: false,
    //           errorCode: 'ERR_401',
    //           message: 'Invalid token',
    //         };
    //       }
    //       if (!userDetails.is_email_verified) {
    //         userDetails.is_email_verified = true;
    //         await userDetails.save();
    //         const user = {
    //           username: userDetails?.username,
    //           _id: userDetails._id,
    //           email: userDetails.email,
    //           is_notification_enabled: userDetails.is_notification_enabled,
    //           is_email_verified: userDetails.is_email_verified,
    //           reset_password_token: userDetails.reset_password_token,
    //           is_need_to_change_password: userDetails.is_need_to_change_password,
    //           notificationCount,
    //           user_for: userDetails.user_for,
    //           createdAt: userDetails.createdAt,
    //           updatedAt: userDetails.updatedAt,
    //           linked_ticket: userDetails.linked_ticket,
    //         };
    //         const token = createJWTToken(userDetails);
    //         return {
    //           status: true,
    //           message: 'User logged-in successfully',
    //           data: { token: token, user },
    //         };
    //       }
    //     }
    //   }
  
    //   const user = {
    //     _id: userData._id,
    //     email: userData.email,
    //     is_notification_enabled: userData.is_notification_enabled,
    //     is_email_verified: userData.is_email_verified,
    //     reset_password_token: userData.reset_password_token,
    //     is_need_to_change_password: userData.is_need_to_change_password,
    //     notificationCount,
    //     user_for: userData.user_for,
    //     createdAt: userData.createdAt,
    //     updatedAt: userData.updatedAt,
    //     linked_ticket: userData.linked_ticket,
    //   };
  
    //   const token = createJWTToken(userData);
    //   return {
    //     status: true,
    //     message: 'User logged-in successfully',
    //     data: { token: token, user },
    //   };
    // } catch (error) {
    //   if (error.message == 'invalid signature') {
    //     return {
    //       status: false,
    //       errorCode: 'ERR_401',
    //       message: 'Invalid token',
    //     };
    //   }
    //   throw JSON.parse(JSON.stringify(error.errorMsg)) || internalServerError;
    // }
  };

module.exports = {
    loginService,
}