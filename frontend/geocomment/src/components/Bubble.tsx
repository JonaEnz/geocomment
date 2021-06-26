import { Icon } from "leaflet";
import React from "react";
import { Marker } from "react-leaflet";
import { comment, thread } from "../api";

export function Bubble(state: { thread: thread }) {
  const COMMENT_ID_OF_ORIGINAL_COMMENT = 0;

  const [visibility, setVisibily] = React.useState<boolean>(false);
  const [icon, setIcon] = React.useState<Icon>();
  const [link, setLink] = React.useState<string>();

  //start dummy code
  const comment: comment = {
    threadId: 42,
    parentId: 0,
    id: 123,
    votes: 16,
    content: "Hey",
  };
  //end dummy code

  //   Service.getComment(state.thread.id, COMMENT_ID_OF_ORIGINAL_COMMENT)
  //   .then((comment: comment) => {
  //       let icon = getBubbleIcon(comment.votes, "black"); //TODO color
  //       setIcon(icon);
  //       setVisibily(true);
  //   })

  //start dummy code
  setIcon(getBubbleIcon(comment.votes, "black"));
  setVisibily(true);
  //end dummy code

  return (
    <Marker
      position={state.thread.location}
      opacity={visibility ? 1 : 0}
      icon={icon ? icon : undefined}
      eventHandlers={{
        click: (e) => {
          console.log("marker clicked", e); //TODO
        },
      }}
    />
  );
}

function getBubbleIcon(votes: number, color: string) {
  const ICON_NAME_PREFIX = "../icons/bubble_icon_";
  const ICON_NAME_POSTFIX = ".svg";

  const MAX_ICON_SIZE = 60;
  const MIN_ICON_SIZE = 20;

  const UPPER_VOTE_LIMIT = 25;
  const LOWER_VOTE_LIMIT = -5;

  let icon_size = -1;
  if (votes >= UPPER_VOTE_LIMIT) {
    icon_size = MAX_ICON_SIZE;
  } else if (votes <= LOWER_VOTE_LIMIT) {
    icon_size = MIN_ICON_SIZE;
  } else {
    icon_size =
      MIN_ICON_SIZE +
      Math.round(
        ((votes - LOWER_VOTE_LIMIT) / (UPPER_VOTE_LIMIT - LOWER_VOTE_LIMIT)) *
          (MAX_ICON_SIZE - MIN_ICON_SIZE)
      );
  }

  let icon_url = ICON_NAME_PREFIX + color + ICON_NAME_POSTFIX;

  return new Icon({
    iconUrl: icon_url,
    iconRetinaUrl: icon_url,
    iconAnchor: [Math.round(icon_size / 2), Math.round(icon_size / 2)],
    popupAnchor: [Math.round(icon_size / 2), 0],
    iconSize: [icon_size, icon_size],
  });
}
