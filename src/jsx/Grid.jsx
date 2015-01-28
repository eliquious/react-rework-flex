var React = require('react');

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
        return (<div {...this.props} className={this.props.gridName}>
            {this.props.children}
            </div>
        );
    }
});

module.exports = Grid;
