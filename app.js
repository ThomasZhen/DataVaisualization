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




// var address = "./test/test.txt"

// fs.readFile(address, function(err, data){
//   if(err) throw err;

//   console.log(JSON.parse(data));

// });


// ---------- Testing code ---------------





// This variable store the original complete dataset
var content;
var max = 0;
var totalNodes = 0;


// An array to store all the node id
var nodeID = [];




/*
Let map5 store all the nodes and their linked nodes in an array:
For example:
node 100: [1,2,3,4,5]
node 200: [6,7,8,9,10]
*/

var map5 = new Map();






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


       // -----------  Testing Code -----------
      var tempSource = parseInt(links[i].source);
      if(map5.has(tempSource)) {
        var tempArr = map5.get(tempSource);
        if(!tempArr.includes(parseInt(links[i].target))){
          tempArr.push(parseInt(links[i].target));
          map5.set(tempSource, tempArr);
        }
      } else {
        var tempArr = [];
        tempArr.push(parseInt(links[i].target));
        map5.set(tempSource, tempArr);
      }

      var tempTarget = parseInt(links[i].target);
      if(map5.has(tempTarget)) {
        var tempArr = map5.get(tempTarget);
        if(!tempArr.includes(parseInt(links[i].source))){
          tempArr.push(parseInt(links[i].source));
          map5.set(tempTarget, tempArr);
        }
      } else {
        var tempArr = [];
        tempArr.push(parseInt(links[i].source));
        map5.set(tempTarget, tempArr);
      }
      // -----------  Testing Code -----------


    }

    // we also check the nodes as well
    for(var i = 0; i < nodes.length; i++){
      if(parseInt(nodes[i].id) > max) max = parseInt(nodes[i].id);
    }


    // console.log("You should see this line first");
    // console.log("The max is");
    // console.log(max);



 });




// The total number of groups
var circleContent = fs.readFileSync('circles.txt', 'utf8').split('\n');
var circleNumber = circleContent.length;
var groupArray = [];


for(var i = 0; i < circleContent.length; i++){
  var temp = [];
  var tempArray = circleContent[i].split(" ");
  for(var j = 1; j < tempArray.length; j++){
    temp.push(tempArray[j]);
  }
   groupArray.push(temp);
}




// The total number of links
// var totalLinks = 0;
// var greatestLinkNode = 0;
// var greatestLinksNum = 0;

// This array stores the links of all nodes
var arrLinks = [];  // This array stores all the unique links
// var arrLinks2 = [];  // This array stores all the links 


var totalNumLinks = []; // This array stores all possible links

// fs.readFile(blocksPath, function(err, data) {
// fs.readFile('./dataset 3080/blocks.json', function(err, data) {
setTimeout(myFunc, 4000, 'funky');


