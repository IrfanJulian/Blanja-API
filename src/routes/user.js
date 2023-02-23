const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { protect } = require('../middlewares/auth')
const upload = require('../middlewares/upload')

router.get('/', userController.getData)
router.get('/:id', userController.getProfile)
router.post('/register', userController.insertData)
router.put('/changepassword/:email', userController.changePassword)
router.put('/forgotpassword', userController.forgotPassword)
router.put('/verify/:email', userController.verify)
router.post('/login', userController.login)
router.put('/setaddress/:id', userController.updateAddress)
router.put('/photo/:id', upload.single('photo'), userController.updatePhoto)
router.put('/:id', protect, upload.single('photo'), userController.updateData)
router.delete('/:id', protect, userController.deleteData)

module.exports = router