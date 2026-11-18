import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  showScore?: boolean;
  size?: 'sm' | 'md';
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  showScore = false,
  size = 'sm',
}) => {
  const iconSize = size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const scoreTextSize = size === 'md' ? 'text-xs' : 'text-[11px]';

  return (
    <div className="inline-flex items-center gap-1.5" aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}>
      <div className="flex items-center text-amber-400 gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((starIdx) => {
          if (rating >= starIdx) {
            return (
              <Star
                key={starIdx}
                className={`${iconSize} fill-amber-400 text-amber-400`}
              />
            );
          } else if (rating >= starIdx - 0.5) {
            return (
              <span key={starIdx} className={`relative inline-flex items-center ${iconSize}`}>
                <Star className={`${iconSize} text-neutral-300 stroke-[1.5]`} />
                <StarHalf className={`${iconSize} fill-amber-400 text-amber-400 absolute inset-0`} />
              </span>
            );
          } else {
            return (
              <Star
                key={starIdx}
                className={`${iconSize} text-neutral-300 stroke-[1.5]`}
              />
            );
          }
        })}
      </div>
      {showScore && (
        <span className={`${scoreTextSize} font-bold font-editorial-mono text-neutral-700`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

