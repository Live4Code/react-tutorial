var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },  
  
  handleCommentSubmit: function(comment) {
    var comments = this.state.data.comments;
    comments.push(comment);
    this.setState({data: {content: this.state.data.content, comments: comments}}, function() {
      // `setState` accepts a callback. To avoid (improbable) race condition,
      //  we'll send the ajax request right after we optimistically set the new state.
      //  finish the ajax call here to save comment to server
      $.ajax({ // url to send request to
        url: '', 
        dataType: 'json',
        type: 'POST',
        data: '',
        success: function(data) { // the data is the post object in _comments.json
          
        }.bind(this),
        error: function(xhr, status, err) {
          console.log('Can not fetch _comments.json');
        }.bind(this)
      });
    });
  },
  
  getInitialState: function() {
    return {data: {content:"", comments: []}};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },  
  render: function() {
    return (
      <div className="detailBox">
        <div className="titleBox">
          <label>Comment Box</label>
          <button type="button" className="close" aria-hidden="true">&times;</button>
        </div>
        <div className="commentBox">
          <p className="taskDescription">{this.state.data.content}</p>
        </div>
        <div className="actionBox">
          <CommentList data={this.state.data.comments}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </div>
      </div>
    );
  }
});

//the url to fetch data is injected to root CommentBox component as an attribute
React.render(
  <CommentBox url="_comments.json" pollInterval={60000}/>,
  document.getElementById('content')
);
