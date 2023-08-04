import { TextInput } from '@mantine/core';

interface IEmailInputProps {
    form: any;
    screenSize: string;
    onBlur: () => void;
}

export default function EmailInput({ form, screenSize, onBlur }: IEmailInputProps) {
    return (
        <TextInput
          label="Email"
          aria-label="Enter your email"
          placeholder="Enter your email"
          withAsterisk={!form.values.email || !form.isValid('email')}
          size={screenSize}
          {...form.getInputProps('email')}
          onBlur={onBlur}
        />
    );
}
