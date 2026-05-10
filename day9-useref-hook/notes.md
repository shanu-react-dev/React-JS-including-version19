## `UseRef` Hook in React

_In react the `useRef` hook is an important hook which allows you to update the content without rendering the component again and again. It helps you to interact with DOM. It allows to persist mutable reference across re-rendering without re-rendering the component._

- **Accessing DOM Elements:** This is the most common use. It allows you to interact directly with HTML elements (e.g., to focus an input, scroll to a position, or measure an element's size).
- Storing Mutable Values: You can store variables that need to stay the same across renders but don't need to be displayed in the UI, such as timer IDs or previous state values for comparison.

## useState hook in React

_In React the usestate hook is responsible to make functional component stateful. By default functional based component are stateless means there will be no default variable to store the values._

_usestate accepts initial value as an argument and it returns an array containing current value and updater function._

_Current value represents the passed value as an argument and updater function is responsible for updating the initial value._

```jsx
// import {useState} from "react;
function App() {
  let [currVal, updaterFun] = useState(0);
  return <div>{count}</div>;
}
```

### Differences between useState and useRef

| useRef                                                                      |     | useState                                                               |
| --------------------------------------------------------------------------- | --- | ---------------------------------------------------------------------- |
| Helps to update the content without rendering the component again and again |     | Renders the component again and again on every props or state changes. |
| Returns one object containing current value                                 |     | Returns an array containing current value and updater function         |
| used to interact with DOM directly without virtual DOM                      |     | Virtual DOM is there to update the content dynamically.                |
