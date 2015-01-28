var React = require('react');

var Row = React.createClass({displayName: "Row",
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
    render: function(){
        var gridrow = this.props.gridName + '-' + this.props.rowName;
        return (React.createElement("div", React.__spread({},  this.props, {className: gridrow}), 
            this.props.children
            )
        );
    }
});

module.exports = Row;
