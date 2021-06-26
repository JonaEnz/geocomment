import ThreadComment from "./Thread/Comment";
import ThreadInfo from "./Thread/ThreadInfo";

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
      <ThreadInfo
        thread={{
          id: 1,
          title: "Title",
          description: "dfsah[img:http://http.cat/201]",
          location: { lat: 1, lng: 2 },
        }}
      />
      {comments.map((c) => {
        return <ThreadComment comment={c} />;
      })}
    </div>
  );
}

export default ThreadView;
