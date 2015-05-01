So far we've been inserting the comments directly in the source code. Instead, let's render a blob of JSON data into the comment list. 
In the next exercise, this will come from the server, but for now, we will write it at the top of ***app.js***.

```js
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
```

### Data flow

We need to get this data into `CommentList` in a modular way. The comments data is passed into `CommentBox` as attribute `data`. 
Then in `CommentList`, we can access the data via `this.props.data`.

Now that the data is available in the CommentList, let's render the comments dynamically.

```js
var commentNodes = this.props.data.map(function (comment) {
  return (
    //Create a Comment component based on the comment object.
  );
});
```

The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">map</a> function 
creates a new array with the results of calling a provided function on every element in this array. 

Here in the callback function, for each comment data, we construct a `Comment` component and return it. Different from the static comments, 
we need to use jsx `{ }` to evaluate comment object and fetch the `author` and `text` attributes.

So the `commentNodes` is an array of `Comment` components. Then we only need to render these components to HTML using `{ }` expression. 
Notice how we're mixing HTML tags and components we've built.

> The JSX compiler will automatically rewrite HTML tags to React.createElement(tagName) expressions and leave everything else alone.



