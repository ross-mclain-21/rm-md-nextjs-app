import React, { useContext, useState } from 'react';
import { Image, IPortfolioItemInput } from '../common/CommonInterfaces';
import PortfolioContext from './PortfolioContext';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = ({
  description,
  images = [],
  title,
  link,
  href,
  technologies,
  type,
  year,
  githubLink
}: IPortfolioItemInput) => {
  const { selectedTechnologies } = useContext(PortfolioContext);

  return (
    <motion.div
      layout
      className={`col-xl-3 col-lg-4 col-md-6 mb-5 p-3 ${(link || href) && 'portfolio-item-link'}`}
      onClick={() => {
        if (href) {
          window.open(href, '_blank');
        }
        if (link) {
          location.href = link;
        }
      }}
    >
      <div
        className={`portfolio-item-block${
          selectedTechnologies.length > 0 && !selectedTechnologies.some(technology => technologies.includes(technology))
            ? ' hidden-skill'
            : ''
        }`}
      >
        <div className="d-flex align-items-center justify-content-between">
          <h3>{title}</h3>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className={''}
              onClick={event => {
                event.stopPropagation();
              }}
            >
              <FontAwesomeIcon icon={['fab', 'github']} className={`mb-2 github-link`} />
            </a>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span>{type}</span>
          <i>{year}</i>
        </div>
        <hr />
        {technologies != null ? (
          <div className="d-flex align-items-center flex-wrap mb-3">
            {technologies.map((technology: string) => {
              const techIncluded = selectedTechnologies.includes(technology);
              return (
                <motion.span
                  key={technology}
                  initial={{ scale: 1 }}
                  animate={{ scale: techIncluded ? 1.1 : 1 }}
                  exit={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={
                    techIncluded
                      ? 'badge border-dashed border-code text-code fw-bold rounded-pill ms-1 me-2 mb-2'
                      : 'badge border-dashed border-code-green border-1 text-code-green fw-light rounded-pill me-1 mb-2'
                  }
                >
                  {technology}
                </motion.span>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <div className="d-flex align-items-center flex-wrap">
          {images.map((img: Image) => {
            return (
              <img
                key={img.src}
                id={img.src}
                src={img.src}
                className="img portfolio-img-sneaky mb-3 me-3"
                width={img.width ?? '240px'}
                height={img.height ?? '120px'}
                alt={img.alt}
              />
            );
          })}
        </div>
        <p className="fst-italic portfolio-description-block">{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
