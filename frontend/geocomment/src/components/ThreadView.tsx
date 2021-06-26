import ThreadComment from "./Thread/Comment";
import ThreadInfo from "./Thread/ThreadInfo";
import WriteComment from "./Thread/WriteComment";
import { Container } from "@material-ui/core";
import { Service as ServiceApi } from "../api/services/Service";
import { thread } from "../api/models/thread";
import { useState } from "react";
import { comment } from "../api";
import { threadId } from "worker_threads";
import { Grid } from "@material-ui/core";

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

const DEFAULT_LEVELS = 3;

function ThreadView(state: { thread: thread }) {
  const [selectedCommentId, setCommentId] = useState(0);
  const [comments, setComments] = useState([
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
      parentId: 1,
      content: "dfsah[img:http://http.cat/201]",
      votes: 3,
    },
    {
      id: 3,
      threadId: 100,
      parentId: 1,
      content: "dfsah[img:http://http.cat/202]",
      votes: 3,
    },
    {
      id: 4,
      threadId: 100,
      parentId: 2,
      content: "dfsah[img:http://http.cat/203]",
      votes: 3,
    },
    {
      id: 5,
      threadId: 100,
      parentId: 3,
      content: "dfsah[img:http://http.cat/204]",
      votes: 3,
    },
  ] as comment[]);

  ServiceApi.getThreadComments(state.thread.id, DEFAULT_LEVELS).then((cs) => {
    setComments(cs);
  });

  function renderComments(cs: comment[], comment: comment): any {
    var children = cs.filter((c) => c.parentId === comment.id);
    return (
      <div>
        <ThreadComment
          comment={comment}
          selectCallback={(id: number) => {
            setCommentId(id);
          }}
          reportCallback={(id: number) => {
            openReport(id);
          }}
        />
        <Grid style={{ marginLeft: "50px" }}>
          {children.map((child2) => {
            return renderComments(cs, child2);
          })}
        </Grid>
      </div>
    );
  }

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
      {comments
        .filter((c) => c.parentId === 0)
        .map((c) => {
          return renderComments(comments, c);
          //   return (
          //     <ThreadComment
          //       comment={c}
          //       selectCallback={(id: number) => {
          //         setCommentId(id);
          //       }}
          //       reportCallback={(id: number) => {
          //         openReport(id);
          //       }}
          //     />
          //   );
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
