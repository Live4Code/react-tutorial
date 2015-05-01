var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

//use this.setState to set data to our hard-coded comment data in componentDidMount
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  
  componentDidMount: function() {

  },  
  
  render: function() {
    return (
      <div className="detailBox">
        <div className="titleBox">
          <label>Comment Box</label>
          <button type="button" className="close" aria-hidden="true">&times;</button>
        </div>
        <div className="commentBox">
          <p className="taskDescription">Hello, world! I am a post.</p>
        </div>
        <div className="actionBox">
          <CommentList data={this.state.data}/>
          <CommentForm />
        </div>
      </div>
    );
  }
});

//the data is injected to root CommentBox component as an attribute
React.render(
  <CommentBox url="_comments.json" />,
  document.getElementById('content')
);
