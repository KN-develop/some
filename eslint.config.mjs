import { createConfigForNuxt } from '@nuxt/eslint-config/flat';


const config = createConfigForNuxt({
    features: {
        stylistic: {
            indent: 2,
            quotes: 'single',
        },
    },
})
    .override('nuxt/stylistic', {
        rules: {
            '@stylistic/no-mixed-operators': 'off',
            '@stylistic/quote-props': 'off',
            '@stylistic/brace-style': 'off',
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/member-delimiter-style': [
                'error', {
                    'multiline': {
                        'delimiter': 'comma',
                        'requireLast': true,
                    },
                    'singleline': {
                        'delimiter': 'comma',
                        'requireLast': false,
                    },
                    'multilineDetection': 'brackets',
                },
            ],

        },
    })
    .override('nuxt/typescript/rules', {
        rules: {
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-extraneous-class': 'off',
            '@typescript-eslint/no-useless-constructor': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/ban-ts-comment': 'off'
        },
    })
    .override('nuxt/vue/rules', {
        rules: {
            'vue/no-multiple-template-root': 'off',
            'vue/require-prop-types': 'off',
            'vue/valid-template-root': 'off',
            'vue/multi-word-component-names': 'off',

            'vue/max-attributes-per-line': [
                'error', {
                    'singleline': {
                        'max': 4,
                    },
                    'multiline': {
                        'max': 1,
                    },
                },
            ],
        },
    })

export default config;
