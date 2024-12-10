var Roblox = Roblox || {};
Roblox.LangDynamicDefault = Roblox.LangDynamicDefault || {};
Roblox.LangDynamicDefault["Authentication.ResetPassword"] = {"Response.Success":"Success","Action.Cancel":"Cancel","Label.Username":"Username","Response.UpdatePasswordFlooded":"Too many attempts. Please try again later.","Response.UpdatePasswordIncorrect":"Your current password is incorrect, the password was not changed.","Response.UpdatePasswordInputMissing":"Must include new password and confirm password","Response.UpdatePasswordMismatch":"Your new password and confirm password must match","Label.WhoCanFindMeByPhone":"Who can find me by my phone number?","Label.ToolTip.WhoCanFindMeByPhone":"This setting controls who can find you using the phone number you provided.","HeadingForgetPasswordOrUsername":"Forgot Password or Username","MessageFloodCheckedError":"Too many attempts. Please try again later.","MessageOldUsernameError":"It looks like you are trying to log in with a username that has changed. Please log in with your new username.","MessageCredentialsError":"Your username or password is incorrect. Please check them and try again.","MessageCaptchaError":"We need to make sure you're not a robot!","MessageCaptchaFailError":"The words you typed didn't match the picture. Please try again.","MessageUnknownSystemError":"System error. Please return to login screen.","MessageSamlUnauthenticated":"You must log in to Roblox to finish authenticating.","MessageInvalidTicket":"We couldn't load this security ticket.","MessagePasswordsDoNotMatch":"Passwords do not match","MessageInvalidPassword":"Invalid password","MessageAccountRecoveryUnknownError":"System error. Account could not be restored to this state.","MessageNoAccountsLinkedToEmail":"There are no accounts linked to this email address","MessageAccountDoesNotHaveAnEmail":"There is no email linked to this account","MessagePasswordResetTicketExpired":"Sorry, password reset requests expire {expirationHour} hours, {expirationMinute} minutes after issuance. Try requesting another password reset ticket again.","MessageForgotPasswordSuccess":"Check your email for login instructions","MessageInvalidAccountStatus":"Account status prevents resetting password","MessageInvalidUserNameOrEmail":"Invalid username, or no email exists","MessageForgotPasswordFeatureDisabled":"Feature temporarily disabled. Please try again later.","MessageMobileResetPasswordSuccess":"MobileResetPasswordSuccess","MessageUnknownError":"Unknown Error","Heading.VerifyPhone":"Verify Phone","Message.EnterCode":"You will receive a code on your phone if it has been verified on your account. The code may be sent via WhatsApp or SMS.","Placeholder.EnterCode":"Enter Code ({codeLength}-digit)","Action.Verify":"Verify","Label.ResendCode":"Resend Code","Label.ForgetMyPassword":"Forgot My Password","Label.ForgetMyUsername":"Forgot My Username","Placeholder.Email":"Email","Placeholder.PhoneNumber":"Phone Number","Label.InvalidEmail":"Invalid email","Label.InvalidPhoneNumber":"Invalid phone number","Label.Submit":"Submit","Message.CantSendEmailWarning":"If you did not give us a {styleStart}real email address{styleEnd} when you created your account, we cannot send you an email.","Message.EmailSuccessTitle":"Email Sent","Message.EmailSuccessBody":"An email with instructions has been sent to you if the email was previously saved on your account. Please check all your folders, including spam.","Message.PhoneForUsernameSuccessTitle":"SMS Sent","Message.PhoneForUsernameSuccessBody":"An SMS with your username(s) has been sent to you if the phone number was previously verified on your account.","Message.DefaultError":"An error occurred, try again later.","Description.EmailToRetriveUsername":"Enter your email to retrieve your username.","Description.EmailToResetPassword":"Enter your email to reset your password.","Description.PhoneToRetriveUsername":"Enter your phone number to retrieve your username.","Description.PhoneToResetPassword":"Enter your phone number to reset your password.","Action.EmailToRetriveUsername":"Use email to retrieve username","Action.PhoneToRetriveUsername":"Use phone number to retrieve username","Action.EmailToResetPassword":"Use email to reset password","Action.PhoneToResetPassword":"Use phone number to reset password","MessageAccountNotFoundByPhone":"No account found. Please use a different phone number.","MessageAccountNotFoundByEmail":"No account found. Please use a different email.","Response.PasswordResetSuccess":"Password reset success! Please login again.","Action.Ok":"OK","Heading.VerifyCode":"Verify Code","Message.EnterCodeSentToEmail":"Enter the code we just sent to your email.","Label.ActionButtonYes":"Yes","Label.NeutralButtonOk":"OK","Label.Password":"Password","Message.EmailForUsernameSuccessBody":"An email with your username(s) has been sent to you if the email was previously saved on your account.","Description.PasswordResetEmail.PlainBody":"We have received a request to reset the password for your Roblox account: {emailOrUsername}{lineBreak}{lineBreak}If you submitted this request, please click the link below or paste it into a web browser to proceed.{lineBreak}This link will be active for {passwordResetTicketHours} hours, {passwordResetTicketMinutes} minutes. If you do not wish to reset your password, please disregard this notice.{lineBreak}{lineBreak}{resetPasswordUrl}","Description.PasswordResetEmail.HtmlBody":"We have received a request to reset the password for your Roblox account: {emailOrUsername}{lineBreak}{lineBreak}If you submitted this request, please click the button below to proceed.{lineBreak}This button will be active for {passwordResetTicketHours} hours, {passwordResetTicketMinutes} minutes. If you do not wish to reset your password, please disregard this notice.{lineBreak}{lineBreak}{aTagWithStartHref}{resetPasswordUrl}{hrefEnd}{buttonStart}Reset Password{buttonEnd}{aTagEnd}","Description.PasswordResetEmail.Subject":"Roblox Account Password Reset","Description.PasswordResetEmail.From":"{escapeLiteralStart}Roblox Password Reset{escapeLiteralEnd} {fromEmailAddress}","Description.PasswordChangeEmail.Subject":"Roblox Password Reset","Description.PasswordChangeEmail.HtmlBody":"We noticed that the password changed for your Roblox account: {userName}. If you didn't intend to change it, or you think someone else changed it by mistake, please click this link to undo the action:<br /><a href=\"{urlWithTicket}\">{urlShown}</a><br /><br />If you are happy with your new Roblox password, you don't have to do anything! It's already set up. Please do not reply to this message. If you have any questions, please see the Roblox help page (https://www.roblox.com/help).","Description.PasswordChangeEmail.BodyPlainText":"We noticed that the password changed for your Roblox account: {userName}. If you didn't intend to change it, or you think someone else changed it by mistake, please click this link to undo the action:\n{urlWithTicket}\n\nIf you are happy with your new Roblox password, you don't have to do anything! It's already set up. Please do not reply to this message. If you have any questions, please see the Roblox help page (https://www.roblox.com/help).","Description.PasswordChangeEmail.From":"\"Roblox Password Reset\" {fromEmailAddress}","MessagePasswordCannotBeUsed":"Sorry, that password cannot be used.","Description.PasswordChangeEmail.BodyHtml.V2":"Dear {username},<br/><br/>We noticed you have changed the password for your account. If you didn't intend to change it, or you think someone else changed it by mistake, then we need you to contact customer support ({supportLink}) to change the password back. That way we will know for sure that your account is secure and safe.<br/><br/>If you are happy with your new password on Roblox, you don't have to do anything! It's already set up.<br/>Please do not reply to this message. If you have any questions, please see the Roblox help page ({helpLink}).","Description.PasswordChangeEmail.BodyPlainText.V2":"Dear {username},\n\nWe noticed you have changed the password for your account. If you didn't intend to change it, or you think someone else changed it by mistake, then we need you to contact customer support ({supportLink}) to change the password back. That way we will know for sure that your account is secure and safe.\n\nIf you are happy with your new password on Roblox, you don't have to do anything! It's already set up.\nPlease do not reply to this message. If you have any questions, please see the Roblox help page ({helpLink}).","Description.PasswordResetEmail.Subject.V2":"Roblox Account Password Reset","Description.PasswordResetEmail.Header.V2":"Roblox Account Password Reset","Description.PasswordResetEmail.Body.V2":"{paragraphStart}Hello,{paragraphEnd}{paragraphStart}We have received a request to reset the password for your Roblox account: {emphasisStart}{emailOrUsername}{emphasisEnd}.{paragraphEnd}{paragraphStart}If you submitted this request, please click the button below to proceed:{paragraphEnd}","Description.PasswordResetEmail.ButtonText.V2":"Reset Password","Description.PasswordResetEmail.BodyLower.V2":"This button will be active for {passwordResetTicketHours} hour(s), {passwordResetTicketMinutes} minute(s).{lineBreak}{paragraphStart}Thank You,{lineBreak}{emphasisStart}The Roblox Team{emphasisEnd}{paragraphEnd}","Description.PasswordResetEmail.Footer.V2":"You are receiving this email because there has been an attempt to reset your password. If you did not make this request, do not reply to this email directly. Please contact {aTagStartWithHref}{supportPageLink}{hrefEnd}Roblox Support{aTagEnd} and change your password immediately.","Description.PasswordResetEmail.Links.V2":"{aTagStartWithHref}{AccountSafetyArticleLink}{hrefEnd}Account Safety{aTagEnd} | {aTagStartWithHref}{supportPageLink}{hrefEnd}Support{aTagEnd}","Description.PasswordResetEmail.BodyLower.HoursOnly":"This button will be active for {passwordResetTicketHours} hours.{lineBreak}{paragraphStart}Thank You,{lineBreak}{emphasisStart}The Roblox Team{emphasisEnd}{paragraphEnd}","Description.PasswordResetEmail.BodyLower.MinutesOnly":"This button will be active for {passwordResetTicketMinutes} minutes.{lineBreak}{paragraphStart}Thank You,{lineBreak}{emphasisStart}The Roblox Team{emphasisEnd}{paragraphEnd}","Description.PasswordResetEmail.BodyLower.HourAndMinutes":"This button will be active for {passwordResetTicketHours} hour and {passwordResetTicketMinutes} minutes.{lineBreak}{paragraphStart}Thank You,{lineBreak}{emphasisStart}The Roblox Team{emphasisEnd}{paragraphEnd}","Description.PasswordResetEmail.BodyLower.HoursAndMinutes":"This button will be active for {passwordResetTicketHours} hours and {passwordResetTicketMinutes} minutes.{lineBreak}{paragraphStart}Thank You,{lineBreak}{emphasisStart}The Roblox Team{emphasisEnd}{paragraphEnd}\t","Description.PasswordResetEmail.BodyLower.OneHourOnly":"This button will be active for 1 hour.{lineBreak}{paragraphStart}Thank You,{lineBreak}{emphasisStart}The Roblox Team{emphasisEnd}{paragraphEnd}","Description.PasswordResetEmail.FooterUpdated.V2":"You are receiving this email as there was a request to reset your password. If you didn't make this request, you can just ignore this email. Please review our help article for more information on {aTagStartWithHref}{accountSecurityLink}{hrefEnd}Account Security{aTagEnd}. Do not reply to this email as it will not be received. If you need assistance, please visit us at {aTagStartWithHref}{supportPageLink}{hrefEnd}Roblox Support{aTagEnd}.","MessagePasswordResetTicketExpiredWithLink":"Sorry, your password reset link has expired. Please visit the {aTagStartWithHref}{forgotPasswordLinkUrl}{hrefEnd}Forgot Password page{aTagEnd} to receive a new link.","Heading.AccountRecoveryPrompt.Title":"Forgot Username/Password?","Description.AccountRecoveryPrompt.Body":"Would you like to recover your account?","Message.AccountSecurityTicketExpired":"The account security ticket is expired.","MessageDifferentPasswordComplex":"Please use a different password. Use any special characters or numbers.","MessageDifferentPasswordComplexShort":"Please create a more complex password.","MessagePasswordBadLength":"Passwords must be between 8 and 200 characters long.","MessagePasswordContainsUsername":"Password shouldn't match username.","MessageDifferentPasswordRequired":"Please use a different password. Use any special characters or numbers.","Description.ShortCodeLegalDisclaimer":"By clicking \"Continue\", you are submitting your phone number and agreeing to our {linkTagWithSmsTos}SMS Terms of Use{linkTagEnd} and {linkTagWithPrivacyPolicy}Privacy Policy{linkTagEnd}. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.","Label.Continue":"Continue","Label.Email":"Email","Heading.RecoverRobloxAccount":"Recover your Roblox account","Description.EmailToRecoverAccount":"Enter your email to recover your Roblox account","Description.PhoneToRecoverAccount":"Enter your phone number to recover your Roblox account","Label.Phone":"Phone"};
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("DynamicLocalizationResourceScript_Authentication.ResetPassword");
