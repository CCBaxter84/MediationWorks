"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var mongoose_1 = require("mongoose");
;
var blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});
var Blog = mongoose_1.model('Blog', blogSchema);
exports.default = Blog;
