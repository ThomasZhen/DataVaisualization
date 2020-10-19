// This method rquire or load the express module
// var app = require('express')();

var express = require('express');
var app = express();

// ------ new added -------------
var path = require('path');


app.use(express.static('public'));


// app.get('script.js', function(req, res){
//     res.sendFile(path.join(__dirname + 'script.js'));
// });


app.get('/script/script.js', function(req, res){
  res.sendFile(path.join(__dirname + '/script/script.js'));
});


// ------- new added ---------


// This method creates a server named http
var http = require('http').Server(app);
// This method use the socket.io to create the socket object named io
var io = require('socket.io')(http, {
   // Might not need this part
   pingTimeout: 60000000,
});


/*
Four files:
blocks.json, circle.txt, feat.txt, featnames.txt

*/

var fs = require('fs');

// ----------- Testing code ------------



// var datasetContent = fs.readFileSync('dataset.txt', 'utf8').split('\n');


var blocksPath;
var circlesPath;
var featPath;
var featnamesPath;





// ---------- Testing code ---------------



// This variable store the original complete dataset
var content;
var max = 0;
var totalNodes = 0;


// An array to store all the node id
var nodeID = [];


// fs.readFile(blocksPath, function(err, data) {
// fs.readFile('./dataset 3080/blocks.json', function(err, data) {
fs.readFile("blocks.json", function(err, data) {
    

    if(err) throw err;

    content = JSON.parse(data);

    var nodes = content.nodes;
    // console.log(nodes);
    for(var i = 0; i < nodes.length; i++){
      totalNodes += 1;


      nodeID.push(nodes[i].id);


    }


    // we check the links
    var links = content.links;
    for(var i = 0; i < links.length; i++){
      if(parseInt(links[i].source) > max) max = parseInt(links[i].source);
      if(parseInt(links[i].target) > max) max = parseInt(links[i].target);
    }

    // we also check the nodes as well
    for(var i = 0; i < nodes.length; i++){
      if(parseInt(nodes[i].id) > max) max = parseInt(nodes[i].id);
    }

    console.log("If you can see this number, that means it is working fine");
    console.log("The max is ");
    console.log(max);
 });




// The total number of groups
var circleContent = fs.readFileSync('circles.txt', 'utf8').split('\n');
var circleNumber = circleContent.length;

// The total number of links
var totalLinks = 0;
var greatestLinkNode = 0;
var greatestLinksNum = 0;

// This array stores the links of all nodes
var arrLinks = [];  // This array stores all the unique links
// var arrLinks2 = [];  // This array stores all the links 


var totalNumLinks = []; // This array stores all possible links

