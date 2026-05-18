import "./style.scss";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function CategoryCard({
  icon,
  title,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      className={`category-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="card-box">
        <div className="icon">
          {icon}
        </div>
      </div>

      <h3>{title}</h3>
    </button>
  );
}

export default CategoryCard;