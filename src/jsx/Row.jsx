var React = require('react'),
    utils = require('../js/utils');

var Row = React.createClass({
    // mixins: [GridMixin],
    propTypes: {
        gridName: React.PropTypes.string,
        rowName: React.PropTypes.string,
        numCols: React.PropTypes.number
    },
    getDefaultProps: function(){
        return {
            gridName: 'grid',
            rowName: 'row',
            numCols: 12
        };
    },
      // isGridType: function(component){
      //   return (component.type === Grid.type ||
      //           component.type === Col.type ||
      //           component.type === Row.type);
      // },
      // renderChildren: function(){
      //   return React.Children.map(this.props.children, function(child){
      //     // if (this.isGridType(child)) {
      //       return React.addons.cloneWithProps(child, {
      //         gridName: this.props.gridName,
      //         rowName: this.props.rowName,
      //         colName: this.props.colName,
      //         numCols: this.props.numCols
      //       });
      //     // } else {
      //     //   return child;
      //     // }
      //   }.bind(this));
      // },
    render: function(){
        var gridrow = this.props.gridName + '-' + this.props.rowName;
        return (<div className={gridrow}>
            {utils.renderChildren(this.props)}
            </div>
        );
    }
});

module.exports = Row;
