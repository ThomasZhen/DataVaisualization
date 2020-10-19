// --------------- End of getting the values from backend ------------
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


                    for(var i = 0; i < temp.length; i++){
                        if(temp[i] == "Line Chart"){
                            $('#chart1').empty();
                            drawLineChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Line Chart"){
                            $('#chart1').empty();
                             document.getElementById("chart1").style.height = '0px';               
                        }

                        if(temp[i] == "Bar Chart"){
                            drawBarChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Bar Chart"){
                            $('#chart2').empty();
                            document.getElementById("chart2").style.height = '0px';
                        }

                        if(temp[i] == "Area Chart"){
                            drawAreaChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Area Chart"){
                            $('#chart3').empty();
                            document.getElementById("chart3").style.height = '0px';
                        }


                        if(temp[i] == "Stepped Area Chart"){
                            drawSteppedAreaChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Stepped Area Chart"){
                            $('#chart4').empty();
                            document.getElementById("chart4").style.height = '0px';
                        }


                        if(temp[i] == "Column Chart"){
                            drawColumnChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Column Chart"){
                            $('#chart5').empty();
                            document.getElementById("chart5").style.height = '0px';
                        }


                        if(temp[i] == "Combo Chart"){
                            drawComboChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Combo Chart"){
                            $('#chart6').empty();
                            document.getElementById("chart6").style.height = '0px';
                        }

                    }



                    // I think you can do it here because everything will be ready!

                // for(var i = 0; i < listCharts.length; i++){
                //     // console.log(listCharts[i]);
                //     if(listCharts[i] != 0){

                //         // console.log("listCharts[i] here is");
                //         // console.log(listCharts[i]);


                //         var ttxx = listCharts[i];

                //         // console.log("The listCharts[i] is");
                //         // console.log(listCharts[i]);
                //         // console.log("i is");
                //         // console.log(i);

                //         var temp;
                //         var iTractor = i;

                //         /*
                //             The real problem is, how do I know which chart got clicked on
                //             You did add the event, but you can extract the correct getSelection();
                //             Once you get the getSelection() working, everything will be fine.


                //             Once the i value is gone to the end, you won't even be able to add the listerner.
                //             But when you break it, the i value retains, I don't know why. 
                //         */

                //         google.visualization.events.addListener(listCharts[i], 'select', 
                //             function () {
                //                 // console.log("i you clicked on is");
                //                 // console.log(i);

                //                 // console.log("listCharts[i] is");
                //                 // console.log(listCharts[i]);


                //                 console.log("You clicked on a chart" + listCharts[i]);

                //                 // var selection = listCharts[i].getSelection();
                //                 // console.log("Selection is");
                //                 // console.log(selection);
                //                 // temp = selection;
                //                 // lineDisappear(listCharts[i], listDatas[i], listOptions[i], listColumns[i], listSeries[i], selection);
                //                 for(var j = 0; j < listCharts.length; j++){


                //                     // console.log("ttxx is");
                //                     // console.log(ttxx);

                //                     // console.log("listCharts[j] is");
                //                     // console.log(listCharts[j]);

                //                     // console.log("listCharts[j] is");
                //                     // console.log(listCharts[j] === ttxx);


                //                     // console.log("In here i is");
                //                     // console.log(iTractor);

                //                         // if(j != i && listCharts[j] != 0){
                //                     // if(listCharts[j] != 0){
                //                         // if(listCharts[j] != 0 && listCharts[j] != listCharts[i]){

                //                         // console.log("j is");
                //                         // console.log(j);
                //                         // lineDisappear(listCharts[j], listDatas[j], listOptions[j], listColumns[j], listSeries[j], temp);
                                    
                //                     // }

                //                 }

                //         });

                //         // console.log("You are break;");

                //         // break;
                //     }
                // } // end of the for loop 

