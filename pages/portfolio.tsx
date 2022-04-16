import React, { useEffect, useState } from 'react';
import PortfolioItem from '../components/portfolio/PortfolioItem';
import axios from 'axios';
import PortfolioContext from '../components/portfolio/PortfolioContext';
import { IPortfolioItemInput, IPortfolioSkillInput } from '../components/common/CommonInterfaces';
import PortfolioSkill from '../components/portfolio/PortfolioSkillI';

function Portfolio() {
  const [portfolioItemList, setPortfolioItemList] = useState<IPortfolioItemInput[]>([]);
  const [portfolioSkillList, setPortfolioSkillList] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/assets/json/PortfolioItemList.json').then(res => {
      setPortfolioItemList(
        res.data.sort((a: any, b: any) => {
          if (a.type === 'WEBSITE' && b.type !== 'WEBSITE') {
            return -1;
          } else if (a.type !== 'WEBSITE' && b.type === 'WEBSITE') {
            return 1;
          }

          if (a.year < b.year) return 1;
          if (a.year > b.year) return -1;
          return 0;
        })
      );
    });

    axios.get('/assets/json/PortfolioSkillList.json').then(res => {
      console.log(res);
      setPortfolioSkillList(res.data);
    });
  }, []);

  const sortPortfolioItems = (a: IPortfolioItemInput, b: IPortfolioItemInput) => {
    const selectedItems = a.technologies.filter(technology => {
      return selectedTechnologies.includes(technology);
    }).length;

    const nonSelectedItems = b.technologies.filter(technology => {
      return selectedTechnologies.includes(technology);
    }).length;

    if (selectedItems > nonSelectedItems) {
      return -1;
    } else if (selectedItems < nonSelectedItems) {
      return 1;
    }

    if (a.type === 'WEBSITE' && b.type !== 'WEBSITE') {
      return -1;
    } else if (a.type !== 'WEBSITE' && b.type === 'WEBSITE') {
      return 1;
    }

    if (a.year < b.year) return 1;
    if (a.year > b.year) return -1;
    return 0;
  };

  return (
    <PortfolioContext.Provider value={{ selectedTechnologies, setSelectedTechnologies }}>
      <div className="my-5 px-md-5 px-3">
        <div className="">
          <div className="d-flex align-items-start flex-nowrap">
            <div className="row portfolio-item-list">
              {[...portfolioItemList].sort(sortPortfolioItems).map((portfolioItem: IPortfolioItemInput) => (
                <PortfolioItem
                  key={portfolioItem.title}
                  images={portfolioItem.images}
                  title={portfolioItem.title}
                  link={portfolioItem.link}
                  year={portfolioItem.year}
                  type={portfolioItem.type}
                  technologies={portfolioItem.technologies}
                  description={portfolioItem.description}
                />
              ))}
            </div>
            <div className="ms-sm-4 ms-3">
              <p className="fw-bold small text-center">FILTER</p>
              <div className="d-flex flex-column align-items-center justify-content-center portfolio-skill-list">
                {portfolioSkillList.map((portfolioSkill: IPortfolioSkillInput) => (
                  <PortfolioSkill
                    key={portfolioSkill.name}
                    prefix={portfolioSkill.prefix}
                    name={portfolioSkill.name}
                    icon={portfolioSkill.icon}
                    slug={portfolioSkill.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortfolioContext.Provider>
  );
}

export default Portfolio;
