import React, { useEffect } from "react";
import { differenceInSeconds, differenceInDays } from "date-fns";
import { CommentDetails } from "../../context/comment/types";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";
import { getMemberById } from "../../context/members/actions";

interface CommentItemProps {
  comment: CommentDetails;
}
const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  // Helper function to format the timestamp as "n seconds ago", "n minutes ago", "n hours ago", or "n days ago"
  const formatTimestamp = (timestamp: Date) => {
    const currentDate = new Date();
    const commentDate = new Date(timestamp);

    const secondsDifference = differenceInSeconds(currentDate, commentDate);

    if (secondsDifference < 60) {
      // Less than 1 minute ago, show "n seconds ago"
      return `${secondsDifference} ${
        secondsDifference === 1 ? "second" : "seconds"
      } ago`;
    } else if (secondsDifference < 3600) {
      // Less than 1 hour ago, show "n minutes ago"
      const minutesDifference = Math.floor(secondsDifference / 60);
      return `${minutesDifference} ${
        minutesDifference === 1 ? "minute" : "minutes"
      } ago`;
    } else if (secondsDifference < 86400) {
      // Less than 1 day ago, show "n hours ago"
      const hoursDifference = Math.floor(secondsDifference / 3600);
      return `${hoursDifference} ${
        hoursDifference === 1 ? "hour" : "hours"
      } ago`;
    } else {
      // More than 1 day ago, show "n days ago"
      const daysDifference = differenceInDays(currentDate, commentDate);
      return `${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago`;
    }
  };
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    getMemberById(dispatchMembers, comment);
    //fetch comment owner
  }, []);
  let memberState: any = useMembersState();

  return (
    <div
      key={comment.id}
      className="comment block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="flex justify-between">
        <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          {memberState?.member?.name}
        </p>
        <p className="text-lg text-gray-400">
          {formatTimestamp(comment.createdAt)}
        </p>
      </div>
      <p className="capitalize text-gray-400 text-normal">
        {comment.description}
      </p>
    </div>
  );
};

export default CommentItem;
