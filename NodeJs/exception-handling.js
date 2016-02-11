'use strict';

/**
 * Node.Js has 3 basic ways to pass exception:
 * 1. throw an Error
 * 2. callback pass Error as first argument
 * 3. emit an Error using eventEmitter
 */

/**
 * throw is seldomly used in Node.Js
 * throw delivers an error synchronously
 * that is, in the same context where the function was called. 
 * If the caller (or the caller's caller, ...) used try/catch, 
 * then they can catch the error. 
 * If none of the callers did, the program usually crashes.
 */

function doSomeSynchronousOperation(req,res){
    if(req.body.username === ''){
        throw new Error('user name empty');
    }  
    return true;  
}

app.get('/formValidate',(req,res)=>{    
   try{
    //synchronous code   
    if(doSomeSynchronousOperation(req,res)){
        //do some stuff with validated data
        
    }    
   }catch(e){
     console.log(e.message);  
   }   
    
});

/**
 * callback are mostly used in Node.js
 * callback delivers an event asynchronously.
 * The user passes you a function (the callback), 
 * and you invoke it sometime later when the asynchronous operation completes. 
 * The usual pattern is that the callback is invoked as callback(err, result), 
 * where only one of err and result is non-null, 
 * depending on whether the operation succeeded or failed.
 */


function doSomeAsynchronousOperation(req,res,callback){
    if(req.body.username === ''){
        callback(new Error('user name empty'),false);
    }  
    callback(null,true);    
}


app.get('/formValidate',(req,res)=>{    
   
   
   doSomeAsynchronousOperation(req,res,function(err,result){
       if(err){
           console.log(e.message);
       }
       //do some stuff with valid data
   });    
    
});


/**
 * For more complicated cases, instead of using a callback, 
 * the function itself can return an EventEmitter object, 
 * and the caller would be expected to listen for error events on the emitter. 
 */



