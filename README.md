# bomeward-hound

A prototype of a thing

---

## Notes from the planning meeting (May 21, 2020):

**Inspiration:** Yorbs/ITP thesis show: [yorb.itp.io](https://yorb.itp.io/), also (folks associated with Yorbs, mostly, iirc):

- [yorb.online](https://yorb.online/)
- [bigtwin.net](http://www.bigtwin.net/)
- [aidanjnelson.com](https://www.aidanjnelson.com/)

Other links:

- [teamlab.art](https://www.teamlab.art/) <-- only one interactive exhibit occupies a room at a time, the other "waits outside"
- [cargo.site](https://cargo.site/) <-- a bunch of cool/stylish site templates and customization options, but no free tier ($99 per year or $13 per month)
- [Cooper Hewitt - Digital Mansion](https://www.cooperhewitt.org/digital-mansion/) <-- "the best […] online resources and a few […] favorite objects from Cooper Hewitt’s collection"

More notes (less inspirational, linked, more just me capturing keywords from the discussion):

- a 3d room
- live performances?
  - set list? … show times?
  - recordings? … an archive?
- moderation
  - authentatication? <-- Google's Firebase has a pretty nice/easy to set up "auth" system: [firebase.google.com/docs/auth](https://firebase.google.com/docs/auth/)
  - spam / abuse / attacks … will the show really even be that popular?

More like, "what does it look like?" thoughts:

- an initial "portal"
- rooms
- "one time" or "continuing" (e.g. is it an archive of some kind?)
- how does it hang together?
  - web rings
  - a chill zone / a party room
  - "what's the vibe?"
  - vibe as wayfinding mechanism

What kinds of projects do we want to/can we support?:

- video (prerecorded)
- performance/zoom/stream … live and/or interactive/participatory
- 2d/3d "still" media
- interactive (non-performance) … games and game-like things
- **what are the opportunities for crossover**
  - an inventory
  - "call backs" (to previously seen/visited/experienced projects)
  - a scavenger hunt
  - easter eggs
  - somethink kind of like old point-and-click adventure games where you maybe don't know why you're collecting these things or what to do with them and eventually they add up to something, or there's a way to use them to "affect the world"
  - "what's the reward?" - more content!

some kind of analytics, to "see people" in the space (old-school visitor counter or something like that? … "There are X other people in this room") maybe a kind of heat map of who's been where/when (annonymized ofc)

[`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) vs. [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) … maybe just never clear it, a visitor can collect a theorhetically infinite number of "can openers" (or whatever)

[sketch of a 3d/virtual "room" with "doors" to various artists' works (`iframe`s?)]

- can there be multiple rooms/hallways
- can people be in the main room together? what about individual project works/sites
- spacial audio? some kind of global chat?
- can we do 3d in 3d?
- should we just use hubs, or yorbs, or something else like that?

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
