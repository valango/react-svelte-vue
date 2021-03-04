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
   ... but later, I deleted the original scripts from dependencies.<br />
   React is the only one, which does not need any special loaders or plugins! 🙂
1. **Concepts and learning:**
   - Very straight-forward and intuitive in the beginning. 🙂
   - State mutations involve extra boilerplate code. 😐
   - React seems to prefer functional components, e.g. you can't use hooks in classes.
   - From [Effect Hooks](https://reactjs.org/docs/hooks-effect.html) on,
   it took more effort to comprehend (not _how to_, but _what for_). 😕
      - right now, I'm in trouble finding a way to solve the
   rendering problem described below. Using events seems to be a huge overkill.
1. **Behavior:**
   - _A state change triggers full re-rendering of all the child components_ 😱 -
   I just couldn't believe [this](#indiscriminate-re-rendering)!

### Svelte
1. **Installation:** adding the packages and configuring the loaders was a breeze.
1. **Concepts and learning:**
   - A very good documentation and examples. 🙂
   - The first impression: It is sooo elegant! 🙂
   - Svelte appears to be the least opinionated of the three. 🙂
   - Svelte reactivity goes
     [beyond just UI](https://svelte.dev/docs#3_$_marks_a_statement_as_reactive). 🙂

### Vue
1. **Installation:** adding the packages and configuring the loaders was a breeze,
   but [Vue CLI](https://github.com/vuejs/vue-cli) might be a better choice in real life.
   Also, there is the awesome [Quasar framework](https://quasar.dev/) out there!
1. **Concepts and learning:** I've been using Vue for years... ok:
   - Vue is well-structured, quite flexible and incremental.
   - The initial learning curve may be a bit steeper than with React or Svelte.
   - Vue provides both component-level and global events API.
   - Vue cleanly supports the [MVC pattern](https://en.wikipedia.org/wiki/Model-view-controller).

### Other details
I decided to use a unified webpack configuration and keep all different source modules
in the same /src directory - kind of messy, but more fun - all three platforms use different
filename extensions, after all.

## Conclusions
### Code size
This table shows the source modules line counts and production bundle size.

|  | Board | Game | Square | boot module | total (lines) | loadable (bytes) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| React | 33 | 77 | 13 | 10 | 133 | 137 283 |
| Svelte | 18 | 45 | 8 | 6 | 77 | 8 353 |
| Vue | 19 | 61 | 18 | 5 | 103 | 68 815 |

Svelte bundle is by far _**the most compact**_ of the three, while React seems
to be the heaviest.

Svelte's _source code line count_ also tends to be the smallest.
This is an important factor of code readability and maintainability.
Ok, one may argue, that Svelte code is less structured, but this is a matter of
taste - after all - one can write spaghetti in any language, but lesser line count
is a hard fact.

### Immutable State Approach
React implies the _**immutable state**_ approach, while the other two do not.
The pros and cons of this approach have been discussed widely, but
small projects might not benefit much from it.

In the [tutorial example](https://reactjs.org/tutorial/tutorial.html),
the immutable states are used to implement the _time travel_ functionality
(not implemented here yet), which is a variation of well known Undo/Redo.
It works well for 9-square _TTT_, but for more complex
practical applications, this is probably not a way to go.

### Indiscriminate re-rendering
React also features _a prominent **gotcha** / feature_ - mutating
any part of component's state triggers re-rendering of _**all**_ its fields and
sub-components.

In our _TTT game_, it means that everything gets re-rendered on every clock tick
and clicking an empty square will redraw all the other squares as well. The first problem
can be solved by moving clock stuff out of the root component _`state`_, but fixing
the second one would involve some more substantial refactoring.

I do not think this is a horrific show stopper, but designing a performant
app with React may actually be a bit more challenging, than expected at the first glance.

### Configurations
The WebPack configuration files here are structured for better readability.
All three sub-configurations can be merged together without breaking anything.
However, it's just a fun game here and using those three different platforms
together in the same app is no smart idea in real life.

## Links
* [Comparisons and benchmarks](https://dev.to/hb/react-vs-vue-vs-angular-vs-svelte-1fdm)
* [Pros and Cons of using immutability with React.js](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)