// fs.readFile(blocksPath, function(err, data) {
// fs.readFile('./dataset 3080/blocks.json', function(err, data) {
fs.readFile("blocks.json", function(err, data) {

    // console.log("The max value is");
    // console.log(max);

    if(err) throw err;


    for(var i = 0; i <= max; i++){
      arrLinks[i] = 0;
      // arrLinks2[i] = 0;
    }

    // console.log("The entir array is");
    // for(var i = 0; i < arrLinks.length; i++){
    //   console.log(arrLinks[i]);
    // }

    // console.log("The max number is ");
    // console.log(max);

    var tempContent = JSON.parse(data);

    var tempLinks = tempContent.links;


    for(var i = 0; i < tempLinks.length; i++){

      // console.log("The entir array is");
      // for(var i = 0; i < arrLinks.length; i++){
      //   console.log("i is " + i);
      //   console.log(arrLinks[i]);
      // }
      // break;

      // -----------  For the unique links --------------------

      // check if the target position has array or not
      // newly added undefined condition
      if(arrLinks[parseInt(tempLinks[i].target)] == 0 || arrLinks[parseInt(tempLinks[i].target)] === undefined){

        // console.log("You are here");

        if(arrLinks[parseInt(tempLinks[i].target)] === undefined){
          console.log("We have an undefined value");
          console.log("arrLinks[parseInt(tempLinks[i].target)] is " + arrLinks[parseInt(tempLinks[i].target)]);
          console.log("The max value is " + max);
          var txxt = arrLinks[parseInt(tempLinks[i].target)];
          console.log("arrLinks[] is " + arrLinks[txxt]);
        }


        // check if the source position has array or not
        if(arrLinks[parseInt(tempLinks[i].source)] == 0){
          var temp = [];
          temp.push(parseInt(tempLinks[i].target));
          arrLinks[parseInt(tempLinks[i].source)] = temp;
        } else {
          // if the source position has array, we push in the target value
          arrLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
        }
      } else {
        // if the target position has an array
        var temp = arrLinks[parseInt(tempLinks[i].target)];


        /*
        Problem here?
        Cannot read property 'includes' of undefined
        */


        // // console.log(temp);
        // console.log("target is")
        // console.log(tempLinks[i].target);
        // // if the target position doesn't include the source node

        // console.log("The temp is");
        // console.log(temp);


        if(!temp.includes(parseInt(tempLinks[i].source))){
          // if the source postition has an array
          if(arrLinks[parseInt(tempLinks[i].source)] != 0){
            // the source postiion add the target position
            arrLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
          } else {
          // if the source position doesn't have an array
            var tempArr = [];
            tempArr.push(parseInt(tempLinks[i].target));
            // the source postion add a new array that containts the target
            arrLinks[parseInt(tempLinks[i].source)] = tempArr;
          }
        }

        
      }

      // 1 -> 3
      // 1 -> 2
      // 3 -> 1
      // 2 -> 4
      // 2 -> 1
      // 4 -> 2





      // if(arrLinks[parseInt(tempLinks[i].source)] == 0){
      //   // check if the source position has array or not
      //   // if(arrLinks[parseInt(tempLinks[i].source)] == 0){
      //   //   var temp = [];
      //   //   temp.push(parseInt(tempLinks[i].target));
      //   //   arrLinks[parseInt(tempLinks[i].source)] = temp;
      //   // } else {
      //   //   // if the source position has array, we push in the target value
      //   //   arrLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
      //   // }

      //   // if(parseInt(tempLinks[i].target) == 4027){
      //   //   console.log(arrLinks[parseInt(tempLinks[i].target)]);
      //   // }

      //   if(arrLinks[parseInt(tempLinks[i].target)] == 0  || !arrLinks[parseInt(tempLinks[i].target)].includes(tempLinks[i].source)) {
      //     var temp = [];
      //     temp.push(parseInt(tempLinks[i].target));
      //     arrLinks[parseInt(tempLinks[i].source)] = temp;
      //   } // else if(arrLinks[parseInt(tempLinks[i]).target] != 0){
      //   //   console.log(arrLinks[parseInt(tempLinks[i].target)]);
      //   //   console.log(tempLinks[i].target);
      //   //   if(!arrLinks[parseInt(tempLinks[i].target)].includes(tempLinks[i].source)){
      //   //     var temp = [];
      //   //     temp.push(parseInt(tempLinks[i].target));
      //   //     arrLinks[parseInt(tempLinks[i].source)] = temp;
      //   //   }
      //   // }
        


      // } else {
      //   // if the target position has an array
      //   // var temp = arrLinks[parseInt(tempLinks[i].target)];
      //   // /*
      //   // Problem here?
      //   // Cannot read property 'includes' of undefined
      //   // */


      //   // // // console.log(temp);
      //   // // console.log("target is")
      //   // // console.log(tempLinks[i].target);
      //   // // // if the target position doesn't include the source node

      //   // // console.log("The temp is");
      //   // // console.log(temp);

      //   // if(!temp.includes(parseInt(tempLinks[i].source))){
      //   //   // if the source postition has an array
      //   //   if(arrLinks[parseInt(tempLinks[i].source)] != 0){
      //   //     // the source postiion add the target position
      //   //     arrLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
      //   //   } else {
      //   //   // if the source position doesn't have an array
      //   //     var tempArr = [];
      //   //     tempArr.push(parseInt(tempLinks[i].target));
      //   //     // the source postion add a new array that containts the target
      //   //     arrLinks[parseInt(tempLinks[i].source)] = tempArr;
      //   //   }
      //   // }

      //   // Means we can just simply push in to the source location
      //   if(arrLinks[parseInt(tempLinks[i].target)] == 0) {
      //     arrLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
      //   } else {
      //     if(arrLinks[parseInt(tempLinks[i].target)] == "undefined"){
      //       console.log(tempLinks[i].target);
      //       console.log(arrLinks[parseInt(tempLinks[i].target)]);
      //     }
      //     if(!arrLinks[parseInt(tempLinks[i].target)].includes(tempLinks[i].source)){
      //       arrLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
      //     }
      //   }

      // }






      // ------------- End of unique links -------------------


      // -------------- For all links -------------------
      // if(arrLinks2[parseInt(tempLinks[i].source)] == 0){
      //   var temp = [];
      //   temp.push(parseInt(tempLinks[i].target));
      //   arrLinks2[parseInt(tempLinks[i].source)] = temp;
      // } else {
      //   if(!arrLinks2[parseInt(tempLinks[i].source)].includes(parseInt(tempLinks[i].target))){
      //     arrLinks2[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
      //   }
      // }

      // if(arrLinks2[parseInt(tempLinks[i].target)] == 0){
      //   var temp = [];
      //   temp.push(parseInt(tempLinks[i].source));
      //   arrLinks2[parseInt(tempLinks[i].target)] = temp;
      // } else {
      //   if(!arrLinks2[parseInt(tempLinks[i].target)].includes(parseInt(tempLinks[i].source))){
      //      arrLinks2[parseInt(tempLinks[i].target)].push(parseInt(tempLinks[i].source));
      //   }
      // }
      // -------------- End of all links ---------------


    } // end of for loop 


    // for(var i = 0; i < arrLinks.length; i++){
    //   if(arrLinks[i] != 0){
    //     console.log("For link " + i);
    //     console.log(arrLinks[i]);
    //   }
    // }



    // console.log("For link 4038");
    // console.log(arrLinks[4038]);

    // console.log("For link 4014");
    // console.log(arrLinks[4014]);

    // console.log("For link 3899");
    // console.log(arrLinks[3989]);

    // console.log("For link 4023");
    // console.log(arrLinks[4023]);

    // console.log("For links 4020");
    // console.log(arrLinks[4020]);

    // console.log("For Links 4013");
    // console.log(arrLinks[4013]);

    // console.log("For Links 4027");
    // console.log(arrLinks[4027]);

    // console.log("For Links 4004");
    // console.log(arrLinks[4004]);

    // console.log("For Links 4031");
    // console.log(arrLinks[4031]);



    /*
    For link 4038:
    the output is 4014, 3989, 4023, 4020, 4013, 4027, 4004, 4031
    
    In the block file:
    4014, 3989, 4023, 4020, 4013, 4027, 4004, 4031  
    */



    for(var i = 0; i < arrLinks.length; i++){
      if(arrLinks[i] != 0){

        totalLinks += arrLinks[i].length;
        
      }
    }



    for(var i = 0; i <= max; i++){
      totalNumLinks[i] = 0;
    }



    for(var i = 0; i < tempLinks.length; i++){
      if(totalNumLinks[parseInt(tempLinks[i].source)] == 0){
          var temp = [];
          temp.push(parseInt(tempLinks[i].target));
          totalNumLinks[parseInt(tempLinks[i].source)] = temp;
        } else {
          totalNumLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
        }
    }

    for(var i = 0; i < totalNumLinks.length; i++){
      if(totalNumLinks[i] != 0 && totalNumLinks[i].length > greatestLinksNum){
          // This one is not correct, this is just the nuque links
          greatestLinksNum = totalNumLinks[i].length;
          greatestLinkNode = i;
      }
    }


});


