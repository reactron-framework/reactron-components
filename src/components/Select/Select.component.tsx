import * as classnames from 'classnames';
import * as React from 'react';

class Select extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { children, ...props } = this.props;
    const classNames = classnames(
      'input-control select',
    );
    return (
      <div className={classNames}>
          <select {...props}>{children}</select>
      </div>
    );
  }
}

export default Select;
