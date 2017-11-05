import * as classnames from 'classnames';
import * as React from 'react';
import { DefaultTheme } from '../../utls/';
enum sizeValues {
  mini = 'mini',
  small = 'small',
  default = 'default',
  large = 'large',
}

interface IBtn {
  size: sizeValues;
  theme: DefaultTheme;
  className: string;
  children: any;
}

class Btn extends React.Component<IBtn, {}> {
  constructor(props: IBtn) {
    super(props);
  }

  public render() {
    const { size = 'default' , theme = '', className, children, ...props } = this.props;
    const classNames = classnames(
      'button',
      className,
      size + '-button',
      theme,
    );
    return (
      <button className={classNames} {...props}>{children}</button>
    );
  }
}

export default Btn;
