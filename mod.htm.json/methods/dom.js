function head(title){
    const title_tag = document.createElement("title");
    const title_value = document.createTextNode(title);
    title_tag.appendChild(title_value);
    document.head.appendChild(title_tag);
    document.head.append("body")
}