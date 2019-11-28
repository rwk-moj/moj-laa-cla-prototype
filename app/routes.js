const express = require('express')
const router = express.Router()

// routes for initial check-option screen
router.post('/choose-option-answer', function (req, res) {
  
    let clinicalNegligence = req.session.data['choose-option']
    let communityCare = req.session.data['choose-option']
    let debt = req.session.data['choose-option']

  
    if (clinicalNegligence === 'clinical-negligence' || communityCare === 'community-care') {
      res.redirect('/legal_adviser_help')
    } 
    else if (debt === 'debt') {
        res.redirect('/check_option_debt')
    }
    else {
      res.redirect('/#')
    }
  })

module.exports = router



// routes for debt
router.post('/check-option-debt-answer', function (req, res) {
  
  let homeOwner = req.session.data['check-option-debt']
  let rentedAccommodation = req.session.data['check-option-debt']
  let oweMoney = req.session.data['check-option-debt']


  if (homeOwner === 'home-owner' || rentedAccommodation === 'rented'){
    res.redirect('/legal_aid_availble')
  } 
  else if (oweMoney === 'owe-money') {
    res.redirect('/legal_aid_refer')
}
  else {
    res.redirect('/#')
  }
})

module.exports = router

