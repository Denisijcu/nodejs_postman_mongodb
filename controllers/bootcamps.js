const Bootcamp = require('../models/Bootcamp');
// @desc         Get all bootcamps
// @route        Get /api/v1/bootcamps
// @access       Public
exports.getBoocamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({success: false})
  }
 
};

// @desc         Get single bootcamp
// @route        Get /api/v1/bootcamps/:id
// @access       Public
exports.getBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if(!bootcamp){
      return res.status(400).json({success: false}) 
    }
    res.status(200).json({success: true, data: bootcamp});
  } catch (error) {
    res.status(400).json({success: false})
  }
 
};

// @desc         Create new bootcamp
// @route        POST /api/v1/bootcamps
// @access       Private
exports.createBoocamp = async (req, res, next) => {
   try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        success: true,
        data: bootcamp
    });
  // res.status(200).json({ success: true, msg: 'Create new bootcamps' });
     
   } catch (error) {
     res.status(400).json({
       success: false
     });
   }
  
};

// @desc         Update bootcamp
// @route        PUT/api/v1/bootcamps/:id
// @access       Private
exports.updateBoocamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc         delete bootcamp
// @route        DELETE/api/v1/bootcamps/:id
// @access       Private
exports.deleteBoocamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
