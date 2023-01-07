// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
 //pending complaints 
 //complaint completion or not 
 //number of closed 
 //number of pending 
 //opnen zeppelin 
contract Platform {

uint public totalCompliants;
uint public complaintId ;
address public owner ;
bool public forWhom ;


 struct Complaint{

 uint complaintId ;
 string nameOfVictim ;
 string country ;
 string district;
 uint pincode;
 uint mobileNumber;
//  enum gender{
//     female,
//     male,
//     transgender,
//  };
 string homeAddress ;
 string emailId ;
 string complaint ;
string[] suspects ; 
// enum domain{
// Domestic Violence ,
// Harasmsent ,
// Abuse ,
// Dowry ,
// Unequal Pay ,
// Discrimination , 
// Theft ,
// Murder ,
// Not Sure Please Help me find out ,  
// }; // AI integration 

 }
 //check it s security
mapping( address => complaintId) public permissionToComplaint ;
mapping(complaintId => Complaint) public IdToComplaint ; 
mapping(address => mapping(complaintId => Complaint)) public addressToMapping ;


//accepting new case
function registerACase(bool _isItForYou) public {
     
forWhom = _isItForYou ;

if(forWhom == true ){ 
    // bool validated =  polygonIdCheck(msg.sender) ;
require( validated , "Your Polygon Id is not Validated") ;

 enterYourComplaint();
 addSuspect();

//ai integration to find out the domain of case

}
else{
        // bool validated =  polygonIdCheck(msg.sender) ; 
    require( validated , "Your Polygon Id is not Validated") ;

// can make a struct 
    function victimsDetails(string memory _name ,  string memory _yourRelation  ) private{
   string name = _name ;
   string yourRelation = _yourRelation ;
    } 
    //registerAComplaint();

}

}
 function enterYourComplaint(
 uint _complaintId ,
 string _nameOfVictim ,
 string _country ,
 string _district,
 uint _pincode,
 uint _mobileNumber,
 string _gender , // check this how to take enum in input 
  string _homeAddress ,
 string _emailId ,
 string _complaint ,
   ) private {
IdToComplaint[complaintId].push(Complaint(
    complaintId = _complaintId ,
  nameOfVictim =_nameOfVictim ,
   country = _country ,
   district = _district,
  pincode = _pincode,
  mobileNumber = _mobileNumber,
 
  homeAddress = _homeAddress ,
emailId = _emailId ,
 complaint = _complaint 

));

 }

//make a struct and push 
function addSuspect(string memory _suspectname , uint _complaintId) public {
IdToComplaint[msg.sender].push( Complaint )


}
//see enum and complete
function addDomain(){

}



//previous case 

function previousCase(uint _compliantId) public {
require(); 
}
function seePreviousData() public {

}
}
//see remaining data and evidneces  
function seePreviousData() public {

}
//how far the authorities have worked on it - hold
//whether the authorities contacted the targetted pepole you mentioned or not 
function howFarHaveAuthoritiesDone(){

}

//add any evidences 
function addEvidences() private{

}


//for authorities to edit 
function forAuthorities( uint _compliantId ) public {
//check polygon Id 
require(validate , "Only Athorities can access this part");
// check for the security 
function addProgress( uint _compliantId );

}

function addProgress(uint _compliant Id ) private {
    //IPFS
}
