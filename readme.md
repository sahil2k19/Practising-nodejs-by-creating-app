
# All Steps

#### create folder :- codeal
#### create file : index.js
### Now we initialize our project
    npm init

#### Now we have to make our project scallable( so we create directory )
    ->assets
    ->config
    ->controller
    ->models
    ->routes
    ->views
    ->gitignore
    ->index.js

#
## Starting Express:-
    install Express   :- npm install express
    require in our index.js

    now we import our express in index.js

    we create app.listen in index.js

   
#### WE CAN RUN OUR SERVER USING  
    npx nodemon index.js

#### Instead of above method we can also go in package.json and edit scripts and 
    ->add there "start":
    
    "npx nodemon indexjs"
#
## Git Related

#### now we initialize git -> using git init
    
    some of the git code : git status , git log , git add . , git commit -m "first commit";
#### But now we realize that : folder node_modules is very heavy and this is nothing but all the modules that anyone can download using npm install 
#### So we ignore that using : making file in main_location and file name would be : .gitignore : and inside that we type :node_modules/ : which can ignore the folder 
    now we use : git add . : to add 
    and then : git commit -m "first commit to commit "  
























#
#
## SETUP THE EXPRESS ROUTERS
#### Routes: are the entry points of all the request from the browser 
#### Routes : are the dictionary : like which function , controller and action is being called

#
### Now we create -> routes folder-> inside  index.js
#### in index.js import express again
**remember everytime when we import express it will never create fresh instance**\
**although it just use same instance which created earlier in ./index.js**
#
### Then we do ->
    const router  = express.Router();

### after that we will exports router so that it will available for all
    using module.exports = router;
### now we import routes/index.js using middleware
    using app.use('/', require('./routes'));
#### in routes/index.js all the app.get , app.post and everything will be handled by this module
#### index.js will use routes/index.js
















#
#

## CREATING CONTROLLER 
    group of actions are called controller(or set of actions)
    create file home_controller in controller folder

    we need to exports functions(actions) of controller in routes 

    in routes/index.js we store and use

    so far we have created home controller and we use it in routes
        -> using homeController 


    now we have created users_controllers.js 


    

#
#

## INSTALL EJS AND SETUP VIEW ENGINE
    first of all in terminal we have to write command: npm install ejs

    then after that we have to set ejs in main index:-
        -> app.set ('view engine', 'ejs')
    after that we have to mention the location of all the views(templates) 

    for that earlier we have used :(path.join('/path here'))

    but know we use: app.set('views','./views');#
#

## CREATE A VIEW FOR HOME
    -> inside views folder 

        -> create a file home.ejs (which actually a ejs template -> in form of html which can render javascript logic inside that);

            -> after that we have to setup the controller and render the view and passes the context(like title etc); #
#

## CREATING  PARTIALS
    -> in VIEWS create 2 files name _header.ejs and _footer.ejs 
        -> and write there footer and header code
            -> and use it in all the different views (or u can say include them );

#
#
## CREATING LAYOUTS
    -> download layouts using npm install express-ejs-layouts

    -> in index.js import layouts
        ->layouts always come before router
        ->also using in index.js

    -> creating layout.ejs in views;
        -> there we have to define where to write variable parts
#
#
## SETTING UP STATIC FILES ACCESS
        
    ->we need to mention the location of assets 
        -> in index.js 
            -> using app.use(express.static('./assets'));
        

    ->create asssets folder in main directory
        ->create css folder
            -> create layout.css inside that
            ->create images and Js also

    ->now we need to link the css with views(layout.ejs);
        -> in layout.ejs link css
            -> under href(tag) put FORWARD-SLASH(/)-> which indicates the root dir;
                -> /css/layout.css
                    -> here forward slash is root dir for assets 

    -> we cannot add addittion styles and scripts in particular views 
        -> like in user_profile.ejs if we write our css and js inside that, it will shows in body tag of layout.ejs when we inspect element at local-host ;
            -> to counter this problem we used to extract the css and js file from user_profile.ejs 
                ->to do so we put following code in index.js
                -> we can use app.use('layout extractStyles', true);
                -> also for js app.use('layout extractScripts', true);
            -> after doing above we should now mention where to extract this css and js
                -> to do so we mention <%-style%> and <%-script%> in layout.ejs
        
    __________________________________________________________________________

#
#
## CONNECTING DATA-BASE (MongoDB)

    -> Inside our Config folder we create new file name(mongoose.js)
    ->Assuming we have install mongoDb 
    ->Now we have to install mongoose 
        -> npm install mongoose 

    ->now we import mongoose in mongoose.js
        -> const mongoose = require('mongoose');

    -> now providing connection to database 
        -> using mongoose.connect('mongodb://localhost/codeial_development');
        -> creating variable to use db (const db  = mongoose.connection);

    -> if there is an error 
        -> db.on('error', console.error.bind(console, "error connecting to db"))   { here console.error display console.log as error to console }

    -> if there is no error means DB work fine then
        -> db.once('open', function(){
            console.log('connected to database::'MongoDB');
        })

    -> to make this file usable (to use by other we export this file)
        -> module.exports = db;

    -> NOW EVERYTHING IS SETUP BUT WE NEED TO PLACE THIS IN OUR INDEX.JS FILE (means import);

    ->in index.js
        -> const db = require('./config/mongoose');
























#
#
## MANUAL AUTHENTICATION

    ->inside models create users
        ->users.js
        ->now we need to create a schema (for that we need mongoose)

            -> const mongoose = require('mongoose');

            -> making variable to access the schema 
                -> const userSchema = new mongoose.Schema({
                    email:{

                    },
                    password:{

                    },
                    name:{

                    },
                })  
                -> we will not stop here we add a timestamp of user(created in database);
                -> so we add timestamps after all the fields
                -> {
                    timestamps:true
                });

            -> creating variable to use collection(model) and exportss
            -> const User = mongoose.model('User', userSchema);
            
            ->module.exports = User; #
#

## RENDERRING PAGES FOR SINGN UP AND SINGN IN




















