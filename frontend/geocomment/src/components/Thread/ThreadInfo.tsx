import { thread } from "../../api";
import { Paper, Typography } from "@material-ui/core";

function ThreadInfo(state: { thread: thread }) {
  var reg = new RegExp(/(.*)\[img:(.*)\](.*)/g);
  var res: RegExpExecArray | null = reg.exec(state.thread.description);
  return (
    <Paper
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "7px",
      }}
    >
      <Typography
        variant="h4"
        style={{ padding: "5px", wordWrap: "break-word" }}
      >
        {state.thread.title}
      </Typography>
      <Typography
        variant="body1"
        style={{ padding: "5px", wordWrap: "break-word" }}
      >
        {res != null ? res[1] : ""}
        {res != null ? res[3] : state.thread.description}
      </Typography>
      {res != null ? (
        <img src={res[2]} alt="imagePath" width="200px" height="200px"></img>
      ) : (
        <p></p>
      )}
    </Paper>
  );
}

export default ThreadInfo;
