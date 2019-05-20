# Answers

1.  What is React JS and what problems does it try and solve?
    
    React is a JavaScript library for building user interfaces. One of the problems I believe it solves well is state management in complex applications.

2.  What does it mean to _think_ in react?
    
    It means to break down a UI into components. Build a static version in react.
    Identify the minimal(but complete) representation of UI State.
    Identify where state should live
    Add data flow.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    
    Class Components can have state while Functional Components are just JavaScript functions which take optional input called props.

4.  Describe state.
    
    State is a JavaScript object that is managed within a component. If a component needs to alter one if its attributes at some point in time, that attribute should be part of state.

5.  Describe props.
    
    Props is a JavaScript object that is passed to a component. A component cannot change its props, but it is responsible for putting together the props of its child components.