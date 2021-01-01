"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var mongoose_1 = require("mongoose");
;
var leadSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    need: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
});
var Lead = mongoose_1.model('Lead', leadSchema);
exports.default = Lead;
