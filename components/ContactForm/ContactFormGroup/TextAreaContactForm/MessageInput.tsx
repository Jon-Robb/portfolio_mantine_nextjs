import { Textarea } from '@mantine/core';

interface ITextAreaContactFormProps {
    label: string;
    ariaLabel: string;
    placeholder: string;
    form: any;
    screenSize: string;
}

export default function MessageInput({ form, screenSize, label, ariaLabel, placeholder }:
    ITextAreaContactFormProps) {
    return (
        <Textarea
          label={label}
          aria-label={ariaLabel}
          placeholder={placeholder}
          withAsterisk={!form.isValid('message')}
          autosize
          minRows={5}
          maxRows={10}
          size={screenSize}
          {...form.getInputProps('message')}
          onBlur={form.values.message !== '' ? () => form.validateField('message') : () => { }}
        />
    );
}
