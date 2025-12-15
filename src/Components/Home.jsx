import { useState } from "react";
export default function Home() {
  const [ingredients, setIngredient] = useState([]);

  return (
    <div className="flex flex-col mx-auto max-w-3xl p-4">
      <div className="flex pt-4">
        <input
          type="text"
          placeholder="eg. oregano"
          className="grow border-[#6B7280] rounded-sm border-2 p-2"
        />
        <button className="w-48 text-center bg-[#141413] text-white py-2 rounded-sm ms-4">
          + Add Ingredient
        </button>
      </div>

      <h2 className="font-semibold text-xl mt-8 mb-4">Ingredients on hand:</h2>

      <div className="min-h-25 border border-dashed p-4 text-gray-500">
        (Ingredient list goes here)
      </div>
    </div>
  );
}
