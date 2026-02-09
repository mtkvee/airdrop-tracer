# Airdrop Tracking App

A Next.js app to track airdrop opportunities.

## Requirements
1. Node.js 18+.

## Local Development
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Firebase (Google sign-in + cloud sync)
1. Create a Firebase project and enable Google sign-in in Authentication.
2. Create a Firestore database (production or test mode).
3. Copy `.env.example` to `.env.local` and fill in your Firebase web app config values.
4. Do **not** create a `.npm` file. `.npmrc` is only for npm config (registries/tokens) and is not used for env vars.

## Notes
- Global styles are loaded from `app/globals.css`.