// Number of nodes in each group
var circlesContent = fs.readFileSync('circles.txt', 'utf8').split('\n');

var numGroup = [];
for(var i = 0; i < circlesContent.length; i++){
  var sum = 0;
  var temp = circlesContent[i].split(' ');
  for(var j = 1; j < temp.length; j++){
    sum += 1;
  }
  numGroup[i] = sum;
}




// What is the largest group, how many nodes in it?
// What is the smallest group, how many nodes in it?
var largest = Number.MIN_SAFE_INTEGER;
var smallest = Number.MAX_SAFE_INTEGER;
var largestGroup = 0;
var smallestGroup = 0;
for(var i = 0; i < numGroup.length; i++){
  if(numGroup[i] > largest){
    largest = numGroup[i];
    largestGroup = i;
  }
  if(numGroup[i] < smallest){
    smallest = numGroup[i];
    smallestGroup = i;
  }
}

// console.log(smallest);



// How many nodes are there?
// totalNodes


// Which node has the greatest number of links
// greatestLinkNode
// greatestLinksNum


// How many links does a specific node have
// Go down to the socekt code to find the answer





// the key is the node number in the feat.txt file, and the values are the rest
/*
The file content:
4037 0 0 0 0 0 1 1 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
4038 0 1 1 0 0 1 1 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1 0

The map content: 
'4037' => [
    '0', '0', '0', '0', '0', '1', '1',
    '1', '0', '0', '0', '0', '1', '0',
    '0', '0', '0', '0', '0', '0', '1',
    '0', '0', '1', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '0', '0'
  ],
  '4038' => [
    '0', '1', '1', '0', '0', '1', '1',
    '1', '0', '0', '0', '0', '1', '0',
    '0', '0', '0', '0', '0', '0', '1',
    '0', '0', '1', '0', '0', '0', '1',
    '0', '0', '0', '0', '0', '0', '0',
    '0', '0', '0', '0', '0', '1', '0'
  ]
*/

var map1 = new Map();


var dd = fs.readFileSync('feat.txt', 'utf8').split('\n');


  for(var i = 0; i < dd.length; i++){
    // var track = "\n";

    // var keyVal;
    // var tempArr = [];
    // var count;
    // // you added an equal sign here
    // for(var j = 0; j < dd[i].length; j++){
    //   if(track == "\n"){
    //     keyVal = "";
    //     tempArr = [];
    //     count = 0;
    //   }
    //   // We need to loop through each line, which mean, we only stop when we encounter a new line character
    //   if(dd[i][j] != '\n'){

    //     track = dd[i];

    //     // we need to get the key value
    //     if(count == 0){
    //       if(dd[i][j] != ' '){
    //         keyVal += dd[i][j];
    //       } else {
    //         count = 1;
    //       }
    //     }

    //     // we need to initialize the hashmap
    //     if(count == 1){
    //       if(dd[i][j] != ' '){
    //         tempArr.push(dd[i][j]);
    //       }
    //     }
    //   } else {
    //     map1.set(keyVal, tempArr);
    //       track = "\n";
    //   }
    // }
      // Be very careful, add this line only when the input file doesn't end in a new line character. If the input file ends with a newline character, then this line is not needed.
    var temp = dd[i].split(" ");

    var value = [];

    for(var j = 1; j < temp.length; j++){
      value.push(temp[j]);
    }

    map1.set(temp[0], value);
    // console.log(temp);

    // map1.set(keyVal, tempArr);
  }
  


// The outputArr array has all the data from the featname file
var outputArr = fs.readFileSync('featnames.txt', 'utf8').split('\n');
  




// the key is the whole property name, the value is the position in the featname.txt file
/*  
The file content:
  0 birthday;anonymized feature 6, 1/20/2002
  8 education;year;id;anonymized feature 542, 2015
  9 education;year;id;anonymized feature 57, 2014
  10 education;year;id;anonymized feature 253, 2015
  11 education;year;id;anonymized feature 1270, 2012
  12 education;year;id;anonymized feature 1271, 2015
  13 education;year;id;anonymized feature 254, 2010
  14 education;year;id;anonymized feature 62, 2015
  15 education;year;id;anonymized feature 1272, 2008
  16 education;year;id;anonymized feature 1273, 2007
  17 education;year;id;anonymized feature 1274, 2001
  18 education;year;id;anonymized feature 257, 2015
The map content:
  'birthday 1/20/2002' => [ '0' ]
  'education year 2015' => [ '8', '10', '12', '14', '18' ]
*/
var map2 = new Map();



// the key is the first half of the property name, the vlaue is the second half of the property name in the featname.txt file
/*
the file content:
0 birthday;anonymized feature 6, 1/20/2002
8 education;year;id;anonymized feature 542, 2015
9 education;year;id;anonymized feature 57, 2014
10 education;year;id;anonymized feature 253, 2015
11 education;year;id;anonymized feature 1270, 2012
12 education;year;id;anonymized feature 1271, 2015
13 education;year;id;anonymized feature 254, 2010
14 education;year;id;anonymized feature 62, 2015
15 education;year;id;anonymized feature 1272, 2008
16 education;year;id;anonymized feature 1273, 2007
17 education;year;id;anonymized feature 1274, 2001
18 education;year;id;anonymized feature 257, 2015

The map content:
'birthday' => [ '1/20/2002' ],
'education year' => [
    '2015', '2014',
    '2012', '2010',
    '2008', '2007',
    '2001'
  ],
*/
var map3 = new Map();



