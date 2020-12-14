const Patient = require('../models/Patient');

// when is create a new Client
exports.newClient = async (req, res, next) => {
  // insert in data base

  // create obj data models:
  const patient = new Patient(req.body);

  try {
    await patient.save();
    res.json({message: 'the Client is add success'})
  } catch (error) {
    console.log('error');
    next();
  }
}

// get all patients
exports.getPatients = async (req, res, next) => {
  try {
    const allPatients = await Patient.find({});
    res.json(allPatients);
  } catch (error) {
    console.log(error);
    next();
  }
// get patient by ID
}
exports.getpatientId =  async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
}

// update patient by ID
exports.updatePatient = async(req, res, next) => {
  try {
    const patient = await Patient.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true
    });
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
}

// delete patient by ID
exports.deletePatient = async(req, res, next) => {
  try {
    await Patient.findOneAndDelete({_id: req.params.id})
    res.json({message: 'the patient was delete \n'})
  } catch (error) {
    console.log(error);
    next();
  }
}