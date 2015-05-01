var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        //construct a Comment Component based on passed in comment object
         
           
         
      );
    });    
    return (
      <div className="commentList">
        //render the commentNodes with { } expression
      </div>
    );
  }
});