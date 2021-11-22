import $ from "jquery";
import draw2d from "draw2d";

export default draw2d.SVGFigure.extend({
    NAME: "TestNode",
    init: function (attr)
    {
        this._super(attr);

        this.svg = '<svg xmlns="http://www.w3.org/2000/svg" width="49.3" height="22.7" >\n' +
            '<path style="stroke:black; stroke-width:30; stroke-linejoin:round; stroke-linecap:round; fill:none" d="M0,176.47300927734375 L0,0.000009277343792746251 L370.592,176.47300927734375 L370.592,0.000009277343792746251 L0,176.47300927734375 " id="svg_2"/>\n' +
            '</svg>'

        this.svg2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.07 21.91"><path d="M.43,21.48V.43L44.64,21.48V.43L.43,21.48"/></svg>'

        this.createPort("output")
        this.createPort("input")
        this.setSVG(this.svg,500);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        raw2d.command.CommandType

    },

    // getSVG: function ()
    // {
    //
    //     return this.svgs[0];
    // }

})
