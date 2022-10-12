module.exports = (req, res, next) => {
  // let { admin } = req 
  req.admin = req.get('admin') 
  console.log(req.get('admin'))
  next()
} 
