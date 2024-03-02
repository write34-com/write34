import React, {useEffect, useState} from 'react';
import {graphql, useMutation} from "react-relay";
import classnames from "classnames";
import {useSession} from "next-auth/react";

interface ScenarioRatingProps {
  globalRating: number;
  totalRatings: number;
  promptId: string;
  userRating: number | null | undefined;
}

const UpvoteMutation = graphql`
    mutation ScenarioRatingMutation($promptId: String!, $setRating: Float) {
        votePrompt(promptId: $promptId, setRating: $setRating)
    }
`;

const ScenarioRating: React.FC<ScenarioRatingProps> = ({
                                                         globalRating,
                                                         totalRatings,
                                                         promptId,
                                                         userRating,
                                                       }) => {
  const [localTotalRatings, setLocalTotalRatings] = useState(totalRatings || 0);
  const [localRating, setLocalRating] = useState(userRating);
  const [votePrompt, isInFlight] = useMutation(UpvoteMutation);

  const session = useSession();

  useEffect(() => {
    setLocalRating(userRating);
  }, [userRating]);

  const handleRatingChange = (newRating: number) => {
    setLocalRating(newRating);
    if (!userRating) {
      setLocalTotalRatings(totalRatings + 1);
    }
    votePrompt({
      variables: {
        promptId,
        setRating: newRating,
      },
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <input
            key={star}
            type="radio"
            name={`rating-${star}`}
            className={classnames('mask mask-star', {
              'bg-yellow-400': localRating && Math.round(localRating / 10) >= star,
              'bg-gray-300': !localRating || Math.round(localRating / 10) < star,
              'bg-gray-500': localTotalRatings === 0 || Math.round(globalRating / 10) < star,
            })}
            checked={localRating ? Math.round(localRating / 10) === star : false}
            onChange={() => handleRatingChange(star * 10)}
            disabled={isInFlight || !session}
          />
        ))}
      </div>
      <div className="text-xs text-gray-400">
        {localTotalRatings === 0 ? 'No ratings yet' : `${localTotalRatings} rating${localTotalRatings === 1 ? '' : 's'}`}
      </div>
    </div>
  );
};

export default ScenarioRating;
