import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPortfolioSkillInput } from '../common/CommonInterfaces';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { findIconDefinition, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

function PortfolioSkillNoClick({ name, icon, prefix }: IPortfolioSkillInput) {
  const icoDefinition: IconDefinition =
    icon != null
      ? findIconDefinition({
          prefix: prefix as IconPrefix,
          iconName: icon as IconName
        })
      : ({} as IconDefinition);

  return (
    <motion.div whileHover={{ scale: 1.1 }} className="p-sm-2 p-1 portfolio-skill">
      <div className="d-flex flex-column align-items-center justify-content-center">
        {icon != null ? (
          <FontAwesomeIcon icon={icoDefinition} className={`mb-2 skill-icon`} />
        ) : (
          <span className={`skill-icon skill-text `}>{name}</span>
        )}
        <small>{name}</small>
      </div>
    </motion.div>
  );
}

export default PortfolioSkillNoClick;