// the key is the second half of the property name, the vlaue is the position in the featname file
/*
the file content:
0 birthday;anonymized feature 6, 1/20/2002
8 education;year;id;anonymized feature 542, 2015
9 education;year;id;anonymized feature 57, 2014
10 education;year;id;anonymized feature 253, 2015
11 education;year;id;anonymized feature 1270, 2012
12 education;year;id;anonymized feature 1271, 2015
13 education;year;id;anonymized feature 254, 2010
14 education;year;id;anonymized feature 62, 2015
15 education;year;id;anonymized feature 1272, 2008
16 education;year;id;anonymized feature 1273, 2007
17 education;year;id;anonymized feature 1274, 2001
18 education;year;id;anonymized feature 257, 2015

the map content:
'1/20/2002' => [ 0 ],
'2015' => [ 8, 10, 12, 14, 18 ],
*/
// However, map4 has one problem, which is that the key value could be for different property names
/*
37 work;end_date;anonymized feature 157, 1/30/2015
41 work;start_date;anonymized feature 1282, 1/30/2015

Both work start day and work end day has the same value, and they could be used as only one key!
*/
var map4 = new Map();



// the keys are the second half of the property values, and the values are the position 
// of the second half property value in the featname file
var map5 = new Map();



for(var i = 0; i < outputArr.length; i++){
    // Array to hold the position values list
    var tempVal = [];
    // String to hold the key value
    var tempKey = "";
    var tempKey1 = "";
    var tempKey2 = "";
    // String to hold the position value
    var tempPos = "";
    // Variable to hold the 
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var count7 = 0;

    var xxx = "";


    // For map3 values
    var lastText = "";
    var lastValue = "";

    for(var j = 0; j < outputArr[i].length; j++){

      
     
      // First get the possible position values
      if(outputArr[i][j] != ' ' && count1 == 0){
        tempPos += outputArr[i][j];
      } else {
        count1 = 1;
      }


      if(outputArr[i][j] != ";" && outputArr[i][j] != " " && count2 == 0 && count1 == 1){
        tempKey1 += outputArr[i][j];
      } else if(outputArr[i][j] == ";" && count2 != 2){
        count2 = 2;
        tempKey += tempKey1;
      }


      if(count2 == 2 && outputArr[i][j] != ";" && count4 == 0){
        tempKey2 += outputArr[i][j];
      } else if(count2 == 2 && outputArr[i][j] == ";" && tempKey2.length != 0){
        count4 = 1;


        if(tempKey2 != "id" && tempKey2 != "anonymized"){
          tempKey += " ";
          tempKey += tempKey2;
          
          // Put all the property names as keys into the map3
          if(!map3.has(tempKey)){
            lastText = tempKey;
            var temporaryValue = [];
            map3.set(lastText, temporaryValue);
          }

          // Keep this part and use it when you only need the first half of the property name
          // if(!map4.has(tempKey)){
          //   var temporaryValue = [];
          //   map4.set(tempKey, temporaryValue);
          // }


          tempKey2 = "";
        } 

      } // end of if statement


      if(outputArr[i][j] == ",") count3 = 1;
      if(outputArr[i][j] == "\n") break;
      if(outputArr[i][j] != "," && count3 == 1) {

        if(count5 == 0){
          // The xxx variable stores the frist half of the property name
          xxx = tempKey;
          count5 = 1;

          // Add one more empty space before adding the rest of the values
          tempKey += " ";
        }

        if(count6 != 0){

        tempKey += outputArr[i][j];
        lastValue += outputArr[i][j];

        }

        count6++;
      }

        
      } // end of inner for loop statement

   


    var tempArray = tempKey.split(" ");
    // console.log(tempArray);


    var ccc = tempArray[tempArray.length - 1]
    if(map5.has(ccc)){
      var bbb = map5.get(ccc);
      bbb.push(i);
      map5.set(ccc, bbb);
    } else {
      var ddd = [];
      ddd.push(i);
      map5.set(ccc, ddd);
    }




    // If the hashmap already has the key, we add the position value to the 
    // array stored in the map1
    if(map2.has(tempKey)){
      var test = map2.get(tempKey);
      test.push(tempPos);
      map2.set(tempKey, test);
    } else {
      tempVal.push(tempPos);
      map2.set(tempKey, tempVal);
    }


  
   if(!map3.has(xxx)){
        
        lastText = xxx;
        var temporaryValue = [];
        map3.set(xxx, temporaryValue);

   } else {
      var aaa = map3.get(xxx);
      if(!aaa.includes(lastValue)){
        aaa.push(lastValue);
        map3.set(xxx, aaa);
      }
   }



  // if(!map4.has(lastValue)){
  //       var temporaryValue = [];
  //       map4.set(lastValue, temporaryValue);
  //  } else {
  //     var aaa = map4.get(lastValue);
  //     aaa.push(i);
  //     map4.set(xxx, aaa);
  //  }

   // Keep this part and use it when you only need the first half of the property name
   // if(!map4.has(xxx)){
   //      var temporaryValue = [];
   //      map4.set(xxx, temporaryValue);
   // } else {
   //    var aaa = map4.get(xxx);
   //    aaa.push(i);
   //    map4.set(xxx, aaa);
   // }


   // get the value list 
   if(map3.has(lastText)){    
      var ttt = map3.get(lastText);
      if(!ttt.includes(lastValue)){
        ttt.push(lastValue);
        map3.set(lastText, ttt);
      }
    }
  

    // if(map4.has(lastValue)){    
    //   var ttt = map4.get(lastValue);
    //   if(!ttt.includes(i)){
    //     ttt.push(i);
    //     map4.set(lastValue, ttt);
    //   }
    // }

    // Keep this part and use it when you only need the first half of the property name
    // if(map4.has(lastText)){    
    //   var ttt = map4.get(lastText);
    //   if(!ttt.includes(i)){
    //     ttt.push(i);
    //     map4.set(lastText, ttt);
    //   }
    // }

  
  } // end of outter loop statement

