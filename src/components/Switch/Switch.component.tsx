import * as classnames from 'classnames';
import * as React from 'react';

enum typeValues {
  original = 'original',
  modern = 'modern',
}

interface ISwitch {
  type: typeValues;
}

class Switch extends React.Component<ISwitch, {}> {

  constructor(props: ISwitch) {
    super(props);
  }

  public render() {
    // extract attributes not meant for teh input
    const { type= 'original', children, ...props } = this.props;
    // build class lists
    const labelClass = classnames({
      switch: type === 'modern',
      'switch-original': type === 'original',
    });

    return (
      <label className={labelClass}>
        <input type="checkbox" {...props} />
        <span className="check" />
        <span className="caption">{children}</span>
      </label>
    );
  }
}

export default Switch;