function myFunc(arg){

fs.readFile("blocks.json", function(err, data) {


    if(err) throw err;


    for(var i = 0; i <= max; i++){
      arrLinks[i] = 0;
      // arrLinks2[i] = 0;
    }


    var tempContent = JSON.parse(data);

    var tempLinks = tempContent.links;



    for(var i = 0; i < tempLinks.length; i++){


      // -----------  For the unique links --------------------

      // check if the target position has array or not
      // newly added undefined condition
      if(arrLinks[parseInt(tempLinks[i].target)] == 0 || arrLinks[parseInt(tempLinks[i].target)] === undefined){


        if(arrLinks[parseInt(tempLinks[i].target)] === undefined){
      
          var txxt = arrLinks[parseInt(tempLinks[i].target)];
          
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

    } // end of for loop 




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

    });


} // end of myFunc


// if(signal3){

// // ------------- Testing code -------------
// fs.readFile("blocks.json", function(err, data) {

//     // console.log("The max value is");
//     // console.log(max);

//     if(err) throw err;


//     for(var i = 0; i <= max; i++){
//       arrLinks[i] = 0;
//       // arrLinks2[i] = 0;
//     }


//     // console.log("You should see this line second");
//     // console.log("The max is");
//     // console.log(max);


//     var tempContent = JSON.parse(data);

//     var tempLinks = tempContent.links;

   

//     for(var i = 0; i < arrLinks.length; i++){
//       if(arrLinks[i] != 0){

//         totalLinks += arrLinks[i].length;
        
//       }
//     }


//     // signal2 = true;


//     for(var i = 0; i <= max; i++){
//       totalNumLinks[i] = 0;
//     }



//     for(var i = 0; i < tempLinks.length; i++){
//       if(totalNumLinks[parseInt(tempLinks[i].source)] == 0){
//           var temp = [];
//           temp.push(parseInt(tempLinks[i].target));
//           totalNumLinks[parseInt(tempLinks[i].source)] = temp;
//         } else {
//           totalNumLinks[parseInt(tempLinks[i].source)].push(parseInt(tempLinks[i].target));
//         }
//     }

//     for(var i = 0; i < totalNumLinks.length; i++){
//       if(totalNumLinks[i] != 0 && totalNumLinks[i].length > greatestLinksNum){
//           // This one is not correct, this is just the nuque links
//           greatestLinksNum = totalNumLinks[i].length;
//           greatestLinkNode = i;
//       }
//     }


//     console.log("The totalLinks is");
//     console.log(totalLinks);
//     console.log("The greatesLinksNum is");
//     console.log(greatestLinksNum);
//     console.log("The greatesLinkNode");
//     console.log(greatestLinkNode);

// });

// }

// ------------- Testing code --------------



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



var map1 = new Map();


var dd = fs.readFileSync('feat.txt', 'utf8').split('\n');


  for(var i = 0; i < dd.length; i++){
   
      // Be very careful, add this line only when the input file doesn't end in a new line character. If the input file ends with a newline character, then this line is not needed.
    var temp = dd[i].split(" ");

    var value = [];

    for(var j = 1; j < temp.length; j++){
      value.push(temp[j]);
    }

    map1.set(temp[0], value);

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



    var ccc = tempArray[tempArray.length - 1]
    // if(map5.has(ccc)){
    //   var bbb = map5.get(ccc);
    //   bbb.push(i);
    //   map5.set(ccc, bbb);
    // } else {
    //   var ddd = [];
    //   ddd.push(i);
    //   map5.set(ccc, ddd);
    // }




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



map4 = new Map();

for(var i = 0; i < outputArr.length; i++){
  var qqq = outputArr[i].split(", ");

  var newArray = qqq[0].split(";");
  var tempVal1 = "";
  if(!newArray[1].includes("anonymized") && newArray[1] != "id") tempVal1 = newArray[1];


  var tempVal2 = newArray[0].split(" ");


  var tempVal3;

  if(tempVal1 != ""){
    tempVal3 = tempVal2[1] + " " + tempVal1; 
  } else {
    tempVal3 = tempVal2[1];
  }



  var key = qqq[qqq.length - 1];

  if(map4.has(key)){
    var kkk = map4.get(key);
    for(var j = 0; j < kkk.length; j++){
      if(kkk[j][0] == tempVal3){
        if(!kkk[j].includes(i)) kkk[j].push(i);
        map4.set(key, kkk);
      } else {
        var ta1 = [];
        ta1.push(tempVal3);
        ta1.push(i);
       
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

  
}


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


   socket.emit("getGroupArray", groupArray);

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


      socket.on('getGraphDatafact', function(){
        

        var totalLinks = 0;


        fs.readFile("blocks.json", function(err, data) {

            if(err) throw err;


            var tempContent = JSON.parse(data);

            var tempLinks = tempContent.links;


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


            socket.emit('getStatistics', circleNumber, totalLinks, numGroup, largest, largestGroup,
              smallest, smallestGroup);
        });

      });


       socket.on('getNodeDatafact', function(){
        

        var greatestLinkNode = 0;
        var greatestLinksNum = 0;


        // ------------- Testing code -------------
        fs.readFile("blocks.json", function(err, data) {


            if(err) throw err;


            var tempContent = JSON.parse(data);

            var tempLinks = tempContent.links;

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


            socket.emit('getNodeDatafactStatistics', totalNodes, greatestLinkNode, greatestLinksNum);
        });

      });



   socket.on('getNodeLinks', function(data){
      socket.emit('sendNodeLinks', totalNumLinks[parseInt(data)], map5.get(parseInt(data)));
   });



   /*
    map1 stores the node numbers and the property position values 0 0 1 0 1 1 
    map2 stores the property names and their position number 0 1 2 3 4 5 6 7 
    map3 stores the property names and their actual values like graduate year
    and [2010, 2015, 2017, 2019]
    map4 stores the actual property values and all the position values like computer science [1]
   */



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



      var result = [];


      for(var i = 0; i < tempArr1.length; i++){
        var ttt1 = tempArr1[i];


        var resultRow = [];
        
        for(var k = 0; k < tempArr2.length; k++){
          var count = 0;

          ttt2 = tempArr2[k];


          // The case when ttt1 has more than 3 items, but ttt2 only has 2 items
          if(ttt1.length > 2 && ttt2.length <= 2){
            var duplicate = [];

            // console.log("[2015, 8,10,12,14,18]");
            for(var j = 1; j < ttt1.length; j++){


              for(var entry1 of map1.entries()){
              // The propertyVal stores all the property nodes
                var propertyVal1 = entry1[1];
                if(parseInt(propertyVal1[ttt1[j]]) == 1 && parseInt(propertyVal1[ttt2[1]]) == 1) {

                  if(!duplicate.includes(entry1[0])){

                      if(nodeID.includes(entry1[0])){
                        count++;
                        duplicate.push(entry1[0]);
                      }

                  }
                }
              }
            }

      
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
            
                  if(nodeID.includes(entry3[0])){
                    count++;
                    duplicate.push(entry3[0]);
                  }
                }
              }
            }

            resultRow.push(count);
          } else if(ttt1.length > 2 && ttt2.length > 2) {
            var duplicate = [];

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

   
      socket.emit('sendBackValuesLineChart', result, temp1, temp2);

   }); // end of findValuesLineChart function




  socket.on('crossLinking', function(option1, option2, property1, property2){
   
      var property1Array = map4.get(property1);
      var property2Array = map4.get(property2);

      var nodeArray = [];

        for(var i = 0; i < property1Array.length; i++){
          var tempArr1 = property1Array[i];

   
          // Only when the option is correct
          if(tempArr1[0] == option1){
            var signal = true;
            var tempArr2;

    
            for(var j = 1; j < tempArr1.length; j++){
              if(signal){
                for(var k = 0; k < property2Array.length; k++){
                  tempArr2 = property2Array[k];
                  if(tempArr2[0] == option2){
                    signal = false;

                  }
                }
              }

              // By the time you got here, you have both the tempArr1 correct
              // and tempArr2 correct
              for(var l = 1; l < tempArr2.length; l++){
                for(var m = 0; m < dd.length; m++){
                  var ppp = dd[m].split(" ");

                  if(parseInt(ppp[tempArr1[j] + 1]) == 1 && parseInt(ppp[tempArr2[l] + 1]) == 1){
                 
                    if(!nodeArray.includes(ppp[0])){
                      nodeArray.push(ppp[0]);
                    }
                  }

                }
              }
  
            }

          }
        }

      
      socket.emit('changeNodes', nodeArray);

  });


}); // end of io

// ----------------- End of Socket Code --------------



http.listen(3000, function() {
   console.log('listening on localhost:3000');
});