# Airdrop Tracer

Airdrop Tracer helps crypto users track, verify, and organize airdrops across wallets with a calm, reliable experience. The product focus is clarity.

## UX Goals
- **Reduce uncertainty**: Surface eligibility signals and required actions in plain language.
- **Minimize cognitive load**: Keep lists scannable, emphasize status, and hide clutter.
- **Build trust**: Make data sources and updates obvious, and keep a clean audit trail.
- **Stay lightweight**: Fast load, responsive on mobile, no unnecessary steps.

## Core User Flow
1. **See airdrop status at a glance**
   A clear status system with visible last-updated time.
2. **Add or edit an airdrop**
   Keep task, connect, status, and reward details in one place.
3. **Filter and search**
   Find new or high-priority items quickly.
4. **Sync and back up**
   Use Google sign-in to keep data in the cloud and import/export JSON when needed.

## Feature Overview
- **Google auth + cloud sync**: Sign in to sync with Firestore when Firebase config is present.
- **Local-first storage**: Work offline; data persists in local storage.
- **Import/Export**: JSON backup/restore from the header buttons.
- **Custom options**: Manage select options for task type, connect type, status, and reward type.
- **Fast search and filters**: Narrow to new or specific categories quickly.

## Tech Stack
- **Next.js** for the web app framework
- **React** for UI
- **Firebase** for data and configuration
- **Vercel Speed Insights** for performance metrics

## Security
- Firestore rules are defined in `firestore.rules`. Deploy them with the Firebase CLI.
- Basic CSP and security headers are set in `next.config.js`.

## Getting Started
```bash
npm install
npm run dev
```

## Notes
This project is optimized for clear UX and fast decision-making. If you add new features, keep the status system and primary actions simple and consistent.
