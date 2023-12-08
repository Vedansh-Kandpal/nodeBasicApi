
const Tour = require('./../models/tourModel')
const APIFeatures = require('./../utils/apiFeatures')


//creating our own middleware function for the route which have id
exports.checkId = (req, res, next, val) => {
    console.log(`tour id is :${val}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: "Invalid id"
        })
    }
    next();
}

// the full and clear code is on page class.txt



// get all tours
exports.getAllTours = async (req, res) => {

    try {
        // creating a obj of APIFeatures
        const features = new APIFeatures(Tour.find(), req.query).filter().sort().limitFields().pagination();

        const tours = await features.query;

        res.status(200).json({
            status: 'success',
            result: tours.length,
            data: {
                tours,
            },
        });

    }

    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

}

//get only one tour
exports.getTourById = async (req, res) => {

    try {
        const tour = await Tour.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                tour,
            },
        });
    }

    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

}


//create tour
exports.createTour = async (req, res) => {

    try {
        const newTour = await Tour.create(
            req.body
        )

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

}


//update a tour
exports.updateTour = async (req, res) => {

    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            data: {
                tour,
            },
        });
    }
    catch (err) {
        res.status(200).json({
            status: 'tour updated',
        });
    }

}

//delete a tour
exports.deleteTour = async (req, res) => {

    try {
        const tours = await Tour.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data: null,
        });
    }
    catch (err) {
        res.status(200).json({
            status: 'tour deleted',
        });
    }

}
