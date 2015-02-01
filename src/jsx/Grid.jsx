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
    render: function(){
        var classes = this.props.className;
        if(classes){
            classes += this.props.gridName;
        }
        return (
            <div className={classes}>
            {utils.renderChildren(this.props)}
            </div>
        );
    }
});

module.exports = Grid;
