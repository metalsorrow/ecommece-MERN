const Category = require( '../model/category')

const getCategories = (req,res,next) =>{
    Category.find()
        .then( products => {
            return res.status(200).json({
                ok: true,
                products
            })
        })
        .catch( err => { 
            return res.status(500).json({
                ok: false,
                message: 'Error searching Categories: ' + err
            })
        })
}

const getCategory = (req,res,next) =>{
    const idCategory = req.query.idCategory;

    Category.findById( idCategory)
        .then( category => {
            return res.status(200).json({
                ok: true,
                category
            })
        })
        .catch( err => {
            return res.status(500).json({
                ok: false,
                message: 'Error searching for a category: ' + err
            })
        })

}

const postNewCategory = (req,res,next) => {
    const {nombre, descripcion} = req.body;

    const newCategory = new Category({nombre, descripcion})

    newCategory.save()
        .then( () => {
            return res.status(201).json({
                ok: true,
                newCategory
            })
        })
        .catch( err => {
            return res.status(500).json({
                ok: false,
                message: 'Error Saving new Category: ' + err
            })
        })

}

const updateCategory = (req,res,next) =>{
    const idCategory = req.query.idCategory;
    const {nombre, descripcion} = res.body;

    const updatedCategory = new Category({
        nombre, descripcion
    });

    Category.findByIdAndUpdate(idCategory,updatedCategory)
        .then( categoryDB => {
            return res.status(200).json({
                ok: true,
                categoryDB
            })
        })
        .catch( err => {
            return res.status(500).json({
                ok: false,
                message: 'Error updating a category: ' + err
            })
        })
}


module.exports = {
    postNewCategory,
    getCategories,
    updateCategory,
    getCategory
}