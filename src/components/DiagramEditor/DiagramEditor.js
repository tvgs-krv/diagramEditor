import React, {useEffect, useLayoutEffect} from "react";
import $ from "jquery";
import * as jqueryLayout from "jquery-layout";
import draw2d from "draw2d";
import s from "../DiagramEditor/DiagramEditor.module.scss";
import View from "./View";
import Connection from "./Connection";


function DiagramEditor()
{
    let diagramEditorCanvas;
    let appLayout;
    useEffect(() =>
    {
        // const canvas = new draw2d.Canvas("canvas");
        const canvas = new View("canvas");
        canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy(20, 1, "var(--grid-color)"));
        // canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy());
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


        diagramEditorCanvas = canvas;
    }, []);

    function makeAZoom(event)
    {
        if (event.deltaY > 0)
        {
            diagramEditorCanvas.setZoom(diagramEditorCanvas.getZoom() * 1.3, true)
            let f = new draw2d.shape.basic.Circle({x: 40, y: 10, stroke: 3, resizeable: false})
            diagramEditorCanvas.add(f);
        } else
        {
            diagramEditorCanvas.setZoom(diagramEditorCanvas.getZoom() * 0.7, true)
        }
    }

    return <div className={s.diagram_editor} id="canvas"/>;
}

export default DiagramEditor;