var React = require('react/addons');

module.exports = {
  renderChildren: function(props){
    return React.Children.map(props.children, function(child){
      if (React.isValidElement(child)){
        return React.addons.cloneWithProps(child, {
          gridName: props.gridName,
          rowName: props.rowName,
          colName: props.colName,
          numCols: props.numCols
        });
      } else {
        return child;
      }
    });
  }
};
