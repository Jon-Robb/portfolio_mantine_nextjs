type TemplateVariables = Record<string, string>;

/**
 * Replaces placeholders in a template string with the corresponding values from a variables object.
 *
 * @param {string} template - The template string containing placeholders in the format {{placeholderName}}.
 * @param {TemplateVariables} variables - An object where keys are placeholder names and values are the corresponding replacements.
 *
 * @returns {string} - The template string with all placeholders replaced by their corresponding values.
 *
 * @example
 * const template = "Hello, {{name}}! Welcome to {{place}}.";
 * const variables = { name: "John", place: "Earth" };
 * replaceTemplateVariables(template, variables);
 * // Returns: "Hello, John! Welcome to Earth."
 */
export const replaceTemplateVariables =
    (template: string, variables: TemplateVariables): string => {
        let result = template;
        Object.entries(variables).forEach(([key, value]) => {
            result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
        });
        return result;
    };
