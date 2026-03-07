# Contributing to TeachTrack

## Branching
Always create a branch for your work. Never commit directly to `main`. 

**Branch naming:**
- `feature/short-description` - new functionality (e.g., `feature/slo-rating-card`)
- `fix/short-description` - bug fixes (e.g., `fix/survey-submit-error`)
- `chore/short-description` - cleanup, docs, config (e.g., `chore/update-readme`)

If there's a Jira ticket, include the key: `feature/S1-70-monorepo-init`

## Commits
Write clear commit messages using these prefixes:
-  `feat: add survey form component`
-  `fix: correct routing for professor dashboard`
-  `chore: update .gitignore`

Keep commits focused. One commit should do one thing.

## Pull Requests
1. Push your branch to GitHub
2. Open a pull request targeting `main`
3. Fill out the PR template - describe what you changed, link the Jira ticket
4. Request a review from at least on teammate
5. Address any feedback
6. Once approved, merge

## Code Style
- We're using ESLint and Prettier. (Add those extensions to VSCode). Run `npm run link` before pushing.
- Use meaningful variable and functiona names
- Keep componenets small and focused
