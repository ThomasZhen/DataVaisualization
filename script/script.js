// --------------- End of getting the values from backend ------------
       function displayDataset(){
            var len = document.getElementById("datasetOption").length;
            for(var i = 0; i < len; i++){
                if(document.getElementById("datasetOption").options[i].innerHTML == "dataset 3980"){
                    // var inputVal = document.getElementById("nodeInput").value;
                    // if(inputVal == ""){
                    //     alert("You have to enter a positive integer number input");
                    //     return;
                    // } 
                    // mainGraph.nodeRelSize(parseInt(inputVal));
                    

                } else if(document.getElementById("datasetOption").options[i].innerHTML == "dataset 3437"){
                    // var inputVal = document.getElementById("nodeInput").value;
                    // if(inputVal == "false"){
                    //     mainGraph.nodeVisibility(inputVal);
                    // } else {
                    //     mainGraph.nodeVisibility(true);
                    // }
                    
                    
                } else if(document.getElementById("datasetOption").options[i].innerHTML == "dataset 3080"){
                    // var inputVal = document.getElementById("nodeInput").value;
                    // if(inputVal == ""){
                    //     alert("You have to enter a color name");
                    //     return;
                    // }     
                    // // mainGraph.nodeColor(mainNode => inputVal);
                    // mainGraph.nodeColor(nodeapp => inputVal);


                } else if(document.getElementById("datasetOption").options[i].innerHTML == "dataset 698"){
                    // var inputVal = document.getElementById("nodeInput").value;
                    // if(inputVal == ""){
                    //     alert("You have to enter a color name");
                    //     return;
                    // }     
                    // // mainGraph.nodeColor(mainNode => inputVal);
                    // mainGraph.nodeColor(nodeapp => inputVal);


                }else if(document.getElementById("datasetOption").options[i].innerHTML == "dataset 414"){
                    // var inputVal = document.getElementById("nodeInput").value;
                    // if(inputVal == ""){
                    //     alert("You have to enter a color name");
                    //     return;
                    // }     
                    // // mainGraph.nodeColor(mainNode => inputVal);
                    // mainGraph.nodeColor(nodeapp => inputVal);



                }else if(document.getElementById("datasetOption").options[i].innerHTML == "dataset 348"){
                    // var inputVal = document.getElementById("nodeInput").value;
                    // if(inputVal == ""){
                    //     alert("You have to enter a color name");
                    //     return;
                    // }     
                    // // mainGraph.nodeColor(mainNode => inputVal);
                    // mainGraph.nodeColor(nodeapp => inputVal);



                }else if(document.getElementById("datasetOption").options[i].innerHTML == "dataset 107"){
                    // var inputVal = document.getElementById("nodeInput").value;
                    // if(inputVal == ""){
                    //     alert("You have to enter a color name");
                    //     return;
                    // }     
                    // // mainGraph.nodeColor(mainNode => inputVal);
                    // mainGraph.nodeColor(nodeapp => inputVal);
                    
                }
            
            } // end of for loop
        } // end of the function 



        // Original code
        // Display the original data
        function displayOriginal(){

            // var temp = [];
            displayFunction(content);

        }

     

        // All other three functions
        function changeOpt(){

            // Send the position value i to the backend
            for(var i = 0; i < tt3.length; i++){
                if(document.getElementById("sel").options[i].selected == true){
                    // Send the value i to the back end.
                    socket.emit('selectedOption', i);
                    // The sent back data only contained the nodes and links
                    socket.on('sendBack', function(data){  
                        displayFunction(data);
                    });
                }
            }

        }




        function getOpt(){
        
            var result = [];

            if(document.getElementById("line chart").checked == true){
                // return "Line Chart";
                result.push("Line Chart");
            } else {
                result.push("Clear Line Chart");
            }

            if(document.getElementById("bar chart").checked == true){
                // return "Bar Chart";
                result.push("Bar Chart");
            } else {
                result.push("Clear Bar Chart");
            }

            if(document.getElementById("area chart").checked == true){
                // return "Area Chart";
                result.push("Area Chart");
            } else {
                result.push("Clear Area Chart");
            }

             if(document.getElementById("stepped area chart").checked == true){
                // return "Stepped Area Chart";
                result.push("Stepped Area Chart");
            } else {
                result.push("Clear Stepped Area Chart");
            }

            if(document.getElementById("column chart").checked == true){
                // return "Column Chart";
                result.push("Column Chart");
            } else {
                result.push("Clear Column Chart");
            }

             if(document.getElementById("combo chart").checked == true){
                // return "Combo Chart";
                result.push("Combo Chart");
            } else {
                result.push("Clear Combo Chart");
            }


            return result;
        }


        function changeNode(){
            var len = document.getElementById("nodeOption").length;
            for(var i = 0; i < len; i++){
                if(document.getElementById("nodeOption").options[i].selected == true){
                    if(document.getElementById("nodeOption").options[i].innerHTML == "SetNodeSize"){
                            var inputVal = document.getElementById("nodeInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a positive integer number input");
                                return;
                            } 

                            mainGraph.nodeRelSize(parseInt(inputVal));

                    } else if(document.getElementById("nodeOption").options[i].innerHTML == "SetNodeVisibility"){
                            var inputVal = document.getElementById("nodeInput").value;
        
                            if(inputVal == "false"){
                                mainGraph.nodeVisibility(inputVal);
                            } else {
                                mainGraph.nodeVisibility(true);
                            }

                    } else if(document.getElementById("nodeOption").options[i].innerHTML == "SetNodeColor"){
                            var inputVal = document.getElementById("nodeInput").value;

                            if(inputVal == ""){
                                alert("You have to enter a color name");
                                return;
                            } 
                       
                                // mainGraph.nodeColor(mainNode => inputVal);
                                mainGraph.nodeColor(nodeapp => inputVal);
                    }
                } 
            }
        }




        function changeLink(){

            var len = document.getElementById("linkOption").length;
            for(var i = 0; i < len; i++){
                if(document.getElementById("linkOption").options[i].selected == true){
                    if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkVisibility"){

                            var inputVal = document.getElementById("linkInput").value;
        
                            if(inputVal == "false"){
                                mainGraph.linkVisibility(inputVal);
                            } else {
                                mainGraph.linkVisibility(true);
                            }

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkColor"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a color name");
                                return;
                            } 

                            mainGraph.linkColor(() => inputVal);

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkLineDash"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter two positive values and seperate them by a comma");
                                return;
                            } 

                            var values = inputVal.split(',');
                            var temp = [];
                            temp[0] = values[0];
                            temp[1] = values[1];


                            mainGraph.linkLineDash(temp);

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkWidth"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a positive integer");
                                return;
                            } 


                            mainGraph.linkWidth(parseInt(inputVal));

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkCurvature"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a positive integer");
                                return;
                            } 

                            mainGraph.linkCurvature(parseInt(inputVal));

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkDirectionalArrowLength"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("For the arrow to be visible, you have to enter a positive integer greater than 3");
                                return;
                            } 

                            
                            mainGraph.linkDirectionalArrowLength(parseInt(inputVal));

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkDirectionalArrowColor"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a color value");
                                return;
                            } 

                            
                            mainGraph.linkDirectionalArrowColor(() => inputVal);

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkDirectionalArrowRelPos"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a floating number beteen 0 and 1");
                                return;
                            } 

                           
                            mainGraph.linkDirectionalArrowRelPos(parseFloat(inputVal));

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkDirectionalParticles"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a positive integer");
                                return;
                            } 

                            // mainGraph.linkDirectionalParticles(parseFloat(inputVal));
                            mainGraph.linkDirectionalParticles(parseInt(inputVal));

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkDirectionalParticleSpeed"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a floating number between 0.01 and 0.1");
                                return;
                            } 

                            mainGraph.linkDirectionalParticleSpeed(parseFloat(inputVal));

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkDirectionalParticleWidth"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter an integer value");
                                return;
                            } 

                            mainGraph.linkDirectionalParticleWidth(parseInt(inputVal));

                    } else if(document.getElementById("linkOption").options[i].innerHTML == "SetLinkDirectionalParticleColor"){
                            var inputVal = document.getElementById("linkInput").value;
                            if(inputVal == ""){
                                alert("You have to enter a color name");
                                return;
                            } 

                            mainGraph.linkDirectionalParticleColor(() => inputVal);
                    }
                }
            }
        }




        function renderControl(){
            var rbs = document.querySelectorAll('input[name="choice"]');
            for(var rb of rbs){
                if(rb.value=="pause" && rb.checked ){
                    mainGraph.pauseAnimation();
                    break;
                } else {
                    mainGraph.resumeAnimation();
                    break;
                }
            }
        }



        function graphDatafactControl(){
            var rbs = document.querySelectorAll('input[name="choice1"]');
            for(var rb of rbs){
                if(rb.value=="show" && rb.checked ){
                    $('#graphStatistics').empty();
                    socket.emit('getGraphDatafact');
                    break;
                } else {
                    $('#graphStatistics').empty();
                    break;
                }
            }
        }



        function nodeDatafactControl(){
             var rbs = document.querySelectorAll('input[name="choice2"]');
            for(var rb of rbs){
                if(rb.value=="show" && rb.checked ){
                    $('#nodeStatistics').empty();
                    socket.emit('getNodeDatafact');
                    break;
                } else {
                    $('#nodeStatistics').empty();
                    break;
                }
            }
        }



        // Trying to display the chart
        function chartOpt(){
            // Send the position value i to the backend
            var option1 = "";
            var option2 = "";

            for(var i = 0; i < tt5.length; i++){
                if(document.getElementById("sel1").options[i].selected == true){
                    option1 = document.getElementById("sel1").options[i].value;
                }
                if(document.getElementById("sel2").options[i].selected == true){
                    option2 = document.getElementById("sel2").options[i].value;
                }
                if(option1 != "" && option2 != "") break;
            }

            if(option1 === option2){
                alert("The two options cannot be same");   
            } 


            if(option1 != option2){
                socket.emit('findValuesLineChart', option1, option2);
                
                socket.on('sendBackValuesLineChart', function(data, name1, name2){
                 
                    // You also need the names of the chosen options
                    var tempValues = data;

                    var temp = getOpt();

                    /*
                    var lineCounter = 3;
                    var barCounter = 3;
                    var areaCounter = 3;
                    var steppedAreaCounter = 3;
                    var columnCounter = 3;
                    var comboCounter = 3;
                    */



                    for(var i = 0; i < temp.length; i++){
                        if(temp[i] == "Line Chart"){
                            // console.log("$('#chart1') is");
                            // console.log($('#chart1'));
                            // console.log("$('#chart1').empty() is");
                            // console.log($('#chart1').empty());

                            // $('#chart1').empty();
                            
                            // if ( $('#chart1').html().length == 0) {
                                // console.log("It is empty at this moment");
                                 $('#chart1').empty();
                                  lineCounter = 3;
                                 drawLineChart(option1, option2, name1, name2, tempValues);
                            // }


                            // drawLineChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Line Chart"){
                            $('#chart1').empty();
                            lineChart = undefined;
                            lineCounter = 3;
                            document.getElementById("chart1").style.height = '0px';               
                        }

                        if(temp[i] == "Bar Chart"){
                            $('#chart2').empty();
                            barCounter = 3;
                            drawBarChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Bar Chart"){
                            $('#chart2').empty();
                            barChart = undefined;
                            barCounter = 3;
                            document.getElementById("chart2").style.height = '0px';
                        }

                        if(temp[i] == "Area Chart"){
                            $('#chart3').empty();
                            areaCounter = 3;
                            drawAreaChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Area Chart"){
                            $('#chart3').empty();
                            areaChart = undefined;
                            areaCounter = 3;
                            document.getElementById("chart3").style.height = '0px';
                        }


                        if(temp[i] == "Stepped Area Chart"){
                            $('#chart4').empty();
                            steppedAreaCounter = 3;
                            drawSteppedAreaChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Stepped Area Chart"){
                            $('#chart4').empty();
                            steppedAreaChart = undefined;
                            steppedAreaCounter = 3;
                            document.getElementById("chart4").style.height = '0px';
                        }


                        if(temp[i] == "Column Chart"){
                            $('#chart5').empty();
                            columnCounter = 3;
                            drawColumnChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Column Chart"){
                            $('#chart5').empty();
                            columnChart = undefined;
                            columnCounter = 3;
                            document.getElementById("chart5").style.height = '0px';
                        }


                        if(temp[i] == "Combo Chart"){
                            $('#chart6').empty();
                            comboCounter = 3;
                            drawComboChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Combo Chart"){
                            $('#chart6').empty();
                            comboChart = undefined;
                            comboCounter = 3;
                            document.getElementById("chart6").style.height = '0px';
                        }

                    }


                if(lineChart != undefined){

                    google.visualization.events.addListener(lineChart, 'select', 
                       
                        function(){

                            var temp = lineChart.getSelection()[0];
                            var selection = lineChart.getSelection();

                           
                            if(temp.row != null && temp.column != null){

                                changeColor(lineChart, lineData, lineOption, temp, "lineView");

                                if(barChart != undefined){
                                    changeColor(barChart, barData, barOption, temp, "barView");
                                }
                                if(areaChart != undefined){
                                    changeColor(areaChart, areaData, areaOption, temp, "areaView");
                                }
                                 if(steppedAreaChart != undefined){
                                    changeColor(steppedAreaChart, steppedAreaData, steppedAreaOption, temp, "steppedAreaView");
                                }
                                 if(columnChart != undefined){
                                    changeColor(columnChart, columnData, columnOption, temp, "columnView");
                                }
                                 if(comboChart != undefined){
                                    changeColor(comboChart, comboData, comboOption, temp, "comboView");
                                }

                                if(lineCounter % 2 == 0){
                                    selectHandler(lineChart, lineData, newOption1, newOption2, newName1, newName2, selection);
                                }
                            
                            } else {

                                lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection, "lineView");

                                if(barChart != undefined){
                                    lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection, "barView");
                                }
                                if(areaChart != undefined){

                                    lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection, "areaView");
                                }
                                if(steppedAreaChart != undefined){
                                    lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection, "steppedAreaView");
                                }
                                if(columnChart != undefined){
                                    lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection, "columnView");      
                                }
                                if(comboChart != undefined){
                                    lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection, "comboView");
                                }

                            }
                        }
                        
                    );

                }


                if(barChart != undefined){

                    google.visualization.events.addListener(barChart, 'select', 
                       
                        function(){

                            var temp = barChart.getSelection()[0];
                            var selection = barChart.getSelection();


                            if(temp.row != null && temp.column != null){


                                changeColor(barChart, barData, barOption, temp, "barView");

                                if(lineChart != undefined){
                                    changeColor(lineChart, lineData, lineOption, temp, "lineView");
                                }
                                if(areaChart != undefined){
                                    changeColor(areaChart, areaData, areaOption, temp, "areaView");
                                }
                                 if(steppedAreaChart != undefined){
                                    changeColor(steppedAreaChart, steppedAreaData, steppedAreaOption, temp, "steppedAreaView");
                                }
                                 if(columnChart != undefined){
                                    changeColor(columnChart, columnData, columnOption, temp, "columnView");
                                }
                                 if(comboChart != undefined){
                                    changeColor(comboChart, comboData, comboOption, temp, "comboView");
                                }

                                if(barCounter % 2 == 0){
                                    selectHandler(barChart, barData, newOption1, newOption2, newName1, newName2, selection);
                                }
                            
                            } else {

                                lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection, "barView");

                                if(lineChart != undefined){
                                    lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection, "lineView");
                                }
                                if(areaChart != undefined){
                                    lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection, "areaView");
                                }
                                if(steppedAreaChart != undefined){
                                    lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection, "steppedAreaView");
                                    
                                }
                                if(columnChart != undefined){
                                    lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection, "columnView");
                                    
                                }
                                if(comboChart != undefined){
                                    lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection, "comboView");
                                }

                            }
                        }
                        
                    );

                }

                 if(areaChart != undefined){

                    google.visualization.events.addListener(areaChart, 'select', 
                       
                        function(){

                            var temp = areaChart.getSelection()[0];
                            var selection = areaChart.getSelection();

                           

                            if(temp.row != null && temp.column != null){


                                changeColor(areaChart, areaData, areaOption, temp, "areaView");


                                if(lineChart != undefined){
                                    changeColor(lineChart, lineData, lineOption, temp, "lineView");
                                }
                                if(barChart != undefined){
                                    changeColor(barChart, barData, barOption, temp, "barView");
                                }
                                if(steppedAreaChart != undefined){
                                    changeColor(steppedAreaChart, steppedAreaData, steppedAreaOption, temp, "steppedAreaView");
                                }
                                 if(columnChart != undefined){
                                    changeColor(columnChart, columnData, columnOption, temp, "columnView");
                                }
                                 if(comboChart != undefined){
                                    changeColor(comboChart, comboData, comboOption, temp, "comboView");
                                }
                                if(areaCounter % 2 == 0){
                                    selectHandler(areaChart, areaData, newOption1, newOption2, newName1, newName2, selection);
                                }
                            
                            } else {

                                lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection, "areaView");

                                if(lineChart != undefined){
                                    lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection, "lineView");
                                }
                                if(barChart != undefined){
                                    lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection, "barView");
                                }
                                if(steppedAreaChart != undefined){
                                    lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection, "steppedAreaView");
                                    
                                }
                                if(columnChart != undefined){
                                    lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection, "columnView");
                                    
                                }
                                if(comboChart != undefined){
                                    lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection, "comboView");
                                }

                            }
                        }
                        
                    );

                }


                if(steppedAreaChart != undefined){

                    google.visualization.events.addListener(steppedAreaChart, 'select', 
                       
                        function(){

                            var temp = steppedAreaChart.getSelection()[0];
                            var selection = steppedAreaChart.getSelection();

                           

                            if(temp.row != null && temp.column != null){


                                changeColor(steppedAreaChart, steppedAreaData, steppedAreaOption, temp, "steppedAreaView");

                                if(lineChart != undefined){
                                    changeColor(lineChart, lineData, lineOption, temp, "lineView");
                                }
                                if(barChart != undefined){
                                    changeColor(barChart, barData, barOption, temp, "barView");
                                }
                                if(areaChart != undefined){
                                    changeColor(areaChart, areaData, areaOption, temp, "areaView");
                                }
                                if(columnChart != undefined){
                                    changeColor(columnChart, columnData, columnOption, temp, "columnView");
                                }
                                 if(comboChart != undefined){
                                    changeColor(comboChart, comboData, comboOption, temp, "comboView");
                                }

                                if(steppedAreaCounter % 2 == 0){
                                    selectHandler(steppedAreaChart, steppedAreaData, newOption1, newOption2, newName1, newName2, selection);
                                }
                            
                            } else {

                                lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection, "steppedAreaView");

                                if(lineChart != undefined){
                                    lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection, "lineView");  
                                }
                                if(barChart != undefined){
                                    lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection, "barView");
                                }
                                if(areaChart != undefined){
                                    lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection, "areaView");
                                }
                                if(columnChart != undefined){
                                    lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection, "columnView");
                                    
                                }
                                if(comboChart != undefined){
                                    lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection, "comboView");
                                }

                            }
                        }
                        
                    );

                }


                if(columnChart != undefined){

                    google.visualization.events.addListener(columnChart, 'select', 
                       
                        function(){

                            var temp = columnChart.getSelection()[0];
                            var selection = columnChart.getSelection();


                            if(temp.row != null && temp.column != null){


                                changeColor(columnChart, columnData, columnOption, temp, "columnView");

                                if(lineChart != undefined){
                                    changeColor(lineChart, lineData, lineOption, temp, "lineView");
                                }
                                if(barChart != undefined){
                                    changeColor(barChart, barData, barOption, temp, "barView");
                                }
                                if(areaChart != undefined){
                                    changeColor(areaChart, areaData, areaOption, temp, "areaView");
                                }
                                 if(steppedAreaChart != undefined){
                                    changeColor(steppedAreaChart, steppedAreaData, steppedAreaOption, temp, "steppedAreaView");
                                }
                                 if(comboChart != undefined){
                                    changeColor(comboChart, comboData, comboOption, temp, "comboView");
                                }
                                if(columnCounter % 2 == 0){
                                    selectHandler(columnChart, columnData, newOption1, newOption2, newName1, newName2, selection);
                                }
                            
                            } else {

                                lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection, "columnView");

                                if(lineChart != undefined){
                                    lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection, "lineView");      
                                }
                                if(barChart != undefined){
                                    lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection, "barView");
                                }
                                if(areaChart != undefined){

                                    lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection, "areaView");
                                }
                                if(steppedAreaChart != undefined){
                                    lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection, "steppedAreaView");
                                }
                                if(comboChart != undefined){
                                    lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection, "comboView");
                                }

                            }
                        }
                        
                    );

                }


                 if(comboChart != undefined){

                    google.visualization.events.addListener(comboChart, 'select', 
                       
                        function(){

                            var temp = comboChart.getSelection()[0];
                            var selection = comboChart.getSelection();

                           

                            if(temp.row != null && temp.column != null){

                                changeColor(comboChart, comboData, comboOption, temp, "comboView");

                                if(lineChart != undefined){
                                    changeColor(lineChart, lineData, lineOption, temp, "lineView");
                                }
                                if(barChart != undefined){
                                    changeColor(barChart, barData, barOption, temp, "barView");
                                }
                                if(areaChart != undefined){
                                    changeColor(areaChart, areaData, areaOption, temp, "areaView");
                                }
                                 if(steppedAreaChart != undefined){
                                    changeColor(steppedAreaChart, steppedAreaData, steppedAreaOption, temp, "steppedAreaView");
                                }
                                 if(columnChart != undefined){
                                    changeColor(columnChart, columnData, columnOption, temp, "columnView");
                                }

                                if(comboCounter % 2 == 0){
                                    selectHandler(comboChart, comboData, newOption1, newOption2, newName1, newName2, selection);
                                }
                            
                            } else {

                                lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection, "comboView");

                                if(lineChart != undefined){  
                                    lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection, "lineView");
                                }
                                if(barChart != undefined){
                                    lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection, "barView");
                                }
                                if(areaChart != undefined){
                                    lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection, "areaView");
                                }
                                if(steppedAreaChart != undefined){
                                    lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection, "steppedAreaView");
                                }
                                if(columnChart != undefined){
                                    lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection, "columnView");      
                                }
                            }
                        }
                        
                    );

                }



                dataFacts(option1, option2, name1, name2, tempValues);

                });
            }

        }



        function changeColor(chart, data, option, selectedItem, name){

            var temp = selectedItem;

            if(name == "lineView"){

                // chart.draw(lineView, option);


                if(lineCounter % 2 == 1){
                    var index = temp.column - 1;

                    for(var i in option.colors){
                        if(i != index){
                            option.colors[i] = 'black';
                        }
                    }

                } else {

                    for(var i in option.colors){ 
                        option.colors[i] = colorArray[i];
                    }

                }

                chart.draw(lineView, option);

                lineCounter++;
            }


            if(name == "barView"){

                // chart.draw(lineView, option);

                if(barCounter % 2 == 1){
                    var index = temp.column - 1;

                    for(var i in option.colors){
                        if(i != index){
                            option.colors[i] = 'black';
                        }
                    }

                } else {

                    for(var i in option.colors){ 
                        option.colors[i] = colorArray[i];
                    }

                }


                chart.draw(barView, option);

                barCounter++;
            }



            if(name == "areaView"){

                if(areaCounter % 2 == 1){
                    var index = temp.column - 1;

                    for(var i in option.colors){
                        if(i != index){
                            option.colors[i] = 'black';
                        }
                    }

                } else {

                    for(var i in option.colors){ 
                        option.colors[i] = colorArray[i];
                    }

                }


                chart.draw(areaView, option);

                areaCounter++;
            }


            if(name == "steppedAreaView"){

                if(steppedAreaCounter % 2 == 1){
                    var index = temp.column - 1;

                    for(var i in option.colors){
                        if(i != index){
                            option.colors[i] = 'black';
                        }
                    }

                } else {

                    for(var i in option.colors){ 
                        option.colors[i] = colorArray[i];
                    }

                }


                chart.draw(steppedAreaView, option);

                steppedAreaCounter++;
            }


            if(name == "columnView"){

                if(columnCounter % 2 == 1){
                    var index = temp.column - 1;

                    for(var i in option.colors){
                        if(i != index){
                            option.colors[i] = 'black';
                        }
                    }

                } else {

                    for(var i in option.colors){ 
                        option.colors[i] = colorArray[i];
                    }

                }


                chart.draw(columnView, option);

                columnCounter++;
            }



            if(name == "comboView"){

                if(comboCounter % 2 == 1){
                    var index = temp.column - 1;

                    for(var i in option.colors){
                        if(i != index){
                            option.colors[i] = 'black';
                        }
                    }

                } else {

                    for(var i in option.colors){ 
                        option.colors[i] = colorArray[i];
                    }

                }


                chart.draw(comboView, option);

                comboCounter++;
            }

            mainGraph.linkColor(() => 'gray');

        }



        function lineDisappear(chart, data, options, columns, series, selection, name){
            
            // var sel = chart.getSelection();
            var sel = selection;

                // if selection length is 0, we deselected an element

                if (sel.length > 0) {

                    // if row is undefined, we clicked on the legend
                    if (sel[0].row === null) {
                    var col = sel[0].column;
                    if (columns[col] == col) {
                        // hide the data series
                        columns[col] = {
                            label: data.getColumnLabel(col),
                            type: data.getColumnType(col),
                            calc: function () {
                                return null;
                            }
                        };

                        // grey out the legend entry
                        series[col - 1].color = '#CCCCCC';
                    } else {
                        // show the data series
                        columns[col] = col;
                        series[col - 1].color = null;
                    }

                    // var view = new google.visualization.DataView(data);
                    // view.setColumns(columns);

                    // chart.draw(view, options);

                    if(name == "lineView"){
                        lineView = new google.visualization.DataView(data);
                        lineView.setColumns(columns);

                        chart.draw(lineView, options);
                    }

                    if(name == "barView"){
                        barView = new google.visualization.DataView(data);
                        barView.setColumns(columns);

                        chart.draw(barView, options);
                    }

                    if(name == "areaView"){
                        areaView = new google.visualization.DataView(data);
                        areaView.setColumns(columns);

                        chart.draw(areaView, options);
                    }

                    if(name == "steppedAreaView"){
                        steppedAreaView = new google.visualization.DataView(data);
                        steppedAreaView.setColumns(columns);

                        chart.draw(steppedAreaView, options);
                    }

                    if(name == "columnView"){
                        columnView = new google.visualization.DataView(data);
                        columnView.setColumns(columns);

                        chart.draw(columnView, options);
                    }

                    if(name == "comboView"){
                        comboView = new google.visualization.DataView(data);
                        comboView.setColumns(columns);

                        chart.draw(comboView, options);
                    }


                    }

                } else {
                    console.log("sel is empty");
                }

        }




        function selectHandler(chart, data, option1, option2, name1, name2, select){



                // console.log("The chart is");
                // console.log(chart);
                // console.log("The data is");
                // console.log(data);
                // console.log("The option1 is");
                // console.log(option1);
                // console.log("The option2 is");
                // console.log(option2);
                // console.log("The name1 is");
                // console.log(name1);
                // console.log("The name2 is");
                // console.log(name2);
                // console.log("The select is");
                // console.log(select);



                var columnNumber;

                // var selection = chart.getSelection();
                var selection = select;


                var message = '';
                for(var i = 0; i < selection.length; i++){
                    var item = selection[i];


                    if (item.row != null && item.column != null) {
                        // str stores the number of nodes

                        var str = data.getFormattedValue(item.row, item.column);

                        // row number is correct, but column need to be minus 1
                        // name1 for row, name2 for column
                        var property1 = name1[item.row];
                        var property2 = name2[item.column - 1];
                      

                        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';

                        columnNumber = item.column;


                        socket.emit('crossLinking', option1, option2, property1, property2);

                    } else if (item.row != null) {
                        // var str = data.getFormattedValue(item.row, 0);
                        // message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';

                        // alert("You have to click on a node");



                        // alert("You selected a row but no column");



                    } else if (item.column != null) {
                        // var str = data.getFormattedValue(0, item.column);
                        // message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';

                        // alert("You have to click on a node");


                        // alert("You selected a column but no row");


                    }
                   
                    if(message != ''){
                        // alert('You selected ' + message);
                    }
                }


                // If you want to change the node color, you have to change them here.
                // So you must seed the arrary of relative nodes back here;
                socket.on('changeNodes', function(resultArray){
                    
                    countTotalNodes = 0;
                    nodeArray = resultArray;
                    // displayFunction(content);
                    testFunction(nodeArray, columnNumber);
                    
                });

            } // end of selectLineChartHandler function



        function testFunction(data, columnNum) {


            var tempArray = data;
            mainGraph.nodeColor(


                // ----------  working ----------
                nodeapp => {
                    
                    for(var i = 0; i < tempArray.length; i++){
                        if(nodeapp.id == tempArray[i]){
                            // return "white";

                            // console.log(colorArray[columnNum - 1]);

                            return colorArray[columnNum - 1];

                            // return colorArray[columnNum];
                        }
                    }

                    // return colorNames[Math.floor(Math.random() * 6)];
                    return "black";
                }


            );

        }

     

        function drawLineChart(option1, option2, name1, name2, tempValues) {

            lineData = new google.visualization.DataTable();

            // First add option1
            lineData.addColumn('string', option1);


            // For the line names
            for(var i = 0; i < name2.length; i++){
                lineData.addColumn('number', name2[i]);
            }

      
            var tempRows = [];

            for(var i = 0; i < name1.length; i++){
                var ttt =  [];
                ttt.push(name1[i]);
                for(var j = 0; j < tempValues[i].length; j++){
                    ttt.push(tempValues[i][j]);
                }

                tempRows.push(ttt);
            }


            // console.log("tempRows is");
            // console.log(tempRows);


            for(var i = 0; i < tempRows.length; i++){
                while(tempRows[i].length < 5){
                    tempRows[i].push(0);
                }
            }


            lineData.addRows(tempRows);



            // ----- Assign view here ------
            lineView = lineData;
            // ----- Assign view here ------



            // console.log("The lineData in the draw function is");
            // console.log(lineData);


            var options = {
                // focusTarget: 'category',

                // tooltip:{
                //     showColorCode: true,
                // },
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],

                // chart: {
                    // title: "Number of nodes that have both " + option1 + " and " + option2 + " propertie",
                    // subtitle: 'in millions of dollars (USD)'
                    // backgroundColor: 'black'

                // },

                

                'backgroundColor': 'white',


                // width: 1000,
                // height: 500,

               

                hAxis: {
                    format: '',

                    // textPosition: 'out',

                    // slantedText: true,


                    textStyle: {
                        color: "black",
                    }
                },


                titleTextStyle: {
                    color: 'black'
                },


                vAxis: {

                    // textPosition: 'out',

                    // ridilines:{
                    //     color: 'transparent'
                    // },
                    // baselineColor: 'transparent',


                    textStyle: {
                        color: 'black'
                    }
                },

                legend: {
                    textStyle: {
                        color: 'black'
                    }
                }
                
            };


            document.getElementById("chart1").style.height = '500px';
            // document.getElementById("chart1").style.backgroundColor = "red";

            // var chart = new google.charts.Line(document.getElementById('chart1'));
            lineChart = new google.charts.Line(document.getElementById('chart1'));

            lineChart.draw(lineData, google.charts.Line.convertOptions(options));

            lineOption = options;

            // Reset the two variable, just remember, whenever you have global variables, you need to rest them everytime you
            // try to do it again.
            lineColumns = [];
            linneSeries = {};
            for (var i = 0; i < lineData.getNumberOfColumns(); i++) {
                lineColumns.push(i);
                if (i > 0) {
                    lineSeries[i - 1] = {};
                }
            }


            newOption1 = option1;
            newOption2 = option2;
            newName1 = name1;
            newName2 = name2;



            listCharts[0] = lineChart;
            listDatas[0] = lineData;
            listOptions[0] = options;
            listColumns[0] = lineColumns;
            listSeries[0] = lineSeries;



        } // end of the drawLineChart function 


        function drawBarChart(option1, option2, name1, name2, tempValues){
            var arr = [];
            var temp1 = [];
            temp1.push(option1);

            for(var i = 0; i < name2.length; i++){
                temp1.push(name2[i]);
            }

            arr.push(temp1);

            for(var i = 0; i < name1.length; i++){
                var bbb = [];
                bbb.push(name1[i]);
                for(var j = 0; j< tempValues[i].length; j++){
                    bbb.push(tempValues[i][j]);
                }
                arr.push(bbb);
            }



            for(var i = 0; i < arr.length; i++){
                while(arr[i].length < 5){
                    arr[i].push(0);
                }
            }


            barData = google.visualization.arrayToDataTable(arr);



            // ----- added the view ------
            barView = barData;
            // ------ added the view -----



            var options = {
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],



                chart: {
                    // title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                    // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },

                bars: 'horizontal', // Required for Material Bar Charts.

                backgroundColor: 'white',

                hAxis: {
                    format: '',
                    textStyle: {
                        color: "black",
                    }
                },


                titleTextStyle: {
                    color: 'black'
                },


                vAxis: {
                    textStyle: {
                        color: 'black'
                    }
                },

                legend: {
                    textStyle: {
                        color: 'black'
                    }
                }

            };

            document.getElementById("chart2").style.height = '500px';

            // var chart = new google.charts.Bar(document.getElementById('chart2'));
            barChart = new google.charts.Bar(document.getElementById('chart2'));


            // chart.draw(data, google.charts.Bar.convertOptions(options));
            barChart.draw(barData, google.charts.Bar.convertOptions(options));

            barOption = options;

            barColumns = [];
            barSeries = {};
            for (var i = 0; i < barData.getNumberOfColumns(); i++) {
                barColumns.push(i);
                if (i > 0) {
                    barSeries[i - 1] = {};
                }
            }


            newOption1 = option1;
            newOption2 = option2;
            newName1 = name1;
            newName2 = name2;



            listCharts[1] = barChart;
            listDatas[1] = barData;
            listOptions[1] = options;
            listColumns[1] = barColumns;
            listSeries[1] = barSeries;



        } // end of the drawBarChart function




        function drawAreaChart(option1, option2, name1, name2, tempValues){

            var temp = [];
            
            var firstRow = [];
            firstRow.push(option1);
            for(var i = 0; i < name2.length; i++){
                firstRow.push(name2[i]);
            }
            temp.push(firstRow);


            for(var i = 0; i < name1.length; i++){
                var aaa = [];
                aaa.push(name1[i]);
                for(var j = 0; j < tempValues[i].length; j++){
                    aaa.push(tempValues[i][j]);
                }
                temp.push(aaa);
            }


            for(var i = 0; i < temp.length; i++){
                while(temp[i].length < 5){
                    temp[i].push(i);
                }
            }

             areaData = google.visualization.arrayToDataTable(temp);


             areaView = areaData;


            var options = {
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],

                // title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                // hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
                // vAxis: {minValue: 0}
                 backgroundColor: 'white',

                hAxis: {
                    format: '',
                    textStyle: {
                        color: "black",
                    }
                },


                titleTextStyle: {
                    color: 'black'
                },


                vAxis: {
                    textStyle: {
                        color: 'black'
                    }
                },

                legend: {
                    textStyle: {
                        color: 'black'
                    }
                }

            };


            document.getElementById("chart3").style.height = '500px';


            areaChart = new google.visualization.AreaChart(document.getElementById('chart3'));
            areaChart.draw(areaData, options);


            areaOption = options;


            areaColumns = [];
            areaSeries = {};
            for (var i = 0; i < areaData.getNumberOfColumns(); i++) {
                areaColumns.push(i);
                if (i > 0) {
                    areaSeries[i - 1] = {};
                }
            }


            newOption1 = option1;
            newOption2 = option2;
            newName1 = name1;
            newName2 = name2;


            listCharts[2] = areaChart;
            listDatas[2] = areaData;
            listOptions[2] = options;
            listColumns[2] = areaColumns;
            listSeries[2] = areaSeries;


        } // end of drawAreaChart function




        function drawSteppedAreaChart(option1, option2, name1, name2, tempValues){
         
            var temp = [];

            var firstRow = [];
            firstRow.push(option1);
            for(var i = 0; i < name2.length; i++){
                firstRow.push(name2[i]);
            }

            temp.push(firstRow);


            for(var i = 0; i < name1.length; i++){
                var aaa = [];
                aaa.push(name1[i]);
                for(var j = 0; j < tempValues[i].length; j++){
                    aaa.push(tempValues[i][j]);
                }
                temp.push(aaa);
            }



            for(var i = 0; i < temp.length; i++){
                while(temp[i].length < 5){
                    temp[i].push(0);
                }
            }

         
            steppedAreaData = google.visualization.arrayToDataTable(temp);


            steppedAreaView = steppedAreaData;


            var options = {
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],

                // title: 'The decline of \'The 39 Steps\'',
                // vAxis: {title: 'Accumulated Rating'},
                // isStacked: true

                // title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                
                backgroundColor: 'white',

                hAxis: {
                    format: '',
                    textStyle: {
                        color: "black",
                    }
                },


                titleTextStyle: {
                    color: 'black'
                },


                vAxis: {
                    textStyle: {
                        color: 'black'
                    }
                },

                legend: {
                    textStyle: {
                        color: 'black'
                    }
                }
            };

            document.getElementById("chart4").style.height = '500px';

           steppedAreaChart = new google.visualization.SteppedAreaChart(document.getElementById('chart4'));
           steppedAreaChart.draw(steppedAreaData, options);


           steppedAreaOption = options;
            
            steppedAreaColumns = [];
            steppedAreaSeries = {};
            for (var i = 0; i < steppedAreaData.getNumberOfColumns(); i++) {
                steppedAreaColumns.push(i);
                if (i > 0) {
                    steppedAreaSeries[i - 1] = {};
                }
            }




            newOption1 = option1;
            newOption2 = option2;
            newName1 = name1;
            newName2 = name2;


            listCharts[3] = steppedAreaChart;
            listDatas[3] = steppedAreaData;
            listOptions[3] = options;
            listColumns[3] = steppedAreaColumns;
            listSeries[3] = steppedAreaSeries;




        } // end of drawSteppedAreaChart function 




        function drawColumnChart(option1, option2, name1, name2, tempValues){
            var temp = [];

            var firstRow = [];
            firstRow.push(option1);
            for(var i = 0; i < name2.length; i++){
                firstRow.push(name2[i]);
            }

            temp.push(firstRow);


            for(var i = 0; i < name1.length; i++){
                var aaa = [];
                aaa.push(name1[i]);
                for(var j = 0; j < tempValues[i].length; j++){
                    aaa.push(tempValues[i][j]);
                }
                temp.push(aaa);
            }


            for(var i = 0; i < temp.length; i++){
                while(temp[i].length < 5){
                    temp[i].push(0);
                }
            }

            columnData = google.visualization.arrayToDataTable(temp);



            columnView = columnData;



            var options = {
            // chart: {
            // title: 'Company Performance',
            // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
              colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],



              // title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                
                backgroundColor: 'white',

                hAxis: {
                    format: '',
                    textStyle: {
                        color: "black",
                    }
                },


                titleTextStyle: {
                    color: 'black'
                },


                vAxis: {
                    textStyle: {
                        color: 'black'
                    }
                },

                legend: {
                    textStyle: {
                        color: 'black'
                    }
                }
          // }
        };


        document.getElementById("chart5").style.height = '500px';


        columnChart = new google.charts.Bar(document.getElementById('chart5'));

        columnChart.draw(columnData, google.charts.Bar.convertOptions(options));

        // google.visualization.events.addListener(chart, 'select', selectHandler);

        columnOption = options;

        columnColumns = [];
        columnSeries = {};
        for (var i = 0; i < columnData.getNumberOfColumns(); i++) {
            columnColumns.push(i);
            if (i > 0) {
                columnSeries[i - 1] = {};
            }
        }


        newOption1 = option1;
        newOption2 = option2;
        newName1 = name1;
        newName2 = name2;


        listCharts[4] = columnChart;
        listDatas[4] = columnData;
        listOptions[4] = options;
        listColumns[4] = columnColumns;
        listSeries[4] = columnSeries;




        } // end of drawColumnChart function




        function drawComboChart(option1, option2, name1, name2, tempValues){
            var temp = [];

            var firstRow = [];
            firstRow.push(option1);
            for(var i = 0; i < name2.length; i++){
                firstRow.push(name2[i]);
            }

            temp.push(firstRow);


            for(var i = 0; i < name1.length; i++){
                var aaa = [];
                aaa.push(name1[i]);
                for(var j = 0; j < tempValues[i].length; j++){
                    aaa.push(tempValues[i][j]);
                }
                temp.push(aaa);
            }



            for(var i = 0; i < temp.length; i++){
                while(temp[i].length < 5){
                    temp[i].push(0);
                }
            }


            comboData = google.visualization.arrayToDataTable(temp);



            comboView = comboData;



            var options = {
             // title : 'Monthly Coffee Production by Country',
            // vAxis: {title: 'Cups'},
            // hAxis: {title: 'Month'},

          colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],



          seriesType: 'bars',
          series: {5: {type: 'line'}},

           // title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                
                backgroundColor: 'white',

                hAxis: {
                    format: '',
                    textStyle: {
                        color: "black",
                    }
                },


                titleTextStyle: {
                    color: 'black'
                },


                vAxis: {
                    textStyle: {
                        color: 'black'
                    }
                },

                legend: {
                    textStyle: {
                        color: 'black'
                    }
                }
        };


        document.getElementById("chart6").style.height = '500px';


        comboChart = new google.visualization.ComboChart(document.getElementById('chart6'));
        comboChart.draw(comboData, options);

        comboOption = options;

        comboColumns = [];
        comboSeries = {};

        for (var i = 0; i < comboData.getNumberOfColumns(); i++) {
            comboColumns.push(i);
            if (i > 0) {
                comboSeries[i - 1] = {};
            }
        }



        newOption1 = option1;
        newOption2 = option2;
        newName1 = name1;
        newName2 = name2;


        listCharts[5] = comboChart;
        listDatas[5] = comboData;
        listOptions[5] = options;
        listColumns[5] = comboColumns;
        listSeries[5] = comboSeries;
          


        } // end of drawComboChart function



        function resetNodeColor() {
            displayFunction(content);
        }




        function dataFacts(option1, option2, name1, name2, tempValues){

            // This part avoid the repetition of displaying the same datafacts
            if(option1 == oldOption1 && option2 == oldOption2){
                return;
            } else {
                $('#df').empty();
            }


            // console.log("name2 is");
            // console.log(name2);


            oldOption1 = option1;
            oldOption2 = option2;


            var ul = document.getElementById("df");
            
            var t = document.createElement("p");
            t.innerHTML = "Data Facts"
            t.style.color = "black";

            var li1 = document.createElement("li");

            var totalNum = 0;
            var smallest = Number.MAX_SAFE_INTEGER;
            var largest = -1;

            var tempArr = [];

            for(var i = 0; i < name2.length; i++){
                tempArr.push(0);
            }


            for(var i = 0; i < tempValues.length; i++){
                for(var j = 0; j < tempValues[i].length; j++){
                    tempArr[j] += tempValues[i][j];
                    totalNum += parseInt(tempValues[i][j]);
                    if(tempValues[i][j] < smallest) smallest = tempValues[i][j];
                    if(tempValues[i][j] > largest) largest = tempValues[i][j]; 
                }
            }


            // console.log("The tempArr is");
            // console.log(tempArr);

            var max = -1;
            var min = Number.MAX_SAFE_INTEGER;
            var index1 = -1;
            var index2 = -1;


            // console.log("the min value is");
            // console.log(min);


            // console.log("Type of min is");
            // console.log(typeof min);


            // console.log("tyeof tempArr[0]");
            // console.log(typeof tempArr[0]);

            for(var i = 0; i < tempArr.length; i++){
                if(tempArr[i] > max){
                    max = tempArr[i];
                    index1 = i;
                }

                if(tempArr[i] < min){
                    min = tempArr[i];
                    index2 = i;
                }

            }

            
            li1.appendChild(document.createTextNode("Total number of nodes is " + totalNum + " across all " + option1 + " and " + option2));
            // li1.appendChild(document.createTextNode("Total number of nodes is " + totalNodes + " across all " + option1 + " and " + option2));
            li1.style.color = "black";

            var li2 = document.createElement("li");

            li2.appendChild(document.createTextNode("The distribution of number of nodes among the two properties ranges from " + smallest + " nodes to " + largest + " nodes, the difference is " + (largest - smallest) + " nodes"));
            li2.style.color = "black";

            var li3 = document.createElement("li");


            // li3.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index1] + " represent over " + Math.floor(((max / totalNum) * 100))  + "% of all the nodes across all x axis attributes"));
            li3.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index1] + " represent over " + Math.floor(((max / totalNodes) * 100))  + "% of all the nodes across all" + option2 + " attributes"));
            li3.style.color = "black";


             var li6 = document.createElement("li");


            // li3.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index1] + " represent over " + Math.floor(((max / totalNum) * 100))  + "% of all the nodes across all x axis attributes"));
            li6.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index2] + " represent over " + Math.floor(((min / totalNodes) * 100))  + "% of all the nodes across all" + option2 + " attributes"));
            li6.style.color = "black";


            var li4 = document.createElement("li");


            li4.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index1] + " has the greates number of nodes for " + max + " nodes"));
            li4.style.color = "black";

            var li5 = document.createElement("li");

            li5.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index2] + " has the least number of nodes for " + min + " nodes"));
            li5.style.color = "black";


            ul.appendChild(t);

            // ul.appendChild(li1);
            
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li6);
            ul.appendChild(li4);
            ul.appendChild(li5);


            document.getElementById("df").style.backgroundColor = "white";

            // document.getElementById("sel2").style.backgroundColor = "white";
        } // end of the dataFacts function


        function getNodeStatistics(){
            var inputVal = document.getElementById("nodeStatisticsInput").value;
            socket.emit('getNodeLinks', inputVal);
            socket.on('sendNodeLinks', function(data, relativeNodes){

                if(option1 == oldOption1 && option2 == oldOption2){
                    return;
                } else {
                    $('#nodeStatisticsAdditional').empty();
                }


                var nodeList = document.getElementById("nodeStatisticsAdditional");
                
                if(data == 0){
                    nodeList.innerHTML += "<li>Node " + inputVal + " has " + data + " links</li>";
                } else {
                    nodeList.innerHTML += "<li>Node " + inputVal + " has " + data.length + " links</li>";
                }


                nodeList.style.color = "red";


                changeChosenNodeColor(inputVal, relativeNodes);
                changeLinkColor(inputVal);
            });


        }




        function changeChosenNodeColor(clickedNode, relatedNodes) {

            mainGraph.nodeColor(

                nodeapp => {
                    
                    for(var i = 0; i < relatedNodes.length; i++){
                        if(nodeapp.id == relatedNodes[i]){

                            return "blue";

                        }

                        if(nodeapp.id == clickedNode) return "red";
                    }

                    return "black";
                }

            );

        }
   


        function changeLinkColor(node){

            var count = 0;

            mainGraph.linkColor(

                linkapp => {

                        if(linkapp.source.id == node || linkapp.target.id == node){

                            return "blue";

                        } else {
        
                            return "gray";
                        }

                }

            );
        }


        function clickText(e){
            var text  = e.target.innerHTML.split(" ");

            if(text[0] == "Group"){
                var group = text[1];
                
                changeNodeColor(group);
            }

            if(text[1] == "largest" || text[1] == "smallest"){
                var group = text[7];

                changeNodeColor(group);
            }


            if(text[0] == "Node"){
                changeNodeAndLink(text[1]);
            }

        }


        function changeNodeAndLink(nodeNum){
            mainGraph.nodeColor(

                nodeapp => {

                    if(nodeapp.id == nodeNum){

                        return "red";
 
                    } else {
                    
                        return "black";

                    }
                }

            );


            mainGraph.linkColor(

                linkapp => {

                        if(linkapp.source.id == nodeNum || linkapp.target.id == nodeNum){

                            return "blue";

                        } else {
        
                            return "gray";
                        }

                }

            );
        }



        function changeNodeColor(groupNum) {

            var groupNode = groupArray[groupNum];

            mainGraph.nodeColor(

                nodeapp => {
                    
                    for(var i = 0; i < groupNode.length; i++){
                        if(nodeapp.id == groupNode[i]){

                            return "red";

                        }
                    }

                    return "black";
                }

            );

            mainGraph.linkColor(() => "grey");

        }


        // The funciton that displays the data set
        function displayFunction(data){
            var node = data.node;
            mainNode = data.node;
            // var newNodeArray1 = nodeArray;
        
            

            var divWidth = document.getElementById('displayGraph').offsetWidth;

            var elem = document.getElementById('displayGraph');

            // var Graph = ForceGraph()(elem)
            mainGraph = ForceGraph()(elem)
            // Set the back ground color
            .backgroundColor('black')
            // Set the size of the nodes
            .nodeRelSize(6)
            // node of the same group have the same color based on the user

            // .nodeAutoColorBy('user')

            // .nodeLabel(node => `${node.user}: ${node.description}`)
            .nodeLabel(node => `${node.description}`)

            // set the link color
            .linkColor(() => 'gray')

            // link particle on the link
            // .linkDirectionalParticles(1)
            // when hover the node
            .onNodeHover(node => elem.style.cursor = node ? 'pointer' : null)

            // when click on the link
            // .onNodeClick(node => window.open(`https://bl.ocks.org/${node.user}/${node.id}`, '_blank'))

            // Set the width
            .width(divWidth)
            // Set the height
            .height(500)

            // Set how spread out the graph looks like
            // .d3AlphaDecay(0.0114) // 0.0228
            // .d3Force('link').strength(0.1)
            // .d3AlphaDecay(0.0114)
            // .d3VelocityDecay(0.5)


            .graphData(data);

            // test(Graph);

            changeWindowSize();
            assignNodeColor();
        }




        function changeWindowSize(){
            mainGraph.onBackgroundClick(function(){
                if(!windowSize){
                    // mainGraph.width($(window).width())
                    mainGraph.height($(window).height())
                    var divWidth = document.getElementById('displayGraph').offsetWidth;
                    // mainGraph.width(1030)
                    mainGraph.width(divWidth)
                    windowSize = true;
                } else {
                    var divWidth = document.getElementById('displayGraph').offsetWidth;
                    // mainGraph.width(1030)
                    mainGraph.width(divWidth)
                    mainGraph.height(500)
                    // mainGraph.height($(window).height())
                    windowSize = false;
                }
            });
        }


        function assignNodeColor(){
            var count = 1;

            var tempColor = colorArray;

            mainGraph.nodeColor(

                nodeapp => {
                    
                    for(var i = 0; i < groupArray.length; i++){
                        for(var j = 0; j < groupArray[i].length; j++){
                            if(nodeapp.id == groupArray[i][j]){

                                return colorArray[i];
                            }
                        }

                        count++;
                    }
                    
                    return "black";
                }

            );
        }

     
