# Recoil Basics

Project created with Vite + TS, applying basic functionalities of RecoilJS.

## Atoms

You can discover a counter that utilizes atoms to share its value between components.

- Click the increase button to modify the atom's value, increasing it by one.
- Click the refresh button to reset the atom's value to zero.

## Selectors

Additionally, you will encounter a list of values displaying the atom's value modified by a selector. Each time you increment the counter, two new values will appear: a duplicated counter and the counter increased by two

## Asyn Operation

In this scenario, there is a section where each time the user refreshes the page, a request is sent to https://randomuser.me/api/ to retrieve a random user's name.

This operation is performed within a selector, and its responses are managed in the component that invokes it.

> If you wish to explore another functionality where a refresh button is utilized to generate a new user, you can examine the `feature/refresh-name` branch. This branch employs a distinct kind of selector (`selectorFamily`) and `the hook useRecoilRefresher_UNSTABLE` to achieve it.