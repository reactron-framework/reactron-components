import * as classnames from 'classnames';
import * as React from 'react';

enum sizeValues {
  small = 'small',
  normal = 'normal',
}

interface ICheckBox {
  size: sizeValues;
  indeterminate: boolean;
}

class Checkbox extends React.Component<ICheckBox, {}> {
  private el: any;
  constructor(props: ICheckBox) {
    super(props);
  }
  public componentDidMount() {
    this.el.indeterminate = this.props.indeterminate;
  }

  public componentDidUpdate(prevProps: ICheckBox) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.el.indeterminate = this.props.indeterminate;
    }
  }
  public render() {
    // extract attributes not meant for teh input
    const { size= 'normal', children, ...props } = this.props;
    // build class lists
    const labelClass = classnames(
      'input-control checkbox',
      {
        'small-check' : size === 'small',
      },
    );

    return (
      <label className={labelClass}>
        <input type="checkbox" {...props} ref={el => this.el = el} />
        <span className="check" />
        <span className="caption">{children}</span>
      </label>
    );
  }
}

export default Checkbox;
