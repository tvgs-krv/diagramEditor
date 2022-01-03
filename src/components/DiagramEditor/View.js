import $ from "jquery";
import draw2d from "draw2d";
import _ from "lodash";
import TestNode from "./CustomNodes/TestNode";



let View = draw2d.Canvas.extend({

    init: function (id)
    {
        this._super(id, 10000, 10000);

        this.setScrollArea("#" + id);

        // this.currentDropConnection = null;
    },

    onDrag: function (droppedDomNode, x, y)
    {
    },

    onDrop: function (droppedDomNode, x, y, shiftKey, ctrlKey)
    {
        let type = $(droppedDomNode).data("shape");
        let figure = null;
        //todo Тут надо придумать какой то общий класс, куда передавать просто дом элемент
        if (type === "CommonValve")
        {
            figure = new TestNode()
        }
        if (type === "shape2")
        {
            figure = new draw2d.shape.node.End();
        }
        if (type === "shape3")
        {
            figure = new draw2d.shape.node.Between();
        }
        // eslint-disable-next-line no-eval
        // let figure = eval(type);
        // console.log(typeof figure)
        // let ff = new draw2d.shape.basic.Circle({ x: 40,  y: 10,  stroke: 3 })
        // console.log(typeof ff)

        // //console.log("new "+type+"();");
        // let figure = new draw2d.shape.node.Start();
        // let figure = eval("new "+type+"();");
        // // // create a command for the undo/redo support
        // let command = new draw2d.command.CommandAdd(this, type, x, y);
        // console.log(this.getCommandStack().execute(command))
        // this.getCommandStack().execute(command);
        this.add(figure, x, y);
    }

    // onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey) {
    //     let type = $(droppedDomNode).data("shape");
    //     let name = $(droppedDomNode).data("name");
    //
    //     if (droppedDomNode.prop("disabled") === true) return;
    //
    //     let figure = eval(`new ${type}({name: "${name}"});`);
    //     const schema = schemas[`${_.camelCase(name)}Schema`];
    //     schema.columns.forEach(col => {
    //         figure.addColumn(col);
    //     });
    //
    //     // create a command for the undo/redo support
    //     const createTableCommand = new draw2d.command.CommandAdd(
    //         this,
    //         figure,
    //         x,
    //         y
    //     );
    //     const disableTableGeneratorCommand = new DisableTableGeneratorCommand(name);
    //     const commands = new draw2d.command.CommandCollection();
    //     commands.add(createTableCommand);
    //     commands.add(disableTableGeneratorCommand);
    //     this.getCommandStack().execute(commands);
    // },

});


export default View;

