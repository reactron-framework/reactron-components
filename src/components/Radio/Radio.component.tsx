import * as classnames from 'classnames';
import * as React from 'react';

enum sizeValues {
  small = 'small',
  normal = 'normal',
}

interface IRadio {
  size: sizeValues;
}

class Radio extends React.Component<IRadio, {}> {

  constructor(props: IRadio) {
    super(props);
  }

  public render() {
    // extract attributes not meant for teh input
    const { size= 'normal', children, ...props } = this.props;
    // build class lists
    const labelClass = classnames(
      'input-control radio',
      {
        'small-check' : size === 'small',
      },
    );

    return (
      <label className={labelClass}>
        <input type="radio" {...props} />
        <span className="check" />
        <span className="caption">{children}</span>
      </label>
    );
  }
}

export default Radio;
