var React = require('react');

var Row = React.createClass({
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
        return (<div {...this.props} className={gridrow}>
            {this.props.children}
            </div>
        );
    }
});

module.exports = Row;
