const Car = require("../models/car");

module.exports = {
  index,
  new: newCar,
  create,
  delete: deleteCar,
  edit,
  update
};

async function index(req, res) {
  const cars = await Car.find({});
  res.render("cars/index", { cars, title: "All Cars" });
}

function newCar(req, res) {
  res.render("cars/new", { errorMsg: "", title: "New Car" });
}

async function create(req, res) {
  try {
    await Car.create(req.body);
    res.redirect("/cars");
  } catch (err) {
    console.log(err);
    res.render("cars/new", { errorMsg: err.message });
  }
  console.log(await Car.find({}));
}

async function deleteCar(req, res) {
  try {
    await Car.findByIdAndRemove(req.params.id);
    res.redirect("/cars");
  } catch (err) {
    res.render("/cars", { errorMsg: err.message });
  }
}

async function edit(req, res) {
  const car = await Car.findById(req.params.id);
  res.render("cars/edit", { car, errorMsg: "", title: "New Car" });
}

async function update(req, res) {
    try {
      await Car.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.redirect(`/cars`);
    }  catch (err) {
      res.render(`/cars/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }
  