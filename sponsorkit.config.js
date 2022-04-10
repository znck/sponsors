import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  // Providers configs
  github: {
    login: 'znck',
  },

  // Rendering configs
  width: 800,
  formats: ['json', 'svg', 'png'],
  tiers: [
    {
      title: '',
      compose: () => {},
    },
    {
      title: 'Backers',
      monthlyDollars: 10,
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 100,
      preset: presets.base,
    },
    {
      title: 'Generous Sponsors',
      monthlyDollars: 200,
      preset: presets.medium,
    },
    {
      title: 'Supports',
      monthlyDollars: 1000,
      preset: presets.large,
    },
  ],
})
