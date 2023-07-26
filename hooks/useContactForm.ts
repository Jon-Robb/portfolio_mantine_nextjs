import { useForm } from '@mantine/form';
import { emailValidation } from '../utils/validation';

export default function useContactForm() {
    return useForm({
      initialValues: {
        name: '',
        email: '',
        message: '',
      },
      validate: {
        name: (value: string) => (!value ? 'Please enter your name' : null),
        email: (value: string) =>
          !emailValidation(value) ? 'Invalid email address' : null,
        message: (value: string) => (!value ? 'Please enter your message' : null),
      },
    });
}
