## Form Handling

_In React Form Handling refers to handling the User inputs._

_Form handling in React is the process of collecting, managing, and processing data that users enter into interactive controls like text inputs, checkboxes, and select menus. While standard HTML forms handle their own data within the DOM, React typically takes control of this data by storing it in the component's state._

## ways of Form Handling

1. **Controlled form:** Here each and every input will be handled by React State. We can create controlled form using `useState` hook.
2. **Uncontrolled form:** In Uncontrolled form each and every input will be handled by DOM. In uncontrolled form Each and every input will be having their own state and props. We can create uncontrolled forms using `useRef` hook.

## Differences between Controlled and Uncontrolled

1. In a controlled component, React state manages all form data, whereas in an uncontrolled component, HTML form element data is solely managed by the DOM.
2. With a controlled component, developers have complete control over form input values, deciding what to insert and where.
