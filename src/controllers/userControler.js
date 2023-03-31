import Model from "../models";
import user from "../models/user";
const { User } = Model;

// Create and Save a new Product
export const createUser = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).json({
        status: "error",
        message: "Content can not be empty.",
        payload: null,
    });
    return;
    }
    // Create a Product
    const User = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    };
// Save Product in the database
    User.create(user)
        .then((data) => {
            res.status(200).json({
                status: "success",
                message: "Product successfully created",
                payload: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Something happened creating a product. " + err.message,
                payload: null,
            });
        });
};

// Retrieve all Products from the database.
export const getAllUsers = (req, res) => {
    User.findAll()
        .then((data) => {
            return res.status(200).json({
                status: "success",
                message: "Products successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                status: "error",
                message: "Something happened retrieving all products. " + err.message,
                payload: null,
            });
        });
};

// Find a single Product with an id
export const getUserById = (req, res) => {
    User.findByPk(req.params.id)
        .then((data) => {
            return res.status(200).json({
                status: "success",
                message: "Products successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                status: "error",
                message: "Something happened retrieving all products. " + err.message,
                payload: null,
            });
        });
};

// Update a Product by the id in the request
export const updateUser = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Product in the database
    User.update(req.body, {
        where: { id: req.params.id}
    })
    .then((isUpdated) => {
            if (isUpdated){
        res.status(200).json({
            status: "success",
            message: "Product successfully updated",
            payload: req.body,
        });
    }else {
        res.status(500).json({
            status: "error",
            message:
            "Something happened updating the product. " +
            req.body.id +
            " See:" +
            err.message,
            payload: null,
            });
    }
    })
    .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a product. " + err.message,
            payload: null,
        });
    });
};

// Delete a Product with the specified id in the request
export const deleteUser = (req, res) => {
    // Validate request
    if (!req.body.id) {
    res.status(400).json({
    status: "error",
    message: "Content can not be empty.",
    payload: null,
    });
    return;
    }
    // Delete Product in the database
    User.destroy({
    where: {
    id: req.body.id,
    },
    })
    .then((isDeleted) => {
    if (isDeleted) {
    res.status(200).json({
    status: "success",
    message: "Product successfully deleted",
    payload: null,
});
} else {
res.status(500).json({
status: "error",
message:
"Something happened deleting the product. " +
req.body.id +
" See:" +
err.message,
payload: null,
});
}
})
.catch((err) => {
res.status(500).json({
status: "error",
message: "Something happened deleting a product. " + err.message,
payload: null,
});
});
};