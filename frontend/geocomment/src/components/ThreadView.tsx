import ThreadComment from "./Thread/Comment";
import ThreadInfo from "./Thread/ThreadInfo";
import WriteComment from "./Thread/WriteComment";
import { Container } from "@material-ui/core";
import { Service as ServiceApi } from "../api/services/Service";
import { thread } from "../api/models/thread";
import { useState } from "react";

function onMessageSubmit(
  msg: string,
  threadId: number,
  commentId: number
): Promise<boolean> {
  ServiceApi.postComment(threadId, {
    threadId: threadId,
    parentId: commentId,
    anonymous: true,
    content: msg,
  });
  return new Promise<boolean>(() => {
    return false;
  });
}

function openReport(id: number) {
  //TODO
  console.log("openReport(" + id + ")");
}

function ThreadView(state: { thread: thread }) {
  const [selectedCommentId, setCommentId] = useState(0);
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
        thread={state.thread}
        selectCallback={(id: number) => {
          setCommentId(id);
        }}
        reportCallback={(id: number) => {
          openReport(id);
        }}
      />
      {comments.map((c) => {
        return (
          <ThreadComment
            comment={c}
            selectCallback={(id: number) => {
              setCommentId(id);
            }}
            reportCallback={(id: number) => {
              openReport(id);
            }}
          />
        );
      })}
      <Container fixed>
        <WriteComment
          submit={(msg) => {
            return onMessageSubmit(msg, state.thread.id, selectedCommentId);
          }}
        />
      </Container>
    </div>
  );
}

export default ThreadView;
