#Пому не работает декаратор?  
Версия Nodejs 9.3.0  
Делаю по инструкциям:  
* [хабр1](https://habrahabr.ru/post/277021/)  
* [хабр2](https://habrahabr.ru/company/ruvds/blog/330812/)  
  
##Получаю ошибку:
`/var/www/decorator/cat.js:11`  
     `@log`  
     `^`  
 
 `SyntaxError: Invalid or unexpected token`  
     `at createScript (vm.js:80:10)`  
     `at Object.runInThisContext (vm.js:152:10)`  
     `at Module._compile (module.js:624:28)`  
     `at Object.Module._extensions..js (module.js:671:10)`  
     `at Module.load (module.js:573:32)`  
     `at tryModuleLoad (module.js:513:12)`  
     `at Function.Module._load (module.js:505:3)`  
     `at Module.require (module.js:604:17)`  
     `at require (internal/module.js:11:18)`  
     `at Object.<anonymous> (/var/www/decorator/routes/index.js:3:11)`  
 `Waiting for the debugger to disconnect...`  
   
 `Process finished with exit code 1`