import "./index.css";

export default function ListItem({ children, imageSrc, title }) {
  return (
    <li className="list-item">
      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        <div className="list-item__content">
          {imageSrc && (
            <div>
              <img height={24} width={24} src={imageSrc} alt="Icon" />
              &nbsp;
            </div>
          )}
          <span className="list-item__content-text">{children}</span>
        </div>
      </div>
    </li>
  );
}
