const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientControllers');

module.exports = function () {

  // add new patient with post
  router.post('/patients',
    patientController.newClient
  )

  // get all data the patient data base
  router.get('/patients',
    patientController.getPatients
  )

  // get specific patient by ID
  router.get('/patients/:id',
    patientController.getpatientId
  )

  // update register by ID
  router.put('/patients/:id',
    patientController.updatePatient
  )

  // delete patient by ID
  router.delete('/patients/:id',
    patientController.deletePatient
  )
  return router;
}