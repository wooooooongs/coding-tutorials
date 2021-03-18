(function() {
    function makeRoot() {
        let div = document.createElement("div");
        div.id = "aaaaa"
        div.style.width = "100%";
        return div;
    }

    function makeDiv(url) {
        let div = document.createElement("div");
        div.style.width = "7%";
        div.style.float = "left";
        div.style.padding = "5px;";

        let imgTag = document.createElement("img");
        imgTag.src = url;
        imgTag.style.width = "100%";
        imgTag.style.height = "100%";

        div.appendChild(imgTag);
        return div;
    };

    // 모든 div 숨기기
    let divDoms = document.getElementsByTagName("div");
    for(let i = 0; i < divDoms.length; i++){
        let dom = divDoms[i];
        dom.style.display = "none";
    };

    // img 담을 idv 생성
    let root = makeRoot();
    // 모든 img 찾기
    let imgDoms = document.getElementsByTagName("img");

    for(let i = 0; i < imgDoms.length; i++){
        let dom = imgDoms[i];
        let url = dom.getAttribute("src");
        let divDom = makeDiv(url);
        root.appendChild(divDom);
    }
    document.body.append(root); // body에 추가
})();