// google.visualization.events.addListener(lineChart, 'select', 
//                 function (){
//                     selectHandler(lineChart, lineData, option1, option2, name1, name2);
//                 }
// );


                if(lineChart != undefined){
                    google.visualization.events.addListener(lineChart, 'select', 
                        function () {

                            var selection = lineChart.getSelection();
                            
                            lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection);
                            selectHandler(lineChart, lineData, newOption1, newOption2, newName1, newName2, selection);

                            if(barChart != undefined){
                                lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection);
                                selectHandler(barChart, barData, newOption1, newOption2, newName1, newName2, selection);
                            }
                            if(areaChart != undefined){
                                lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection);
                                selectHandler(areaChart, areaData, newOption1, newOption2, newName1, newName2, selection);
                            }
                            if(steppedAreaChart != undefined){
                                lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection);
                                selectHandler(steppedAreaChart, steppedAreaData, newOption1, newOption2, newName1, newName2, selection);
                            }
                            if(columnChart != undefined){
                                lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection);
                                selectHandler(columnChart, columnData, newOption1, newOption2, newName1, newName2, selection);
                            }
                            if(comboChart != undefined){
                                lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection);
                                selectHandler(comboChart, comboData, newOption1, newOption2, newName1, newName2, selection);
                            }

                        }
                    );
                }
                if(barChart != undefined){
                    google.visualization.events.addListener(barChart, 'select', 
                        function () {

                            var selection = barChart.getSelection();
                            
                            lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection);
                            
                            if(lineChart != undefined){
                                lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection);
                            }
                            if(areaChart != undefined){
                                lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection);
                            }
                            if(steppedAreaChart != undefined){
                                lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection);
                            }
                            if(columnChart != undefined){
                                lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection);
                            }
                            if(comboChart != undefined){
                                lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection);
                            }

                        }
                    );
                }
                if(areaChart != undefined){
                    google.visualization.events.addListener(areaChart, 'select', 
                        function () {

                            var selection = areaChart.getSelection();
                            
                            lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection);
                            
                            if(lineChart != undefined){
                                lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection);
                            }
                            if(barChart != undefined){
                                lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection);
                            }
                            if(steppedAreaChart != undefined){
                                lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection);
                            }
                            if(columnChart != undefined){
                                lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection);
                            }
                            if(comboChart != undefined){
                                lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection);
                            }

                        }
                    );
                }
                if(steppedAreaChart != undefined){
                    google.visualization.events.addListener(areaChart, 'select', 
                        function () {

                            var selection = steppedAreaChart.getSelection();
                            
                            lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection);
                            
                            if(lineChart != undefined){
                                lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection);
                            }
                            if(barChart != undefined){
                                lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection);
                            }
                            if(areaChart != undefined){
                                lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection);
                            }
                            if(columnChart != undefined){
                                lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection);
                            }
                            if(comboChart != undefined){
                                lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection);
                            }

                        }
                    );
                }
                if(columnChart != undefined){
                    google.visualization.events.addListener(columnChart, 'select', 
                        function () {

                            var selection = columnChart.getSelection();
                            
                            lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection);

                            if(lineChart != undefined){
                                lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection);
                            }
                            if(barChart != undefined){
                                lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection);
                            }
                            if(steppedAreaChart != undefined){
                                lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection);
                            }
                            if(areaChart != undefined){
                                lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection);
                            }
                            if(comboChart != undefined){
                                lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection);
                            }

                        }
                    );
                }
                if(comboChart != undefined){
                    google.visualization.events.addListener(comboChart, 'select', 
                        function () {

                            var selection = comboChart.getSelection();
                            
                             lineDisappear(comboChart, comboData, comboOption, comboColumns, comboSeries, selection);

                            if(lineChart != undefined){
                                lineDisappear(lineChart, lineData, lineOption, lineColumns, lineSeries, selection);
                            }
                            if(barChart != undefined){
                                lineDisappear(barChart, barData, barOption, barColumns, barSeries, selection);
                            }
                            if(steppedAreaChart != undefined){
                                lineDisappear(steppedAreaChart, steppedAreaData, steppedAreaOption, steppedAreaColumns, steppedAreaSeries, selection);
                            }
                            if(areaChart != undefined){
                                lineDisappear(areaChart, areaData, areaOption, areaColumns, areaSeries, selection);
                            }
                            if(columnChart != undefined){
                                lineDisappear(columnChart, columnData, columnOption, columnColumns, columnSeries, selection);
                            }
                        }
                    );
                }





                dataFacts(option1, option2, name1, name2, tempValues);

                });
            }

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

            lineData.addRows(tempRows);

            var options = {
                // focusTarget: 'category',

                // tooltip:{
                //     showColorCode: true,
                // },
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],

                // chart: {
                    title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
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




            // google.visualization.events.addListener(lineChart, 'select', 
                // function () {
                    // lineDisappear(lineChart, data, options, lineColumns, lineSeries);
            // });


            // google.visualization.events.addListener(lineChart, 'select', 
            //     function () {
            //         // listCharts[0] = "lineChart";
            //         // listDatas[0] = "lineData";
            //         // listColumns[0] = "lineColumns";
            //         // listSeries[0] = "lineSeries";
            //         listCharts[0] = lineChart;
            //         listDatas[0] = lineData;
            //         listColumns[0] = lineColumns;
            //         listSeries[0] = lineSeries;

            //         prototype(options);
            //         // lineDisappear(lineChart, lineData, options, lineColumns, lineSeries);
            //     }
            // );


            // google.visualization.events.addListener(lineChart, 'select', 
            //     function () {
            //         lineDisappear(lineChart, lineData, options, lineColumns, lineSeries);
            // });
            
 
            // lineDisappear(lineChart, lineData, options, lineColumns, lineSeries);

            listCharts[0] = lineChart;
            listDatas[0] = lineData;
            listOptions[0] = options;
            listColumns[0] = lineColumns;
            listSeries[0] = lineSeries;


            // google.visualization.events.addListener(lineChart, 'select', 
            //     function (){
            //         selectHandler(lineChart, lineData, option1, option2, name1, name2);
            //     }
            // );



        } // end of the drawLineChart function 





        function prototype(options){
            for(var i = 0; i < listCharts.length; i++){
                if(listCharts[i] != 0){
                    // if(listCharts[i] == "lineChart"){
                    //     console.log("You come here for line chart");
                    //     console.log("For the lineChart, The options is");
                    //     console.log(options);
                    //     lineDisappear(lineChart, lineData, options, lineColumns, lineSeries);
                    // }
                    // if(listCharts[i] == "barChart"){
                    //     console.log("You come here for bar chart");
                    //     console.log("For the barChart, The options is");
                    //     console.log(options);
                    //     lineDisappear(barChart, barData, options, barColumns, barSeries);
                    // }

                    console.log("The listCharts[i] is");
                    console.log(listCharts[i]);
                    console.log("i is");
                    console.log(i);

                    lineDisappear(listCharts[i], listDatas[i], options, listColumns[i], listSeries[i]);

                    for(var j = 0; j < listCharts.length; j++){

                        if(j != i && listCharts[j] != 0){
                            console.log("j is");
                            console.log(j);
                            console.log(listCharts[j]);
                            google.visualization.events.addListener(listCharts[j], 'select', 
                                function () {
                                    lineDisappear(listCharts[j], listDatas[j], options, listColumns[j], listSeries[j]);
                            });
                        }
                    }
                    break;
                }
            }
        }




        function lineDisappear(chart, data, options, columns, series, selection){
            
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
                    var view = new google.visualization.DataView(data);
                    view.setColumns(columns);
                    chart.draw(view, options);
                    }

                } else {
                    console.log("sel is empty");
                }

        }




        function selectHandler(chart, data, option1, option2, name1, name2, select){
                console.log("The chart is");
                console.log(chart);

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
                            return colorArray[columnNum - 1];
                        }
                    }

                    // return colorNames[Math.floor(Math.random() * 6)];
                    return "black";
                }


            );

        }

     


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


            barData = google.visualization.arrayToDataTable(arr);

            var options = {
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],



                chart: {
                    title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
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


            // google.visualization.events.addListener(barChart, 'select', 
            //     function () {
            //         // listCharts[1] = "barChart";
            //         // listDatas[1] = "barData";
            //         // listColumns[1] = "barColumns";
            //         // listSeries[1] = "barSeries";
            //         listCharts[1] = barChart;
            //         listDatas[1] = barData;
            //         listColumns[1] = barColumns;
            //         listSeries[1] = barSeries;


            //         prototype(options);
            //         // lineDisappear(barChart, barData, options, barColumns, barSeries);
            //     }
            // );


            listCharts[1] = barChart;
            listDatas[1] = barData;
            listOptions[1] = options;
            listColumns[1] = barColumns;
            listSeries[1] = barSeries;


            // google.visualization.events.addListener(chart, 'select', selectHandler);
            //  google.visualization.events.addListener(barChart, 'select', 
            //     function (){
            //         selectHandler(barChart, barData, option1, option2, name1, name2);
            // });



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


             areaData = google.visualization.arrayToDataTable(temp);


            var options = {
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],

                title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
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



            listCharts[2] = areaChart;
            listDatas[2] = areaData;
            listOptions[2] = options;
            listColumns[2] = areaColumns;
            listSeries[2] = areaSeries;




            // google.visualization.events.addListener(areaChart, 'select', 
            //     function () {
            //         lineDisappear(areaChart, areaData, options, areaColumns, areaSeries);
            // });


            // google.visualization.events.addListener(areaChart, 'select', 
            //     function (){
            //         selectHandler(areaChart, areaData, option1, option2, name1, name2);
            // });


            // --------- Testing Code ------------



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

            steppedAreaData = google.visualization.arrayToDataTable(temp);


            var options = {
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],

                // title: 'The decline of \'The 39 Steps\'',
                // vAxis: {title: 'Accumulated Rating'},
                // isStacked: true

                title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                
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


            listCharts[3] = steppedAreaChart;
            listDatas[3] = steppedAreaData;
            listOptions[3] = options;
            listColumns[3] = steppedAreaColumns;
            listSeries[3] = steppedAreaSeries;



            // google.visualization.events.addListener(steppedAreaChart, 'select', 
            //     function () {
            //         lineDisappear(steppedAreaChart, steppedAreaData, options, steppedAreaColumns, steppedAreaSeries);
            // });


            // google.visualization.events.addListener(steppedAreaChart, 'select', 
            //     function (){
            //         selectHandler(steppedAreaChart, steppedAreaData, option1, option2, name1, name2);
            // });




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

            columnData = google.visualization.arrayToDataTable(temp);


            var options = {
            // chart: {
            // title: 'Company Performance',
            // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
              colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],



              title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                
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



        listCharts[4] = columnChart;
        listDatas[4] = columnData;
        listOptions[4] = options;
        listColumns[4] = columnColumns;
        listSeries[4] = columnSeries;



        // google.visualization.events.addListener(columnChart, 'select', 
        //     function () {
        //         lineDisappear(columnChart, columnData, options, columnColumns, columnSeries);
        // });



        // google.visualization.events.addListener(columnChart, 'select', 
        //     function (){
        //         selectHandler(columnChart, columnData, option1, option2, name1, name2);
        // });



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

            comboData = google.visualization.arrayToDataTable(temp);


            var options = {
             // title : 'Monthly Coffee Production by Country',
            // vAxis: {title: 'Cups'},
            // hAxis: {title: 'Month'},

          colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],



          seriesType: 'bars',
          series: {5: {type: 'line'}},

           title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                
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


        listCharts[5] = comboChart;
        listDatas[5] = comboData;
        listOptions[5] = options;
        listColumns[5] = comboColumns;
        listSeries[5] = comboSeries;
          

        // google.visualization.events.addListener(comboChart, 'select', 
        //     function () {
        //         lineDisappear(comboChart, comboData, options, comboColumns, comboSeries);
        // });


        // google.visualization.events.addListener(comboChart, 'select', 
        //     function (){
        //         selectHandler(comboChart, comboData, option1, option2, name1, name2);
        // });




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


            var max = -1;
            var min = Number.MAX_SAFE_INTEGER;
            var index1 = -1;
            var index2 = -1;
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
            li1.style.color = "black";

            var li2 = document.createElement("li");

            li2.appendChild(document.createTextNode("The distribution ranges from " + smallest + " nodes to " + largest + " nodes, the difference is " + (largest - smallest) + " nodes"));
            li2.style.color = "black";

            var li3 = document.createElement("li");


            li3.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index1] + " represent over " + Math.floor(((max / totalNum) * 100))  + "% of all the nodes across all x axis attributes"));
            li3.style.color = "black";

            var li4 = document.createElement("li");

            li4.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index1] + " has the greates number of nodes for " + max + " nodes"));
            li4.style.color = "black";

            var li5 = document.createElement("li");

            li5.appendChild(document.createTextNode("The number of nodes of " + option2 + " " + name2[index1] + " has the greates number of nodes for " + min + " nodes"));
            li5.style.color = "black";

            ul.appendChild(t);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);


            document.getElementById("df").style.backgroundColor = "white";

            // document.getElementById("sel2").style.backgroundColor = "white";
        } // end of the dataFacts function


        function getNodeStatistics(){
            var inputVal = document.getElementById("nodeStatisticsInput").value;
            socket.emit('getNodeLinks', inputVal);
            socket.on('sendNodeLinks', function(data){

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


                nodeList.style.color = "black";
            });
        }   


        // The funciton that displays the data set
        function displayFunction(data){
            var node = data.node;
            mainNode = data.node;
            // var newNodeArray1 = nodeArray;


            var elem = document.getElementById('displayGraph');

            // var Graph = ForceGraph()(elem)
            mainGraph = ForceGraph()(elem)
            // Set the back ground color
            .backgroundColor('black')
            // Set the size of the nodes
            .nodeRelSize(6)
            // node of the same group have the same color based on the user

            .nodeAutoColorBy('user')

        
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
            .width(1030)
            // Set the height
            .height(500)

            // Set how spread out the graph looks like
            // .d3AlphaDecay(0.0114) // 0.0228



            .graphData(data);

            // test(Graph);

            changeWindowSize();
        }




        function changeWindowSize(){
            mainGraph.onBackgroundClick(function(){
                if(!windowSize){
                    // mainGraph.width($(window).width())
                    mainGraph.height($(window).height())
                    windowSize = true;
                } else {
                    mainGraph.width(1030)
                    mainGraph.height(500)
                    windowSize = false;
                }
            });
        }
