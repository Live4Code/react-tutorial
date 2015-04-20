var Comment = React.createClass({
  render: function() {
    return (
      <li> 
        <div className="commentText"> 
          <p>{this.props.children}</p>  
          <span className="date sub-text">by {this.props.author}</span> 
        </div>      
      </li>       
    );
  }
});