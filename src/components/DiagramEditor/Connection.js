/* global $ eval */
import draw2d from "draw2d";
import { Hub } from "@aws-amplify/core";

export default draw2d.Connection.extend({
  NAME: "Connection",
  init: function(attr) {
    this._super(attr);

    this.setRouter(
      new draw2d.layout.connection.InteractiveManhattanConnectionRouter()
    );
    this.setOutlineStroke(1);
    this.setOutlineColor("red");
    this.setStroke(5);
    this.setColor("black");
    //his.setRadius(20);
  },

  onMouseEnter: function() {
    this.setStroke(4);
    this.setColor("#00A8F0");
    // Get the connected columns and highlight them
    const sourceColumn = this.getSource().getParent();
    sourceColumn.addCssClass("ColumnHover");
    const targetColumn = this.getTarget().getParent();
    targetColumn.addCssClass("ColumnHover");
  },
  onMouseLeave: function() {
    this.setStroke(2);
    this.setColor("#cccccc");
    // Get the connected columns and reset highlight
    const sourceColumn = this.getSource().getParent();
    sourceColumn.removeCssClass("ColumnHover");
    const targetColumn = this.getTarget().getParent();
    targetColumn.removeCssClass("ColumnHover");
  },

  /**
   * @method
   * called by the framework if the figure should show the contextmenu.</br>
   * The strategy to show the context menu depends on the plattform. Either loooong press or
   * right click with the mouse.
   *
   * @param {Number} x the x-coordinate to show the menu
   * @param {Number} y the y-coordinate to show the menu
   * @since 1.1.0
   */
  onContextMenu: function(x, y) {
    $.contextMenu({
      selector: "body",
      events: {
        hide: function() {
          $.contextMenu("destroy");
        }
      },
      callback: $.proxy(function(key, options) {
        switch (key) {
          case "configure":
            const sourceColumn = this.getSource().getParent();
            const targetColumn = this.getTarget().getParent();
            Hub.dispatch("canvas", {
              event: "configure",
              data: { sourceColumn, targetColumn }
            });
            break;
          case "delete":
            // without undo/redo support
            //     this.getCanvas().remove(this);

            // with undo/redo support
            var cmd = new draw2d.command.CommandDelete(this);
            this.getCanvas()
              .getCommandStack()
              .execute(cmd);
            break;

          default:
            break;
        }
      }, this),
      x: x,
      y: y,
      items: {
        configure: { name: "Configure" },
        // sep1: "---------",
        delete: { name: "Delete" }
      }
    });
  }
});
