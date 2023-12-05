import { pickButton } from "../helpers/pickButton";

export const ButtonsList = ({ categories, filterCategory }) => {
  return (
    <div className="flex items-center gap-3 py-2 justify-center ">
      {categories.map((category) => (
        <button
          className="border p-1 rounded-md hover:bg-cGreen/50 hover:animate-wiggle-more hover:animate-infinite hover:animate-duration-[1800ms] hover:animate-delay-100 hover:animate-ease-in-out"
          key={category}
          onClick={() => filterCategory(category)}
          title={category}
        >
          {pickButton(category)}
        </button>
      ))}
    </div>
  );
};
