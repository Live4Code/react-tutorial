### Congrats!

You have just built a comment box in ReactJS. Let's summarize what we learned so far.

### Components

The first thing you'll want to do is to identify components and draw boxes around every component (and subcomponent).

How do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. 
One such technique is the <a href="http://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank">single responsibility principle</a>, 
that is, a component should ideally only do one thing. If it ends up growing it should be decomposed into smaller subcomponents.

### Props, States and Refs

**tl;dr:** If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its _state_, 
otherwise it should just be a _prop_ for that Component.

1. Props represent data passed in from a parent component to child component through attributes when rendering child components. 
We access the data as `this.props` in child component. Props are **immutable**.  

2. A Component manages its own _state_ internally, but—besides setting an initial state—has no business fiddling with the _state_ of its children. 
You could say the state is **private.**

3. Refs are used to access underlying DOM node via React.findDOMNode(this.refs...). This allows you to direactly manipulate DOM elements.

### Component Specs and Lifecycle

1. **getInitialState** invoked once before the component is mounted. The return value will be used as the initial value of this.state. This is a good 
place to set default values for a component's state variables.

2. **componentDidMount** invoked once, immediately after the initial rendering occurs. 
At this point in the lifecycle, the component has a DOM representation which you can access via React.findDOMNode(this). 
If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, 
perform those operations in this method.