// console.log(map5);

// console.log(map1);



map4 = new Map();

for(var i = 0; i < outputArr.length; i++){
  var qqq = outputArr[i].split(", ");

  var newArray = qqq[0].split(";");
  var tempVal1 = "";
  if(!newArray[1].includes("anonymized") && newArray[1] != "id") tempVal1 = newArray[1];
  // console.log(newArray);

  var tempVal2 = newArray[0].split(" ");
  // console.log(tempVal2);

  var tempVal3;

  if(tempVal1 != ""){
    tempVal3 = tempVal2[1] + " " + tempVal1; 
  } else {
    tempVal3 = tempVal2[1];
  }


  // console.log(tempVal3);
  //------------------

  var key = qqq[qqq.length - 1];

  if(map4.has(key)){
    var kkk = map4.get(key);
    for(var j = 0; j < kkk.length; j++){
      if(kkk[j][0] == tempVal3){
        if(!kkk[j].includes(i)) kkk[j].push(i);
        map4.set(key, kkk);
      } else {
        // if(key == "1/30/2015"){
        //   console.log(tempVal3 + " " + i);
        // }
        var ta1 = [];
        ta1.push(tempVal3);
        ta1.push(i);
        // console.log(ta1);
        kkk.push(ta1);
        map4.set(key, kkk);
      }
    }
  } else {
    var ta2 = [];
    var ta3 = [];
    ta3.push(tempVal3);
    ta3.push(i);
    ta2.push(ta3);
    map4.set(key, ta2);
  }

  // for(var j = 0; j < outputArr.length; j++){
  //     var tempArray0 = outputArr[j].split(", ");
  //     var length = tempArray0.length;
      

  //     // You need to get the first half of the property as well
  //     var zzz = tempArray0[0].split(";");
  //     var value1 = "";
  //     if(!zzz[1].includes("anonymized") && zzz[1] != "id") value1 = zzz[1];
  //     // console.log(newArray);

  //     var value2 = zzz[0].split(" ");
  //     // console.log(tempVal2);

  //     var value3;

  //     if(value1 != ""){
  //       value3 = value2[1] + " " + value1; 
  //     } else {
  //       value3 = value2[1];
  //     }




  //     // ----------
  //     // var go = true;
  //     if(tempArray0[length - 1] == key){
  //       if(map4.has(key)){
  //         var kkk = map4.get(key);
  //         for(var i = 0; i < kkk.length; i++){
  //           if(kkk[i][0] == value3){
  //             // if(!map4.get(key).includes(j)){
  //             //   var tempArray1 = map4.get(key);
  //             //   tempArray1.push(j);
  //             //   map4.set(key, tempArray1);
  //             // }
  //             if(!kkk[i].includes(j)){
  //               kkk[i].push(j);
  //               map4.set(key, kkk);
  //             }
  //             //  else {
  //             //   go = false;
  //             // }
  //           }
  //         }

  //         // if(go){
  //           var tempArray4 = [];
  //           tempArray4.push(value3);
  //           tempArray4.push(j);
  //           kkk.push(tempArray4);
  //           map4.set(key, kkk);
  //         // }
  //       } else {
  //         var tempArray2 = [];
  //         var tempArray3 =[];
  //         tempArray3.push(tempVal3);
  //         tempArray3.push(j);
  //         tempArray2.push(tempArray3);
  //         map4.set(key, tempArray2);
  //       }
  //     }
  // }



}

// console.log("Map4 is: ");
// console.log(map4);


// We need a variable to store the filtered data to be return.
var newContent = {};


// This function filter out the data
function findData(data){
  var nodes = [];
  var links = [];

  // Loop through the original data
  var tempNodes = content.nodes;
  for(var i = 0; i < tempNodes.length; i++){
    for(var j = 0; j < data.length; j++){
      if(data[j] == tempNodes[i].id){
        nodes.push(tempNodes[i]);
      }
    }
  }

  newContent.nodes = nodes;

  // Find the nodes
  var tempLinks = content.links;
 

  for(var i = 0; i < tempLinks.length; i++){

    if(data.includes(tempLinks[i].source) && data.includes(tempLinks[i].target)){
      links.push(tempLinks[i]);
    }

  }

  

  newContent.links = links;

}


// tt1 is used to store the nodes
var tt1 = [];
// tt2 is used to store the property values the node has, such as 0 0 1 0 0 1
var tt2 = [];

for(var entry of map1.entries()){
  tt1.push(entry[0]);
  tt2.push(entry[1]);
}


// tt3 is used to store the property names
var tt3 = [];
// tt4 is used to store the position values of the properties in the 
// featnames file, such as 2, 3, 4, it can be a single number or an array of number
var tt4 = [];
for(var entry of map2.entries()){
  tt3.push(entry[0]);
  tt4.push(entry[1]);
}


