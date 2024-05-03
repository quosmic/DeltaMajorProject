const express= require("express");
const router= express.Router({mergeParams: true});
const wrapAsync= require("../utils/wrapAsync.js");
const Review= require("../models/review.js");
const { validateReview, isReviewAuthor, isLoggedReview } = require("../middleware.js");
const reviewController= require("../controllers/reviews.js");


//Reviews Post route
router.post("/", isLoggedReview, validateReview, wrapAsync(reviewController.createReview));
 
//Delete Review Route
router.delete("/:reviewId", isLoggedReview, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports= router;