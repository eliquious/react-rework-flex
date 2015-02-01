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
    render: function(){
        var gridrow = this.props.gridName + '-' + this.props.rowName;
        
        var classes = gridrow;
        if(this.props.className){
            classes += ' ' + this.props.className;
        }
        return (<div className={classes}>
            {utils.renderChildren(this.props)}
            </div>
        );
    }
});

module.exports = Row;
