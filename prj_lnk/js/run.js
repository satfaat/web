/*add links*/
const add_links = function(id_selector, list_of_links){
    for (let lnk in list_of_links){
        const anchor = document.createElement("a");
        document.getElementById(id_selector).appendChild(anchor);
        //anchor.title = "my title text";
        anchor.className = "btn_lnk_1";
        anchor.href = list_of_links[lnk].link;
        anchor.innerHTML = list_of_links[lnk].name;
        anchor.target = "_blank";
    }
}
add_links("sub_lnks-main", lnks_main);
add_links("sub_lnks-data", lnks_data);
add_links("sub_lnks-search", lnks_search);
add_links("sub_lnks-search_img", lnks_search_img);
add_links("sub_lnks-search_tor", lnks_search_tor);
add_links("sub_lnks-doc", lnks_doc);
add_links("sub_lnks-doc_cloud", lnks_doc_cloud);
add_links("sub_lnks-social", lnks_social);
add_links("sub_lnks-job", lnks_job);
add_links("sub_lnks-gms", lnks_gms);