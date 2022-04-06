/* Security */
var ml = {
    atSign: "@", firstPart: "sat",
    ispP1: "faat", ispP2: "ma",
    ispP3: "il.ru", mToPart1: "mai",
    mToPart2: "lto:",
    wholeAddress: function() { return this.firstPart + this.ispP1 + this.atSign + this.ispP2 + this.ispP3; },
    mt: function() { return this.mToPart1 + this.mToPart2; },
    hrefP1: function() { return "<a href =" + this.mt() + this.wholeAddress() + "> Пишите мне.</a>"; }
}; document.write( "<p> click here to email me </p>" + " " + ml.hrefP1() );