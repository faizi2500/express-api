const { crmModel } = require('../models/project');

const projects_all = (req, res) => {
  crmModel.find().sort({ createdAt: -1 }).then(result => {
    console.log('all good');
    res.status(200).send(result);
  }).catch(err => {
    res.status(400).send('There is an error loading your data');
  });
};

const project_get_byID = (req, res) => {
  const id = req.params.id;
  crmModel.findById(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const project_create = (req, res) => {
  console.log(req);
  const project = new crmModel(req.body);
  project
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const project_delete = (req, res) => {
  const id = req.params.id;
  crmModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// const project_update = (req, res) => {
//   const updateProfile = crmModel.findByIdAndUpdate(req.body.id, {
//     user_name: req.body.user_name,
//     user_email: req.body.user_email,
//     user_mobile: req.body.user_mobile,
//     user_comment: req.body.user_comment,
//   }, {
//     new: true
//   })
//   if (!updateProfile) res.status(404).send('not updated');
//   res.send(updateProfile);
// }


module.exports = { projects_all, project_get_byID, project_delete, project_create }