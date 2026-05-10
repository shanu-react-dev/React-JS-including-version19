## What is Hooks

_Hooks in React JS is a predefined JavaScript function used to perfom some specific tasks. It lets you to isolate the reusable part or logic of a component._

## Why do we need hooks?

_Hooks was introduced in React 16.8. We can use React Hooks only in functional based component. Before hooks functional components were stateless means there was no predefined variable to store the data and Hooks resolve this issues. There are several hooks in React for different usage._

## Rules to use hooks

1. **Only call Hooks at the top Level:** Don't call hook inside the loops or conditional statements.
2. It can be used only in Functional Based Components not in Class Based Components.
3. Custom Hooks must and should start with `use` as a prefix. This is a hook developed by developers. Here, A custom hooks can use multiple hooks inside it.
4. Only call Hooks from react functions/libraries. React provides some set of hoooks for different tasks so accordingly we can use those hooks.

## Class Based Components and Functional Based Components

_In react we can create components in two ways first is class based component which has been deprecated now. To create class based component we need to use class keyword in JavaScript and some addditional syntax. By default the class based component is stateful. It provides one default variable state which is an object where we can store some values._

_In latest React version we are usign Functional based component which is stateless in nature. To make it stateful we need to use React Hooks._

## Difference between CBC and FBC

| Class Based Component                                                              | Functional Based Component                                                 |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| In Class Based Component we have complex codes                                     | FBC is easy to understand.                                                 |
| Class Based Component is stateful in nature                                        | Functional based component is stateless in nature                          |
| Class Based component supports rendering which is responsible for rendering the UI | In Functional Based component we don't have any render method or functions |

## Synthetic Events in React

