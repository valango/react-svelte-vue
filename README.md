# React-Svelte-Vue

A demo of implementing the same app on three different platforms.

## Motivation
I created this project to
   * learn some React and Svelte coding (I've been using Vue, mostly);
   * try out the WebPack5;
   * immerse the strategy of famous 
     [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game.

The project started as my step-by-step track following the
[React tutorial](https://reactjs.org/tutorial/tutorial.html). However, since the commit
labeled "`Renamed the project`", it is different.

Here I implement the same mind boggling _TTT_ game on three platforms:
[_**React**_](https://reactjs.org/), [**_Svelte_**](https://svelte.dev/) and 
[_**Vue**_](https://vuejs.org/).
I respectfully skip [_Angular_](https://angularjs.org/) for aesthetic reasons.

As in case of any real project, the _Issues list_ plays an important role.

## Platforms and impressions

### React
The original readme is [here](doc/react.md).

1. **Installation:** `npx create-react-app my-app` - that was easy!
   ... but the original scripts have been deleted from dependencies.<br />
   React is the only one which does not need special loaders or plugins!
1. **Concepts and learning:**
   - Very straight-forward and intuitive in the beginning. 🙂
   - State mutations involve extra boilerplate code. 😐
   - From [Effect Hooks](https://reactjs.org/docs/hooks-effect.html) on,
   it took a little more effort to comprehend (not _how to_, but _what for_). 😐

### Svelte
1. **Installation:** adding the packages and configuring the loaders was a breeze.
1. **Concepts and learning:**
   - A very good documentation and examples. 🙂
   - The first impression: It is sooo elegant! 🙂

### Vue
1. **Installation:** adding the packages and configuring the loaders was a breeze,
   but [Vue CLI](https://github.com/vuejs/vue-cli) might be a better choice in real life.
   Also, there is an awesome [Quasar framework](https://quasar.dev/) out there!
1. I've been using Vue for years, by now. I think its well-structured, flexible and incremental.
An initial learning curve may be a bit steeper than with React or Svelte.

### Other details
I decided to use a unified webpack configuration and keep all different source modules
in the same /src directory - kind of messy, but more fun - all three platforms use different
filename extensions, after all.

## Wrap-up
This table shows the source modules line counts and production bundle size.

|  | Board | Game | Square | start module | total (lines) | bundle (bytes) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| React | 50 | 69 | 9 | 10 | 138 | 137 283 |
| Svelte | 27 | 42 | 12 | 6 | 86 | 8 353 |
| Vue | 32 | 53 | 18 | 5 | 108 | 68 815 |

Svelte bundle is by far _**the most compact**_ of the three, while React seems
to be the heaviest.

Svelte's _source code line count_ also tends to be the smallest.
This is an important factor of code readability and maintainability.
Ok, one may argue, that Svelte code is less structured, but this is a matter of
taste - after all - one may write spaghetti in any language, but lesser line count
is a hard fact.

Using Svelte for the very first time, I am amazed of how elegant
and expressive it is.

React implies the _**immutable state**_ approach, while the other two do not.
The pros and cons of this approach have been discussed widely, but
small projects might not benefit much from this approach.

### Configurations
The WebPack configuration files here are structured for better readability.
All three sub-configurations can be merged together without breaking anything.
However, it's just a fun game here and using those three different platforms
together in the same app is no smart idea in real life.

## Links
* [Pros and Cons of using immutability with React.js](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)
