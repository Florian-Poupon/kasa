export default function Banner({ titre, image }) {
  const bg = new URL(`../../assets/images/banner/${image}.png`, import.meta.url).href;
  return (
    <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="banner__overlay" />
      <h2>{titre}</h2>
    </div>
  );
}
