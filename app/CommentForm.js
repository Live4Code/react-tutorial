var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = "me";
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text) {
      return;
    }
    //trigger the callback in prop to call CommentBox's handleCommentSubmit method to save comment
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.text.getDOMNode().value = '';
  },  
  render: function() {
    return (
      <form className="form-inline" role="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Your comments" ref="text" />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-default" value="Add" />
        </div>
      </form> 
    );
  }
});