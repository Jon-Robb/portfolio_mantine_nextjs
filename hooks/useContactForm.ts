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
        name: (value: string) => {
          if (!value.trim()) return 'Please enter your name';
          if (!/^[a-zA-Z .-]+$/.test(value)) return 'Name can only contain letters, spaces, dots, and dashes, ';
          if (value.length < 2) return 'Name must be at least 2 characters long';
          if (value.length > 50) return 'Name must be less than 50 characters long';
          return null;
        },
        email: (value: string) => !emailValidation(value) ? 'Invalid email address' : null,
        message: (value: string) => {
          if (!value.trim()) return 'Please enter your message';
          if (value.length < 10) return 'Message must be at least 10 characters long';
          if (value.length > 500) return 'Message must be less than 500 characters long';
          return null;
        },
      },
    });
}
