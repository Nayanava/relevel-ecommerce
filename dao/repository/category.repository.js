/*

    Homework: Fetch a category by its name
    Sample example:
    https://stackoverflow.com/questions/59111392/using-findbypk-and-where-condition-in-sequelize

*/

const { defineCategory } = require("../models/category.model");
const dbConnection = require("./dbConnection");

const { connection } = require("./dbConnection");
//function to create a new row in the Category table
//function to select a row from the Category table
//function to update a row in the Category table
//delete a row from the Category table
//function to show all categories

const Category = defineCategory(dbConnection.connection, dbConnection.DataTypes);

const createCategoryTable = async (forceCreation) => {
    await Category.sync({force: forceCreation})
}

//function to create a new row in the Category table
const save = async (category) => {
    return await Category.create({
        name: category.name,
        description: category.description
    });
}

const fetchCategoryByID = async (id) => {
    return await Category.findByPk(id);
}

const fetchAllCategories = async() => {
    return await Category.findAll();
}

const fetchCategoriesByCriteria = async (criteria) => {
    return await Category.findAll(criteria);
}

module.exports = {
    createCategoryTable: createCategoryTable,
    addCategory: save,
    fetchCategoryByID: fetchCategoryByID,
    fetchAllCategories: fetchAllCategories,
    fetchCategoriesByCriteria: fetchCategoriesByCriteria
}