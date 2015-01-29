var React = require('react'),
    utils = require('../js/utils');

var Grid = React.createClass({
    propTypes: {
        gridName: React.PropTypes.string,
        numCols: React.PropTypes.number
    },
    getDefaultProps: function(){
        return {
            gridName: 'grid',
            rowName: 'row',
            colName: 'col',
            numCols: 12
        };
    },
      // renderChildren: function(){
      //   return React.Children.map(this.props.children, function(child){
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
        return (
            <div className={this.props.gridName}>
            {utils.renderChildren(this.props)}
            </div>
        );
    }
});

module.exports = Grid;
