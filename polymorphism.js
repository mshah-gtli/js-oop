class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
  }  
var b=new B();  
b.display(); 

class C extends A  
  {  
    display()  
    {  
        console.log("C is invoked");  
    }  
  }  

  var c=new C();  
  c.display(); 

  // Same example with propotype based approach.

  console.log('prototype approach');  

function Ap()  
{  
}  
Ap.prototype.display=function()  
{  
  return "Ap is invoked";  
}  
function Bp()  
{  
    
}  
  
Bp.prototype=Object.create(Ap.prototype);  
  
var a=[new Ap(), new Bp()]  
  
a.forEach(function(msg)  
{  
  console.log(msg.display());  
}); 
