import { useEffect } from 'react';

const observeClasses = [
  'observe-screenshot',
  'observe-content',
  'observe-stack',
];

export const useObserver = () => {
  const observerCallBack = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Array.from(entry.target.children).forEach((child, index) => {
          child.classList.add(observeClasses[index]);
        });
      } else {
        Array.from(entry.target.children).forEach((child, index) => {
          child.classList.remove(observeClasses[index]);
        });
      }
    });
  };

  useEffect(() => {
    const details = document.querySelectorAll('.project-detail');

    const observer = new IntersectionObserver(observerCallBack, {
      threshold: 0.9,
      rootMargin: '40%',
    });

    details.forEach((child) => {
      observer.observe(child);
    });
  }, []);
};
