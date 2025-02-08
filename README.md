# React useEffect Incorrect Object Comparison

This repository demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for changes.  This can lead to unexpected behavior, especially when dealing with complex data structures.

## The Problem

The `useEffect` hook in the provided `bug.js` file directly compares two objects (`someObject` and `previousSomeObject`) using the strict equality operator (`!==`).  This will only detect changes if the object references are different, not if the object's properties have changed.  This means even if the contents of `someObject` change, the `useEffect` will not trigger if the reference remains the same.

## The Solution

The `bugSolution.js` file provides a corrected implementation. Instead of directly comparing the objects, it uses a deep comparison approach using `JSON.stringify` to compare the string representations of the objects. While not the most efficient for very large objects, it's a simple and effective solution in many cases.  For larger objects consider using a dedicated library like `lodash.isEqual` for more optimal deep comparisons.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.