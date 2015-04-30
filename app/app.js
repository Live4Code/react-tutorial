var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];


//inside the CommentBox, we can use this.props.data to access the attribute
var CommentBox = React.createClass({
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
          <CommentList data={this.props.data}/>
          <CommentForm />
        </div>
      </div>
    );
  }
});

//the data is injected to root CommentBox component as an attribute
React.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);
