# react-router-issue-12513-repro

This is a fork of [brophdawg11/remix-run-issue-9242-repro](https://github.com/brophdawg11/remix-run-issue-9242-repro), reproducing the same issue in React Router.

Note that this issue is now fixed when using React 19 since it better handles DOM mutations within the `head` element. This repo is using React 18 to demonstrate the issue, but you can update to React 19 to confirm that the issue is fixed.

## Steps to reproduce

1. `pnpm install && pnpm dev`

2. Load http://localhost:5173

3. Click the link to navigate to the /page route

4. Make any change to the app/styles.css file to trigger Vite CSS HMR

5. Click the link in the page to go back to the index page

6. Error occurs

## Steps to fix

1. `pnpm install react@^19 react-dom@^19`

2. Follow reproduction steps above
