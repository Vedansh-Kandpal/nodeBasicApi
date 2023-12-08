
const express = require('express');
const tourController = require('./../controllers/tourControllers')
const router = express.Router();


router.param('id', tourController.checkId)



/* GET api calls with parameter id. */
//  if you want to pass a optional params then you need to add h question mark after the key

// GET api calls.            :::::::::::  router.get('/v1/tours', getAllTours);
// ex:'v1/tours/:id/:x/:y?'  :::::::::::  router.get('/v1/tours/:id', getTourById);
// POST api calls.           :::::::::::  router.post('/v1/tours', createTour);
// update tour               :::::::::::  router.patch('/v1/tours/:id', updateTour)
// delete tour               :::::::::::  router.delete('/v1/tours/:id', deleteTour)

// the get api and post api hit the same url and  patch delete and get tour by id also hit the same url
//  so we simplify them and write like


//routes for tour
router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour)

router
    .route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)



module.exports = router;
