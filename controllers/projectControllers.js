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


module.exports = { projects_all, project_get_byID, project_delete, project_create }