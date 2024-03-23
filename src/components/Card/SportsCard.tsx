// components/SportsCard.tsx
import Image from "next/image";
import React from "react";

type SportsCardProps = {
  imageUrl: string;
  title: string;
  totalEvents: number;
  sportsName: string;
};

const SportsCard: React.FC<SportsCardProps> = ({
  imageUrl,
  title,
  totalEvents,
  sportsName,
}) => {
  return (
    <div>
      <div className="">
        <div className="bg-[#3B3E47] p-2.5">
          <Image
            src={imageUrl}
            alt={title}
            width={217}
            height={385}
            // layout="responsive"
          />
          <div className="">
            <h2 className="mt-3.5 mb-4">{title}</h2>
            <div className="flex gap-9 bg-[#292B32] px-2.5 py-1 rounded-sm">
              <p>
                <span className="text-[12px]">Total Events:</span>
                <span className="text-sm font-medium"> {totalEvents}</span>
              </p>
              <p>
                <span className="text-[12px]">Sports:</span>
                <span className="text-sm font-medium"> {sportsName}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
