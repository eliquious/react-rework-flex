var React = require('react');

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
            React.createElement("div", React.__spread({},  this.props, {className: this.props.gridName}), 
                this.props.children
            )
        );
    }
});

module.exports = Grid;
