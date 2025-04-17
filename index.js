
alert("Hello,Sir/Madam");

function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = 'Loading...';
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json())
      .then(data => {
        resultsContainer.innerHTML = '';
        if (data.meals) {
          data.meals.forEach(meal => {
            const recipeEl = document.createElement('div');
            recipeEl.className = 'recipe';
            recipeEl.innerHTML = `
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <h3>${meal.strMeal}</h3>
              <a href="${meal.strSource || meal.strYoutube}" target="_blank">View Recipe</a>
            `;
            resultsContainer.appendChild(recipeEl);
          });
        } else {
          resultsContainer.innerHTML = '<p>No recipes found.</p>';
        }
      })
      .catch(error => {
        console.error(error);
        resultsContainer.innerHTML = '<p>Error fetching recipes. Try again later.</p>';
      });
  }
  