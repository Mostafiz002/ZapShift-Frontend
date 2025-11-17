import React from 'react';

const ReviewCard = ({ review }) => {

  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
      <div className="text-6xl font-bold text-gray-200">
        &ldquo;
      </div>
      <p className="text-base text-gray-700 leading-relaxed mt-4">
        {review.review}
      </p>
      <hr className="my-6 border-t border-dashed border-teal-500" />
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full mr-4 flex-shrink-0">
        
          {review.user_photoURL ? (
            <img 
              src={review.user_photoURL} 
              alt={name} 
              className="w-full h-full rounded-full object-cover" 
            />
          ) : (
            <div className="w-full h-full rounded-full bg-teal-800"></div>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{review.userName}</p>
          <p className="text-sm text-gray-500">{review.ratings}</p>
        </div>
      </div>

    </div>
  );
};

export default ReviewCard;