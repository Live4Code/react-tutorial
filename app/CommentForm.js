var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = "me";
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text) {
      return;
    }
    //set input DOM element's value property to empty string to clear value
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