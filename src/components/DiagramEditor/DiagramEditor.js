import React, {useEffect, useLayoutEffect} from "react";
import $ from "jquery";
import * as jqueryLayout from "jquery-layout";
import draw2d from "draw2d";
import s from "../DiagramEditor/DiagramEditor.module.scss";
import View from "./View";
import Connection from "./Connection";
import DblClickCanvasPolicy from "./CustomNodes/DblClickCanvasPolicy";
import MyInterceptorPolicy from "./CustomNodes/MyInterceptorPolicy";


const DiagramEditor = () => {
    let diagramEditorCanvas;
    let appLayout;
    // mouse drag related variables
    let isDown=false;
    let startX,startY;

    let netPanningX=0;
    let netPanningY=0;

    useEffect(() =>
    {
        // const canvas = new draw2d.Canvas("canvas");
        const canvas = new View("canvas");
        // canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy(20, 1, "var(--grid-color)"));
        canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy());
        canvas.installEditPolicy(new draw2d.policy.canvas.SnapToInBetweenEditPolicy());
        canvas.installEditPolicy(new draw2d.policy.canvas.SnapToGeometryEditPolicy());
        canvas.installEditPolicy(new draw2d.policy.canvas.SnapToCenterEditPolicy());
        canvas.installEditPolicy(new draw2d.policy.canvas.FadeoutDecorationPolicy());
        canvas.installEditPolicy(new draw2d.policy.canvas.DecorationPolicy());
        canvas.installEditPolicy(
            new draw2d.policy.connection.DragConnectionCreatePolicy({
                createConnection: function() {
                    return new Connection();
                }
            })
        );
        canvas.installEditPolicy(new DblClickCanvasPolicy());
        canvas.installEditPolicy(new MyInterceptorPolicy());
        canvas.installEditPolicy(new draw2d.policy.canvas.ZoomPolicy());
        // canvas.installEditPolicy(new draw2d.policy.connection.DragConnectionCreatePolicy({
        //     createConnection: function(){
        //         return new HoverConnection();
        //     }
        // }))

        // let f = new draw2d.shape.basic.Circle({x: 40, y: 10, stroke: 3, resizeable: false})
        //
        // canvas.add(f);

        //console.log(canvas.getAll())

        // appLayout = $('#canvas').layout({
        //     center: {
        //         resizable:false,
        //         closable:false,
        //         spacing_open:0,
        //         spacing_closed:0,
        //         paneSelector: "#canvas"
        //     }
        // });
        // appLayout = $('#container').layout()
        // console.log(appLayout)

        console.log(canvas)
        // let BB=canvas.getBoundingClientRect();
        // offsetX=BB.left;
        // offsetY=BB.top;

        diagramEditorCanvas = canvas;
    }, []);

    // account for scrolling
    // function reOffset(){
    //     let BB=diagramEditorCanvas.getBoundingClientRect();
    //     offsetX=BB.left;
    //     offsetY=BB.top;
    // }
    let offsetX,offsetY;
    // reOffset();
    // window.onscroll=function(e){ reOffset(); }
    // window.onresize=function(e){ reOffset(); }


    function makeAZoom(event)
    {
        if (event.deltaY > 0)
        {
            diagramEditorCanvas.setZoom(diagramEditorCanvas.getZoom() * 1.3, true)
        } else
        {
            diagramEditorCanvas.setZoom(diagramEditorCanvas.getZoom() * 0.7, true)
        }
    }
    function handleMouseDown(e){
        // tell the browser we're handling this event
        e.preventDefault();
        e.stopPropagation();

        // calc the starting mouse X,Y for the drag
        startX=parseInt(e.clientX-offsetX);
        startY=parseInt(e.clientY-offsetY);

        // set the isDragging flag
        isDown=true;
    }

    function handleMouseUp(e){
        // tell the browser we're handling this event
        e.preventDefault();
        e.stopPropagation();

        // clear the isDragging flag
        isDown=false;
    }

    function handleMouseOut(e){
        // tell the browser we're handling this event
        e.preventDefault();
        e.stopPropagation();

        // clear the isDragging flag
        isDown=false;
    }

    return <div className={s.diagram_editor} id="canvas"
                // onWheel={makeAZoom}
                // onMouseDown={function(e){handleMouseDown(e)}}
                // // onMouseMove={function(e){handleMouseMove(e);}}
                // onMouseUp={function(e){handleMouseUp(e);}}
                // onMouseOut={function(e){handleMouseOut(e);}}
    />;
};

export default DiagramEditor;