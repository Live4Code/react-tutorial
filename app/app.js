//In componentDidMount, use ajax to request data from _comments.json 
//and set this.state.data in success callback
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: {content:"", comments: []}};
  },
  
  componentDidMount: function() {
    $.ajax({ // url to send request to
      url: '', 
      dataType: 'json',
      success: function(data) { // the data is the post object in _comments.json
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('Can not fetch _comments.json');
      }.bind(this)
    });
  },  
  
  render: function() {
    return (
      <div className="detailBox">
        <div className="titleBox">
          <label>Comment Box</label>
          <button type="button" className="close" aria-hidden="true">&times;</button>
        </div>
        <div className="commentBox">
          <p className="taskDescription">
            //show the post content here
          </p>
        </div>
        <div className="actionBox">
          <CommentList data={this.state.data.comments}/>
          <CommentForm />
        </div>
      </div>
    );
  }
});

//the url to fetch data is injected to root CommentBox component as an attribute
React.render(
  <CommentBox url="_comments.json" />,
  document.getElementById('content')
);




