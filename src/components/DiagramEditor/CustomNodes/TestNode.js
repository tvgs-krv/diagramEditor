import $ from "jquery";
import draw2d from "draw2d";
import Connection from "../Connection";


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

    },

    onDrop:function(dropTarget, x, y, shiftKey, ctrlKey)
    {
        if(dropTarget instanceof draw2d.Connection) {
            let oldSource = dropTarget.getSource();
            let oldTarget = dropTarget.getTarget();

            debugger
            let insertionSource = this.getOutputPort(0)
            let insertionTarget = this.getInputPort(0)

            // ensure that oldSource ---> insertionTarget.... insertionSource ------>oldTarget
            //
            if (oldSource instanceof draw2d.InputPort){
                oldSource = dropTarget.getSource();
                oldTarget = dropTarget.getTarget();
            }

            let stack = this.getCanvas().getCommandStack();

            let cmd = new draw2d.command.CommandReconnect(dropTarget);
            cmd.setNewPorts(oldSource, insertionTarget);
            stack.execute(cmd);

            let additionalConnection = new Connection();
            let cmd2 = new draw2d.command.CommandConnect(oldTarget, insertionSource);
            console.log(oldTarget, insertionSource)
            cmd2.setConnection(additionalConnection);
            stack.execute(cmd2);
        }
    }
    // getSVG: function ()
    // {
    //
    //     return this.svgs[0];
    // }

})
