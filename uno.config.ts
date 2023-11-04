import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: { sans: 'Inter' },
    }),
  ],
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '36px',
        xl: '20px',
      },
    },
    colors: {
      primary: '#DA7D4A',
      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
    },
  },
})
