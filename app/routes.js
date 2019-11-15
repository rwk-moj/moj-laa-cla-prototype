const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/choose-option-answer', function (req, res) {
  
    let clinicalNegligence = req.session.data['choose-option']
    let communityCare = req.session.data['choose-option']
    let debt = req.session.data['choose-option']

  
    if (clinicalNegligence === 'clinical-negligence' || communityCare === 'community-care') {
      res.redirect('/legal_adviser_help')
    } 
    else if (debt === 'debt') {
        res.redirect('/check_option')
    }
    else {
      res.redirect('/#')
    }
  })

module.exports = router
