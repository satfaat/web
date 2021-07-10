
const tst_1 = function(){
    const obj = JSON.parse(text);
    document.getElementById("json-dt").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;

    document.getElementById("json-dt").innerHTML =
    lnks.first + " " + lnks.second;
}


const tst_2 = function(){
    document.getElementsByClassName("code_web_tools")[0].href = my_links[0];
    console.log(my_links[0]);
    document.getElementById("lnk").href = my_links[0];
    document.getElementsByClassName("code_web_tools").length
}


const add_links_1 = function(){
    let code_web_tools = document.getElementsByClassName("code_web_tools");
    for (let el in code_web_tools){
        const anchor = document.createElement("a");
        document.getElementById("tst-lnks").appendChild(anchor);
        code_web_tools[el].href = my_links[el].link;
        //code_web_tools[el].text = my_links[el].name;
        code_web_tools[el].innerHTML = my_links[el].name;
    }
}


const add_links_2 = function(){
    for (let lnk in my_links){
        const anchor = document.createElement("a");
        document.getElementById("tst-lnks").appendChild(anchor);
        //anchor.title = "my title text";
        anchor.className = "btn_lnk_1 code_web_tools";
        anchor.href = my_links[lnk].link;
        anchor.innerHTML = my_links[lnk].name;
        anchor.target = "_blank";
    }
}
add_links_2();
//add_links_1();