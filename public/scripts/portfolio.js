function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    // getBoundingClientRect = 要素の位置を端から計測して返す
    var elemtop = rect.top;
    //スクロール量を返す。
    document.documentElement.scrollTop = elemtop;
}