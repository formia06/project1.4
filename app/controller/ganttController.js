const Task = require('../model/task');

exports.findTaskForGantt = async (req, res, next) => {

  try {
    const tasks = await Task.findAll();
    res.status(200).json({ tasks });


  } catch (error) {

    next(error);
  }
};
