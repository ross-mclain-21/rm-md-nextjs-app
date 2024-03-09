import React, { useContext, useState } from 'react';
import PortfolioContext from './PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPortfolioSkillInput } from '../common/CommonInterfaces';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { findIconDefinition, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import Image from "next/image";

const PortfolioSkill = ({ name, slug, icon, prefix, type, iconHover }: IPortfolioSkillInput) => {
  const { selectedTechnologies, setSelectedTechnologies } = useContext(PortfolioContext);

  const icoDefinition: IconDefinition =
    icon != null && type !== 'image'
      ? findIconDefinition({
          prefix: prefix as IconPrefix,
          iconName: icon as IconName
        })
      : ({} as IconDefinition);
  const skillSelected = selectedTechnologies.includes(slug);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="p-sm-2 p-1 portfolio-skill"
      onClick={() => {
        if (!selectedTechnologies.includes(slug)) {
          selectedTechnologies.push(slug);
          setSelectedTechnologies([...selectedTechnologies]);
        } else {
          selectedTechnologies.splice(selectedTechnologies.indexOf(slug), 1);
          setSelectedTechnologies([...selectedTechnologies]);
        }
      }}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {icon != null && type !== 'image' ? (
          <FontAwesomeIcon
            icon={icoDefinition}
            className={`mb-2 skill-icon ${skillSelected ? 'skill-selected' : ''}`}
          />
        ) : icon != null ? (
            <Image src={icon} alt={name} width={48} height={48} className={`skill-image ${skillSelected ? 'skill-selected' : ''}`} />
        ) : (
          <span className={`skill-icon skill-text ${skillSelected ? 'skill-selected' : ''}`}>{name}</span>
        )}
        <small className={`${skillSelected ? 'text-code fw-bold' : ''}`}>{name}</small>
      </div>
    </motion.div>
  );
};

export default PortfolioSkill;
