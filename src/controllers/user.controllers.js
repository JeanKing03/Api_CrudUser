const catchError = require("../utils/catchError");
const user = require("../models/user");

const create = catchError(async (req, res) => {
  const result = await user.create(req.body);
  return res.status(201).json(result);
});

const getAll = catchError(async (req, res) => {
  const result = await user.findAll();
  return res.status(200).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await user.findByPk(id);
  if (!result) return res.status(404).json({ message: "User Not Found!" });
  return res.status(200).json(result);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await user.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0)
    return res.status(404).json({ message: "User Not Found!" });
  return res.status(200).json(result);
});

const destroy = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await user.destroy({ where: { id } });
  if (!result) return res.status(404).json({ message: "User Not Found!" });
  return res.status(200).json({ message: "Deleted User!" });
});

module.exports = {
  create,
  getOne,
  getAll,
  update,
  destroy,
};
