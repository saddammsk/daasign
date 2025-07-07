import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/sanityImage';

type Review = {
  _id: string;
  user: string;
  userCourse: string;
  userAvatar?: { asset: { url: string } };
  location?: { asset: { url: string } };
  rating: number;
  comment: string;
};

type Props = {
  reviews: Review[];
  maxCards?: number;

};

const ClientReview = ({ reviews, maxCards }: Props) => {
    const displayedReviews = maxCards ? reviews.slice(0, maxCards) : reviews;
  return (
    <div className="w-full">
      {displayedReviews
      .map((review) => (
        <div key={review._id} className="w-full border mb-5 border-neutral3 bg-white p-6 rounded-xl inline-block">
          <div className="w-full flex gap-3">
            <div className="relative">
              {review.userAvatar && (
                <Image
                  src={urlFor(review.userAvatar).width(48).url()}
                  width={48}
                  height={48}
                  className="rounded-full min-w-12 h-12"
                  alt="user"
                />
              )}
              {review.location?.asset?.url && (
                <Image
                  src={review.location.asset.url}
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 rounded-full absolute bottom-0 right-0"
                  alt="flag"
                />
              )}
            </div>
            <div className="w-full">
              <div className="flex items-center gap-1">
                <h3 className="text-base font-semibold text-neutral2">{review.user}</h3>
                <Image src="/verified-user.svg" width={16} height={16} className="w-4 h-4 rounded-full" alt="verified" />
              </div>
              <p className="text-base text-gray5 font-medium">{review.userCourse}</p>
            </div>
          </div>
          <p className="md:text-base text-sm font-medium text-neutral2 my-5">{review.comment}</p>
          <Image src="/review-stars.svg" width={94} height={16} className="w-auto h-5 rounded-full" alt="stars" />
        </div>
      ))}
    </div>
  );
};

export default ClientReview;
