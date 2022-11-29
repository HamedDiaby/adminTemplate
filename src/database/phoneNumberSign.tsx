import {useRef} from "react";
import { 
    appAuth, auth, 
    PhoneAuthProvider, signInWithCredential,
} from "./config";
import { 
    FirebaseRecaptchaVerifierModal, 
    FirebaseRecaptchaBanner 
} from 'expo-firebase-recaptcha';

type verifPhoneNumberType = string | null

export const phoneNumberSign = ()=> {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const recaptchaVerifier = useRef<any>(null);
    const firebaseConfig = appAuth ? appAuth.options : undefined;
    const attemptInvisibleVerification = true;

    const Firebase_RecaptchaVerifierModal = <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
    />;

    const Firebase_RecaptchaBanner = attemptInvisibleVerification && (
        <div style={{position: 'absolute', bottom: 0, padding: 20}}>
            <FirebaseRecaptchaBanner />
        </div>
    );

    const verifPhoneNumber = async(phoneNumber: string) => {
        try {
            const phoneProvider = new PhoneAuthProvider(auth);
            const verification_Id = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
            );
            return verification_Id;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    const otpValidation = async(verificationId: string, verificationCode: string)=> {
        try {
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
            await signInWithCredential(auth, credential);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return {
        Firebase_RecaptchaVerifierModal,
        Firebase_RecaptchaBanner,
        verifPhoneNumber,
        otpValidation,
    }
}