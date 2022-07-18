import Datahandler from "../testData/Datahandler.js"

let moduletype="LoginPage";
class loginpagetest{
    
    
 printfunction(){
    let datahandler=new Datahandler(moduletype);    
    console.log(datahandler.getdata().Title);
    console.log(datahandler.getdata().Username);
    console.log(datahandler.getdata().Devfield);
    console.log(datahandler.getdata().Error);
    // console.log(datahandler.logindata.Username);
}
}

let objecttest=new loginpagetest()
objecttest.printfunction();


