var React = require('react'),
    utils = require('../js/utils');

var Grid = React.createClass({displayName: "Grid",
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
    render: function(){
        return (
            React.createElement("div", {className: this.props.gridName}, 
            utils.renderChildren(this.props)
            )
        );
    }
});

module.exports = Grid;
