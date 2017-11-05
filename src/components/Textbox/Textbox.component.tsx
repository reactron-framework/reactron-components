import * as classnames from 'classnames';
import * as React from 'react';

class Textbox extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { ...props } = this.props;
    const classNames = classnames(
      'input-control textarea',
    );
    return (
      <div className={classNames} data-role="input" data-text-auto-resize="true">
          <textarea {...props} />
      </div>
    );
  }
}

export default Textbox;
