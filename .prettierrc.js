/** @type {import("prettier").Config} */
module.exports = {
    plugins: ['prettier-plugin-tailwindcss'],
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    overrides: [
        {
            files: ['*.ts', '*.js'],
            options: {
                tabWidth: 4,
            },
        },
    ],
};
