import "./style.scss";

import {
  FaLaptop,
  FaShoppingBasket,
  FaWineBottle,
  FaTools,
  FaHeartbeat,
  FaDumbbell,
  FaTshirt,
} from "react-icons/fa";

import CategoryCard from "./CategoryCard";

interface CategorySectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { icon: <FaLaptop />, title: "Tecnologia" },
  { icon: <FaShoppingBasket />, title: "Supermercado" },
  { icon: <FaWineBottle />, title: "Bebidas" },
  { icon: <FaTools />, title: "Ferramentas" },
  { icon: <FaHeartbeat />, title: "Saúde" },
  { icon: <FaDumbbell />, title: "Esportes e Fitness" },
  { icon: <FaTshirt />, title: "Moda" },
];

function CategorySection({
  selectedCategory,
  onSelectCategory,
}: CategorySectionProps) {
  return (
    <section className="category-section">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          icon={category.icon}
          title={category.title}
          isActive={selectedCategory === category.title}
          onClick={() => onSelectCategory(category.title)}
        />
      ))}
    </section>
  );
}

export default CategorySection;