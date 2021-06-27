import { Icon } from "leaflet";
import React from "react";
import { Marker } from "react-leaflet";
import { comment, Service, thread } from "../api";

import bubble_icon_blue from "../icons/bubble_icon_blue.svg";
import bubble_icon_red from "../icons/bubble_icon_red.svg";
import bubble_icon_yellow from "../icons/bubble_icon_yellow.svg";
import bubble_icon_green from "../icons/bubble_icon_green.svg";
import { useHistory } from "react-router-dom";

export type BubbleProps = {
  thread: thread;
  children?: JSX.Element;
};

export function Bubble(props: BubbleProps) {
  const COMMENT_ID_OF_ORIGINAL_COMMENT = 0;

  const [visibility, setVisibily] = React.useState<boolean>(false);
  let browser_history = useHistory();
  const [icon, setIcon] = React.useState<Icon>(getBubbleIcon(0, "red"));
  const [link, setLink] = React.useState<string>();

  //start dummy code
  async function getDummyComment(
    threadId: number,
    commentId: number
  ): Promise<comment> {
    let votes = (Math.random() - 1 / 6) * 25;
    let comment = {
      threadId: 42,
      parentId: 0,
      id: 123,
      upvotes: votes,
      downvotes: 16,
      content: "Hey",
    };

    return new Promise<comment>((resolve, reject) =>
      setTimeout(() => resolve(comment))
    );
  }

  React.useEffect(() => {
    getDummyComment(props.thread.id, COMMENT_ID_OF_ORIGINAL_COMMENT).then(
      (comment: comment) => {
        let colors = ["red", "blue", "green", "yellow"];
        let random = Math.floor(Math.random() * colors.length);
        let random_color = colors[random]
        setIcon(getBubbleIcon(comment.upvotes, random_color));
        setLink("HelloImaLink");
        setVisibily(true);
      }
    );
  }, []);
  //end dummy code

  // Service.getComment(state.thread.id, COMMENT_ID_OF_ORIGINAL_COMMENT)
  // .then((comment: comment) => {
  //     setIcon(getBubbleIcon(comment.votes, "black"));
  //     setVisibily(true);
  // })

  return (
    <Marker
      position={props.thread.location}
      icon={icon}
      opacity={visibility ? 1 : 0}
      eventHandlers={{
        click: (e) => {
          browser_history.push("/thread"); //TODO Weiterleitung zur jeweiligen Seite
        },
      }}
    />
  );
}

function getBubbleIcon(votes: number, color: string) {
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

  let icon = bubble_icon_blue;
  switch (color) {
    case "red":
      icon = bubble_icon_red;
      break;
    case "green":
      icon = bubble_icon_green;
      break;
    case "yellow":
      icon = bubble_icon_yellow;
      break;
    case "blue":
      icon = bubble_icon_blue;
      break;
  }

  return new Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: [Math.round(icon_size / 2), Math.round(icon_size / 2)],
    popupAnchor: [Math.round(icon_size / 2), 0],
    iconSize: [icon_size, icon_size],
  });
}
