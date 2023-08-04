import { TextInput } from '@mantine/core';

interface INameInputProps {
    form: any;
    screenSize: string;
}

export default function NameInput({ form, screenSize }: INameInputProps) {
    return (
        <TextInput
          label="Name"
          aria-label="Enter your name"
          placeholder="Enter your name"
          withAsterisk={!form.isValid('name')}
          size={screenSize}
          {...form.getInputProps('name')}
          onBlur={form.values.name !== '' ? () => form.validateField('name') : () => { }}
        />
    );
}
