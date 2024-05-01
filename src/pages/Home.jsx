import React from "react";
import RecipiesList from "../components/RecipiesList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipies");

  const deleteRecipe = async (id) => {
    try {
      await fetch("http://localhost:3001/recipies/" + id, {
        method: "DELETE",
      });
      // Qolgan kod...
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {recipes && (
        <RecipiesList recipes={recipes} deleteRecipe={deleteRecipe} />
      )}
    </div>
  );
}

export default Home;
