import { Textarea } from '@mantine/core';

interface ITextAreaContactFormProps {
    form: any;
    screenSize: string;
}

export default function TextAreaContactForm({ form, screenSize }: ITextAreaContactFormProps) {
    return (
        <Textarea
          label="Message"
          aria-label="Enter your message"
          placeholder="Enter your message"
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
