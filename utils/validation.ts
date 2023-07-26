export const emailValidation = (email: string): boolean => {
    const emailValidationPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailValidationPattern.test(email);
};
