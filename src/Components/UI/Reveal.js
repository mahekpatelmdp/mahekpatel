import { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div', style = {} }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={{ ...style, transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
