export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05060A',
        obsidian: '#0A0D14',
        mist: '#A8B3C7',
        parchment: '#F7F1DF',
        emerald: '#2FBDA4',
        violet: '#8B5CF6',
        gold: '#D7B56D',
      },
      boxShadow: {
        arcane: '0 0 80px rgba(47, 189, 164, 0.14)',
        violet: '0 0 80px rgba(139, 92, 246, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
