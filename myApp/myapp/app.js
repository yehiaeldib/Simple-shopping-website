var express = require('express');
var path = require('path');
var fs = require('fs');
const e = require('express');
var authenticated = false;
var app = express();
var session = require('express-session')
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));



//var usernamebig;
//var passwordbig;



/*var andrew = {username: "andrew" , pass: "1234" , cartList: ["iphone", "leaves"]};
var ands = JSON.stringify(andrew);
fs.writeFileSync('buy.JSON',ands);*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.render('login')
});



app.post('/', async function (req, res) {
 var listbig = [] ;

  var a = { username: req.body.username, pass: req.body.password , listbig:listbig };
 
 
              
              //passwordbig=req.body.password;
              
  flag = await main2(a);

  if (flag) {
    res.render('home');
    var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var z = await client.db('project').collection("users").find().toArray();
  
  req.session.user=a.username
  
  z.forEach(m=>{
    if(m.username === req.session.user ){ 
     for(i=0;i<m.Array.length;i++){
        listbig[i]=m.Array[i]; 
    }
  }    
  });
  req.session.array= listbig;
  console.log(req.session.array);
  }
  else {
    let jj = require('alert'); 
    jj("Wrong username or password!");
    res.redirect('/');
    
  }
  
})


app.get('/registration', function (req, res) {

  res.render('registration');
})
app.get('/login', function (req, res) {
  res.render('login')
});
app.post('/register',async  function (req, res) {
  var x = req.body.username;
  var y = req.body.password;
  var list=[]

  var a = { username: x, pass: y , Array: list };
  flag = await main3(a);
  if((x.trim().length==0)|| (y.length==0) )
  {
    let alert = require('alert'); 
    //<span onclick="alert('ITEM ADDED TO WATCHLIST')">Add to your watchlist</span>    
    alert("these fields can't be empty , please enter your info"); 
    ///</span> onclick="alert('these fields can't be empty , please enter your info')">Add to your watchlist</span>
  }
  else{
  if (flag) {
    //res.send("This user already registered!");
    //res.jsonp("This user already registered!"); 
    let alert = require('alert'); 
        alert("This user already registered!");
        res.redirect('/');
  }
  else {
    
    // usernamebig=req.body.username;
    // passwordbig=req.body.password;
    req.session.array=[];
    console.log(req.session.array);
  main(a).catch(console.error);
      res.redirect('/home');
     
  }}
 

});


app.get('/home',async function (req, res) {
  if(authenticated === true){
  
    res.redirect('/home');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
});



app.post('/home',async function (req, res) {
 
  res.render('home');
  });
app.get('/phones',async function (req, res) {

if(authenticated === true){
  
  res.render('phones');
}
else{
let auth = require('alert'); 
auth("You are not authorized to go to this page!");
res.redirect('/');
  
}

});
app.get('/books',async function (req, res) {
  if(authenticated === true){
  
    res.render('books');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
    
 });
app.get('/sports',async function (req, res) {
  if(authenticated === true){
  
    res.render('sports');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
    
});


app.get('/search',async function (req, res) {
  if(authenticated === true){
  
    res.render('search');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
    
});
app.get('/iphone',async function (req, res) {
  if(authenticated === true){
  
    res.render('iphone');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}

    
});
app.post('/iphone',function(req,res){
  if (listbig.includes('iPhone 13 Pro'))
  {
  let jj = require('alert'); 
  jj("this item is already added !");
  }
  else
  {
    listbig.push('iPhone 13 Pro');
  }
 
 var a = { usernamebig: usernamebig, passwordbig: passwordbig , listbig:listbig  };
   AddToCart (a);  
   res.render('iphone');
});
app.get('/sun',async function (req, res) {
  if(authenticated === true){
  
    res.render('sun');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
    
});
app.get('/The',async function (req, res) {
  if(authenticated === true){
  
    res.render('sun');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
  
});
app.post('/the',function(req,res,next){
  listbig.push('The Sun and Her Flowers');
  var a = { usernamebig: usernamebig, passwordbig: passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('sun');
});
app.post('/sun',function(req,res,next){
  if (listbig.includes('The Sun and Her Flowers'))
    {
    let jj = require('alert'); 
    jj("this item is already added !");
    }
    else
    {
      listbig.push('The Sun and Her Flowers');
    }
  
  var a = { usernamebig: usernamebig, passwordbig: passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('sun');
});
app.get('/leaves',async function (req, res) {
  if(authenticated === true){
  
    res.render('leaves');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
    
});
app.post('/leaves',function(req,res,next){
  
    if (listbig.includes('Leaves of Grass'))
    {
    let jj = require('alert'); 
    jj("this item is already added !");
    }
    else
    {
      listbig.push('Leaves of Grass');
    }
  var a = { usernamebig: usernamebig, passwordbig: passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('leaves');
});
app.get('/tennis',async function (req, res) {
  if(authenticated === true){
  
    res.render('tennis');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
    
});
app.post('/tennis',function(req,res,next){
  if (listbig.includes('Tennis Racket'))
  {
  let jj = require('alert'); 
  jj("this item is already added !");
  }
  else
  {
    listbig.push('Tennis Racket');
  }
 
  
  var a = { usernamebig: usernamebig, passwordbig: passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('tennis');
});
app.get('/galaxy',async function (req, res) {
  if(authenticated === true){
  
    res.render('galaxy');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
    
});
app.post('/galaxy',function(req,res,next){
  if (listbig.includes('Galaxy S21 Ultra'))
  {
  let jj = require('alert'); 
  jj("this item is already added !");
  }
  else
  {
    listbig.push('Galaxy S21 Ultra');
  }
 
  
  var a = { usernamebig: usernamebig, passwordbig: passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('galaxy');
});
app.get('/boxing',async function (req, res) {
  if(authenticated === true){
  
    res.render('boxing');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}

    
});
app.post('/boxing',function(req,res,next){
  if (listbig.includes('Boxing Bag'))
  {
  let jj = require('alert'); 
  jj("this item is already added !");
  }
  else
  {
    listbig.push('Boxing Bag');
  }
  
  var a = { usernamebig: usernamebig, passwordbig: passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('boxing');
});


app.get('/cart',async function (req, res) {
  var passedarr=[];
 
  var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var z = await client.db('project').collection("users").find().toArray();
  
  z.forEach(m=>{
    if(m.username === usernamebig && m.pass === passwordbig){ 
     for(i=0;i<m.Array.length;i++){
        passedarr[i]=m.Array[i]; 
    }
  }    
  });
  
  
  console.log(passedarr);
  
  res.render('cart',{carlist:passedarr});

  client.close();
});
app.post('/searchresults',async function (req, res) {
 var x = req.body.Search;
 y = await search(x) ;
 if (y.length>0)
 res.render('searchresults',{SList:y});
 else
 res.render('searchresults',{SList:["home back , item not found :( "]});

});


app.get('/searchresults',async function (req, res) {
  if(authenticated === true){
  
    res.render('searchresults');
}
else{
  let auth = require('alert'); 
  auth("You are not authorized to go to this page!");
  res.redirect('/');
    
}
});

async function search (vars)
{
  var passedarr=[];
  var searchArray = ['Galaxy S21 Ultra','iPhone 13 Pro', 'Leaves of Grass','The Sun and Her Flowers','Boxing Bag','Tennis Racket'];
  for (i=0 ; i<searchArray.length;i++)
  {
  
  if ((searchArray[i].toLowerCase()).includes(vars.toLowerCase()))
  {
    passedarr.push(searchArray[i]); 
  }
}
return passedarr ;
  


}

async function AddToCart (input){
  //list.push('iphone');
  console.log(input)
  var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var z = await client.db('project').collection("users");
  
   await z.findOneAndUpdate(
    {
      username : input.usernamebig ,
      pass : input.passwordbig, 
    },
       
      {$set:{Array : input.listbig}}, 
  );
  
  client.close();
}


async function main(a) {
  var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  // var a={username:"cs" ,pass:"df"};
  await client.db('project').collection("users").insertOne(a);
  client.close();
}
async function main2(input) {
  var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  // var a={username:"cs" ,pass:"df"};
  var z = await client.db('project').collection("users").find().toArray();
  client.close();

  if (z.some(e => (e.username === input.username && e.pass === input.pass))) {
     authenticated = true;
    /*fs.writeFileSync('current.json',JSON.stringify({z,fav}));
              req.session.user=element.x;
              req.session.save();*/
              
              
    return true;
  }
  else {
    return false;
  }
  // return z;
}
async function main3(input) {
  var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  // var a={username:"cs" ,pass:"df"};
  
  var z = await client.db('project').collection("users").find().toArray();
  client.close();

  if (z.some(e => (e.username === input.username ))) {
    return true;
  }
  else {
    return false;
  }
  // return z;
}
async () => {
  var a = await (main2().catch(console.error));
  console.log(a);
}



if(process.env.PORT){
  app.listen(process.env.PORT, function(){console.log('server started')});
}else{
  app.listen(3000,function(){console.log('server started on port 3000')});
}