const obj = JSON.parse(text);
document.getElementById("json-dt").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;

document.getElementById("json-dt").innerHTML =
lnks.first + " " + lnks.second;

document.getElementsByClassName("code_web_tools")[0].href = my_links[0];
//console.log(my_links[0]);
//document.getElementById("lnk").href = my_links[0];
//document.getElementsByClassName("code_web_tools").length