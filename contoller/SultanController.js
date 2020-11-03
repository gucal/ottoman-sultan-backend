const Sultan = require('../models/Sultan');

const getAllSultans = (req, res) => {
  Sultan.find({})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.json(err));
};

const getSultanById = (req, res) => {
  const { id } = req.params;
  Sultan.find({ _id: id })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.json(err));
};

const postSultan = (req, res) => {
  new Sultan({
    title: req.body.title,
    firstDate: req.body.firstDate,
    lastDate: req.body.lastDate,
    desc: req.body.desc,
    avatar: req.body.avatar,
    period: req.body.period,
  })
    .save()
    .then(() => {
      res.json('İşlem başarılı');
    })
    .catch('Ekleme başarısız!');
};

exports.getAllSultans = getAllSultans;
exports.getSultanById = getSultanById;
exports.postSultan = postSultan;
