import axios from 'axios';
import { EMessages } from '../../typescript/enums/EMessages';
import { EConstants } from '../../typescript/enums/EConstants';
import IConfirmationEmailData from '../../typescript/interfaces/IConfirmationEmailData';

export const checkEmail = async (email: string) => {
    try {
        const { data } = await axios.post(EConstants.CHECK_EMAIL_ROUTE, { email }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data.message;
    } catch (error) {
        return EMessages.EMAIL_NOT_FOUND;
    }
};

export const sendEmail = async (value : { name:string, email:string, message:string }) => {
    try {
        const { data } = await axios.post(EConstants.SEND_EMAIL_ROUTE, value, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data.message;
    } catch (error) {
        return EMessages.EMAIL_NOT_FOUND;
    }
};

export const sendConfirmationMail = async (values:IConfirmationEmailData) => {
    try {
        const { data } = await axios.post(EConstants.SEND_CONFIRMATION_ROUTE, values, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return data.message;
    } catch (error) {
        return EMessages.EMAIL_NOT_FOUND;
    }
};
