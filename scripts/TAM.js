/*TimeLine Ads Magic*/
var TAM = function () {
    this.AllItems = [];
    this.duration = 1000;
    this.animation = 'fade-in';
    this.delay = 600;
    this.animationtimingfunction = "linear";
};
TAM.prototype.PluginEnum = {
    TAManimationName: "tam-animationname",
    TAMDur: "tam-dur",
    TAMDelay: "tam-delay",
    TAMAnimationtimingfunction: "tam-animationtimingfunction",
    MillSecond: 'ms'

};

TAM.prototype.INIT = function () {

    this.AllItems = document.querySelectorAll('[TAM-AnimationName]');

    for (var key in this.AllItems) {
        {

            this.AllItems[key].className = 'animate';
            
            try {
                var attr = [];
                for (var i = 0; i < this.AllItems[key].attributes.length; i++) {
                    attr.push(this.AllItems[key].attributes[i])
                }
                this.AnimateSetAttribute(this.AllItems[key], attr);

            }
            catch (e) {

            }

        }
    }

}

TAM.prototype.AnimateSetAttribute = function (dom, styles) {
    for (attr in styles) {

        if (styles[attr].nodeName == this.PluginEnum.TAManimationName) {
            dom.style.animationName = styles[attr].value;
        }
        else if (styles[attr].nodeName == this.PluginEnum.TAMDur) {
            dom.style.animationDuration = styles[attr].value + this.PluginEnum.MillSecond;

        }
        else if (styles[attr].nodeName == this.PluginEnum.TAMDelay) {
            dom.style.animationDelay = styles[attr].value + this.PluginEnum.MillSecond;

        }
        else if (styles[attr].nodeName == this.PluginEnum.TAMAnimationtimingfunction) {
            dom.style.animationTimingFunction = styles[attr].value;

        }
    }
    dom.className = 'animated';

}


TAM.prototype.Refresh = function () {


}




