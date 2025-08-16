import "./card.css";

export default function Card({ title, description, image }) {
  return (
    <div className="box">
      <img src={image} alt={title} className="img" />
      <h2 className="subTitle">{title}</h2>
      <p className="text">{description}</p>
    </div>
  );
}
