                                ####useful commands & infos

                                                    #RUN APP
DEBUG=old_norse_dic:* & npm start
runs with debug to get some useful information about the app

                                                  #RUN APP WITH NODEMON
DEBUG=express-locallibrary-tutorial:* npm run devstart
Devstart starts the app also with nodemon. This should lead to that every change to the code should be automatically detected
so that you don't have to restart the server for every change on the code

                                                #KILL PROCESS ON PORT
lsof -ti:3000 | xargs kill
just in case you can't restart the app because port 3000 is already blocked on your local. This cmd works fine for killing
the process blocking the port.

                                                #where is the db located?
mongodb://localhost:27017/oldnorse

                                                #models
old norse grammar is similiar to other european grammars:
nouns flect for the following:
                St=Stamm (root to which the forms are build)
                NSg=Nominativ Singular
                GSg=Genetiv Singular
                DSg=Dativ Singular
                ASg=Akkusativ Singular
                NPl=Nominativ Plural
                GPl=Genetiv Plural
                DPl=Dativ Plural
                APl=Akkusativ Plural

                1 Object: Noun
                Meaning1
                Meaning2
                Meaning3
                Meaning4
                Meaning5
                Meaning6
                Meaning7
                Meaning8
                Meaning9
                Comment
                Example1
                Example2
                Example3
                Example4
                Example5
                Example6
                Example7
                Gender = m/f/n
                Plural = bool
                Root = a; ja; ia; va; o

                2. Object: Verb
                Meaning1
                Meaning2
                Meaning3
                Meaning4
                Meaning5
                Meaning6
                Meaning7
                Meaning8
                Meaning9
                Comment
                Example1
                Example2
                Example3
                Example4
                Example5
                Example6
                Example7


                3. Object: Adjectiv
                Meaning1
                Meaning2
                Meaning3
                Meaning4
                Meaning5
                Meaning6
                Meaning7
                Meaning8
                Meaning9
                Comment
                Example1
                Example2
                Example3
                Example4
                Example5
                Example6
                Example7
                Type = always adj.

                4. Pronoun
                Meaning1
                Meaning2
                Meaning3
                Meaning4
                Meaning5
                Meaning6
                Meaning7
                Meaning8
                Meaning9
                Comment
                Example1
                Example2
                Example3
                Example4
                Example5
                Example6
                Example7

                                            #TODOS
//TODO think about adding favicon if needed as logo for thumbnail https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
//TODO 1. build in validators for the model
//TODO 2. The app needs routes to put the data in https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
//TODO we need probably async in the app