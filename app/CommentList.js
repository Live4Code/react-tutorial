var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment, index) {
      return (
        <Comment author={comment.author} index={index}>
          {comment.text}
        </Comment>
      );
    });    
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});