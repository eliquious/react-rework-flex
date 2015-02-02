var React = require('react'),
    utils = require('../js/utils');

// var cx = React.addons.classSet;

var Col = React.createClass({
    // mixins: [GridMixin],
    propTypes: {

        // grid/row/col names
        gridName: React.PropTypes.string.isRequired,
        rowName: React.PropTypes.string.isRequired,
        colName: React.PropTypes.string.isRequired,
        numCols: React.PropTypes.number.isRequired,

        // column widths
        sm: React.PropTypes.number,
        md: React.PropTypes.number,
        lg: React.PropTypes.number,
        all: React.PropTypes.number,

        // visible
        smVisible: React.PropTypes.bool,
        mdVisible: React.PropTypes.bool,
        lgVisible: React.PropTypes.bool,
        
        // invisible
        smInvisible: React.PropTypes.bool,
        mdInvisible: React.PropTypes.bool,
        lgInvisible: React.PropTypes.bool

        // Offsets
        // xsOffset: React.PropTypes.number,
        // smOffset: React.PropTypes.number,
        // mdOffset: React.PropTypes.number,
        // lgOffset: React.PropTypes.number
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
        var classes = '';
        var base = this.props.gridName + '-' + 
            this.props.rowName + '-' + 
            this.props.colName + '-';

        // width values
        var smClass = (typeof this.props.sm === 'number') ?
            base + this.props.sm + '-' + this.props.numCols + '--sm' : false;
        var mdClass = (typeof this.props.md === 'number') ?
            base + this.props.md + '-' + this.props.numCols + '--md' : false;
        var lgClass = (typeof this.props.lg === 'number') ?
            base + this.props.lg + '-' + this.props.numCols + '--lg' : false;
        var allClasses = (typeof this.props.all === 'number') ?
            (this.props.all === this.props.numCols ? 
                base + this.props.all : base + this.props.all + '-' + this.props.numCols) : false;

        [smClass, mdClass, lgClass, allClasses].forEach(function(value){
            if (value) {
                classes += value + ' ';
            }
        });

        // visibility
        var smVisible = this.props.smVisible ? 'visible-sm': false;
        var mdVisible = this.props.mdVisible ? 'visible-md': false;
        var lgVisible = this.props.lgVisible ? 'visible-lg': false;
        var smInvisible = this.props.smInvisible ? 'invisible-sm': false;
        var mdInvisible = this.props.mdInvisible ? 'invisible-md': false;
        var lgInvisible = this.props.lgInvisible ? 'invisible-lg': false;

        [smVisible, mdVisible, lgVisible, smInvisible, mdInvisible, lgInvisible].forEach(function(value){
            if (value) {
                classes += value + ' ';
            }
        });        

        // offset values
        // var xsOffsetClass = (typeof this.props.xsOffset === 'number') ?
        //     'col-xs-offset-' + this.props.xsOffset : false;
        // var smOffsetClass = (typeof this.props.smOffset === 'number') ?
        //     'col-sm-offset-' + this.props.smOffset : false;
        // var mdOffsetClass = (typeof this.props.mdOffset === 'number') ?
        //     'col-md-offset-' + this.props.mdOffset : false;
        // var lgOffsetClass = (typeof this.props.lgOffset === 'number') ?
        //     'col-lg-offset-' + this.props.lgOffset : false;

        // [xsOffsetClass, smOffsetClass, mdOffsetClass, lgOffsetClass].forEach(function(value){
        //     if(value) {
        //         classes[value] = true;
        //     }
        // });

        if(this.props.className) {
            classes += ' ' + this.props.className;
        }

        var style = {};
        if(this.props.style){
            style = this.props.style;
        }
        return (<div style={style} className={classes}>
            {utils.renderChildren(this.props)}
            </div>
        );
    }
});

module.exports = Col;
