document.addEventListener('DOMContentLoaded', () => {
  const addRecipeBtn = document.getElementById('addRecipeBtn');
  const closeAddFormBtn = document.getElementById('closeAddForm');
  const submitRecipeBtn = document.getElementById('submitRecipe');
  const addForm = document.getElementById('addForm');
  const recipeContainer = document.getElementById('recipeContainer');
  const quickAlert = document.getElementById('quickAlert');
  const alertMessage = document.getElementById('alertMessage');
  const closeAlertBtn = document.getElementById('closeAlert');

  const recipes = [];

  function showAlert(message) {
      alertMessage.textContent = message;
      quickAlert.classList.remove('hidden');
      setTimeout(() => {
          quickAlert.classList.add('hidden');
      }, 2000);
  }

  function renderRecipes() {
      recipeContainer.innerHTML = '';
      recipes.forEach((recipe, index) => {
          const recipeDiv = document.createElement('div');
          recipeDiv.classList.add('recipe');
          recipeDiv.innerHTML = `
              <h3 class="title">${recipe.name}</h3>
              <p>Ingredients: ${recipe.ingredients}</p>
              <button class="btn" onclick="editRecipe(${index})">Edit</button>
              <button class="btn" onclick="deleteRecipe(${index})">Delete</button>
          `;
          recipeContainer.appendChild(recipeDiv);
      });
  }

  function addRecipe(name, ingredients) {
      recipes.push({ name, ingredients });
      renderRecipes();
      showAlert('Recipe added successfully!');
      addForm.classList.add('hidden');
  }

  function editRecipe(index) {
      // Implement edit functionality
      showAlert('Edit functionality not implemented.');
  }

  function deleteRecipe(index) {
      recipes.splice(index, 1);
      renderRecipes();
      showAlert('Recipe deleted successfully!');
  }

  addRecipeBtn.addEventListener('click', () => {
      addForm.classList.remove('hidden');
  });

  closeAddFormBtn.addEventListener('click', () => {
      addForm.classList.add('hidden');
  });

  submitRecipeBtn.addEventListener('click', () => {
      const name = document.getElementById('recipeName').value;
      const ingredients = document.getElementById('recipeIngredients').value;
      if (name && ingredients) {
          addRecipe(name, ingredients);
      } else {
          showAlert('Please fill in all fields.');
      }
  });

  closeAlertBtn.addEventListener('click', () => {
      quickAlert.classList.add('hidden');
  });
});
