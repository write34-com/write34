import React, { useState } from 'react';
import {graphql, useMutation} from "react-relay";
import classnames from "classnames";

interface UpvoteDownvoteProps {
  initialUpvotes: number;
  initialDownvotes: number;
  promptId: string;
  isUpvoted: boolean;
  isDownvoted: boolean;
}

const UpvoteMutation = graphql`
    mutation UpvoteDownvoteUpdoteMutation($promptId: String!, $setVoteState: Boolean) {
        votePrompt(promptId: $promptId, setVoteState: $setVoteState)
    }
`;

const UpvoteDownvote: React.FC<UpvoteDownvoteProps> = ({
                                                         initialUpvotes = 0,
                                                         initialDownvotes = 0,
                                                         promptId,
                                                         isUpvoted,
                                                         isDownvoted,
                                                       }) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [isUpvotedState, setIsUpvotedState] = useState(isUpvoted);
  const [isDownvotedState, setIsDownvotedState] = useState(isDownvoted);
  const [votePrompt, isInFlight] = useMutation(UpvoteMutation);

  const handleUpvote = async () => {
    setUpvotes(upvotes + (isUpvotedState ? -1 : 1));
    if (isDownvotedState) {
      setDownvotes(downvotes - 1);
    }
    setIsUpvotedState(!isUpvotedState);
    setIsDownvotedState(false);
    votePrompt({
      variables: {
        promptId,
        setVoteState: isUpvotedState ? null : true,
      }
    });
  };

  const handleDownvote = async () => {
    setDownvotes(downvotes + (isDownvotedState ? -1 : 1));
    if (isUpvotedState) {
      setUpvotes(upvotes - 1);
    }
    setIsDownvotedState(!isDownvotedState);
    setIsUpvotedState(false);
    votePrompt({
      variables: {
        promptId,
        setVoteState: isDownvotedState ? null : false,
      }
    });
  };

  const upvoteSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  );

  const upvoteHighlightedSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
    </svg>
  );

  const downvoteSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );

  const downvoteHighlightedSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
    </svg>
  );

  return (
    <div className="flex items-center space-x-2">
      <button
        className={classnames('p-1 border rounded-full hover:bg-blue-100')}
        onClick={handleUpvote}
      >
        {isUpvotedState ? upvoteHighlightedSvg : upvoteSvg}
      </button>
      <span>{upvotes}</span>
      <button
        className="p-1 border rounded-full hover:bg-red-100"
        onClick={handleDownvote}
      >
        {isDownvotedState ? downvoteHighlightedSvg : downvoteSvg}
      </button>
      <span>{downvotes}</span>
    </div>
  );
};

export default UpvoteDownvote;
