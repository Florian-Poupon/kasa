export default function SectionHeader({ titre, image }) {
  const bg = new URL(`../../assets/images/pages_header/${image}.png`, import.meta.url).href;
  return (
    <div className="section__header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="section__header__overlay" />
      <h2>{titre}</h2>
    </div>
  );
}
