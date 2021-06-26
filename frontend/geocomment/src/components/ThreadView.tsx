import ThreadComment from "./Thread/Comment";
import ThreadInfo from "./Thread/ThreadInfo";

function ThreadView() {
  var comments = [
    {
      id: 1,
      threadId: 100,
      parentId: 0,
      content:
        "Testerhfsdgghbfsgfsidgfdhgfdsgfgsgsdgdgsdssdgdgsgdfkahevhgfghahgdakgkhdgfghfkhdagfg",
      votes: 5,
    },
    {
      id: 2,
      threadId: 100,
      parentId: 0,
      content: "dfsah[img:http://http.cat/201]",
      votes: 3,
    },
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
