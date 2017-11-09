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
      'btn button',
      className,
      size + '-button',
      'btn-' + size,
      'btn-' + this.getOsxClass(theme),
      theme,
    );
    return (
      <button className={classNames} {...props}>{children}</button>
    );
  }

  getOsxClass(theme: string){
    if(theme === '')
      return 'defualt';
    else if(theme === 'success'){
      return 'positive';
    }
    else if(theme === 'danger')
      return 'negative';
    else
      return theme;
  }
}

export default Btn;
