<div align="center">
<img src="./assets/too-many-hooks-outlined.svg" alt="Too Many Hooks" width="50%">

<h3>An opinionated collection of typed React hooks</h3>
</div>

## Storybook

- The storybook for the current main version can be found at: [https://yobgob.github.io/too-many-hooks](https://yobgob.github.io/too-many-hooks)
- Storybooks will also be build and deployed for each PR at `https://yobgob.github.io/too-many-hooks/pr-preview/pr-[PR number]`

## Guiding Principles

- There should be one obvious way to do each thing
- Explicit is better than implicit
- Code should be extensible but not unopinionated

## Getting Started

### Requirements

- [![Bun version](https://img.shields.io/github/v/release/oven-sh/bun?label=Bun&)](https://bun.sh/)

**Peer dependencies:**

- [![React version](https://img.shields.io/badge/React-18.0.0%2B-brightgreen.svg)](https://reactjs.org/)

### Installation

- Coming soon to an NPM near you

### Hooks

Available hooks and a short summary of their purpose:

#### State tools

- `useArray` - Simplify array state management with useful utilities
- `useFlag` - Simply manage boolean state
- `useTally` - Increment and decrement numeric state

#### Listeners/Observers

- `useMutationObserver` - Observe a Node and rerender on mutations + get mutation information
- `useResizeObserver` - Observe an Element and rerender on resizes + get size information
- `useWindowListener` - Easily add and remove listeners on the window

#### Styling tools

- `useFlexCorners` - Dynamically find corners in items wrapped with flex

#### Utilities

- `useDeepCompareEffect` - Run function when dependencies change, checked deeply for equality
- `useThrottleFunction` - Run a function when its args change up to a maximum number of calls per time period in ms
- `useThrottleValue` - Reduce frequency of state updates on a variable to a maximum number of updates per time period in ms

## Contributing

Anyone is welcome to contribute! See the [contribution guide](.github/CONTRIBUTING.md) for details on getting started!

### Structure

The monorepo contains both the `too-many-hooks` library at `/packages/too-many-hooks` and the storybook for testing and demoing hooks at `/packages/storybook`. Contributions will usually include changes to both apps.

### Building the library

The storybook imports the library via a symlink, and thus needs `too-many-hooks` built locally. To build the library, go to `/packages/too-many-hooks` and install dependencies with:

```sh
bun install
```

Then, build the library by running:

```sh
bun run build
```

The built library will be output to `/too-many-hooks/dist`.

### Running the storybook

To run the storybook, go to `/packages/storybook` and update dependencies with:

`bun install`

Then, run the app locally at [http://localhost:6006/](http://localhost:6006/) by running:

`bun storybook`

### Checks

To ensure code quality, PRs are automatically linted and checked for adherence to formatting rules before merging. These checks are performed by GitHub workflows at `/.github/workflow/lint-and-build-package.yml` and `/.github/workflow/lint-and-build-storybook.yml`. Each app also has their own scripts for formatting and linting locally.

## Contributors

<a href="https://github.com/yobgob/too-many-hooks/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=yobgob/too-many-hooks" />
</a>
