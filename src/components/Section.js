import PropTypes from 'prop-types';

export default function Sections({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Sections.propTypes = {
  label: PropTypes.string,
};
