import { TextInput } from '@mantine/core';

interface IEmailInputProps {
    label: string;
    ariaLabel: string;
    placeholder: string;
    form: any;
    screenSize: string;
    onBlur: () => void;
}

export default function EmailInput({ form, screenSize, onBlur, label, ariaLabel, placeholder }:
    IEmailInputProps) {
    return (
        <TextInput
          label={label}
          aria-label={ariaLabel}
          placeholder={placeholder}
          withAsterisk={!form.values.email || !form.isValid('email')}
          size={screenSize}
          {...form.getInputProps('email')}
          onBlur={onBlur}
        />
    );
}
