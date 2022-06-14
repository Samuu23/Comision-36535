const express = require('express');
const app=  express();

const mascots=[
  {name:'Sammy', organization:"DigitalOcean", birth_year:2012},
  {name:'Tux', organization:"Linux", birth_year:1996},
  {name:"Moby Dock", organization:"Docker", birth_year:2013}
];

// Configuramos EJS como motor de plantillas
app.set('view engine','ejs');

// Index page
app.get('/',function(req,res){
  let tagline = "No programming concept is complete without a cute animal mascot.";
  res.render('pages/index',{
      tagline:tagline
  });
});
// About page.
app.get('/mascots',function(req,res){
  res.render("pages/mascots", {
    mascots: mascots
  });
});

app.get('/about', (req, res) => {
  res.render("pages/about")
})
app.listen(3000, () => console.log('3000 is the magic port'));
