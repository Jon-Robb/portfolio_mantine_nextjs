import { TextInput, Loader } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

interface IEmailInputProps {
    label: string;
    ariaLabel: string;
    placeholder: string;
    form: any;
    screenSize: string;
    loading: boolean;
    onBlur: () => void;
}

const adaptedSizes : Record<string, number> = {
    xs: 12,
    sm: 14,
    md: 18,
    lg: 20,
    xl: 22,
};

export default function EmailInput({
    form, screenSize, onBlur, label, ariaLabel, placeholder, loading }:
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
          icon={<IconAt size={adaptedSizes[screenSize]} />}
          {...(loading && { rightSection: <Loader size={screenSize} /> })}
        />
    );
}
