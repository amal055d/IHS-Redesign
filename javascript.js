let theData;



document.addEventListener("DOMContentLoaded", start);

function start() {

    hentData();
}

async function hentData() {
    let url = "http://signemariemathiasen.dk/kea/2_sem/09.05.01_ihs/wordpress/wp-json/wp/v2/etFag?per_page=100";

    let jsonData = await fetch(url);
    etFag = await jsonData.json();
    console.log("hentData(json)");
    loadGlobalContent();
    vis(etFag);


}

function vis(data) {
    console.log(data);
}

function loadGlobalContent() {
    loadHeaderContent();
    loadFooterContent();
    console.log("loadGlobalContent");
}


function loadHeaderContent() {
    console.log("loadHeader");
    if (id == 264) {
        document.querySelector("#logo img").src = etFag.media.guid;
    }
}

function loadFooterContent() {
    console.log("loadFooter");
    //document.querySelector()
}

function loadFrontContent() {
    console.log("loadForside");
}

function loadFagContent() {
    console.log("loadFag");
}

function loadPratiskContent() {
    console.log("loadPratisk");
}

function loadTilmeldingContent() {
    console.log("loadTilmeling");
}
