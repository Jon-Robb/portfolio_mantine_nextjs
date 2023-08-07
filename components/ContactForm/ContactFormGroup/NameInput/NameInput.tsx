import { TextInput } from '@mantine/core';

interface INameInputProps {
    label: string;
    ariaLabel: string;
    placeholder: string;
    form: any;
    screenSize: string;
}

export default function NameInput({ form, screenSize, label, ariaLabel, placeholder }:
     INameInputProps) {
    return (
        <TextInput
          label={label}
          aria-label={ariaLabel}
          placeholder={placeholder}
          withAsterisk={!form.isValid('name')}
          size={screenSize}
          {...form.getInputProps('name')}
          onBlur={form.values.name !== '' ? () => form.validateField('name') : () => { }}
        />
    );
}
