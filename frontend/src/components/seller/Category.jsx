import React, { useState, useEffect } from "react";
import AddCategoryModal from "../modals/AddCategoryModal";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import { TbLoader } from "react-icons/tb";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", productCount: 10, subcategories: [] },
    {
      id: 2,
      name: "Clothing",
      productCount: 15,
      subcategories: ["Men", "Women"],
    },
    {
      id: 3,
      name: "Home and Living",
      productCount: 20,
      subcategories: ["Furniture", "Decor"],
    },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddCategory = (newCategoryName) => {
    const newCategoryData = {
      id: categories.length + 1,
      name: newCategoryName,
      productCount: 0,
      subcategories: [],
      subcategoriesOpen: false,
    };

    setCategories([...categories, newCategoryData]);
    setIsModalOpen(false);
  };

  const handleDeleteCategory = (categoryId) => {
    // Simulate deleting a category
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setCategories(updatedCategories);
  };

  const handleEditCategory = (categoryId, newName) => {
    // Simulate editing a category
    const updatedCategories = categories.map((category) =>
      category.id === categoryId ? { ...category, name: newName } : category
    );

    setCategories(updatedCategories);
  };

  const handleToggleSubcategories = (categoryId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, subcategoriesOpen: !category.subcategoriesOpen }
          : category
      )
    );
  };

  const openAddCategoryModal = () => {
    setIsModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div className="flex text-3xl justify-between mt-6">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-[88vh] overflow-y-scroll p-10 container mx-auto w-full">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>

      <button
        onClick={openAddCategoryModal}
        className="bg-indigo-600 text-white px-4 py-2 rounded mb-4"
      >
        Add New Category
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border p-4 rounded mb-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold">{category.name}</span>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    handleEditCategory(
                      category.id,
                      prompt("Enter new category name:", category.name)
                    )
                  }
                  className="text-blue-600 mr-2"
                >
                  <AiOutlineEdit />
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-600"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <span className="text-gray-500 lg:mb-0 mb-2">
                Products: {category.productCount}
              </span>
              <button
                onClick={() => handleToggleSubcategories(category.id)}
                className="text-indigo-600 lg:self-end"
              >
                {category.subcategoriesOpen
                  ? "Hide Subcategories"
                  : "Show Subcategories"}
              </button>
            </div>
            {category.subcategoriesOpen && (
              <ul className="pl-4 mt-2">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>{subcategory}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Add New Category Modal */}
      <AddCategoryModal
        isOpen={isModalOpen}
        onRequestClose={closeAddCategoryModal}
        onAddCategory={handleAddCategory}
      />
    </div>
  );
};

export default Categories;
