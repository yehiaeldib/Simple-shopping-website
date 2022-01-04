var express = require('express');
var path = require('path');
var fs = require('fs');
const e = require('express');
const session = require('express-session');
querystring = require('querystring');
var app = express();


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
app.use(session( 
  {
    secret : 'secret-key',
    resave : false ,
    saveUninitialized : true,
  }));

app.get('/', function (req, res) {
  if (req.session.usernamebig)
  res.render('home')
else
  res.render('login')
});

app.post('/', async function (req, res) {
  

 ll = ['home'] ;
  req.session.usernamebig = req.body.username;
  req.session.passwordbig = req.body.password;
  listbig= ['home']

  var a = { username:  req.session.usernamebig, pass: req.session.passwordbig };
  
             
              
  flag = await main2(a);

  if (flag) {
    res.render('home');
    var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var z = await client.db('project').collection("users").find().toArray();
  
  z.forEach(m=>{
    if(m.username === req.session.usernamebig && m.pass === req.session.passwordbig){ 
     for(i=0;i<m.Array.length;i++){
        ll[i] = m.Array[i]; 
    }
  }    
  });
  for(i=0;i<ll.length;i++){
    listbig[i]=ll[i] 
  }
  }
  else {
    let jj = require('alert'); 
    jj("wrong user name or password");
    res.redirect('/');
    
  }
  
})


app.get('/registration', function (req, res) {
 
 
  res.render('registration');
})
app.post('/register',async  function (req, res) {
  var x = req.body.username;
  var y = req.body.password;
  var listbig =[];

  var a = { username: x, pass: y , Array: listbig };
  flag = await main3(a);

  if (flag) {
    //res.send("This user already registered!");
    //res.jsonp("This user already registered!"); 
    let alert = require('alert'); 
        alert("This user already registered!");
        res.redirect('/');
  }
  else {
    
  req.session.usernamebig=req.body.username;
   req.session.passwordbig=req.body.password;
  main(a).catch(console.error);
      res.redirect('/home');
     
  }
 

});


app.get('/home',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
  res.render('home');

});
app.post('/home',async function (req, res) {
 
  res.render('home');
  });
app.get('/phones',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
   res.render('phones');

});
app.get('/books',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('books');
    
 });
app.get('/sports',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('sports');
    
});


app.get('/search',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('searchresults');
    
});
app.get('/iphone',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('iphone');

    
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
    var a = { usernamebig: req.session.usernamebig, passwordbig: req.session.passwordbig , listbig:listbig  };
   AddToCart (a);  
   res.render('iphone');
  }
 
 
});
app.get('/sun',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('sun');
    
});
app.get('/The',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
  res.render('sun');
  
});
app.post('/the',function(req,res,next){
  listbig.push('The Sun and Her Flowers');
  var a = { usernamebig: req.session.usernamebig, passwordbig: req.session.passwordbig , listbig:listbig  };
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
      var a = { usernamebig: req.session.usernamebig, passwordbig: req.session.passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('sun');
    }
  
  
});
app.get('/leaves',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('leaves');
    
});
app.post('/leaves',function(req,res,next){
  
    if ( listbig.includes('Leaves of Grass'))
    {
    let jj = require('alert'); 
    jj("this item is already added !");
    }
    else
    {
      listbig.push('Leaves of Grass');
      var a = { usernamebig: req.session.usernamebig, passwordbig: req.session.passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('leaves');
    }
  
});
app.get('/tennis',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('tennis');
    
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
    var a = { usernamebig: req.session.usernamebig, passwordbig: req.session.passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('tennis');
  }
 
  
  
});
app.get('/galaxy',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('galaxy');
    
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
    var a = { usernamebig: req.session.usernamebig, passwordbig: req.session.passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('galaxy');
  }
 
  
  
});
app.get('/boxing',async function (req, res) {
  if(!req.session.usernamebig){
   let jj = require('alert'); 
    jj("you should sign in first");
    res.redirect('/');
   }
 
 else
    res.render('boxing');

    
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
    var a = { usernamebig: req.session.usernamebig, passwordbig: req.session.passwordbig , listbig:listbig  };
  AddToCart (a);
  res.render('boxing');
  }
  
  
});


app.get('/cart',async function (req, res) {
  if(!req.session.usernamebig){
    let jj = require('alert'); 
     jj("you should sign in first");
     res.redirect('/');
    }
    else{
  var passedarr=[];
 
  var { MongoClient } = require('mongodb');
  var uri = "mongodb+srv://AAKMY:AAKMY@cluster0.aoqts.mongodb.net/project?retryWrites=true&w=majority"
  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  var z = await client.db('project').collection("users").find().toArray();
  console.log(req.session.usernamebig);
  z.forEach(m=>{
    if(m.username === req.session.usernamebig && m.pass === req.session.passwordbig){ 
     for(i=0;i<m.Array.length;i++){
        passedarr[i]=m.Array[i]; 
    }
  }
});

  
  
console.log(passedarr);
  res.render('cart',{carlist:passedarr});

  client.close();
}
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
  res.render('searchresults');

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
  app.listen(process.env.PORT,function(){console.log('Server started')});
}else{
  app.listen(3000,function(){console.log('Server started on port 3000')});
}




 
   