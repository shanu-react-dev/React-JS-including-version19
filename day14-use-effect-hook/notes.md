## UseEffect Hook in React

_UseEffect Hook is a react hook which we are getting from React and it is used to perform side effects in React Application._

_Any task which is outside of React Environment known as side effect such as handling the DOM elements, Fetching data from an API, Subscription like task etc._

_We can use UseEffect hook in three ways. Without Dependency, With Dependency and Empty Dependency._

_The useEffect hook in React allows you to perform side effects in function components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components._

## Syntax

```jsx
useEffect(() => {
  // Side effect code
}, [dependencies]);
```

## Without Dependency.

_Here The component will render on every state and props change._

## With Dependency

_Here the components will re-render only when the specified dependecy will change._

## Empty Dependency

_Here the component will re-render only once it will not render on each and every props or state change._
