const router = require('express').Router();
const userRoutes = require('./userRoute');
const authenticate = require('../middleware/authenticate')
const authRoutes = require('./authRoute')
const skillTypeRoutes = require('./skillTypeRoute')
const skillRoutes = require('./skillRoute')
const experienceRoutes = require('./experienceRoute')
const projectRoutes = require('./projectRoute')
const socialMediaRoutes = require('./socialmediaRoute')
const credentialRoutes = require('./credentialRoute')
const educationRoutes = require('./educationRoute')
const profileRoutes = require('./profileRoute')


router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', authenticate, userRoutes);
router.use('/api/v1/skilltype', skillTypeRoutes)
router.use('/api/v1/skill', skillRoutes)
router.use('/api/v1/experience', authenticate, experienceRoutes)
router.use('/api/v1/project', authenticate, projectRoutes)
router.use('/api/v1/socialmedia', authenticate, socialMediaRoutes)
router.use('/api/v1/credential', authenticate, credentialRoutes)
router.use('/api/v1/education', authenticate, educationRoutes)
router.use('/api/v1/profile', authenticate, profileRoutes)

module.exports = router;

export { };