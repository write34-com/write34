import React, {useEffect, useState} from 'react';
import {graphql, useMutation} from "react-relay";
import classnames from "classnames";

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
  const [localRating, setLocalRating] = useState(userRating || globalRating);
  const [votePrompt, isInFlight] = useMutation(UpvoteMutation);

  useEffect(() => {
    setLocalRating(userRating || globalRating);
  }, [userRating, globalRating]);

  const handleRatingChange = (newRating: number) => {
    setLocalRating(newRating);
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
              'bg-yellow-400': userRating && Math.round(userRating / 10) >= star,
              'bg-gray-300': !userRating || Math.round(userRating / 10) < star,
              'bg-gray-500': totalRatings === 0 || Math.round(localRating / 10) < star,
            })}
            checked={Math.round(localRating / 10) === star}
            onChange={() => handleRatingChange(star * 10)}
            disabled={isInFlight}
          />
        ))}
      </div>
      <div className="text-xs text-gray-400">
        {totalRatings === 0 ? 'No ratings yet' : `${totalRatings} rating${totalRatings === 1 ? '' : 's'}`}
      </div>
    </div>
  );
};

export default ScenarioRating;