// tt5 is used to store the 
var tt5 =[];
// tt6 is used to store the 
var tt6 = [];
for(var entry of map3.entries()){
  tt5.push(entry[0]);
  tt6.push(entry[1]);
}




// ------------------ Start of Socket Code ----------------
app.get('/', function(req, res) {
   res.sendfile('index.html');
});
  

app.use('/static', express.static('static'));


io.on('connection', function(socket) {

   console.log('A user connected');

   // Send the original complete data to the frontend


   // send the total number of nodes to the front end
   socket.emit('getTotalNodes', totalNodes);
   // console.log("The total number of node is ");
   // console.log(totalNodes);


  // ------------ Testing Code ------------
  // socket.emit('gettingDataset', datasetContent);



  socket.on('datasetOptions', function(data){
      // change the path to the file
      // console.log(datasetContent);
      // console.log(data);
      blocksPath = "./"+ datasetContent[data] + "/blocks.json";
      console.log(blocksPath);
  });

    // You need to decide which content to send back
   socket.emit('displayOriginalData', content);


  // ------------- End of Testing Code ------------




  socket.emit('displayOriginalData', content);

   socket.emit('gettingKeysMap2', tt3);

   socket.emit('gettingValuesMap2', tt4);

   socket.emit('gettingKeysMap3', tt5);

   socket.emit('gettingValuesMap3', tt6);


   socket.on('selectedOption', function(data){
      // Use the data value I can get the find the position values in the tt4 array
      // Use the data variable to get the value from tt4
      var arr = tt4[data];

      // Loop through the tt2 array and use arr to check if there is any 1s.
      // This pos array is used to stored the index of the nodes, and will be
      // used later to find the nodes
      var pos = [];

      for(var i = 0; i < tt2.length; i++){
        var count = -1;
        for(var j = 0; j < tt2[i].length; j++){
          for(var k = 0; k < arr.length; k++){
            if(j == arr[k]) {
              if(tt2[i][j] == 1 && count == -1) {
                pos.push(i);
                count = 1;
              }
            }
          }
        }
      }

      // This array is used to temporary store the position of the qualified nodes
      var nod = [];

      for(var i = 0; i < pos.length; i++){
        nod.push(tt1[pos[i]]);
      }
         

      // Use the nod array to filter the the content file;
      findData(nod);

      // Testing function
      socket.emit('sendBack', newContent);
   });

   // console.log(numGroup);

   socket.emit('getStatistics', circleNumber, totalLinks, numGroup, largest, largestGroup,
              smallest, smallestGroup, totalNodes, greatestLinkNode, greatestLinksNum);



   socket.on('getNodeLinks', function(data){
      socket.emit('sendNodeLinks', totalNumLinks[parseInt(data)]);
   });



   /*
    map1 stores the node numbers and the property position values 0 0 1 0 1 1 
    map2 stores the property names and their position number 0 1 2 3 4 5 6 7 
    map3 stores the property names and their actual values like graduate year
    and [2010, 2015, 2017, 2019]
    map4 stores the actual property values and all the position values like computer science [1]

    we want to find the number of nodes that match both property names
    - How do I find the nodes that match the two property?
    
    - How do I count the numbers?
   */

   // console.log(map1);


   // Needs to double check this function!!!!
   socket.on('findValuesLineChart', function(option1, option2){
      // The actual property values like computer science
      var temp1 = map3.get(option1); 
      // The actual property values like computer science
      var temp2 = map3.get(option2);

      // All position in the featname file for the actual property values of option1, this can be a 2D array
      var tempArr1 = [];
      // All position in the featname file for the actual property values of option2, this can be a 2D array
      var tempArr2 = [];


      for(var i = 0; i < temp1.length; i++){
          var ttt = map4.get(temp1[i]);
          for(var j = 0; j < ttt.length; j++){
            if(ttt[j][0] == option1) {
              var tempRow = [];
              tempRow.push(temp1[i]);
              // tempArr1.push(tempRow);
              for(var k = 1; k < ttt[j].length; k++){
                tempRow.push(ttt[j][k]);
              }
              tempArr1.push(tempRow);
            }
          }
          // tempArr1.push(map4.get(temp1[i]));
      }


      for(var i = 0; i < temp2.length; i++){
          var ttt = map4.get(temp2[i]);
          for(var j = 0; j < ttt.length; j++){
            if(ttt[j][0] == option2) {
              var tempRow = [];
              tempRow.push(temp2[i]);
              // tempArr2.push(temp2[i]);
              for(var k = 1; k < ttt[j].length; k++){
                tempRow.push(ttt[j][k]);
              }
              tempArr2.push(tempRow);
            }
          }
          // tempArr1.push(map4.get(temp1[i]));
      }

      // for(var i = 0; i < temp2.length; i++){
      //     tempArr2.push(map4.get(temp2[i]));
      // }

      // console.log("option1 is:");
      // console.log(option1);
      // console.log("option2 is:");
      // console.log(option2);
      // console.log("temp1 is:");
      // console.log(temp1);
      // console.log("temp2 is:");
      // console.log(temp2);
      // console.log("tempArr1 is:");
      // console.log(tempArr1);
      // console.log("tempArr2 is:");
      // console.log(tempArr2);

      // for(var entry1 of map1.entries()){
      //   // The propertyVal stores all the property nodes
      //   // var propertyVal1 = entry1[1];
      //   // if(parseInt(propertyVal1[ttt1[j]]) == 1 && parseInt(propertyVal1[ttt2[1]]) == 1) count++;
      //   console.log(entry1);
      // }

      /*
      [
        '4038',
        [
        '0', '1', '1', '0', '0', '1', '1',
        '1', '0', '0', '0', '0', '1', '0',
        '0', '0', '0', '0', '0', '0', '1',
        '0', '0', '1', '0', '0', '0', '1',
        '0', '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '1', '0'
        ]
      ]


      */


      /*
      [
        [ '2015', 8, 10, 12, 14, 18 ],
        [ '2014', 9 ],
        [ '2012', 11 ],
        [ '2010', 13 ],
        [ '2008', 15 ],
        [ '2007', 16 ],
        [ '2001', 17 ]
      ]
      tempArr2 is:
      [
        [ '1/1/2015', 38 ],
        [ '2/1/2016', 39 ],
        [ '3/1/2017', 40 ],
        [ '1/30/2015', 41 ]
      ]


      The reuslt is 
      [
        [ 4, 6, 7, 9 ],
        [ 0, 0, 0, 1 ],
        [ 0, 0, 0, 1 ],
        [ 1, 1, 1, 1 ],
        [ 0, 1, 1, 1 ],
        [ 0, 0, 0, 1 ],
        [ 0, 0, 0, 0 ]
      ]


      */





      var result = [];

      // What do I want to do here?
      /*
      I want to find for each option in tempArr1, what is the number of nodes that
      has a 1 in the feat file for each option in tempArr2;
      */

      for(var i = 0; i < tempArr1.length; i++){
        var ttt1 = tempArr1[i];

        // console.log("Whole ttt1 is")
        // console.log(ttt1);

        var resultRow = [];
        
        for(var k = 0; k < tempArr2.length; k++){
          var count = 0;

          ttt2 = tempArr2[k];

          // console.log("Whole ttt2 is");
          // console.log(ttt2);

          // The case when ttt1 has more than 3 items, but ttt2 only has 2 items
          if(ttt1.length > 2 && ttt2.length <= 2){
            var duplicate = [];

            // console.log("[2015, 8,10,12,14,18]");
            for(var j = 1; j < ttt1.length; j++){

              // console.log("j is");
              // console.log(j);

              for(var entry1 of map1.entries()){
              // The propertyVal stores all the property nodes
                var propertyVal1 = entry1[1];
                if(parseInt(propertyVal1[ttt1[j]]) == 1 && parseInt(propertyVal1[ttt2[1]]) == 1) {

                  if(!duplicate.includes(entry1[0])){
                    // console.log("ttt1[j] is");
                    // console.log(ttt1[j]);
                    // console.log("ttt2[1] is");
                    // console.log(ttt2[1]);

                      if(nodeID.includes(entry1[0])){
                        count++;
                        duplicate.push(entry1[0]);
                      }

                  }
                }
              }
            }

            // console.log("The count for ");
            // console.log("ttt1");
            // console.log(ttt1);
            // console.log("ttt2");
            // console.log(ttt2);
            // console.log("the count is");
            // console.log(count);

            resultRow.push(count);
          } else if(ttt1.length <= 2 && ttt2.length > 2){
            var duplicate = [];

            // console.log("You are never here1");
            // The case when ttt1 has only two items and ttt2 has more than 3 items
            for(var j = 1; j < ttt2.length; j++){
              for(var entry2 of map1.entries()){
              // The propertyVal stores all the property nodes
                var propertyVal2 = entry2[1];
                if(parseInt(propertyVal2[ttt1[1]]) == 1 && parseInt(propertyVal2[ttt2[j]]) == 1) {
                  if(!duplicate.includes(entry2[0])){

                    if(nodeID.includes(entry2[0])){
                      count++;
                      duplicate.push(entry2[0]);
                    }

                  }
                }
              }
            }
            resultRow.push(count);
          } else if(ttt1.length <= 2 && ttt2.length <= 2){
            var duplicate = [];


            // console.log("everything else will be here");
            // The case when both ttt1 and ttt2 only have two items
            for(var entry3 of map1.entries()){
              // The propertyVal stores all the property nodes
              var propertyVal3 = entry3[1];
              if(parseInt(propertyVal3[ttt1[1]]) == 1 && parseInt(propertyVal3[ttt2[1]]) == 1) {
                if(!duplicate.includes(entry3[0])){
                  // console.log("ttt1[1] is");
                  // console.log(ttt1[1]);
                  // console.log("ttt2[1] is");
                  // console.log(ttt2[1]);
                  if(nodeID.includes(entry3[0])){
                    count++;
                    duplicate.push(entry3[0]);
                  }
                }
              }
            }

            // console.log("The count for ");
            // console.log("ttt1");
            // console.log(ttt1);
            // console.log("ttt2");
            // console.log(ttt2);
            // console.log("the count is");
            // console.log(count);


            resultRow.push(count);
          } else if(ttt1.length > 2 && ttt2.length > 2) {
            var duplicate = [];


            // console.log("You are never here2");
            for(var j = 1; j < ttt1.length; j++){
              for(var k = 1; k < ttt2.length; k++){
                for(var entry4 of map1.entries()){
                // The propertyVal stores all the property nodes
                var propertyVal4 = entry4[1];
                if(parseInt(propertyVal4[ttt1[j]]) == 1 && parseInt(propertyVal4[ttt2[k]]) == 1) {
                  if(duplicate.includes(entry4[0])){
                    if(nodeID.includes(entry4[0])){
                      count++;
                      duplicate.push(entry4[0]);
                    }
                  }
                }
              }
              }
            }
            resultRow.push(count);
          }

        }
        result.push(resultRow);
      }

      // console.log("The result array is");
      // console.log(result);


      // for(var i = 0; i < tempArr1.length; i++){
      //     var t1 = tempArr1[i];
      //     var tempRows = [];

      //     // initialize the tempRows
      //     for(var a = 0; a < tempArr2.length; a++){
      //         tempRows[a] = 0;
      //     }


      //     var count = 0;
      //     for(var j = 0; j < t1.length; j++){
      //         var index = 0; 
      //         for(var k = 0; k < tempArr2.length; k++){
      //             var t2 = tempArr2[k];
      //             for(var l = 0; l < t2.length; l++){
      //                 for(var entry of map1.entries()){
      //                     // The propertyVal stores all the property nodes
      //                     var propertyVal = entry[1];
      //                     if(propertyVal[t1[j]] == 1 && propertyVal[t2[l]] == 1) count++;
      //                 }
            
      //             }

      //             tempRows[index] += count;
      //             index++;
      //             count = 0;
      //         }

      //     }


      //     result.push(tempRows);

      // } // end of for loop


      // console.log(result);

      socket.emit('sendBackValuesLineChart', result, temp1, temp2);

   }); // end of findValuesLineChart function




  socket.on('crossLinking', function(option1, option2, property1, property2){
      // change the nodes color to be white?
      // console.log(property1 + " " + map5.get(property1) + " the length is " + map5.get(property1).length);
      // console.log(property2 + " " + map5.get(property2) + " the length is " + map5.get(property2).length);

      // console.log("Option1 is");
      // console.log(option1);
      //  console.log("Option2 is");
      // console.log(option2);


       // console.log("map4 is");
       //  console.log(map4);

      var property1Array = map4.get(property1);
      var property2Array = map4.get(property2);

      // console.log("Property1 is");
      // console.log(property1);
      // console.log("Property2 is");
      // console.log(property2);
      // console.log("propert1array is");
      // console.log(property1Array);
      // console.log("property2array is");
      // console.log(property2Array);

      // var featContent = fs.readFileSync('feat.txt', 'utf8').split('\n');

      // Find all the node number and store them in an array and send 
      // back to the front end 

      var nodeArray = [];

      // the variable dd contains the content of the feat.txt file
      // for(var i = 0; i < dd.length; i++){
        

      // }
        // ppp[0] is the node number
        // console.log(ppp[0]);

        // var signal1 = false;
        // var signal2 = false;

        // console.log(ppp);

        for(var i = 0; i < property1Array.length; i++){
          var tempArr1 = property1Array[i];

          // console.log("tempArr1 is");
          // console.log(tempArr1);
          // console.log("option1 is");
          // console.log(option1);
          // console.log("tempArr1[0] == option1");
          // console.log(tempArr1[0] == option1);

          // Only when the option is correct
          if(tempArr1[0] == option1){
            var signal = true;
            var tempArr2;

            // console.log(tempArr1);
            // console.log(tempArr1[1] === 8);

            for(var j = 1; j < tempArr1.length; j++){
              if(signal){
                for(var k = 0; k < property2Array.length; k++){
                  tempArr2 = property2Array[k];
                  if(tempArr2[0] == option2){
                    signal = false;

                    // console.log(tempArr2);
                    // console.log(tempArr2[1] === 41);
                    // break;
                  }
                }
              }

              // console.log("j is");
              // console.log(j);
              // console.log("tempArr1 is");
              // console.log(tempArr1);
              // console.log("tempArr2 is");
              // console.log(tempArr2);

              // By the time you got here, you have both the tempArr1 correct
              // and tempArr2 correct
              for(var l = 1; l < tempArr2.length; l++){
                for(var m = 0; m < dd.length; m++){
                  var ppp = dd[m].split(" ");

                  if(parseInt(ppp[tempArr1[j] + 1]) == 1 && parseInt(ppp[tempArr2[l] + 1]) == 1){
                    // console.log("tempArr1[j] is");
                    // console.log(tempArr1[j]);
                    // console.log("tempArr2[l] is");
                    // console.log(tempArr2[l]);
                    // console.log("ppp[0] is");
                    // console.log(ppp[0]);
                    if(!nodeArray.includes(ppp[0])){
                      nodeArray.push(ppp[0]);
                    }
                  }

                }
              }
  
            }

            // Might not need this
              // break;


          }
        }

        // console.log("nodearray is");
        // console.log(nodeArray);


        // console.log(dd);
        // for(var m = 0; m < dd.length; m++){
        //   var ppp = dd[m].split(" ");

        //   // if(parseInt(ppp[tempArr1[j] + 1]) == 1 && parseInt(ppp[tempArr2[l] + 1]) == 1){
        //   //   nodeArray.push(ppp[0]);
        //   // }
        //   console.log(ppp);
        // }


        // for(var j = 0; j < property1Array.length; j++){
        //   if(parseInt(ppp[property1Array[j] + 1]) == 1) signal1 = true;
        //   if(signal1) break;
        // }

        // if(signal1){
        //   for(var k = 0; k < property2Array.length; k++){
        //     if(parseInt(ppp[property2Array[k] + 1]) == 1) signal2 = true;
        //     if(signal2) break;
        //   }
        // }

        // if(signal1 && signal2) {
        //   // console.log("I am in here");
        //   nodeArray.push(ppp[0]);
        //   // console.log(nodeArray);
        // }
        // console.log("Wait in here"); 
      

      // console.log("The nodeArray is " + nodeArray);

      
      
      socket.emit('changeNodes', nodeArray);

  });


  // console.log("Map1 is ");
  // console.log(map1);
  // console.log("Map2 is ");
  // console.log(map2);
  // console.log("Map3 is ");
  // console.log(map3);
  // console.log("Map4 is ");
  // console.log(map4);
  // console.log("Map5 is ");
  // console.log(map5);



}); // end of io

// ----------------- End of Socket Code --------------



http.listen(3000, function() {
   console.log('listening on localhost:3000');
});