import React from 'react';
import { FaRegGrinStars } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { MdAdsClick, MdManageSearch } from 'react-icons/md';

export default function ServiceCard({ title, info }) {
  const checkIcon = () => {
    if (title === 'Social media marketing') {
      return <MdAdsClick className="icon" />;
    }

    if (title === 'Branding consulting') {
      return <FaRegGrinStars className="icon" />;
    }

    if (title === 'Market analysis') {
      return <IoAnalytics className="icon" />;
    }
    return <MdManageSearch className="icon" />;
  };

  return (
    <div className="card">
      {checkIcon()}
      <h3>
        <span className="first-letter">{title[0]}</span>
        {title.slice(1, title.length)}
      </h3>
      <p>{info}</p>
    </div>
  );
}
