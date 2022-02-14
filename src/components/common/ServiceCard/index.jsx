import React from 'react';
import { FaRegGrinStars } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { MdAdsClick, MdManageSearch } from 'react-icons/md';

export default function ServiceCard({ service }) {
  const checkIcon = () => {
    if (service.title === 'Social media marketing') {
      return <MdAdsClick className="icon" />;
    }

    if (service.title === 'Branding consulting') {
      return <FaRegGrinStars className="icon" />;
    }

    if (service.title === 'Market analysis') {
      return <IoAnalytics className="icon" />;
    }
    return <MdManageSearch className="icon" />;
  };

  return (
    <div className="card">
      {checkIcon()}
      <h3>
        <span className="first-letter">{service.title[0]}</span>
        {service.title.slice(1, service.title.length)}
      </h3>
      <p>{service.info}</p>
    </div>
  );
}
