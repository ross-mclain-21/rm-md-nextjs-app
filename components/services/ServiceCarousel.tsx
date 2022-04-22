import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

const items = [
  {
    type: 'develop',
    activity: 'DEVELOP'
  },
  {
    type: 'build',
    activity: 'BUILD'
  },
  {
    type: 'create',
    activity: 'CREATE'
  }
];

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  function onExited() {
    setAnimating(false);
  }

  function next() {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  function previous() {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} className="p-3 p-sm-5">
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {items.map(item => (
        <CarouselItem onExited={onExited} key={item.type}>
          <div className="container py-3">
            <h1 className={'me-3 mt-5'}>
              <span className={'code'}>I</span> <span>{item.activity}</span>
            </h1>
          </div>
        </CarouselItem>
      ))}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="my-auto" />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="my-auto" />
    </Carousel>
  );
}
