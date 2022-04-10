
// TOP
    function section_content_1(){
        // class
        const cls_content = document.createAttribute("class");
        cls_content.value = "content";
        //tag
        const section = document.createElement('section');
        section.setAttributeNode(cls_content);
        // output
        return document.body.appendChild(section);
    };


    function page_lnk() {
		section_content_1();
    };

	function set_class(value) {
        cls = document.createAttribute('class');
        cls.value = value;
        return cls;
    }
	
	const dom = {
        set_class: function(value){
            cls = document.createAttribute('class');
            cls.value = value;
            return cls;
        }
    };

// OTHER

document.getElementsById("footer").innerHTML = footer();
function footer(){
	var fcon = document.querySelector('footer');
	fcon.textContent = "<p>life is life</p>" + "</footer>";
	return fcon.textContent;
}// old bad way

let nodes=document.getElementById('notificationUnread').childNodes
nodes[nodes.length-1].nodeValue= "TES"


function skeleton_lnk_1(){
	const att_content = document.createAttribute("class");
	att_content.value = "content";

	let tag_content = document.createElement('section');
	tag_content.setAttributeNode(att_content);
	document.body.appendChild(tag_content);

	let tag_div_lnk = document.createElement('div');
	tag_div_lnk.class = "tab-content grid";
	document.querySelector(".content").appendChild(tag_div_lnk);
} // old bad way

const section_content2 = {
	att_class: function() {
		cls = document.createAttribute('class');
		cls.value = 'content';
		return cls},
	section: function() { return document.createElement('section')},
	set_att: function() { return this.section().setAttributeNode(this.att_class())},
	output: function() { return document.body.appendChild(this.section());}
};

function tab_content_1(){
	set_class('tab-content grid');
	div = document.createElement('div');
	section.setAttributeNode(cls);
	return document.querySelector(".content").appendChild(div)
}

function set_head_1(title){
	const title_tag = document.createElement("title");
	const title_value = document.createTextNode(title);
	title_tag.appendChild(title_value);
	document.head.appendChild(title_tag);
	document.head.append("body")
}

function set_tag_with_text(tag, text){
	el = document.createElement(tag);
	el_value = document.createTextNode(text);
	el.appendChild(el_value)
}

function set_tag(tag){
	return document.createElement(tag);
}

set_head: function(title){
	el = this.set_tag_with_text('title', title);
	document.head.appendChild(el);
	charset = document.createElement('meta');
	this.set_att('charset', 'utf-8');
	charset.setAttributeNode(att);
	document.head.appendChild(charset);
}