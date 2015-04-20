var CommentList = React.createClass({
  render: function() {
    return (
      <ul className="commentList">
         
      </ul>
    );
  }
});
@@@
prompt: Use Comment Component
run: {command: "undo"}
moveTo: 4:9
type: <Comment author="me">React is all about Components</Comment>
tooltip: Use the child Comment compoent, pass in author as attribute. Also the Content inside is available as children property. In Comment, we use this.props key word to access these two variables.
prompt: Now write Comment