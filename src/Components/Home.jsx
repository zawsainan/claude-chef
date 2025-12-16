import { useRef, useState } from "react";
export default function Home() {
  const [ingredients, setIngredient] = useState([]);
  const inputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    let value = inputRef.current.value;
    if (!value) {
      return;
    }
    setIngredient((cur) => [...cur, value]);
    inputRef.current.value = "";
  }

  function handleClick(indexToRemove) {
    setIngredient((cur) => cur.filter((_, index) => index !== indexToRemove));
  }
  return (
    <div className="flex flex-col mx-auto max-w-3xl p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex pt-4">
          <input
            type="text"
            ref={inputRef}
            placeholder="eg. oregano"
            className="grow border-[#6B7280] rounded-sm border-2 p-2"
          />
          <button
            type="submit"
            className="w-48 text-center bg-[#141413] text-white py-2 rounded-sm ms-4"
          >
            + Add Ingredient
          </button>
        </div>
      </form>

      {ingredients.length > 0 && (
        <div className="min-h-25 p-4 text-gray-500">
          <h2 className="font-semibold text-xl mt-8 mb-4">
            Ingredients on hand:
          </h2>
          <ul className="space-y-3">
            {ingredients.map((item, index) => (
              <li className="flex justify-between" key={index}>
                <span className="list-disc list-inside">{item}</span>
                <button
                  onClick={() => handleClick(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
