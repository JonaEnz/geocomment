import ThreadComment from "./Thread/Comment";

function ThreadView() {
  var comments = [
    {
      comment:
        "Testerhfsdgghbfsgfsidgfdhgfdsgfgsgsdgdgsdssdgdgsgdfkahevhgfghahgdakgkhdgfghfkhdagfg",
      votes: 5,
    },
    { comment: "Test", votes: 5 },
    { comment: "Test", votes: 5 },
    { comment: "Test", votes: 5 },
    { comment: "Test", votes: 5 },
  ];
  return (
    <div>
      <h1>Comments</h1>
      {comments.map((c) => {
        return <ThreadComment comment={c} />;
      })}
    </div>
  );
}

export default ThreadView;
