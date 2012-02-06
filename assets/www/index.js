/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.
 * This software is available under the MIT License:
 * The MIT License
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function() {
    window.addEventListener('load', function() {
        document.getElementById('api-intro').style.display = 'block';
        
        var showApi = function(e) {
            var apiId = this.id;
            var divs = document.getElementsByClassName('api-div');   
            for(var j=0; j<divs.length; j++) { 
                divs[j].style.display='none';
            }
            var apiEl = document.getElementById('api-' + apiId);
            apiEl.style.display = 'block';
            scroll(0,0);
        };
        // add click to each api name / div
        var apiList = document.getElementById('sidebar').getElementsByTagName('a');
        for(var i=0; i< apiList.length; i++) { 
            apiList[i].addEventListener('click', showApi, false);
        }

        var $select = document.getElementById('subheader').getElementsByTagName('select')[0];
        if ($select) {
            $select.addEventListener('change', function(e) {
                var api = this.options[this.selectedIndex].value;
                //alert("value: " + api);
                
                var divs = document.getElementsByClassName('api-div');   
                for(var j=0; j<divs.length; j++) { 
                    divs[j].style.display='none';
                }
                document.getElementById('api-' + api).style.display = 'block';
                
            }, false);
        } else { alert("no select here"); }
        
    }, false);
}());
