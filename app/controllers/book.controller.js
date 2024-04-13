const BookService = require("../services/book.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
    if (!req.body?.maSach) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    
    try {
        const bookService = new BookService(MongoDB.client);
        const document = await bookService.create(req.body);
        return res.send(document);
    } catch (error) {
        console.log(error)
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};
exports.findAll = (req, res) => {
    res.send({ message : "create handler"});
    
};

exports.findOne = (req, res) => {
    res.send({ message : "create handler"});
    
};

exports.update = (req, res) => {
    res.send({ message : "create handler"});
    
}

exports.delete = (req, res) => {
    res.send({ message : "create handler"});
    
}

exports.deleteAll = (req, res) => {
    res.send({ message : "create handler"});
    
}

exports.findAllFavorite = (req, res) => {
    res.send({ message : "create handler"});
    
}