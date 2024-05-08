// models/subscriber.js
"use strict";

/**
 * @TODO:
 * Listing 16.2 + 16.3 (p. 229)
 * 구독자 스키마 정의하고 모델 생성과 익스포트
 */
const mongoouse = require("mongoose"), 
    subscriberSchema = mongoouse.Schema({
        name: String,
        email: String,
        phone: String,
        newsletter: Boolean,
        profileImg: String
    });

module.exports = mongoouse.model("Subscriber" , subscriberSchema);