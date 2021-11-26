import PropTypes from 'prop-types';
import './Section.css';

export default function Sections({ title, children }) {
  return (
    <section className="section">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Sections.propTypes = {
  title: PropTypes.string,
};
