import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

import apiConnection from "@services/apiConnection";
import validateCategory from "@services/categoryValidators";
import SearchBarTemplate from "@components/SearchBarTemplate";
import InputTemplate from "@components/InputTemplate";
import TextareaTemplate from "@components/TextareaTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import ModalSuppression from "@components/ModalSuppression";

import "react-toastify/dist/ReactToastify.css";

function Category() {
  const [displayModal, setDisplayModal] = useState(false);
  const [myCategories, setMyCategories] = useState([]);
  const [reset, setReset] = useState(false);
  const [category, setCategory] = useState({
    id: null,
    Name: "",
    Icon: "",
    Description: "",
  });

  const notify = (msg) => {
    toast(msg);
  };

  // Fonction qui gère la récupération des données avec axios
  const getAllCategories = () => {
    apiConnection
      .get(`/categories`)
      .then((categories) => setMyCategories(categories.data))
      .catch((error) => console.error(error));
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getAllCategories();
  }, []);

  // Remise à zéro des inputs pour ANNULER l'édition ou l'ajout d'une catégorie
  const handleCancelButton = () => {
    setCategory({
      id: null,
      Name: "",
      Icon: "",
      Description: "",
    });
    setReset(!reset);
  };

  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newCategory = { ...category };
    newCategory[place] = value;
    setCategory(newCategory);
  };

  // La fonction pre-rempli les input quand on clique sur une catégorie dans la searchBar
  /**
   * @param {object} cat
   */
  const handleOneCategory = (cat) => {
    setCategory(cat);
  };

  // Fonction qui gère l'ajout d'une nouvelle catégorie
  const handleAddCategory = () => {
    delete category.id;
    const { status, errorMessage } = validateCategory(category);
    if (status) {
      apiConnection
        .post(`/categories`, {
          ...category,
        })
        .then((categories) => {
          notify("Category successfully added!");
          setCategory(categories.data);
          getAllCategories();
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

  // Fonction qui gère la suppression d'une catégorie
  const handleDeleteCategory = () => {
    apiConnection
      .delete(`/categories/${category.id}`)
      .then(() => {
        setCategory({
          id: null,
          Name: "",
          Icon: "",
          Description: "",
        });
        notify("Category deleted!");
        getAllCategories();
      })
      .catch((error) => console.error(error));
  };

  // Fonction qui gère la modification d'une catégorie
  const handleUpdateCategory = () => {
    const { status, errorMessage } = validateCategory(category);

    const { Name, Icon, Description } = category;
    if (status) {
      apiConnection
        .put(`/categories/${category.id}`, {
          Name,
          Icon,
          Description,
        })
        .then(() => {
          notify("Category successfully updated!");
          getAllCategories();
        })
        .catch((error) => console.error(error));
    } else {
      notify(errorMessage);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's Dashboard - Category Manager</title>
        <meta
          name="description"
          content="Manage the categories on your website from this page of your back office dashboard. Add, edit, or delete categories, and assign videos to each category."
        />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className="flex flex-col items-center w-full pt-10 gap-y-7">
        {/* SEARCHBAR */}
        <SearchBarTemplate
          reset={reset}
          data={myCategories}
          customWidth="cstm_width_XlInput"
          searchBarContainer="flex flex-col items-center w-full relative"
          textPlaceholder="Search category"
          textButton="Show categories"
          methodOnClick={handleOneCategory}
        />
        {/* FORM ADD OPTION */}
        <div className="mt-10 flex flex-col items-center w-full gap-y-7">
          <InputTemplate
            textPlaceholder="Title"
            customWidth="cstm_width_XlInput"
            value={category.Name}
            methodOnChange={handleInputOnChange}
            name="Name"
          />
          <InputTemplate
            textPlaceholder="URL"
            customWidth="cstm_width_XlInput"
            value={category.Icon}
            methodOnChange={handleInputOnChange}
            name="Icon"
          />
          <TextareaTemplate
            textPlaceholder="Description"
            customWidth="cstm_width_XlInput"
            value={category.Description}
            methodOnChange={handleInputOnChange}
            name="Description"
          />
        </div>
        <div className="flex justify-around space-x-8 pt-5">
          {!category.id && (
            <ButtonTemplate
              buttonType="button"
              buttonText="ADD"
              buttonStyle="cstm_buttonSecondaryNone"
              methodOnClick={handleAddCategory}
            />
          )}
          {category.id && (
            <>
              <ButtonTemplate
                buttonType="button"
                buttonText="UPDATE"
                buttonStyle="cstm_buttonSecondary"
                methodOnClick={handleUpdateCategory}
              />
              <ButtonTemplate
                buttonType="button"
                buttonText="DELETE"
                buttonStyle="cstm_buttonSecondary"
                methodOnClick={setDisplayModal}
              />
            </>
          )}
          <ButtonTemplate
            methodOnClick={handleCancelButton}
            buttonType="button"
            buttonText="CANCEL"
            buttonStyle="cstm_buttonSecondaryNone"
          />
          {displayModal && (
            <ModalSuppression
              setDisplayModal={setDisplayModal}
              confirmDelete={handleDeleteCategory}
            />
          )}
        </div>
      </form>
    </>
  );
}

export default Category;
