import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], 
    extends: ['js/recommended']
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], 
    plugins: { 
      js,
      react: pluginReact
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: { globals: globals.browser },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'semi': ['error', 'never'], // ❌ No usar punto y coma
      'quotes': ['error', 'single'], // ✅ Usar comillas simples
      // 'comma-dangle': ['error', 'never'], // ❌ No usar coma al final de listas
      'indent': ['error', 2], // ✅ Indentación de 2 espacios
      'space-before-function-paren': ['error', 'never'], // ❌ Sin espacio entre `function` y paréntesis
      'no-unused-vars': ['warn', { 'args': 'none' }], // ⚠️ Advertir sobre variables no usadas, pero permitir argumentos sin uso
      'no-undef': 'error', // ❌ No permitir variables no definidas
      'eqeqeq': ['error', 'always'], // ✅ Usar `===` y `!==` en vez de `==` y `!=`
      'no-console': 'off', // ✅ Permitir uso de `console.log`
      'object-curly-spacing': ['error', 'always'], // ✅ Espacios dentro de llaves: `{ foo: bar }`
      'array-bracket-spacing': ['error', 'never'], // ❌ No usar espacios dentro de corchetes: `[1, 2]`
      'no-var': 'error', // ❌ No permitir `var`, usar `let` o `const`
      'prefer-const': 'error', // ✅ Usar `const` si la variable no cambia
      'arrow-spacing': ['error', { 'before': true, 'after': true }] // ✅ Espacio antes y después de `=>`
    },
    extends: [
      'js/recommended',
      ...tseslint.configs.recommended,
      ...pluginReact.configs.flat.recommended
    ]
  }
])
