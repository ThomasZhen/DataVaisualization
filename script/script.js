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



        // function getOpt(){
        //     // console.log(document.getElementById("chartOption").length);
        //     var len = document.getElementById("chartOption").length;
        //     for(var i = 0; i < len; i++){
        //         if(document.getElementById("chartOption").options[i].selected == true){
        //             if(document.getElementById("chartOption").options[i].innerHTML == "Line Chart"){
        //                 return "Line Chart";
        //             }
        //             if(document.getElementById("chartOption").options[i].innerHTML == "Bar Chart"){
        //                 return "Bar Chart";
        //             }
        //             if(document.getElementById("chartOption").options[i].innerHTML == "Area Chart"){
        //                 return "Area Chart";
        //             }
        //             if(document.getElementById("chartOption").options[i].innerHTML == "Stepped Area Chart"){
        //                 return "Stepped Area Chart";
        //             }
        //             if(document.getElementById("chartOption").options[i].innerHTML == "Column Chart"){
        //                 return "Column Chart";
        //             }
        //             if(document.getElementById("chartOption").options[i].innerHTML == "Combo Chart"){
        //                 return "Combo Chart";
        //             }
        //         }
        //     }
        // }





        function getOpt(){
            /*
            <form class="buttonStyle" id="chartOption">
                    <input type="checkbox" id="line chart">
                    <label for="line chart">Line Chart</label><br>
                    <input type="checkbox" id="bar chart">
                    <label for="bar chart">Bar Chart</label><br>
                    <input type="checkbox" id="area chart">
                    <label for="area chart">Area Chart</label><br>
                    <input type="checkbox" id="stepped area chart">
                    <label for="stepped area chart">Stepped Area Chart</label><br>
                    <input type="checkbox" id="column chart">
                    <label for="column chart">Column Chart</label><br>
                    <input type="checkbox" id="combo chart">
                    <label for="combo chart">Combo Chart</label><br>
            </form>
            */
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

        // function getBarChartOpt(){
            // if(document.getElementById("bar chart").checked == true){
            //     return "Bar Chart";
            // } else {
            //     return "Clear Bar Chart";
            // }
        // }

        // function getAreaChartOpt(){
            // if(document.getElementById("area chart").checked == true){
            //     return "Area Chart";
            // } else {
            //     return "Clear Area Chart";
            // }
        // }

        // function getSteppedAreaChartOpt(){
        //     if(document.getElementById("stepped area chart").checked == true){
        //         return "Stepped Area Chart";
        //     } else {
        //         return "Clear Stepped Area Chart";
        //     }
        // }

        // function getColumnChartOpt(){
        //     if(document.getElementById("column chart").checked == true){
        //         return "Column Chart";
        //     } else {
        //         return "Clear Column Chart";
        //     }
        // }

        // function getComboChartOpt(){
        //     if(document.getElementById("combo chart").checked == true){
        //         return "Combo Chart";
        //     }  else {
        //         return "Clear Combo Chart";
        //     }
        // }


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

            /*
            <option>SetLinkVisibility</option>
            <option>SetLinkColor</option>
            <option>SetLinkLineDash</option>
            <option>SetLinkWidth</option>
            <option>SetLinkCurvature</option>
            <option>SetLinkDirectionalArrowLength</option>
            <option>SetLinkDirectionalArrowColor</option>
            <option>SetLinkDirectionalArrowRelPos</option>
            <option>SetLinkDirectionalParticles</option>
            <option>SetLinkDirectionalParticleSpeed</option>
            <option>SetLinkDirectionalParticleWidth</option>
            <option>SetDirectionalParticleColor</option>
            */

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
                    // console.log("data is");
                    // console.log(data);
                    // console.log("option1 is");
                    // console.log(option1);
                    // console.log("option2 is");
                    // console.log(option2);
                    // console.log("name1 is");
                    // console.log(name1);
                    // console.log("name2 is");
                    // console.log(name2);



                    // You also need the names of the chosen options
                    var tempValues = data;

                    var temp = getOpt();


                    // console.log("option1 is:");
                    // console.log(option1);
                    // console.log("name1 is:");
                    // console.log(name1);
                    // console.log("option2 is:");
                    // console.log(option2);
                    // console.log("name2 is:");
                    // console.log(name2);



                    for(var i = 0; i < temp.length; i++){
                        if(temp[i] == "Line Chart"){
                            drawLineChart(option1, option2, name1, name2, tempValues);
                        } else if(temp[i] == "Clear Line Chart"){
                            $('#chart1').empty();
                             document.getElementById("chart1").style.height = '0px';
                             // document.getElementById("chart1").style.width = '0px';
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


                    dataFacts(option1, option2, name1, name2, tempValues);

                });
            }

        }


    

        function drawLineChart(option1, option2, name1, name2, tempValues) {


            var data = new google.visualization.DataTable();

            // First add option1
            data.addColumn('string', option1);


            // For the line names
            for(var i = 0; i < name2.length; i++){
                data.addColumn('number', name2[i]);
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

            // console.log(option1);
            // console.log(option2);
            // console.log(name1);
            // console.log(name2);
            // console.log("The tempValues is: ");
            // console.log(tempValues);
            // console.log("The tempRows is ");
            // console.log(tempRows);


            data.addRows(tempRows);

            // var colorArray = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green',];
            // console.log("The colorArray is ");
            // console.log(colorArray);

            // column number - 1 is the right color 


            var options = {
                // focusTarget: 'category',

                // tooltip:{
                //     showColorCode: true,
                // },
                colors:['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gold', 'dark green', 'LightSalmon', 'MediumPurple', 'OrangeRed', 'SpringGreen', 'YellowGreen'],

                chart: {
                    title: "Number of nodes that have both " + option1 + " and " + option2 + " properties",
                    // subtitle: 'in millions of dollars (USD)'
                    // backgroundColor: 'black'

                },

                

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

            var chart = new google.charts.Line(document.getElementById('chart1'));
            // lineChart = new google.charts.Line(document.getElementById('chart1'));

            // chart1 = new google.charts.Line(document.getElementById('chart1'));

            // document.getElementById('chart').style.color = "black";
            // document.getElementById("sel2").style.color = "white";

            chart.draw(data, google.charts.Line.convertOptions(options));
            // lineChart.draw(data, google.charts.Line.convertOptions(options));


            // --------- Testing code -----------
            //  var hideSal = document.getElementById("hideSales");
            // hideSal.onclick = function()
            // {
            //     view = new google.visualization.DataView(data);
            //     view.hideColumns([1]); 
            //     chart.draw(view, options);
            // }
            // var hideExp = document.getElementById("hideExpenses");
            // hideExp.onclick = function()
            // {
            //     view = new google.visualization.DataView(data);
            //     view.hideColumns([2]); 
            //     chart.draw(view, options);
            // }


            // ---------- Make the line disappear ------------

            var columns = [];
            var series = {};
            for (var i = 0; i < data.getNumberOfColumns(); i++) {
                columns.push(i);
                if (i > 0) {
                    series[i - 1] = {};
                }
            }
             google.visualization.events.addListener(chart, 'select', function () {
                var sel = chart.getSelection();
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
                }
            });

            // for (var i = 0; i < data.getNumberOfColumns(); i++) {
            //     lineColumns.push(i);
            //     if (i > 0) {
            //         lineSeries[i - 1] = {};
            //     }
            // }


            // google.visualization.events.addListener(lineChart, 'select', 
            //     function () {
            //         lineDisappear(lineChart, data, options, lineColumns, lineSeries);
            // });



            // ------------- Make the line dispear ----------
            google.visualization.events.addListener(chart, 'select', selectHandler);
            // google.visualization.events.addListener(lineChart, 'select', 
            //     function (){
            //         selectHandler(lineChart, data, option1, option2, name1, name2);
            // });




            // google.visualization.events.addListener(chart, 'click', function (e) {
            //     var legendPrefix = 'legendentry#';

            //     // Check if clicked legend entry
            //     if (e.targetID.indexOf(legendPrefix) == 0) {
            //         // index of clicked legend entry
            //         var idx = e.targetID.substring(legendPrefix.length);

            //         // Show line
            //         if (option.series[idx].lineDashStyle && option.series[idx].lineDashStyle[0] == 0) {
            //             option.series[idx].lineDashStyle = option.series[idx].originalLineDashStyle;
            //         }
            //         // Hide line
            //         // ( Set the first value of lineDashStyle as 0,
            //         //   and second as something that greater than 0 )
            //         else {  
            //             option.series[idx].originalLineDashStyle = option.series[idx].lineDashStyle;
            //             option.series[idx].lineDashStyle = [0, 1];
            //         }

            //         chart.draw(data, option);
            //     }
            // });


             function selectHandler(){
                // console.log("The user selected" + chart.getSelection().length + ' items.');
                // The selection variable contains the selected entities

                var columnNumber;

                var selection = chart.getSelection();


                // console.log("selection is");
                // console.log(selection);

                // console.log("data is");
                // console.log(data);


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
                        // console.log(property1);
                        // console.log(property2);

                        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';

                        columnNumber = item.column;

                        // console.log("The type of column number is");
                        // console.log(typeof item.column);

                        // columnNumber = parseInt(item.column);

                        // alert(message);
                        // console.log(message);

                        // send the two property to the backend
                        // socket.emit('selectedOption', i);



                        // console.log("option1 is");
                        // console.log(option1);
                        // console.log("option2 is");
                        // console.log(option2);
                        // console.log("property1 is");
                        // console.log(property1);
                        // console.log("property2 is");
                        // console.log(property2);


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
                    // if (message == '') {
                    //     message = 'nothing';
                    // }
                    if(message != ''){
                        // alert('You selected ' + message);
                    }
                }


                // If you want to change the node color, you have to change them here.
                // So you must seed the arrary of relative nodes back here;
                socket.on('changeNodes', function(resultArray){
                   
                    // var elem = document.getElementById('displayGraph');
                    // mainGraph = ForceGraph()(elem)
                    // .nodeColor(nodeArray => nodeArray.id == nodeArray.id ? "whie" : "red")
                    // .graphData(data);

                    // colorSignal = true;
                    // console.log("In return back fucntion, nodeArray is");
                    // console.log(nodeArray);

                    
                    countTotalNodes = 0;
                    nodeArray = resultArray;
                    // displayFunction(content);
                    testFunction(nodeArray, columnNumber);
                    
                });

            } // end of selectLineChartHandler function 


        } // end of the drawLineChart function




        // function lineDisappear(chart, data, options, columns, series){
        //     var sel = chart.getSelection();
        //         // if selection length is 0, we deselected an element
        //         if (sel.length > 0) {
        //             // if row is undefined, we clicked on the legend
        //             if (sel[0].row === null) {
        //             var col = sel[0].column;
        //             if (columns[col] == col) {
        //                 // hide the data series
        //                 columns[col] = {
        //                     label: data.getColumnLabel(col),
        //                     type: data.getColumnType(col),
        //                     calc: function () {
        //                         return null;
        //                     }
        //                 };

        //                 // grey out the legend entry
        //                 series[col - 1].color = '#CCCCCC';
        //             } else {
        //                 // show the data series
        //                 columns[col] = col;
        //                 series[col - 1].color = null;
        //             }
        //             var view = new google.visualization.DataView(data);
        //             view.setColumns(columns);
        //             chart.draw(view, options);
        //             }
        //         }
        // }


        


        function testFunction(data, columnNum) {
            /*
            [4021, 3982]
            */

            // console.log("In testFunction data is");
            // console.log(data);
            // console.log("In testFunction columnNum is");
            // console.log(columnNum);

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
                // ------------  working -------------



                // function test(nodeapp){
                //       if(countTotalNodes < totalNodes){
                //         for(var i = 0; i < tempArray.length; i++){
                //             if(nodeapp.id == tempArray[i]){
                //                 countTotalNodes = countTotalNodes + 1;
                //                 return "white";
                //             }
                //         }

                //         countTotalNodes = countTotalNodes + 1;
                //         return colorNames[Math.floor(Math.random() * 6)];
                //       }
                // }


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


            var data = google.visualization.arrayToDataTable(arr);

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

            var chart = new google.charts.Bar(document.getElementById('chart2'));

            chart.draw(data, google.charts.Bar.convertOptions(options));


          
            google.visualization.events.addListener(chart, 'select', selectHandler);



            function selectHandler(){
                var columnNumber;

                // console.log("The user selected" + chart.getSelection().length + ' items.');
                var selection = chart.getSelection();
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
                        // console.log(property1);
                        // console.log(property2);

                        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';


                        columnNumber = item.column;

                        // send the two property to the backend
                        // socket.emit('selectedOption', i);
                        socket.emit('crossLinking', option1, option2, property1, property2);

                    } else if (item.row != null) {
                        // var str = data.getFormattedValue(item.row, 0);
                        // message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a row but no column");



                    } else if (item.column != null) {
                        // var str = data.getFormattedValue(0, item.column);
                        // message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a column but no row");


                    }
                    // if (message == '') {
                    //     message = 'nothing';
                    // }
                    if(message != ''){
                        // alert('You selected ' + message);
                    }
                }


                // If you want to change the node color, you have to change them here.
                // So you must seed the arrary of relative nodes back here;
                socket.on('changeNodes', function(resultArray){
                   
                    // var elem = document.getElementById('displayGraph');
                    // mainGraph = ForceGraph()(elem)
                    // .nodeColor(nodeArray => nodeArray.id == nodeArray.id ? "whie" : "red")
                    // .graphData(data);

                    // colorSignal = true;
                    // console.log("In return back fucntion, nodeArray is");
                    // console.log(nodeArray);

                    countTotalNodes = 0;
                    nodeArray = resultArray;
                    // displayFunction(content);
                    testFunction(nodeArray, columnNumber);
                    
                });

            } // end of selectLineChartHandler function 






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


             var data = google.visualization.arrayToDataTable(temp);


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


            var chart = new google.visualization.AreaChart(document.getElementById('chart3'));
            chart.draw(data, options);




            // --------  Testing Code -----------


            var columns = [];
            var series = {};
            for (var i = 0; i < data.getNumberOfColumns(); i++) {
                columns.push(i);
                if (i > 0) {
                    series[i - 1] = {};
                }
            }

            google.visualization.events.addListener(chart, 'select', function () {
                var sel = chart.getSelection();
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
                }
            });


            // --------- Testing Code ------------



            google.visualization.events.addListener(chart, 'select', selectHandler);



            function selectHandler(){
                var columnNumber;

                // console.log("The user selected" + chart.getSelection().length + ' items.');
                var selection = chart.getSelection();
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
                        // console.log(property1);
                        // console.log(property2);

                        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';

                        columnNumber = item.column;

                        // send the two property to the backend
                        // socket.emit('selectedOption', i);
                        socket.emit('crossLinking', option1, option2, property1, property2);

                    } else if (item.row != null) {
                        // var str = data.getFormattedValue(item.row, 0);
                        // message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a row but no column");



                    } else if (item.column != null) {
                        // var str = data.getFormattedValue(0, item.column);
                        // message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a column but no row");


                    }
                    // if (message == '') {
                    //     message = 'nothing';
                    // }
                    if(message != ''){
                        // alert('You selected ' + message);
                    }
                }


                // If you want to change the node color, you have to change them here.
                // So you must seed the arrary of relative nodes back here;
                socket.on('changeNodes', function(resultArray){
                   
                    // var elem = document.getElementById('displayGraph');
                    // mainGraph = ForceGraph()(elem)
                    // .nodeColor(nodeArray => nodeArray.id == nodeArray.id ? "whie" : "red")
                    // .graphData(data);

                    // colorSignal = true;
                    // console.log("In return back fucntion, nodeArray is");
                    // console.log(nodeArray);

                    countTotalNodes = 0;
                    nodeArray = resultArray;
                    // displayFunction(content);
                    testFunction(nodeArray, columnNumber);
                    
                });

            } // end of selectLineChartHandler function 



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

             var data = google.visualization.arrayToDataTable(temp);


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

            var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart4'));
            chart.draw(data, options);


            // ----------  Testing Code -------------



            
            var columns = [];
            var series = {};
            for (var i = 0; i < data.getNumberOfColumns(); i++) {
                columns.push(i);
                if (i > 0) {
                    series[i - 1] = {};
                }
            }

            google.visualization.events.addListener(chart, 'select', function () {
                var sel = chart.getSelection();
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
                }
            });







            

            // ---------   Testing Code ------------




            google.visualization.events.addListener(chart, 'select', selectHandler);



            function selectHandler(){
                var columnNumber; 

                // console.log("The user selected" + chart.getSelection().length + ' items.');
                var selection = chart.getSelection();
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
                        // console.log(property1);
                        // console.log(property2);

                        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';


                        columnNumber = item.column;

                        // send the two property to the backend
                        // socket.emit('selectedOption', i);
                        socket.emit('crossLinking', option1, option2, property1, property2);

                    } else if (item.row != null) {
                        // var str = data.getFormattedValue(item.row, 0);
                        // message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a row but no column");



                    } else if (item.column != null) {
                        // var str = data.getFormattedValue(0, item.column);
                        // message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a column but no row");


                    }
                    // if (message == '') {
                    //     message = 'nothing';
                    // }
                    if(message != ''){
                        // alert('You selected ' + message);
                    }
                }


                // If you want to change the node color, you have to change them here.
                // So you must seed the arrary of relative nodes back here;
                socket.on('changeNodes', function(resultArray){
                   
                    // var elem = document.getElementById('displayGraph');
                    // mainGraph = ForceGraph()(elem)
                    // .nodeColor(nodeArray => nodeArray.id == nodeArray.id ? "whie" : "red")
                    // .graphData(data);

                    // colorSignal = true;
                    // console.log("In return back fucntion, nodeArray is");
                    // console.log(nodeArray);

                    countTotalNodes = 0;
                    nodeArray = resultArray;
                    // displayFunction(content);
                    testFunction(nodeArray, columnNumber);
                    
                });

            } // end of selectLineChartHandler function 





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

             var data = google.visualization.arrayToDataTable(temp);


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

        var chart = new google.charts.Bar(document.getElementById('chart5'));

        chart.draw(data, google.charts.Bar.convertOptions(options));


        google.visualization.events.addListener(chart, 'select', selectHandler);



        function selectHandler(){
                var columnNumber;

                // console.log("The user selected" + chart.getSelection().length + ' items.');
                var selection = chart.getSelection();
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
                        // console.log(property1);
                        // console.log(property2);

                        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';

                        columnNumber = item.column;

                        // send these two property to the backend
                        // socket.emit('selectedOption', i);
                        socket.emit('crossLinking', option1, option2, property1, property2);

                    } else if (item.row != null) {
                        // var str = data.getFormattedValue(item.row, 0);
                        // message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a row but no column");



                    } else if (item.column != null) {
                        // var str = data.getFormattedValue(0, item.column);
                        // message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a column but no row");


                    }
                    // if (message == '') {
                    //     message = 'nothing';
                    // }
                    if(message != ''){
                        // alert('You selected ' + message);
                    }
                }


                // If you want to change the node color, you have to change them here.
                // So you must seed the arrary of relative nodes back here;
                socket.on('changeNodes', function(resultArray){
                   
                    // var elem = document.getElementById('displayGraph');
                    // mainGraph = ForceGraph()(elem)
                    // .nodeColor(nodeArray => nodeArray.id == nodeArray.id ? "whie" : "red")
                    // .graphData(data);

                    // colorSignal = true;
                    // console.log("In return back fucntion, nodeArray is");
                    // console.log(nodeArray);

                    countTotalNodes = 0;
                    nodeArray = resultArray;
                    // displayFunction(content);
                    testFunction(nodeArray, columnNumber);
                    
                });

            } // end of selectLineChartHandler function 




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

             var data = google.visualization.arrayToDataTable(temp);


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


        var chart = new google.visualization.ComboChart(document.getElementById('chart6'));
        chart.draw(data, options);




           // ---------- Make the line disappear ------------

            var columns = [];
            var series = {};
            for (var i = 0; i < data.getNumberOfColumns(); i++) {
                columns.push(i);
                if (i > 0) {
                    series[i - 1] = {};
                }
            }

            google.visualization.events.addListener(chart, 'select', function () {
                var sel = chart.getSelection();
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
                }
            });

            // ------------- Make the line dispear ----------






        google.visualization.events.addListener(chart, 'select', selectHandler);



        function selectHandler(){
                var columnNumber;

                // console.log("The user selected" + chart.getSelection().length + ' items.');
                var selection = chart.getSelection();
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
                        // console.log(property1);
                        // console.log(property2);

                        message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';


                        columnNumber = item.column;

                        // send the two property to the backend
                        // socket.emit('selectedOption', i);
                        socket.emit('crossLinking', option1, option2, property1, property2);

                    } else if (item.row != null) {
                        // var str = data.getFormattedValue(item.row, 0);
                        // message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a row but no column");



                    } else if (item.column != null) {
                        // var str = data.getFormattedValue(0, item.column);
                        // message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';

                        alert("You have to click on a node");
                        // alert("You selected a column but no row");


                    }
                    // if (message == '') {
                    //     message = 'nothing';
                    // }
                    if(message != ''){
                        // alert('You selected ' + message);
                    }
                }


                // If you want to change the node color, you have to change them here.
                // So you must seed the arrary of relative nodes back here;
                socket.on('changeNodes', function(resultArray){
                   
                    // var elem = document.getElementById('displayGraph');
                    // mainGraph = ForceGraph()(elem)
                    // .nodeColor(nodeArray => nodeArray.id == nodeArray.id ? "whie" : "red")
                    // .graphData(data);

                    // colorSignal = true;
                    // console.log("In return back fucntion, nodeArray is");
                    // console.log(nodeArray);

                    countTotalNodes = 0;
                    nodeArray = resultArray;
                    // displayFunction(content);
                    testFunction(nodeArray, columnNumber);
                    
                });

            } // end of selectLineChartHandler function 




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


        /*
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
        


        <input class="buttonStyle" type="text" id="nodeStatisticsInput">
        <input class="buttonStyle" type="button" value="Submit"  onclick="getNodeStatistics()"/>
        */

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

            // console.log("nodeArray in display function");
            // console.log(nodeArray);

            // console.log("newNodeArray1 inside the function");
            // console.log(newNodeArray1);

            // console.log("Inside displayFunction");
            // console.log("the mainNode is");
            // console.log(mainNode);
            // console.log("the node is");
            // console.log(node);


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

            // .nodeColor(
            //     // node => node.id === '4036' ? 'red' : 'blue'
            //    nodeParameter => {

                    

            //         // if(countTotalNodes < totalNodes){

            //             // console.log("countTotalNodes is");
            //             // console.log(countTotalNodes);
            //             // console.log("nodeParameter is");
            //             // console.log(nodeParameter);


            //             // console.log("nodeArray inside the nodeColor function is");
            //             // console.log(nodeArray);


            //             // for(var i = 0; i < nodeArray.length; i++){
            //             //     console.log("nodeArray[i] is");
            //             //     console.log(nodeArray[i]);
            //             // }

            //             // var result; 

            //             for(var i = 0; i < nodeArray.length; i++){
            //                 // console.log("You are in the loop");

            //                 // console.log("nodeParameter is");
            //                 // console.log(nodeParameter);

            //                 // console.log("nodeArray inside the for loop is");
            //                 // console.log(nodeArray);
            //                 // console.log("The nodeArray length is");
            //                 // console.log(nodeArray.length);

            //                 // console.log("I is");
            //                 // console.log(i);
            //                 // console.log("-------");
                            
            //                 // console.log("nodeArray[0] is");
            //                 // console.log(nodeArray[0]);
            //                 // console.log("nodeArray[1] is");
            //                 // console.log(nodeArray[1]);


            //                 /*
            //                 It can only take one statements here
            //                 either return or assignment
                            
            //                 printing doesn't count as a statement
            //                 */


            //                 if(nodeArray[i] == nodeParameter.id) {
            //                     // console.log("You are in here 1");
            //                     // countTotalNodes = countTotalNodes + 1;
            //                     // console.log("If you do this, you won't see this line 1");
            //                     return "white";
                               

            //                     // ---------- correct --------
            //                     // console.log("The nodeArray[i] that match is");
            //                     // console.log(nodeArray[i]);
            //                     // countTotalNodes = countTotalNodes + 1;
            //                     // return "white";
            //                     // ---------- correct --------
                            
            //                 } else {
            //                     // console.log("You are in here 2");
            //                     // countTotalNodes = countTotalNodes + 1;
            //                     // console.log("If you do this, you won't see this line 2");
            //                     return "red";
            //                 }
            //             }
            //             // result = "red";
            //             // console.log("The value of result is");
            //             // console.log(result);

            //             // ----------- correct -----------
            //             // countTotalNodes = countTotalNodes + 1;
            //             // return "red";
            //             // ------------ correct ---------

            //             // console.log("But the node array is");
            //             // console.log(nodeArray);
            //             // console.log("The length of the node array is");
            //             // console.log(nodeArray.length);

            //             // You indeed will never see this line after you click a node
            //             // console.log("You will not see this line when you choose two properties");
            //             // countTotalNodes = countTotalNodes + 1;

            //         // }


            //         // console.log("The nodeParameter is");
            //         // console.log(nodeParameter);

            //         // if(colorSignal){
            //         //     // console.log("colorSignal is");
            //         //     // console.log(colorSignal);
            //         //     // console.log("You are in here");
            //         //     // console.log(data.id);
            //         //     console.log("nodeArray in the nodeColor function");
            //         //     console.log(nodeArray);
            //         //     console.log("the nodeParameter is");
            //         //     console.log(nodeParameter);
            //         //     // console.log();
            //         //     for(var i = 0; i < Object.keys(nodeParameter); i++){
            //         //         console.log("You are in the for loop");
            //         //         if(data.id == nodeArray[i]){
            //         //             return 'white';
            //         //         } else {
            //         //             return 'red';
            //         //         }
            //         //     }
            //         //     colorSignal = false;  
            //         // }

            //     }
                
            // )



            // show the label of the node, which is the description

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
