import { useForm } from '@mantine/form';

const emailValidationPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

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
          !emailValidationPattern.test(value) ? 'Invalid email address' : null,
        message: (value: string) => (!value ? 'Please enter your message' : null),
      },
    });
}
