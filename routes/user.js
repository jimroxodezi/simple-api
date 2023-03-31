const router = require('express').Router();

router.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});
  
router.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
});
  
router.put('/users', (req, res) => {
    return res.send('PUT HTTP method on user resource');
});
  
router.delete('/users', (req, res) => {
    return res.send('DELETE HTTP method on user resource');
});

module.exports = router;